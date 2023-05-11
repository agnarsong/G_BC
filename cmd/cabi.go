package cmd

import (
	"encoding/hex"
	"fmt"
	"mantle/test/lib"
	"os"

	"github.com/ethereum/go-ethereum/common"
	"github.com/spf13/cobra"
)

var (
	filePath string
	abiJson  string
	data     string
	funcName string
)

type PAbi struct {
	AbiInput  string `json:"abiInput"`
	InputData string `json:"inputData"`
	AbiOutput string `json:"abiOutput"`
	OutData   string `json:"outData"`
	AbiEvent  string `json:"abiEvent"`
	EventData string `json:"eventData"`
}

func init() {
	mtCmd.AddCommand(abiCmd)
	abiCmd.AddCommand(piCmd)
	abiCmd.AddCommand(poCmd)

	abiCmd.PersistentFlags().StringVarP(&filePath, "filePath", "f", "Pabi.json", "存储abi和data的jason文件")
	abiCmd.PersistentFlags().StringVarP(&abiJson, "abiJson", "a", "", "abi")
	abiCmd.PersistentFlags().StringVarP(&data, "data", "d", "", "InputData or OutputData")
	abiCmd.PersistentFlags().StringVarP(&funcName, "funcName", "n", "", "function name")
}

var abiCmd = &cobra.Command{
	Use:     "a",
	Aliases: []string{"abi"},
	Short:   "加强的abi工具",
	Long:    "加强的abi工具",
	RunE: func(cmd *cobra.Command, args []string) error {

		// 解析abi文件
		// abiJson的优先级比文件高
		pabi, err := lib.GetABI(filePath, abiJson)
		if err != nil {
			return err
		}

		lib.PrintAbi(pabi)

		return nil
	},
	PersistentPreRunE: func(cmd *cobra.Command, args []string) error {

		if abiJson == "" || data == "" {
			_, err := os.Stat(filePath)
			if os.IsNotExist(err) {
				return fmt.Errorf("file %s does not exist", filePath)
			}
		}

		return nil
	},
}

var piCmd = &cobra.Command{
	Use:     "pi",
	Aliases: []string{"ParseInputs"},
	Short:   "解析tx的inputData",
	Long:    "解析tx的inputData",
	Example: "mt client abi ParseInputs ",
	RunE: func(cmd *cobra.Command, args []string) error {

		if abiJson == "" || data == "" {

			var pabi PAbi
			err := lib.ReadJSONFile(filePath, &pabi)
			if err != nil {
				return fmt.Errorf("ReadJSONFile err: %v", err)
			}
			abiJson = pabi.AbiInput
			data = pabi.InputData
		}

		inputDataBytes := common.FromHex(data)

		funcName, inputArgs, err := lib.ParseContractFunctionInputs(abiJson, inputDataBytes)
		if err != nil {
			return fmt.Errorf("ParseContractFunctionInputs err: %v", err)
		}
		fmt.Println(inputArgs)
		fmt.Println("funcName: ", funcName)
		fmt.Println("inputArgs: ")
		lib.PrintMap(inputArgs)

		return nil
	},
}

var poCmd = &cobra.Command{
	Use:     "po",
	Aliases: []string{"ParseOutputs"},
	Short:   "解析tx的outData",
	Long:    "解析tx的outData",
	Example: "mt client abi ParseOutputs ",
	RunE: func(cmd *cobra.Command, args []string) error {

		if abiJson == "" || data == "" {

			var pabi PAbi
			err := lib.ReadJSONFile(filePath, &pabi)
			if err != nil {
				return fmt.Errorf("ReadJSONFile err: %v", err)
			}
			abiJson = pabi.AbiEvent
			data = pabi.EventData
		}

		outputData, err := hex.DecodeString(data)
		if err != nil {
			return fmt.Errorf("DecodeString err: %v", err)
		}
		output, err := lib.ParseContractFunctionOutputs(abiJson, funcName, outputData)
		if err != nil {
			return fmt.Errorf("ParseContractFunctionInputs err: %v", err)
		}

		fmt.Println("output: ")
		lib.PrintMap(output)

		return nil
	},
	PreRunE: func(cmd *cobra.Command, args []string) error {

		if funcName == "" {
			return fmt.Errorf("function name isn't nil")
		}

		return nil
	},
}
