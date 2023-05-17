package main

import (
	"bytes"
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/ethereum/go-ethereum/common"
)

func main() {
	endpoint := "https://rpc.testnet.mantle.xyz"
	// from, _ := strconv.Atoi(os.Args[1])
	// to, _ := strconv.Atoi(os.Args[2])
	// ERC20 Approve事件的Topic
	// approveTopic := common.HexToHash("0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925")
	reqs := make([]map[string]interface{}, 0)

	// 从CSV文件中读取地址列表
	file, err := os.Open("addresses.csv")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	reader := csv.NewReader(file)
	addressesData, err := reader.ReadAll()
	if err != nil {
		log.Fatal(err)
	}

	// 获取地址列表的第二列数据
	var addresses []common.Address
	for _, row := range addressesData {
		if len(row) >= 1 {
			address := common.HexToAddress(row[0])
			addresses = append(addresses, address)
		}
	}

	for i, address := range addresses {
		req := map[string]interface{}{
			"method": "eth_getLogs",
			"params": []map[string]interface{}{
				"fromBlock": "0x429d3b",
				"toBlock":   "0x429d3b",
				"address":   "0xb59f67a8bff5d8cd03f6ac17265c550ed8f33907",
				"topics": []string{
					"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
					"0x00000000000000000000000000b46c2526e227482e2ebb8f4c69e4674d262e75",
					"0x00000000000000000000000054a2d42a40f51259dedd1978f6c118a0f0eff078",
				},
			},
			"id":      i,
			"jsonrpc": "2.0",
		}
		reqs = append(reqs, req)
	}
	fmt.Println(reqs)
	reqBody, _ := json.Marshal(reqs)
	req, _ := http.NewRequest("POST", endpoint, bytes.NewBuffer(reqBody))
	req.Header.Set("Content-Type", "application/json")

	client := http.DefaultClient
	res, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer res.Body.Close()

	logData, _ := ioutil.ReadAll(res.Body)
	err = ioutil.WriteFile("log.txt", logData, 0644)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("数据已写入日志文件")

	var data []interface{}
	err = json.Unmarshal(logData, &data)
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(len(data))
	fmt.Println(data[len(data)-1])
}

// package main

// import (
// 	"bytes"
// 	"encoding/json"
// 	"fmt"
// 	"io/ioutil"
// 	"net/http"
// )

// func main() {
// 	myHeaders := http.Header{}
// 	myHeaders.Add("Content-Type", "application/json")

// 	params := map[string]interface{}{
// 		"address": []string{"0x1236dc14efb42081d109037e60030c54da25b1f2"},
// 		// "fromBlock": "7214895",
// 		// "toBlock":   "7219895",
// 	}

// 	body := map[string]interface{}{
// 		"method":  "eth_getLogs",
// 		"params":  params,
// 		"id":      1,
// 		"jsonrpc": "2.0",
// 	}
// 	b, err := json.Marshal(body)
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}

// 	request, err := http.NewRequest("POST", "https://rpc.testnet.mantle.xyz", bytes.NewBuffer(b))

// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}
// 	request.Header = myHeaders

// 	client := http.Client{}
// 	resp, err := client.Do(request)
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}
// 	defer resp.Body.Close()

// 	logData, _ := ioutil.ReadAll(resp.Body)
// 	err = ioutil.WriteFile("log.txt", logData, 0644)
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}
// 	fmt.Println("数据已写入日志文件")

// 	var data []interface{}
// 	err = json.Unmarshal(logData, &data)
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}

// 	fmt.Println(len(data))
// 	fmt.Println(data[len(data)-1])
// }
