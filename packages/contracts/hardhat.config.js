require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    l1: {
      url: `http://localhost:9545`,
      accounts: ["ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
      chainId: 31337,
      gas: 30000000,
      gasPrice: 1000000000
    },
    l2: {
      url: `http://localhost:8545`,
      accounts: ["ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
      chainId: 17,
      gas: 30000000,
      gasPrice: 1
    }
  }
};
