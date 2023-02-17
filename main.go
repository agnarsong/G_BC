package main

import (
	"bytes"
	"context"
	"fmt"
	"io"
	"log"
	"math/big"
	"os"
	"sync"
	"time"

	"github.com/ethereum/go-ethereum/ethclient"
)

func contains(s []int, e int) bool {
	for _, a := range s {
		if a == e {
			return true
		}
	}
	return false
}

func main() {

	// again := []int{13, 17, 18, 19, 21, 24, 3, 38, 39, 45, 7, 8}

	bn := 8360000

	var wg = new(sync.WaitGroup)

	for i := 0; i < 100; i++ {
		// // 异常失败后 补跑数据
		// if !contains(again, i + 1){
		// 	continue
		// }

		wg.Add(1)
		// client, err := ethclient.Dial("https://goerli.infura.io/v3/a07ee340688643dd98ed571bfc1672fb")
		client, err := ethclient.Dial("https://goerli.davionlabs.com")
		if err != nil {
			log.Fatal(err)
		}
		defer client.Close()

		go func(a int, wg *sync.WaitGroup) {
			writer1 := &bytes.Buffer{}
			writer2 := os.Stdout
			writer3, err := os.OpenFile(fmt.Sprintf("./logs/%v.log", a+1), os.O_WRONLY|os.O_CREATE, 0755)
			if err != nil {
				log.Fatalf("create file log.txt failed: %v", err)
			}
			// logger := log.New(io.MultiWriter(writer1, writer2, writer3), "", log.Lshortfile|log.LstdFlags)
			logger := log.New(io.MultiWriter(writer1, writer2, writer3), "", 0)

			defer wg.Done()

			total := 0
			for j := bn + a*1000; j < bn+(a+1)*1000; j++ {

				blockNumber := big.NewInt(int64(j))
				block, err := client.BlockByNumber(context.Background(), blockNumber)
				if err != nil {
					logger.Printf("j: %v, blockNumber: %v, err: %v", j, blockNumber, err)
					continue
				}

				for _, tx := range block.Transactions() {

					if tx.To() != nil && tx.To().Hex() == "0x654e6dF111F98374d9e5d908D7a5392C308aA18D" {
						total += len(tx.Data())
						logger.Printf("BlockNumber: %v, tx.Hash: %v, input length: %v, time: %v, total: %v\n", block.Number(), tx.Hash(), len(tx.Data()), block.Time(), total)
					}
				}

				time.Sleep(time.Duration(100) * time.Microsecond)
			}

			logger.Printf("finished")
		}(i, wg)
	}
	wg.Wait()
}
