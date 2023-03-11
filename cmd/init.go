package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var initCmd = &cobra.Command{
	Use:     "init",
	Aliases: []string{"create"},
	Short:   "init short",
	Long:    "init long",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("init cmd run begin")

		fmt.Println(cmd.Flags().Lookup("viper").Value)
		fmt.Println(cmd.Flags().Lookup("author").Value)
		fmt.Println(cmd.Flags().Lookup("config").Value)
		fmt.Println(cmd.Flags().Lookup("license").Value)
		fmt.Println(cmd.Flags().Lookup("initsource").Value)
		fmt.Println(viper.GetString("author"))
		fmt.Println(viper.GetString("license"))

		fmt.Println("init cmd run end")
	},
}

func init() {
	initCmd.Flags().StringP("initsource", "i", "", "")
	mtCmd.AddCommand(initCmd)
}
