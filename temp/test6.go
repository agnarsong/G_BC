package main

import (
	"context"
	"fmt"
	"log"
	"math/big"
	"os"
	"sync"
	"time"

	"github.com/mantlenetworkio/mantle/l2geth/ethclient"
)

func main() {
	rpcURL := "https://rpc.testnet.mantle.xyz"

	client, err := ethclient.Dial(rpcURL)
	if err != nil {
		log.Fatalf("Failed to connect to the Ethereum client: %v", err)
	}
	defer client.Close()

	// 创建一个日志文件
	file, err := os.Create("app.log")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	// 设置日志输出到文件
	log.SetOutput(file)

	var wg sync.WaitGroup

	step := 25000
	startBlockNum := 6732843
	endBlockBum := 7230211

	k := 0
	for i := 0; i < 4; i++ {
		for j := 0; j < 5; j++ {
			wg.Add(1)
			go func(k int) {
				defer wg.Done()
				for l := 0; l < step; l++ {
					bi := int64(startBlockNum + k*step + l)
					if bi > int64(endBlockBum) {
						break
					}
					b, err := client.BlockByNumber(context.Background(), big.NewInt(bi))
					if err != nil {
						fmt.Println(err)
					}

					re, err := client.TransactionReceipt(context.Background(), b.Transactions()[0].Hash())
					if err != nil {
						fmt.Println(err)
					}

					log.Println(bi, re.L1Fee, re.FeeScalar, re.L1GasPrice, re.L1GasUsed)
					time.Sleep(time.Second * time.Duration(3))
				}
			}(k)
			k++
		}
	}
	wg.Wait()

}
