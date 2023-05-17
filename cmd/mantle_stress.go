package cmd

import (
	"context"
	"fmt"
	"log"
	"mantle/test/lib"
	"mantle/test/lib/layer2"
	"mantle/test/lib/stress"
	"math/big"
	"strings"
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

	mantleCmd.AddCommand(stressCmd)
	stressCmd.AddCommand(dntCmd)
	stressCmd.AddCommand(ERC20Cmd)
	stressCmd.AddCommand(d20Cmd)
	stressCmd.AddCommand(stCmd)
	stressCmd.AddCommand(rCmd)

	d20Cmd.Flags().BoolVarP(&isBIT, "isBIT", "", false, "the l1 ERC20 is BIT")

}

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
	PersistentPreRunE: mantleCmd.PersistentPreRunE,
}

var dntCmd = &cobra.Command{
	Use:     "dnt",
	Aliases: []string{"distributeNativeToken"},
	Short:   "转账native tokne, 用于支付压测时的gasFee",
	Long: `向./wallets.csv中的钱包地址转账native tokne
用于支付压测时的gasFee
--layer == l1, 转账l1的ETH
--layer == l2, 转账l2的nativeToken`,
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
		tx, err := layer2.Deposit(&mc, mc.Env.PrivateKeyList[0][0],
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
	Long: `向./wallets.csv中的钱包地址转账ERC20 tokne
用于支付压测时的gasFee
--layer == l1, 转账l1的L1ERC20
--layer == l1 --isBIT == true, 转账l1的BIT
--layer == l2, 转账l2的L2ERC20`,
	RunE: func(cmd *cobra.Command, args []string) error {

		c := mc.L1Client

		var tokenAddress common.Address
		if isBIT {
			tokenAddress = mc.L1BITAddress
		} else {
			tokenAddress = mc.L1ERC20Address
		}

		if layer == "l2" {
			c = mc.L2Client
			tokenAddress = mc.L2ERC20Address
		}

		err := stress.D20(c, tokenAddress, mc.Env.PrivateKeyList[0][0], mc.Env.Amount)
		if err != nil {
			return err
		}
		return nil
	},
	PreRunE: stressCmd.PersistentPreRunE,
}

// Stability
var stCmd = &cobra.Command{
	Use:     "st",
	Aliases: []string{"stability"},
	Args:    cobra.ExactArgs(1),
	Short:   "稳定性测试",
	Long:    "稳定性测试",
	Example: "mt m s st [types]",
	RunE: func(cmd *cobra.Command, args []string) (err error) {

		waitGroup := new(sync.WaitGroup)

		a, b := lib.ParseAmount(amount)
		if !b {
			return fmt.Errorf("ParseAmount return false")
		}

		// deposit ETH
		if strings.Contains(args[0], "a") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()
				for {
					tx, err := layer2.Deposit(&mc, mc.Env.PrivateKeyList[1][0], common.HexToAddress("0"),
						common.HexToAddress(mc.Env.L2EthAddress), a)
					if err != nil {
						fmt.Println("DepositETH err: ", err)
					}
					fmt.Println("DepositETH txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					_, l2b, err := layer2.BETH(&mc, common.HexToAddress(mc.Env.PrivateKeyList[1][1]), nil)
					if err != nil {
						fmt.Println("layer2.BETH err: ", err)
					}
					fmt.Println("l2 ETH balance: ", l2b)
				}
			}(waitGroup)
		}

		// deposit ERC20
		if strings.Contains(args[0], "b") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()
				for {
					tx, err := layer2.Deposit(&mc, mc.Env.PrivateKeyList[2][0], mc.L1ERC20Address,
						mc.L2ERC20Address, big.NewInt(1))
					if err != nil {
						fmt.Println("DepositERC20 err: ", err)
					}
					fmt.Println("DepositERC20 txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					_, l2b, err := layer2.BERC20(&mc, common.HexToAddress(mc.Env.PrivateKeyList[2][1]), mc.L1ERC20Address,
						mc.L2ERC20Address, nil)
					if err != nil {
						fmt.Println("layer2.BERC20 err: ", err)
					}

					fmt.Println("l2 ERC20 balance: ", l2b)
				}
			}(waitGroup)
		}

		// deposit BIT
		if strings.Contains(args[0], "c") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()
				for {
					tx, err := layer2.Deposit(&mc, mc.Env.PrivateKeyList[3][0], mc.L1BITAddress,
						mc.L2BITAddress, big.NewInt(1))
					if err != nil {
						fmt.Println("DepositBIT err: ", err)
					}
					fmt.Println("DepositBIT txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					_, l2b, err := layer2.BERC20(&mc, common.HexToAddress(mc.Env.PrivateKeyList[3][1]), mc.L1BITAddress,
						mc.L2BITAddress, nil)
					if err != nil {
						fmt.Println("BIT Balance err: ", err)
					}

					fmt.Println("l2 BIT balance: ", l2b)
				}
			}(waitGroup)
		}

		// l2 一直部署erc20的合约
		if strings.Contains(args[0], "d") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()

				for {
					address, err := stress.DL2CERC20(&mc, mc.Env.PrivateKeyList[4][0])
					if err != nil {
						fmt.Println("DL2CERC20 err: ", err)
					}
					time.Sleep(time.Second * time.Duration(5))
					fmt.Println("ERC20 address: ", address)
				}
			}(waitGroup)
		}

		// Withdraw BIT
		if strings.Contains(args[0], "e") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()
				for {
					tx, err := layer2.Withdraw(&mc, mc.Env.PrivateKeyList[5][0],
						mc.L2BITAddress, big.NewInt(1))
					if err != nil {
						fmt.Println("Withdraw BIT err: ", err)
					}
					fmt.Println("Withdraw BIT txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					l1b, _, err := layer2.BERC20(&mc, common.HexToAddress(mc.Env.PrivateKeyList[5][1]), mc.L1BITAddress,
						mc.L2BITAddress, nil)
					if err != nil {
						fmt.Println("BIT Balance err: ", err)
					}

					// 目前withdraw之后不会自动finalize,balance不变
					fmt.Println("l1 BIT balance: ", l1b)
				}
			}(waitGroup)
		}

		// Withdraw ERC20
		if strings.Contains(args[0], "f") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()
				for {
					tx, err := layer2.Withdraw(&mc, mc.Env.PrivateKeyList[6][0],
						mc.L2ERC20Address, big.NewInt(1))
					if err != nil {
						fmt.Println("Withdraw ERC20 err: ", err)
					}
					fmt.Println("Withdraw ERC20 txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					l1b, _, err := layer2.BERC20(&mc, common.HexToAddress(mc.Env.PrivateKeyList[6][1]), mc.L1ERC20Address,
						mc.L2ERC20Address, nil)
					if err != nil {
						fmt.Println("ERC20 Balance err: ", err)
					}

					fmt.Println("l1 ERC20 balance: ", l1b)
				}
			}(waitGroup)
		}

		// Withdraw ERC20
		if strings.Contains(args[0], "g") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()
				for {
					tx, err := layer2.Withdraw(&mc, mc.Env.PrivateKeyList[7][0],
						mc.L2ETHAddress, big.NewInt(1))
					if err != nil {
						fmt.Println("Withdraw ETH err: ", err)
					}
					fmt.Println("Withdraw ETH txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					l1b, _, err := layer2.BETH(&mc, common.HexToAddress(mc.Env.PrivateKeyList[7][0]), nil)
					if err != nil {
						fmt.Println("layer2.BETH err: ", err)
					}
					fmt.Println("l1 ETH balance: ", l1b)
				}
			}(waitGroup)
		}

		// ERC20 transfer
		if strings.Contains(args[0], "h") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()
				for {
					tx, err := lib.TransferERC20(mc.L2Client,
						mc.L2ERC20Address,
						mc.Env.PrivateKeyList[8][0],
						common.HexToAddress("1"),
						big.NewInt(1),
					)
					if err != nil {
						fmt.Println("l2 TransferERC20 err: ", err)
					}
					fmt.Println("TransferERC20 txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					_, l2b, err := layer2.BERC20(&mc, common.HexToAddress("1"), mc.L1ERC20Address, mc.L2ERC20Address, nil)
					if err != nil {
						fmt.Println("layer2.BERC20 err: ", err)
					}
					fmt.Println("l2 ERC20 balance: ", l2b)
				}
			}(waitGroup)
		}

		// BIT transfer
		if strings.Contains(args[0], "i") {
			waitGroup.Add(1)
			go func(wg *sync.WaitGroup) {
				defer wg.Done()
				for {
					tx, err := lib.TransferNT(mc.L2Client,
						mc.Env.PrivateKeyList[9][0],
						"2",
						"1",
						[]byte(""),
					)
					if err != nil {
						fmt.Println("l2 Transfer BIT err: ", err)
					}
					if err := lib.CheckReceiptStatus(mc.L2Client, tx.Hash()); err != nil {
						fmt.Println("l2 Transfer BIT CheckReceiptStatus err: ", err)
					}
					fmt.Println("TransferBIT txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					_, l2b, err := layer2.BERC20(&mc, common.HexToAddress("2"), mc.L1BITAddress, mc.L2BITAddress, nil)
					if err != nil {
						fmt.Println("layer2.BERC20 err: ", err)
					}
					fmt.Println("l2 BIT balance: ", l2b)
				}
			}(waitGroup)
		}

		// transfer嵌套
		if strings.Contains(args[0], "j") {
			waitGroup.Add(1)
			// 需要先给合约转账
			amount, b := lib.ParseAmount("1234567890123456")
			if !b {
				return fmt.Errorf("ParseAmount return false")
			}
			_, err := lib.TransferERC20(mc.L2Client, mc.L2ERC20Address, mc.Env.PrivateKeyList[0][0], mc.L2ERC20Address, amount)
			if err != nil {
				return fmt.Errorf("TransferERC20 err: %v", err)
			}
			go func(wg *sync.WaitGroup) {
				defer wg.Done()

				contractInput := []interface{}{
					mc.L2ERC20Address,
					[]common.Address{
						common.HexToAddress("3"),
						common.HexToAddress("4"),
						common.HexToAddress("5"),
						common.HexToAddress("6"),
						common.HexToAddress("7"),
						common.HexToAddress("8"),
						common.HexToAddress("9"),
						common.HexToAddress("10"),
						common.HexToAddress("11"),
						common.HexToAddress("12"),
					},
				}
				for {
					tx, err := lib.Transfers(mc.L2Client,
						mc.L2ERC20Address,
						mc.Env.PrivateKeyList[10][0], contractInput)
					if err != nil {
						fmt.Println("Transfers err: ", err)
					}
					fmt.Println("L2ERC20.Transfers txHash: ", tx.Hash())
					time.Sleep(time.Duration(2) * time.Second)

					for _, to := range contractInput[1].([]common.Address) {
						_, l2b, err := layer2.BERC20(&mc, to, mc.L1ERC20Address, mc.L2ERC20Address, nil)
						if err != nil {
							fmt.Println("layer2.BERC20 err: ", err)
						}
						fmt.Println("l2 ERC20 balance: ", l2b)
					}

				}
			}(waitGroup)
		}
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
