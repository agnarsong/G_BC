package cmd

import (
	"fmt"
	"mantle/test/config"

	"github.com/spf13/cobra"
)

var mtCmd = &cobra.Command{
	Use:   "mt",
	Short: "mt short",
	Long:  "mantle test tools",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("author: ", config.AppConfig.GetString("author"))
		fmt.Println("license: ", config.AppConfig.GetString("license"))
		fmt.Println("nothing to do ……")
	},
}

func Execute() {
	mtCmd.Execute()
}

var (
	conf       string
	startBlock uint64
	endBlock   uint64
)

func init() {
	cobra.OnInitialize(initConfig)
	mtCmd.PersistentFlags().StringVar(&conf, "config", "conf.yaml", "")

	mtCmd.PersistentFlags().Uint64VarP(&startBlock, "startBlock", "s", 0, "start Block number")
	mtCmd.PersistentFlags().Uint64VarP(&endBlock, "endBlock", "e", 0, "end Block number")
}

func initConfig() {
	config.InitConfig(conf)
}
