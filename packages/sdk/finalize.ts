import { ethers } from 'ethers'

import { CrossChainMessenger } from './src';
import {sleep} from "@mantleio/core-utils";

(async () => {
  const l1RpcProvider = new ethers.providers.JsonRpcProvider(process.env.L1_URL)
  // @ts-ignore
  const l1Wallet = new ethers.Wallet(process.env.PRIVATE_KEY, l1RpcProvider)
  const etherBalance =ethers.utils.formatEther(await l1Wallet.getBalance());

  const tokenAddress = process.env.TestMantleToken_ADDRESS;
  const tokenAbi = ["function balanceOf(address account) view returns (uint256)"];
  const tokenContract = new ethers.Contract(tokenAddress!, tokenAbi, l1Wallet);
  const balance = await tokenContract.balanceOf(l1Wallet.address);
  const balanceFormatted = ethers.utils.formatUnits(balance, 18); // 18 是代币的小数位数
  console.log(`sleep 30s`);
  await sleep(30000);
  const l2RpcProvider = new ethers.providers.JsonRpcProvider(process.env.L2_URL)
  // @ts-ignore
  const l2Wallet = new ethers.Wallet(process.env.PRIVATE_KEY, l2RpcProvider)
  const withdrawETHtx = await l2RpcProvider.getTransaction(
    process.env.TX_HASH || ''
  )
  const crossChainMessenger = new CrossChainMessenger({
    l1ChainId: process.env.L1_CHAINID!,
    l2ChainId: process.env.L2_CHAINID!,
    l1SignerOrProvider: l1Wallet,
    l2SignerOrProvider: l2Wallet,
  })
  // console.log("process.env: ", process.env)
  
  const maxRetries = 3; // 最大重试次数

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const finalizeMessageResponse = await crossChainMessenger.finalizeMessage(
        withdrawETHtx
      )

      console.log(`finalizeMessage txHash:`, finalizeMessageResponse.hash);

      break;
    } catch (error) {
      console.log(`Attempt ${attempt} failed with error:`, error);
      
      // 如果还有重试次数剩余，则继续尝试
      if (attempt < maxRetries) {
        console.log(`Retrying... (${attempt + 1}/${maxRetries})`);
        await sleep(30000);
        continue;
      }
      
      // 如果已经达到最大重试次数，则抛出最后一次异常
      console.log(`finalizeMessage err: `, error);
    }
  }
})()