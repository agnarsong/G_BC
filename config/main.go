package config

import (
	"github.com/spf13/viper"
)

var AppConfig *viper.Viper

func InitConfig(cfgFile string) {

	AppConfig = viper.New()
	AppConfig.SetConfigFile(cfgFile)

	if err := AppConfig.ReadInConfig(); err != nil {
		panic("Failed to read config file")
	}

}
