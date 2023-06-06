/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDelegationSlasher,
  IDelegationSlasherInterface,
} from "../../../../../contracts/L1/delegation/interfaces/IDelegationSlasher";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "contracts",
        type: "address[]",
      },
    ],
    name: "addGloballyPermissionedContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "allowToSlash",
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
        internalType: "address",
        name: "slashingContract",
        type: "address",
      },
    ],
    name: "bondedUntil",
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
    inputs: [
      {
        internalType: "address",
        name: "toBeSlashed",
        type: "address",
      },
      {
        internalType: "address",
        name: "slashingContract",
        type: "address",
      },
    ],
    name: "canSlash",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "toBeFrozen",
        type: "address",
      },
    ],
    name: "freezeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "isFrozen",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "contracts",
        type: "address[]",
      },
    ],
    name: "removeGloballyPermissionedContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "frozenAddresses",
        type: "address[]",
      },
    ],
    name: "resetFrozenStatus",
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
        name: "unbondedAfter",
        type: "uint32",
      },
    ],
    name: "revokeSlashingAbility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDelegationSlasher__factory {
  static readonly abi = _abi;
  static createInterface(): IDelegationSlasherInterface {
    return new utils.Interface(_abi) as IDelegationSlasherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDelegationSlasher {
    return new Contract(address, _abi, signerOrProvider) as IDelegationSlasher;
  }
}
