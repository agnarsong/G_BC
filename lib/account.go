package lib

import (
	"context"
	"math/big"

	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
)

func IsContract(c *ethclient.Client, a string) (bool, error) {

	address := common.HexToAddress(a)
	// nil is latest block
	bytecode, err := c.CodeAt(context.Background(), address, nil)
	if err != nil {
		return false, err
	}

	isContract := len(bytecode) > 0

	return isContract, nil
}

func BalanceAt(c *ethclient.Client, a common.Address, bn int64) (balance *big.Int, err error) {

	if bn == -1 {
		balance, err = c.BalanceAt(context.Background(), a, nil)
	} else {
		blockNumber := big.NewInt(bn)
		balance, err = c.BalanceAt(context.Background(), a, blockNumber)
	}

	return
}

func PendingBalanceAt(c *ethclient.Client, a string) (pendingBalance *big.Int, err error) {

	account := common.HexToAddress(a)
	pendingBalance, err = c.PendingBalanceAt(context.Background(), account)

	return
}

func PendingNonceAt(c *ethclient.Client, a common.Address) (nonce uint64, err error) {

	nonce, err = c.PendingNonceAt(context.Background(), a)

	return
}

func GetAuth(c *ethclient.Client, prv string) (auth *bind.TransactOpts, err error) {

	privateKey, _, fromAddress, err := AnalysePrivateKey(prv)
	if err != nil {
		return
	}

	nonce, err := c.PendingNonceAt(context.Background(), fromAddress)
	if err != nil {
		return
	}

	gasPrice, err := c.SuggestGasPrice(context.Background())
	if err != nil {
		return
	}

	// // 生成一个随机数种子
	// rand.Seed(time.Now().UnixNano())
	// // 生成一个随机的 big.Int 值
	// randNum := big.NewInt(int64(rand.Intn(10000)) + 150000000000)
	// gasPrice.Add(gasPrice, randNum)

	cid, err := c.ChainID(context.Background())
	if err != nil {
		return
	}

	auth, err = bind.NewKeyedTransactorWithChainID(privateKey, cid)
	if err != nil {
		return
	}

	auth.Nonce = big.NewInt(int64(nonce))
	auth.Value = big.NewInt(0)       // in wei
	auth.GasLimit = uint64(30000000) // in units
	auth.GasPrice = gasPrice

	return
}
