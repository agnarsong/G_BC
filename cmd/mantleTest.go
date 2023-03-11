package cmd

import (
	"fmt"

	"mantle/test/config"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var mtCmd = &cobra.Command{
	Use:   "mt",
	Short: "mt short",
	Long:  "mantle test tools",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("mt cmd run begin")

		fmt.Println(cmd.Flags().Lookup("viper").Value)
		fmt.Println(cmd.Flags().Lookup("author").Value)
		fmt.Println(cmd.Flags().Lookup("config").Value)
		fmt.Println(cmd.Flags().Lookup("license").Value)
		fmt.Println(cmd.Flags().Lookup("source").Value)
		fmt.Println(config.AppConfig.GetString("author"))
		fmt.Println(config.AppConfig.GetString("author"))

		fmt.Println("mt cmd run end")
	},
	// PersistentPreRun: func(cmd *cobra.Command, args []string) {
	// 	fmt.Println("所有程序执行前执行的内容 begin")
	// 	fmt.Println("所有程序执行前执行的内容 end")
	// },
	// PreRun: func(cmd *cobra.Command, args []string) {
	// 	fmt.Println("run函数执行前执行 begin")
	// 	fmt.Println("run函数执行前执行 end")
	// },
}

func Execute() {
	mtCmd.Execute()
}

var conf string
var userLicense string

func init() {
	cobra.OnInitialize(initConfig)

	mtCmd.PersistentFlags().Bool("viper", true, "")
	mtCmd.PersistentFlags().StringP("author", "a", "Your Name", "")
	mtCmd.PersistentFlags().StringVar(&conf, "config", "conf.yaml", "")
	mtCmd.PersistentFlags().StringVarP(&userLicense, "license", "l", "", "")
	mtCmd.Flags().StringP("source", "s", "", "")

	//将配置文件和入参绑定，使用入参替换默认配置
	viper.BindPFlag("author", mtCmd.PersistentFlags().Lookup("author"))
	viper.BindPFlag("license", mtCmd.PersistentFlags().Lookup("license"))
}

func initConfig() {
	config.InitConfig(conf)
}
