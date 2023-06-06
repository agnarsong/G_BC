/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestLib_BVMCodec,
  TestLib_BVMCodecInterface,
} from "../../../../contracts/test-libraries/codec/TestLib_BVMCodec";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNumber",
            type: "uint256",
          },
          {
            internalType: "enum Lib_BVMCodec.QueueOrigin",
            name: "l1QueueOrigin",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "l1TxOrigin",
            type: "address",
          },
          {
            internalType: "address",
            name: "entrypoint",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Lib_BVMCodec.Transaction",
        name: "_transaction",
        type: "tuple",
      },
    ],
    name: "encodeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "_encoded",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockNumber",
            type: "uint256",
          },
          {
            internalType: "enum Lib_BVMCodec.QueueOrigin",
            name: "l1QueueOrigin",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "l1TxOrigin",
            type: "address",
          },
          {
            internalType: "address",
            name: "entrypoint",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct Lib_BVMCodec.Transaction",
        name: "_transaction",
        type: "tuple",
      },
    ],
    name: "hashTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506103d8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633170de2a1461003b578063a3e6d2fc14610061575b600080fd5b61004e6100493660046101fe565b610081565b6040519081526020015b60405180910390f35b61007461006f3660046101fe565b610092565b60405161005891906102ec565b600061008c8261009d565b92915050565b606061008c826100b6565b60006100a8826100b6565b805190602001209050919050565b6060816000015182602001518360400151846060015185608001518660a001518760c001516040516020016100f1979695949392919061031f565b6040516020818303038152906040529050919050565b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561014057610140610107565b60405290565b80356002811061015557600080fd5b919050565b80356001600160a01b038116811461015557600080fd5b600082601f83011261018257600080fd5b813567ffffffffffffffff8082111561019d5761019d610107565b604051601f8301601f19908116603f011681019082821181831017156101c5576101c5610107565b816040528381528660208588010111156101de57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006020828403121561021057600080fd5b813567ffffffffffffffff8082111561022857600080fd5b9083019060e0828603121561023c57600080fd5b61024461011d565b823581526020830135602082015261025e60408401610146565b604082015261026f6060840161015a565b60608201526102806080840161015a565b608082015260a083013560a082015260c0830135828111156102a157600080fd5b6102ad87828601610171565b60c08301525095945050505050565b60005b838110156102d75781810151838201526020016102bf565b838111156102e6576000848401525b50505050565b602081526000825180602084015261030b8160408501602087016102bc565b601f01601f19169190910160400192915050565b87815286602082015260006002871061034857634e487b7160e01b600052602160045260246000fd5b8660f81b60408301526bffffffffffffffffffffffff19808760601b166041840152808660601b16605584015250836069830152825161038f8160898501602087016102bc565b919091016089019897505050505050505056fea2646970667358221220e86fc26e6c6c6f8eff25907892cd1ce56c3585ca5de7600607f18fb83c4596de64736f6c63430008090033";

type TestLib_BVMCodecConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestLib_BVMCodecConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestLib_BVMCodec__factory extends ContractFactory {
  constructor(...args: TestLib_BVMCodecConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestLib_BVMCodec> {
    return super.deploy(overrides || {}) as Promise<TestLib_BVMCodec>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestLib_BVMCodec {
    return super.attach(address) as TestLib_BVMCodec;
  }
  override connect(signer: Signer): TestLib_BVMCodec__factory {
    return super.connect(signer) as TestLib_BVMCodec__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestLib_BVMCodecInterface {
    return new utils.Interface(_abi) as TestLib_BVMCodecInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLib_BVMCodec {
    return new Contract(address, _abi, signerOrProvider) as TestLib_BVMCodec;
  }
}
