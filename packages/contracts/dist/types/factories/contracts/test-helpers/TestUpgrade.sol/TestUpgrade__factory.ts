/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestUpgrade,
  TestUpgradeInterface,
} from "../../../../contracts/test-helpers/TestUpgrade.sol/TestUpgrade";

const _abi = [
  {
    inputs: [],
    name: "checkNum",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int32",
        name: "_num",
        type: "int32",
      },
    ],
    name: "setCheckNum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "versionNum",
    outputs: [
      {
        internalType: "int32",
        name: "",
        type: "int32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610158806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630e15932b146100675780634a08e5c21461007e57806354fd4d50146100aa57806360072afb146100b55780638129fc1c1461007c578063caf96d4a146100eb575b600080fd5b61007c6000805463ffffffff19166002179055565b005b60005461009390640100000000900460030b81565b60405160039190910b815260200160405180910390f35b60005460030b610093565b61007c6100c33660046100f8565b6000805463ffffffff9092166401000000000267ffffffff0000000019909216919091179055565b6000546100939060030b81565b60006020828403121561010a57600080fd5b81358060030b811461011b57600080fd5b939250505056fea2646970667358221220f58b1252f0aef0f17ff7050cec0088e409eaa25d278ed1c759d63f664eb8b73564736f6c63430008090033";

type TestUpgradeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUpgradeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUpgrade__factory extends ContractFactory {
  constructor(...args: TestUpgradeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUpgrade> {
    return super.deploy(overrides || {}) as Promise<TestUpgrade>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUpgrade {
    return super.attach(address) as TestUpgrade;
  }
  override connect(signer: Signer): TestUpgrade__factory {
    return super.connect(signer) as TestUpgrade__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUpgradeInterface {
    return new utils.Interface(_abi) as TestUpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUpgrade {
    return new Contract(address, _abi, signerOrProvider) as TestUpgrade;
  }
}
