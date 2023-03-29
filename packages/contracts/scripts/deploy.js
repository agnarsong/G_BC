// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fs = require('fs');
const yaml = require('js-yaml');

async function main() {

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 600;

  // const lockedAmount = hre.ethers.utils.parseEther("0.001");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(
  //   `Lock with ${ethers.utils.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );

  const CERC20 = await hre.ethers.getContractFactory("CustomERC20");
  const cERC20 = await CERC20.deploy("CustomERC20","CERC20");

  console.log("CustomERC20 address:", cERC20.address);

  // 示例用法
  updateYaml('CustomERC20Address', cERC20.address, '../../conf.yaml');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

function updateYaml(key, value, filePath) {
  // 读取 YAML 文件
  const doc = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));

  // 更新指定键的值
  eval(`doc.${key} = ${JSON.stringify(value)}`);

  // 将更新后的 YAML 内容写回文件
  fs.writeFileSync(filePath, yaml.safeDump(doc));
}