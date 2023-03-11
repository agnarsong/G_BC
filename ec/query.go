package ec_query

import (
	"context"
	"fmt"
	"log"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
)

func QTxs() {
	client, err := ethclient.Dial("https://mainnet.infura.io/v3/YOUR-PROJECT-ID")
	if err != nil {
		log.Fatal(err)
	}

	// 将字符串地址转换为 common.Address 类型
	address := common.HexToAddress("0x123456789...")

	// 检索与地址相关的交易记录
	txs, err := client.TransactionSender(context.Background(), address, nil, 0)
	if err != nil {
		log.Fatal(err)
	}

	// 打印交易记录的哈希值
	for _, tx := range txs {
		fmt.Printf("Transaction hash: %v\n", tx.Hash().Hex())
	}
}
