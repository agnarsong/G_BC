/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  Parser,
  ParserInterface,
} from "../../../../../contracts/libraries/eigenda/Parse.sol/Parser";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "polys",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "parse",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610467806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f944c8f14610030575b600080fd5b61004361003e3660046101f5565b610059565b60405161005091906102a7565b60405180910390f35b6060806000845b84835110156101b65760006100db8261007a6020826102f0565b610085906001610312565b61009090602061032a565b61009a9190610349565b85516100a69089610349565b848c8c888181106100b9576100b9610360565b90506020028101906100cb9190610376565b6100d6929150610349565b6101c2565b9050838989858181106100f0576100f0610360565b90506020028101906101029190610376565b849061010e8583610312565b9261011b939291906103c4565b60405160200161012d939291906103ee565b60405160208183030381529060405293508351861161014c57506101b6565b88888481811061015e5761015e610360565b90506020028101906101709190610376565b905061017c8284610312565b1415610198578261018c81610416565b935050600191506101b0565b6101a3816001610312565b6101ad9083610312565b91505b50610060565b50909695505050505050565b60008284106101de578183106101d857816101ed565b826101ed565b8184106101eb57816101ed565b835b949350505050565b6000806000806060858703121561020b57600080fd5b843567ffffffffffffffff8082111561022357600080fd5b818701915087601f83011261023757600080fd5b81358181111561024657600080fd5b8860208260051b850101111561025b57600080fd5b6020928301999098509187013596604001359550909350505050565b60005b8381101561029257818101518382015260200161027a565b838111156102a1576000848401525b50505050565b60208152600082518060208401526102c6816040850160208701610277565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b60008261030d57634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115610325576103256102da565b500190565b6000816000190483118215151615610344576103446102da565b500290565b60008282101561035b5761035b6102da565b500390565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261038d57600080fd5b83018035915067ffffffffffffffff8211156103a857600080fd5b6020019150368190038213156103bd57600080fd5b9250929050565b600080858511156103d457600080fd5b838611156103e157600080fd5b5050820193919092039150565b60008451610400818460208901610277565b8201838582376000930192835250909392505050565b600060001982141561042a5761042a6102da565b506001019056fea26469706673582212201c5830d7dcd4eee8bbc01e22ee7131985768addb65b296d162f49fbb20cf60eb64736f6c63430008090033";

type ParserConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ParserConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Parser__factory extends ContractFactory {
  constructor(...args: ParserConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Parser> {
    return super.deploy(overrides || {}) as Promise<Parser>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Parser {
    return super.attach(address) as Parser;
  }
  override connect(signer: Signer): Parser__factory {
    return super.connect(signer) as Parser__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParserInterface {
    return new utils.Interface(_abi) as ParserInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Parser {
    return new Contract(address, _abi, signerOrProvider) as Parser;
  }
}
