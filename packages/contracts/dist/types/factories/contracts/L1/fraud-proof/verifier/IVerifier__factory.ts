/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVerifier,
  IVerifierInterface,
} from "../../../../../contracts/L1/fraud-proof/verifier/IVerifier";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "coinbase",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "origin",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
              },
              {
                internalType: "uint256",
                name: "gasPrice",
                type: "uint256",
              },
              {
                internalType: "uint64",
                name: "gas",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "v",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "r",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "s",
                type: "uint256",
              },
            ],
            internalType: "struct EVMTypesLib.Transaction",
            name: "transaction",
            type: "tuple",
          },
          {
            internalType: "bytes32",
            name: "inputRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "txHash",
            type: "bytes32",
          },
        ],
        internalType: "struct VerificationContext.Context",
        name: "ctx",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "currStateHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "encoded",
        type: "bytes",
      },
    ],
    name: "verifyOneStepProof",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class IVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IVerifierInterface {
    return new utils.Interface(_abi) as IVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVerifier {
    return new Contract(address, _abi, signerOrProvider) as IVerifier;
  }
}
