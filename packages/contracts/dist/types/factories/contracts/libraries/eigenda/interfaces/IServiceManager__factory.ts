/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IServiceManager,
  IServiceManagerInterface,
} from "../../../../../contracts/libraries/eigenda/interfaces/IServiceManager";

const _abi = [
  {
    inputs: [],
    name: "collateralToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eigenLayrDelegation",
    outputs: [
      {
        internalType: "contract IEigenLayrDelegation",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "freezeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTime",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "serveUntil",
        type: "uint32",
      },
    ],
    name: "recordFirstStakeUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "serveUntil",
        type: "uint32",
      },
    ],
    name: "recordLastStakeUpdateAndRevokeSlashingAbility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "updateBlock",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "serveUntil",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "prevElement",
        type: "uint256",
      },
    ],
    name: "recordStakeUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "taskNumber",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IServiceManager__factory {
  static readonly abi = _abi;
  static createInterface(): IServiceManagerInterface {
    return new utils.Interface(_abi) as IServiceManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IServiceManager {
    return new Contract(address, _abi, signerOrProvider) as IServiceManager;
  }
}