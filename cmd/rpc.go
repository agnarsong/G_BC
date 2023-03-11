package cmd

import (
	"fmt"
	"mantle/test/config"
	"mantle/test/lib"

	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/spf13/cobra"
)

var rpcCmd = &cobra.Command{
	Use:   "rpc",
	Short: "服务于mantle rpc的测试工具",
	Long:  "服务于mantle rpc的测试工具",
	Run: func(cmd *cobra.Command, args []string) {

		var data []byte
		if to == "" {
			panic("缺少收款地址,请使用 -t 赋值")
		}

		if prik == "" {
			prik = config.AppConfig.GetString("privateKey")
		}
		signedTx, err := lib.SignedTx(c, prik, to, tokenAddress, v, 0, data)
		if err != nil {
			panic(err)
		}
		txhash, err := lib.SendTransaction(c, signedTx)
		if err != nil {
			panic(err)
		}

		fmt.Println("txhash: ", txhash)
	},
	PreRun: func(cmd *cobra.Command, args []string) {

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
var prik string
var to string
var v int64
var tokenAddress string
var c *ethclient.Client

func init() {
	rpcCmd.Flags().StringVarP(&url, "url", "u", "", "")
	rpcCmd.Flags().StringVarP(&prik, "privateKey", "p", "", "")
	rpcCmd.Flags().StringVarP(&to, "toAddress", "t", "", "")
	rpcCmd.Flags().StringVar(&tokenAddress, "tokenAddress", "", "")
	rpcCmd.Flags().Int64VarP(&v, "value", "v", 0, "")

	mtCmd.AddCommand(rpcCmd)
}
