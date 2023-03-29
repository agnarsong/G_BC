package cmd

import (
	"errors"
	"fmt"
	"mantle/test/config"
	"mantle/test/lib"

	"github.com/spf13/cobra"
)

func init() {
	clientCmd.AddCommand(scCmd)
	scCmd.AddCommand(dceCmd)
	scCmd.AddCommand(nceCmd)

}

var scCmd = &cobra.Command{
	Use:     "sc",
	Aliases: []string{"smartContract"},
	Short:   "执行smartContract相关操作",
	Long:    "执行smartContract相关操作",
	Example: "mt client smartContract",
	RunE: func(cmd *cobra.Command, args []string) error {

		fmt.Println("nothing todo……")
		return nil
	},
}

var dceCmd = &cobra.Command{
	Use:     "dce",
	Aliases: []string{"DeployCustomERC20"},
	Short:   "发布合约",
	Long:    "发布合约",
	Example: "mt client smartContract DeployCustomERC20",
	RunE: func(cmd *cobra.Command, args []string) error {

		prv := config.AppConfig.GetString("privateKey")

		address, tx, _, err := lib.DeployCustomERC20(c, prv)
		if err != nil {
			return err
		}

		fmt.Println("CustomERC20 address: ", address)
		fmt.Println("CustomERC20 deploy txhash: ", tx.Hash())
		return nil
	},
}

var nceCmd = &cobra.Command{
	Use:     "nce",
	Aliases: []string{"NewCustomERC20"},
	Short:   "链接合约",
	Long:    "链接合约",
	Example: "mt client smartContract NewCustomERC20",
	RunE: func(cmd *cobra.Command, args []string) error {

		contractAddress := cmd.Flags().Lookup("contractAddress").Value.String()
		IsContract, err := lib.IsContract(c, contractAddress)
		if err != nil {
			return err
		}

		if !IsContract {
			return errors.New(fmt.Sprintf("提供的合约地址错误,合约地址: %v", contractAddress))
		}

		return nil
	},
}
