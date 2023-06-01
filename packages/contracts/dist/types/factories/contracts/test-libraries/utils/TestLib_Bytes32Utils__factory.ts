/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestLib_Bytes32Utils,
  TestLib_Bytes32UtilsInterface,
} from "../../../../contracts/test-libraries/utils/TestLib_Bytes32Utils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_in",
        type: "address",
      },
    ],
    name: "fromAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "_out",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_in",
        type: "bool",
      },
    ],
    name: "fromBool",
    outputs: [
      {
        internalType: "bytes32",
        name: "_out",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_in",
        type: "bytes32",
      },
    ],
    name: "toAddress",
    outputs: [
      {
        internalType: "address",
        name: "_out",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_in",
        type: "bytes32",
      },
    ],
    name: "toBool",
    outputs: [
      {
        internalType: "bool",
        name: "_out",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c3806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063341f6623146100515780638f03f7fd14610081578063934e03a4146100a2578063b72e717d146100c5575b600080fd5b61006461005f366004610122565b6100d8565b6040516001600160a01b0390911681526020015b60405180910390f35b61009461008f36600461013b565b6100e2565b604051908152602001610078565b6100b56100b0366004610122565b6100ed565b6040519015158152602001610078565b6100946100d3366004610164565b6100f7565b6000815b92915050565b60006100dc82610108565b60008115156100dc565b60006001600160a01b0382166100dc565b600081610116576000610119565b60015b60ff1692915050565b60006020828403121561013457600080fd5b5035919050565b60006020828403121561014d57600080fd5b8135801515811461015d57600080fd5b9392505050565b60006020828403121561017657600080fd5b81356001600160a01b038116811461015d57600080fdfea26469706673582212202549a8f97d6273531db5a09bd2816cb4b98b0a7af476afe06cdeed635789983864736f6c63430008090033";

type TestLib_Bytes32UtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestLib_Bytes32UtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestLib_Bytes32Utils__factory extends ContractFactory {
  constructor(...args: TestLib_Bytes32UtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestLib_Bytes32Utils> {
    return super.deploy(overrides || {}) as Promise<TestLib_Bytes32Utils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestLib_Bytes32Utils {
    return super.attach(address) as TestLib_Bytes32Utils;
  }
  override connect(signer: Signer): TestLib_Bytes32Utils__factory {
    return super.connect(signer) as TestLib_Bytes32Utils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestLib_Bytes32UtilsInterface {
    return new utils.Interface(_abi) as TestLib_Bytes32UtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLib_Bytes32Utils {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestLib_Bytes32Utils;
  }
}
