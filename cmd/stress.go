package cmd

import (
	"context"
	"fmt"
	"log"
	"mantle/test/lib"
	"mantle/test/lib/layer2"
	"mantle/test/lib/stress"
	"math/big"
	"sync"
	"time"

	"github.com/ethereum/go-ethereum/common"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

func init() {

	viper.SetConfigName("stressConf")
	viper.SetConfigType("yaml")
	viper.AddConfigPath(".")
	err := viper.ReadInConfig()
	if err != nil {
		log.Fatalf("read config failed: %v", err)
	}

	mtCmd.AddCommand(stressCmd)
	stressCmd.AddCommand(dntCmd)
	stressCmd.AddCommand(ERC20Cmd)
	stressCmd.AddCommand(d20Cmd)
	stressCmd.AddCommand(stCmd)
	stressCmd.AddCommand(rCmd)

	stressCmd.PersistentFlags().StringVarP(&layer, "layer", "l", "l1", "layer: l1 or l2")
	stressCmd.PersistentFlags().StringVar(&l1token, "l1token", "0", "l1 token address")
	stressCmd.PersistentFlags().StringVar(&l2token, "l2token", "0", "l2 token address")
	stressCmd.PersistentFlags().StringVarP(&amount, "amount", "a", "1", "transfer amount")
	stressCmd.PersistentFlags().StringVarP(&privateKey, "privateKey", "p", "", "privateKey")
}

var (
	mc         layer2.MantleCenter
	l1token    string
	l2token    string
	layer      string
	amount     string
	privateKey string
)

var stressCmd = &cobra.Command{
	Use:     "s",
	Aliases: []string{"stress"},
	Short:   "压测工具",
	Long:    "压测工具",
	RunE: func(cmd *cobra.Command, args []string) error {

		// 打印l1 l2 的高度
		cid1, err := mc.L1Client.ChainID(context.Background())
		fmt.Println("l1 ChainID: ", cid1)
		if err != nil {
			return err
		}

		cid2, err := mc.L2Client.ChainID(context.Background())
		fmt.Println("l2 ChainID: ", cid2)
		if err != nil {
			return err
		}

		return nil
	},
	PersistentPreRunE: func(cmd *cobra.Command, args []string) error {

		// 初始化
		if err := viper.Unmarshal(&mc.Env); err != nil {
			return err
		}

		if err = layer2.InitSc(&mc); err != nil {
			return err
		}

		// 更新配置文件
		if viper.Get("addresslist.testbittoken") != mc.Env.AL.TestBitToken {
			viper.Set("addresslist", mc.Env.AL)
			viper.Set("userprivatekeylist", mc.Env.UserPrivateKeyList)

			err := viper.WriteConfig()
			if err != nil {
				return fmt.Errorf("write config failed: %v", err)
			}
		}

		return nil
	},
}

var dntCmd = &cobra.Command{
	Use:     "dnt",
	Aliases: []string{"distributeNativeToken"},
	Short:   "转账native tokne, 用于支付压测时的gasFee",
	Long:    "转账native tokne, 用于支付压测时的gasFee",
	RunE: func(cmd *cobra.Command, args []string) error {

		stress.DNT(&mc, layer)
		return nil
	},
	PreRunE: stressCmd.PersistentPreRunE,
}

// 在l2上部署普通的erc20合约
var ERC20Cmd = &cobra.Command{
	Use:     "e",
	Aliases: []string{"ERC20"},
	Short:   "准备跨链的ERC20, 用于压测的token",
	Long:    "准备跨链的ERC20, 用于压测的token",
	RunE: func(cmd *cobra.Command, args []string) error {

		// 部署l1的ERC20合约
		if err := stress.DeployL1CustomERC20(&mc); err != nil {
			return err
		}
		fmt.Println("L1ERC20 address: ", mc.Env.L1ERC20Address)

		// 部署l2的ERC20合约
		// local环境 account0 有balance，后续需要补充deposit的逻辑
		if err = stress.DeployL2CustomERC20(&mc); err != nil {
			return err
		}
		fmt.Println("L2ERC20 address: ", mc.Env.L2ERC20Address)

		// 更新配置文件
		viper.Set("l1ERC20Address", mc.Env.L1ERC20Address)
		viper.Set("l2ERC20Address", mc.Env.L2ERC20Address)

		err := viper.WriteConfig()
		if err != nil {
			return fmt.Errorf("write config failed: %v", err)
		}

		// deposit
		a, b := lib.ParseAmount("-1")
		if !b {
			return fmt.Errorf("ParseAmount return false")
		}
		tx, err := layer2.Deposit(&mc, mc.Env.UserPrivateKeyList[0],
			mc.L1ERC20Address, mc.L2ERC20Address, a)
		if err != nil {
			return err
		}
		if err := lib.CheckReceiptStatus(mc.L1Client, tx.Hash()); err != nil {
			return err
		}
		return nil
	},
	PreRunE: stressCmd.PersistentPreRunE,
}

// erc20 分发token
var d20Cmd = &cobra.Command{
	Use:     "d20",
	Aliases: []string{"distributeERC20"},
	Short:   "转账ERC20 tokne, 用于支付压测时的gasFee",
	Long:    "转账ERC20 tokne, 用于支付压测时的gasFee",
	RunE: func(cmd *cobra.Command, args []string) error {

		c := mc.L1Client
		tokenAddress := mc.L1ERC20Address
		if layer == "l2" {
			c = mc.L2Client
			tokenAddress = mc.L2ERC20Address
		}

		stress.D20(c, tokenAddress, mc.Env.UserPrivateKeyList[0], mc.Env.Amount)
		return nil
	},
	PreRunE: stressCmd.PersistentPreRunE,
}

// Stability
var stCmd = &cobra.Command{
	Use:     "st",
	Aliases: []string{"stability"},
	Short:   "稳定性测试",
	Long:    "稳定性测试",
	RunE: func(cmd *cobra.Command, args []string) (err error) {

		waitGroup := new(sync.WaitGroup)

		var holder common.Address
		if privateKey == "" {
			privateKey = mc.Env.UserPrivateKeyList[0]
			holder = mc.UserAddress
		} else {
			_, _, holder, err = lib.AnalysePrivateKey(privateKey)
			if err != nil {
				return err
			}
		}

		// a, b := lib.ParseAmount(amount)
		// if !b {
		// 	return fmt.Errorf("ParseAmount return false")
		// }

		// deposit ETH
		waitGroup.Add(1)
		// // 给 account1 充值 ETH
		// _, _, toAddress, err := lib.AnalysePrivateKey(mc.Env.UserPrivateKeyList[1])
		// if err != nil {
		// 	return err
		// }
		// tx, err := lib.TransferNT(mc.L1Client,
		// 	mc.Env.UserPrivateKeyList[0],
		// 	toAddress.Hex(),
		// 	"12123456789123456789",
		// 	[]byte(""),
		// )
		// if err != nil {
		// 	return err
		// }
		// if err := lib.CheckReceiptStatus(mc.L1Client, tx.Hash()); err != nil {
		// 	return err
		// }

		go func(wg *sync.WaitGroup) {
			defer wg.Done()
			for {
				tx, err := layer2.Deposit(&mc, mc.Env.UserPrivateKeyList[1], common.HexToAddress("0"),
					common.HexToAddress(l2token), big.NewInt(1))
				if err != nil {
					fmt.Println("DepositETH err: ", err)
				}
				fmt.Println("DepositETH txHash: ", tx.Hash())
				time.Sleep(time.Duration(2) * time.Second)

				l1b, l2b, err := layer2.BETH(&mc, holder, nil)
				if err != nil {
					fmt.Println("layer2.BETH err: ", err)
				}
				fmt.Println("l1 ETH balance: ", l1b)
				fmt.Println("l2 ETH balance: ", l2b)
			}
		}(waitGroup)

		// deposit ERC20
		waitGroup.Add(1)
		// // 给 account2 充值 ERC20
		// _, _, toAddress, err = lib.AnalysePrivateKey(mc.Env.UserPrivateKeyList[2])
		// if err != nil {
		// 	return err
		// }
		// a, b = lib.ParseAmount("123456123456789123456789")
		// if !b {
		// 	return fmt.Errorf("ParseAmount return false")
		// }
		// tx, err = lib.TransferERC20(mc.L1Client,
		// 	mc.L1ERC20Address,
		// 	mc.Env.UserPrivateKeyList[0],
		// 	toAddress,
		// 	a,
		// )
		// if err != nil {
		// 	return err
		// }
		// if err := lib.CheckReceiptStatus(mc.L1Client, tx.Hash()); err != nil {
		// 	return err
		// }

		go func(wg *sync.WaitGroup) {
			defer wg.Done()
			for {
				tx, err := layer2.Deposit(&mc, mc.Env.UserPrivateKeyList[2], mc.L1ERC20Address,
					mc.L2ERC20Address, big.NewInt(1))
				if err != nil {
					fmt.Println("DepositERC20 err: ", err)
				}
				fmt.Println("DepositERC20 txHash: ", tx.Hash())
				time.Sleep(time.Duration(2) * time.Second)

				l1b, l2b, err := layer2.BERC20(&mc, holder, mc.L1ERC20Address,
					mc.L2ERC20Address, nil)
				if err != nil {
					fmt.Println("layer2.BERC20 err: ", err)
				}

				fmt.Println("l1 ERC20 balance: ", l1b)
				fmt.Println("l2 ERC20 balance: ", l2b)
			}
		}(waitGroup)

		// deposit BIT
		waitGroup.Add(1)
		go func(wg *sync.WaitGroup) {
			defer wg.Done()
			for {
				tx, err := layer2.Deposit(&mc, mc.Env.UserPrivateKeyList[3], mc.L1BITAddress,
					mc.L2BITAddress, big.NewInt(1))
				if err != nil {
					fmt.Println("DepositBIT err: ", err)
				}
				fmt.Println("DepositBIT txHash: ", tx.Hash())
				time.Sleep(time.Duration(2) * time.Second)

				l1b, l2b, err := layer2.BERC20(&mc, holder, mc.L1BITAddress,
					mc.L2BITAddress, nil)
				if err != nil {
					fmt.Println("BIT Balance err: ", err)
				}

				fmt.Println("l1 BIT balance: ", l1b)
				fmt.Println("l2 BIT balance: ", l2b)
			}
		}(waitGroup)

		// l2 一直部署erc20的合约
		waitGroup.Add(1)
		go func(wg *sync.WaitGroup) {
			defer wg.Done()

			for {
				address, err := stress.DL2CERC20(&mc, mc.Env.UserPrivateKeyList[4])
				if err != nil {
					fmt.Println("DL2CERC20 err: ", err)
				}
				time.Sleep(time.Second * time.Duration(5))
				fmt.Println("ERC20 address: ", address)
			}
		}(waitGroup)

		// Withdraw BIT
		waitGroup.Add(1)
		go func(wg *sync.WaitGroup) {
			defer wg.Done()
			for {
				tx, err := layer2.Withdraw(&mc, mc.Env.UserPrivateKeyList[5],
					mc.L2BITAddress, big.NewInt(1))
				if err != nil {
					fmt.Println("Withdraw BIT err: ", err)
				}
				fmt.Println("Withdraw BIT txHash: ", tx.Hash())
				time.Sleep(time.Duration(2) * time.Second)

				l1b, l2b, err := layer2.BERC20(&mc, holder, mc.L1BITAddress,
					mc.L2BITAddress, nil)
				if err != nil {
					fmt.Println("BIT Balance err: ", err)
				}

				fmt.Println("l1 BIT balance: ", l1b)
				fmt.Println("l2 BIT balance: ", l2b)
			}
		}(waitGroup)

		// Withdraw ERC20
		waitGroup.Add(1)
		go func(wg *sync.WaitGroup) {
			defer wg.Done()
			for {
				tx, err := layer2.Withdraw(&mc, mc.Env.UserPrivateKeyList[6],
					mc.L2ERC20Address, big.NewInt(1))
				if err != nil {
					fmt.Println("Withdraw ERC20 err: ", err)
				}
				fmt.Println("Withdraw ERC20 txHash: ", tx.Hash())
				time.Sleep(time.Duration(2) * time.Second)

				l1b, l2b, err := layer2.BERC20(&mc, holder, mc.L1ERC20Address,
					mc.L2ERC20Address, nil)
				if err != nil {
					fmt.Println("ERC20 Balance err: ", err)
				}

				fmt.Println("l1 ERC20 balance: ", l1b)
				fmt.Println("l2 ERC20 balance: ", l2b)
			}
		}(waitGroup)

		// Withdraw ERC20
		waitGroup.Add(1)
		go func(wg *sync.WaitGroup) {
			defer wg.Done()
			for {
				tx, err := layer2.Withdraw(&mc, mc.Env.UserPrivateKeyList[7],
					mc.L2ETHAddress, big.NewInt(1))
				if err != nil {
					fmt.Println("Withdraw ETH err: ", err)
				}
				fmt.Println("Withdraw ETH txHash: ", tx.Hash())
				time.Sleep(time.Duration(2) * time.Second)

				l1b, l2b, err := layer2.BETH(&mc, holder, nil)
				if err != nil {
					fmt.Println("layer2.BETH err: ", err)
				}
				fmt.Println("l1 ETH balance: ", l1b)
				fmt.Println("l2 ETH balance: ", l2b)
			}
		}(waitGroup)

		waitGroup.Wait()
		return nil
	},
	PreRunE: stressCmd.PersistentPreRunE,
}

// run
var rCmd = &cobra.Command{
	Use:     "r",
	Aliases: []string{"run"},
	Short:   "执行压力测试",
	Long:    "执行压力测试",
	RunE: func(cmd *cobra.Command, args []string) error {

		fmt.Println("todo……")
		return nil
	},
	PreRunE: stressCmd.PersistentPreRunE,
}
