/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  AssertionMap,
  AssertionMapInterface,
} from "../../../../contracts/L1/fraud-proof/AssertionMap";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ChildInboxSizeMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "rollup",
        type: "address",
      },
    ],
    name: "NotRollup",
    type: "error",
  },
  {
    inputs: [],
    name: "SiblingStateHashExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "assertions",
    outputs: [
      {
        internalType: "bytes32",
        name: "stateHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "inboxSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "parent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "proposalTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numStakers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "childInboxSize",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "stateHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "inboxSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "parentID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "createAssertion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
    ],
    name: "deleteAssertion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
    ],
    name: "getDeadline",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
    ],
    name: "getInboxSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
    ],
    name: "getNumStakers",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
    ],
    name: "getParentID",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
    ],
    name: "getProposalTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
    ],
    name: "getStateHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address",
      },
    ],
    name: "isStaker",
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
    inputs: [],
    name: "rollupAddress",
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
        name: "_rollupAddress",
        type: "address",
      },
    ],
    name: "setRollupAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assertionID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "stakerAddress",
        type: "address",
      },
    ],
    name: "stakeOnAssertion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b610867806100ed6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806354823e661161008c57806382862275116100665780638286227514610289578063873fd089146102ac578063a832c3ae146102f9578063d8a4e5af1461030c57600080fd5b806354823e66146102365780635ec6a8df146102565780638129fc1c1461028157600080fd5b8063366b2b69116100c8578063366b2b691461015e57806342281584146101815780634e04886d14610194578063524232f6146101b757600080fd5b806307663706146100ef5780632b27e93b1461010457806330b947701461013b575b600080fd5b6101026100fd366004610766565b61031f565b005b610128610112366004610788565b6000908152600160208190526040909120015490565b6040519081526020015b60405180910390f35b610128610149366004610788565b60009081526001602052604090206002015490565b61012861016c366004610788565b60009081526001602052604090206005015490565b61010261018f3660046107a1565b6103ef565b6101286101a2366004610788565b60009081526001602052604090206004015490565b6102016101c5366004610788565b60016020819052600091825260409091208054918101546002820154600383015460048401546005850154600790950154939492939192909187565b604080519788526020880196909652948601939093526060850191909152608084015260a083015260c082015260e001610132565b610128610244366004610788565b60009081526001602052604090205490565b600254610269906001600160a01b031681565b6040516001600160a01b039091168152602001610132565b610102610539565b610128610297366004610788565b60009081526001602052604090206003015490565b6102e96102ba3660046107dc565b60008281526001602090815260408083206001600160a01b038516845260060190915290205460ff1692915050565b6040519015158152602001610132565b6101026103073660046107dc565b610642565b61010261031a366004610788565b6106cf565b6002546001600160a01b0316156103885760405162461bcd60e51b815260206004820152602260248201527f726f6c6c75704164647265737320616c726561647920696e697469616c697a65604482015261321760f11b60648201526084015b60405180910390fd5b6001600160a01b0381166103cd5760405162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015260640161037f565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6002546001600160a01b0316331461042f57600254604051630e4cf1bf60e21b81523360048201526001600160a01b03909116602482015260440161037f565b600085815260016020526040808220848352912060078101548061045957600782018690556104a1565b8086146104a15760405162461bcd60e51b8152602060048201526016602482015275086d0d2d8c892dcc4def0a6d2f4ca9ad2e6dac2e8c6d60531b604482015260640161037f565b600087815260088301602052604090205460ff16156104fb5760405162461bcd60e51b81526020600482015260166024820152755369626c696e6753746174654861736845786973747360501b604482015260640161037f565b506000868152600890910160205260409020805460ff1916600190811790915594815593840192909255600283015560038201554360049091015550565b600054610100900460ff16158080156105595750600054600160ff909116105b806105735750303b158015610573575060005460ff166001145b6105d65760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161037f565b6000805460ff1916600117905580156105f9576000805461ff0019166101001790555b801561063f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b6002546001600160a01b0316331461068257600254604051630e4cf1bf60e21b81523360048201526001600160a01b03909116602482015260440161037f565b60008281526001602081815260408084206001600160a01b0386168552600681019092528320805460ff191690921790915560058101805491926106c583610808565b9190505550505050565b6002546001600160a01b0316331461070f57600254604051630e4cf1bf60e21b81523360048201526001600160a01b03909116602482015260440161037f565b600090815260016020819052604082208281559081018290556002810182905560038101829055600481018290556005810182905560070155565b80356001600160a01b038116811461076157600080fd5b919050565b60006020828403121561077857600080fd5b6107818261074a565b9392505050565b60006020828403121561079a57600080fd5b5035919050565b600080600080600060a086880312156107b957600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b600080604083850312156107ef57600080fd5b823591506107ff6020840161074a565b90509250929050565b600060001982141561082a57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220556fca8d0a087a30f39b3f8913ef4945bdc94a97351cefd227289c69e4d7f01364736f6c63430008090033";

type AssertionMapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssertionMapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssertionMap__factory extends ContractFactory {
  constructor(...args: AssertionMapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssertionMap> {
    return super.deploy(overrides || {}) as Promise<AssertionMap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssertionMap {
    return super.attach(address) as AssertionMap;
  }
  override connect(signer: Signer): AssertionMap__factory {
    return super.connect(signer) as AssertionMap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssertionMapInterface {
    return new utils.Interface(_abi) as AssertionMapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssertionMap {
    return new Contract(address, _abi, signerOrProvider) as AssertionMap;
  }
}
