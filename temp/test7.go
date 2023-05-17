package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type Request struct {
	JSONRPC string      `json:"jsonrpc"`
	Method  string      `json:"method"`
	Params  interface{} `json:"params"`
	ID      int         `json:"id"`
}

type Response struct {
	Result []byte `json:"result"`
	Error  *Error `json:"error,omitempty"`
	ID     int    `json:"id"`
}

type Error struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

func main() {
	url := "https://rpc.testnet.mantle.xyz"
	method := "eth_getTransactionReceipt"
	params := []interface{}{
		"0x1874855f81fdd4fe5a7cb5ae73af18229d7b2e2d4bbf2d78d2ba5aa12154fc81",
	}

	var responseData Response
	err := RunRPCRequest(&responseData, url, method, params)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println(responseData.Result)

	// re, ok := responseData.Result.(l2types.Receipt)
	// if !ok {
	// 	fmt.Println("Error: Failed to convert response result to []byte")
	// 	return
	// } else {
	// 	fmt.Println(re)
	// }

}

func RunRPCRequest(responseData *Response, url, method string, params interface{}) error {
	requestBody, err := json.Marshal(Request{
		JSONRPC: "2.0",
		Method:  method,
		Params:  params,
		ID:      1,
	})
	if err != nil {
		return err
	}

	response, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		return err
	}
	defer response.Body.Close()

	err = json.NewDecoder(response.Body).Decode(&responseData)
	if err != nil {
		return err
	}

	return nil
}
