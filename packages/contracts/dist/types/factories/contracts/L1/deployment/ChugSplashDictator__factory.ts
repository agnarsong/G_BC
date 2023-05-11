/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ChugSplashDictator,
  ChugSplashDictatorInterface,
} from "../../../../contracts/L1/deployment/ChugSplashDictator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract L1ChugSplashProxy",
        name: "_target",
        type: "address",
      },
      {
        internalType: "address",
        name: "_finalOwner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_codeHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_messengerSlotKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_messengerSlotVal",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_bridgeSlotKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_bridgeSlotVal",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_bitAddressSlotKey",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_bitAddressSlotVal",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "bitAddressSlotKey",
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
    name: "bitAddressSlotVal",
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
    name: "bridgeSlotKey",
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
    name: "bridgeSlotVal",
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
    name: "codeHash",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_code",
        type: "bytes",
      },
    ],
    name: "doActions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalOwner",
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
    inputs: [],
    name: "isUpgrading",
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
    name: "messengerSlotKey",
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
    name: "messengerSlotVal",
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
    name: "returnOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "target",
    outputs: [
      {
        internalType: "contract L1ChugSplashProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805460ff1916600117905534801561001d57600080fd5b5060405161077b38038061077b83398101604081905261003c916100b1565b60008054610100600160a81b0319166101006001600160a01b039b8c1602179055600180546001600160a01b031916989099169790971790975560029490945560039290925560045560055560065560079190915560085561012f565b6001600160a01b03811681146100ae57600080fd5b50565b60008060008060008060008060006101208a8c0312156100d057600080fd5b89516100db81610099565b60208b01519099506100ec81610099565b8098505060408a0151965060608a0151955060808a0151945060a08a0151935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b61063d8061013e6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063708518de11610071578063708518de1461012f578063830c9df814610138578063907023dd14610141578063a3b2d8a51461014a578063b794726214610153578063d4b839921461017057600080fd5b80630bf56f21146100b957806317ad94ec146100ce57806318edaaf2146100fe578063297d1a34146101155780635307023b1461011d57806361aaa41b14610126575b600080fd5b6100cc6100c7366004610501565b610188565b005b6001546100e1906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61010760025481565b6040519081526020016100f5565b6100cc610411565b61010760045481565b61010760085481565b61010760035481565b61010760075481565b61010760065481565b61010760055481565b6000546101609060ff1681565b60405190151581526020016100f5565b6000546100e19061010090046001600160a01b031681565b60025481516020830120146101f55760405162461bcd60e51b815260206004820152602860248201527f4368756753706c6173684469637461746f723a20496e636f727265637420636f6044820152673232903430b9b41760c11b60648201526084015b60405180910390fd5b6000546040516306c5d4ad60e41b81526101009091046001600160a01b031690636c5d4ad0906102299084906004016105b2565b600060405180830381600087803b15801561024357600080fd5b505af1158015610257573d6000803e3d6000fd5b505060005460035460048054604051634d8587ed60e11b81529182019290925260248101919091526101009091046001600160a01b03169250639b0b0fda9150604401600060405180830381600087803b1580156102b457600080fd5b505af11580156102c8573d6000803e3d6000fd5b5050600054600554600654604051634d8587ed60e11b8152600481019290925260248201526101009091046001600160a01b03169250639b0b0fda9150604401600060405180830381600087803b15801561032257600080fd5b505af1158015610336573d6000803e3d6000fd5b5050600054600754600854604051634d8587ed60e11b8152600481019290925260248201526101009091046001600160a01b03169250639b0b0fda9150604401600060405180830381600087803b15801561039057600080fd5b505af11580156103a4573d6000803e3d6000fd5b50506000546001546040516313af403560e01b81526001600160a01b0391821660048201526101009092041692506313af40359150602401600060405180830381600087803b1580156103f657600080fd5b505af115801561040a573d6000803e3d6000fd5b5050505050565b6001546001600160a01b031633146104835760405162461bcd60e51b815260206004820152602f60248201527f4368756753706c6173684469637461746f723a206f6e6c792063616c6c61626c60448201526e3290313c903334b730b627bbb732b960891b60648201526084016101ec565b6000546001546040516313af403560e01b81526001600160a01b03918216600482015261010090920416906313af403590602401600060405180830381600087803b1580156104d157600080fd5b505af11580156104e5573d6000803e3d6000fd5b50505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561051357600080fd5b813567ffffffffffffffff8082111561052b57600080fd5b818401915084601f83011261053f57600080fd5b813581811115610551576105516104eb565b604051601f8201601f19908116603f01168101908382118183101715610579576105796104eb565b8160405282815287602084870101111561059257600080fd5b826020860160208301376000928101602001929092525095945050505050565b600060208083528351808285015260005b818110156105df578581018301518582016040015282016105c3565b818111156105f1576000604083870101525b50601f01601f191692909201604001939250505056fea2646970667358221220617e7701518744cb774e656e6a232d67f7d86a882e6d46e23ce6f4b0b469dd2564736f6c63430008090033";

type ChugSplashDictatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChugSplashDictatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChugSplashDictator__factory extends ContractFactory {
  constructor(...args: ChugSplashDictatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _target: PromiseOrValue<string>,
    _finalOwner: PromiseOrValue<string>,
    _codeHash: PromiseOrValue<BytesLike>,
    _messengerSlotKey: PromiseOrValue<BytesLike>,
    _messengerSlotVal: PromiseOrValue<BytesLike>,
    _bridgeSlotKey: PromiseOrValue<BytesLike>,
    _bridgeSlotVal: PromiseOrValue<BytesLike>,
    _bitAddressSlotKey: PromiseOrValue<BytesLike>,
    _bitAddressSlotVal: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ChugSplashDictator> {
    return super.deploy(
      _target,
      _finalOwner,
      _codeHash,
      _messengerSlotKey,
      _messengerSlotVal,
      _bridgeSlotKey,
      _bridgeSlotVal,
      _bitAddressSlotKey,
      _bitAddressSlotVal,
      overrides || {}
    ) as Promise<ChugSplashDictator>;
  }
  override getDeployTransaction(
    _target: PromiseOrValue<string>,
    _finalOwner: PromiseOrValue<string>,
    _codeHash: PromiseOrValue<BytesLike>,
    _messengerSlotKey: PromiseOrValue<BytesLike>,
    _messengerSlotVal: PromiseOrValue<BytesLike>,
    _bridgeSlotKey: PromiseOrValue<BytesLike>,
    _bridgeSlotVal: PromiseOrValue<BytesLike>,
    _bitAddressSlotKey: PromiseOrValue<BytesLike>,
    _bitAddressSlotVal: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _target,
      _finalOwner,
      _codeHash,
      _messengerSlotKey,
      _messengerSlotVal,
      _bridgeSlotKey,
      _bridgeSlotVal,
      _bitAddressSlotKey,
      _bitAddressSlotVal,
      overrides || {}
    );
  }
  override attach(address: string): ChugSplashDictator {
    return super.attach(address) as ChugSplashDictator;
  }
  override connect(signer: Signer): ChugSplashDictator__factory {
    return super.connect(signer) as ChugSplashDictator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChugSplashDictatorInterface {
    return new utils.Interface(_abi) as ChugSplashDictatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ChugSplashDictator {
    return new Contract(address, _abi, signerOrProvider) as ChugSplashDictator;
  }
}