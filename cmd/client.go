package cmd

import (
	"context"
	"fmt"
	"mantle/test/config"
	"mantle/test/lib"

	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/spf13/cobra"
)

var clientCmd = &cobra.Command{
	Use:     "c",
	Aliases: []string{"client"},
	Short:   "服务于mantle rpc client的测试工具",
	Long:    "服务于mantle rpc client的测试工具",
	RunE: func(cmd *cobra.Command, args []string) error {

		ci, err := c.ChainID(context.Background())
		fmt.Println("ChainID: ", ci)

		return err
	},
	PersistentPreRun: func(cmd *cobra.Command, args []string) {

		// 创建rpc链接
		var err error
		if url == "" {
			url = config.AppConfig.GetString("url")
		}
		c, err = lib.NewEthClient(url)
		if err != nil {
			panic(err)
		}
	},
}

var url string
var c *ethclient.Client
var b int64
var bh string

func init() {
	mtCmd.AddCommand(clientCmd)

	clientCmd.PersistentFlags().StringVarP(&url, "url", "u", "", "")
	clientCmd.PersistentFlags().StringP("contractAddress", "c", "", "Contract address")
	clientCmd.PersistentFlags().Int64VarP(&b, "blockNum", "b", -1, "区块高度")
	clientCmd.PersistentFlags().StringVar(&bh, "blockHash", "0", "区块hash")
	clientCmd.PersistentFlags().StringP("privateKey", "p", "", "privateKey of sender address")

	config.AppConfig.BindPFlag("privateKey", clientCmd.PersistentFlags().Lookup("privateKey"))

}
