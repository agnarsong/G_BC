package main

import (
	"context"
	"encoding/csv"
	"fmt"
	"log"
	"math/big"
	"os"
	"strconv"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
)

func main() {
	rpcURL := "https://goerli.infura.io/v3/3f31ba1b9fc54dfd92e1e26a64fba7e0"

	client, err := ethclient.Dial(rpcURL)
	if err != nil {
		log.Fatalf("Failed to connect to the Ethereum client: %v", err)
	}

	_ = client
	// // CTC
	// // contractAddress := common.HexToAddress("0x654e6dF111F98374d9e5d908D7a5392C308aA18D")
	// // SCC
	// contractAddress := common.HexToAddress("0x91A5D806BA73d0AA4bFA9B318126dDE60582e92a")

	// // 计算 balanceOf 方法的函数选择器
	// methodID := crypto.Keccak256([]byte("getTotalElements()"))[:4]

	// // 拼接参数，将地址左侧补零
	// var data []byte
	// data = append(data, methodID...)

	// endBlock, err := client.BlockNumber(context.Background())
	// // fmt.Println("endBlock blockNumber: ", endBlock)
	// if err != nil {
	// 	fmt.Println(err)
	// }
	// res := []byte{}
	// for start := endBlock - 1000; start < endBlock; start++ {
	// 	result, err := client.CallContract(context.Background(), ethereum.CallMsg{
	// 		To:   &contractAddress,
	// 		Data: data,
	// 	}, big.NewInt(int64(start)))
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}

	// 	if new(big.Int).SetBytes(res).Cmp(new(big.Int).SetBytes(result)) != 0 {
	// 		res = result
	// 		fmt.Println(start, new(big.Int).SetBytes(result))
	// 	}
	// }

	// 打开 CSV 文件
	file, err := os.Open("/Users/dl00038ml/Desktop/ctcData_update.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	// 创建 CSV Reader
	reader := csv.NewReader(file)

	// 读取所有行数据
	rows, err := reader.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	totalGasFee := common.Big0
	updateRows := make([][]string, 0)
	// 遍历每一行数据
	for _, row := range rows {

		// // 遍历每个单元格数据
		// tx, _, err := client.TransactionByHash(context.Background(), common.HexToHash(row[0]))
		// if err != nil {
		// 	fmt.Println(err)
		// }

		// ps, err := layer2.DecodeAppendSequencerBatchParams(common.Bytes2Hex(tx.Data()))
		// if err != nil {
		// 	fmt.Println(err)
		// }
		// fmt.Println(ps.ShouldStartAtElement, ps.TotalElementsToAppend)
		// rowTemp := append(row, common.Bytes2Hex(tx.Data()))
		// updateRows = append(updateRows, rowTemp)
		// if i > 100 {
		// 	break
		// }
		gasUsed, err := strconv.ParseInt(row[2], 10, 64)
		if err != nil {
			fmt.Println("无法将字符串转换为 int64:", err)
			return
		}
		gasPrice, err := strconv.ParseInt(row[3], 10, 64)
		if err != nil {
			fmt.Println("无法将字符串转换为 int64:", err)
			return
		}
		gasFee := common.Big1
		gasFee.Mul(big.NewInt(gasUsed), big.NewInt(gasPrice))
		fmt.Println(row[2], row[3], gasFee)

		totalGasFee.Add(totalGasFee, gasFee)

		num, err := strconv.ParseInt(row[1], 10, 64)
		if err != nil {
			fmt.Println("无法将字符串转换为 int64:", err)
			return
		}
		block := big.NewInt(num)
		sequencerBalance, err := client.BalanceAt(context.Background(),
			common.HexToAddress("0xc4AaE221f1C62E8CBC657Af5b051eA573914cFc7"),
			block)
		if err != nil {
			fmt.Println(row[1], err)
		}
		fmt.Println(sequencerBalance)
		rowTemp := append(row, gasFee.String())
		rowTemp = append(rowTemp, sequencerBalance.String())
		updateRows = append(updateRows, rowTemp)
	}
	fmt.Println(totalGasFee)
	// 创建一个新的 CSV 文件
	newFile, err := os.Create("/Users/dl00038ml/Desktop/ctcData_update1.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer newFile.Close()

	// 创建 CSV Writer
	writer := csv.NewWriter(newFile)

	// 写入更新后的数据
	err = writer.WriteAll(updateRows)
	if err != nil {
		log.Fatal(err)
	}

	// 刷新缓冲区并检查错误
	writer.Flush()

}

// scc
// curl https://api-goerli.etherscan.io/api\?module\=account\&action\=txlist\&address\=0x91A5D806BA73d0AA4bFA9B318126dDE60582e92a\&startblock\=8968866\&endblock\=99999999\&page\=1\&offset\=1000\&sort\=asc\&apikey\=YourApiKeyToken | jq -r '.result[] | "\(.hash),\(.blockNumber),\(.gasUsed),\(.gasPrice)"' > ~/Desktop/sccData.csv

// ctc
// curl https://api-goerli.etherscan.io/api\?module\=account\&action\=txlist\&address\=0x654e6dF111F98374d9e5d908D7a5392C308aA18D\&startblock\=8968866\&endblock\=99999999\&page\=1\&offset\=1000\&sort\=asc\&apikey\=YourApiKeyToken | jq -r '.result[] | "\(.hash),\(.blockNumber),\(.gasUsed),\(.gasPrice)"' > ~/Desktop/ctcData.csv
// curl https://api-goerli.etherscan.io/api\?module\=account\&action\=txlist\&address\=0x654e6dF111F98374d9e5d908D7a5392C308aA18D\&startblock\=8978448\&endblock\=99999999\&page\=1\&offset\=1000\&sort\=asc\&apikey\=YourApiKeyToken | jq -r '.result[] | "\(.hash),\(.blockNumber),\(.gasUsed),\(.gasPrice)"' >> ~/Desktop/ctcData.csv
// curl https://api-goerli.etherscan.io/api\?module\=account\&action\=txlist\&address\=0x654e6dF111F98374d9e5d908D7a5392C308aA18D\&startblock\=8982616\&endblock\=99999999\&page\=1\&offset\=1000\&sort\=asc\&apikey\=YourApiKeyToken | jq -r '.result[] | "\(.hash),\(.blockNumber),\(.gasUsed),\(.gasPrice)"' >> ~/Desktop/ctcData.csv
// curl https://api-goerli.etherscan.io/api\?module\=account\&action\=txlist\&address\=0x654e6dF111F98374d9e5d908D7a5392C308aA18D\&startblock\=8986617\&endblock\=99999999\&page\=1\&offset\=1000\&sort\=asc\&apikey\=YourApiKeyToken | jq -r '.result[] | "\(.hash),\(.blockNumber),\(.gasUsed),\(.gasPrice)"' >> ~/Desktop/ctcData.csv
// curl https://api-goerli.etherscan.io/api\?module\=account\&action\=txlist\&address\=0x654e6dF111F98374d9e5d908D7a5392C308aA18D\&startblock\=8990570\&endblock\=99999999\&page\=1\&offset\=1000\&sort\=asc\&apikey\=YourApiKeyToken | jq -r '.result[] | "\(.hash),\(.blockNumber),\(.gasUsed),\(.gasPrice)"' >> ~/Desktop/ctcData.csv
// curl https://api-goerli.etherscan.io/api\?module\=account\&action\=txlist\&address\=0x654e6dF111F98374d9e5d908D7a5392C308aA18D\&startblock\=8994553\&endblock\=99999999\&page\=1\&offset\=1000\&sort\=asc\&apikey\=YourApiKeyToken | jq -r '.result[] | "\(.hash),\(.blockNumber),\(.gasUsed),\(.gasPrice)"' >> ~/Desktop/ctcData.csv
// curl https://api-goerli.etherscan.io/api\?module\=account\&action\=txlist\&address\=0x654e6dF111F98374d9e5d908D7a5392C308aA18D\&startblock\=8998494\&endblock\=99999999\&page\=1\&offset\=1000\&sort\=asc\&apikey\=YourApiKeyToken | jq -r '.result[] | "\(.hash),\(.blockNumber),\(.gasUsed),\(.gasPrice)"' >> ~/Desktop/ctcData.csv
