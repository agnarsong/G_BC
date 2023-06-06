/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  L1StandardBridge,
  L1StandardBridgeInterface,
} from "../../../../contracts/L1/messaging/L1StandardBridge";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ERC20DepositInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ERC20WithdrawalFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ETHDepositInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ETHWithdrawalFinalized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositERC20To",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositETHTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "deposits",
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
    inputs: [],
    name: "donateETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "finalizeERC20Withdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "finalizeETHWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "finalizeMantleWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1messenger",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2TokenBridge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l1MantleAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "l1MantleAddress",
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
    name: "l2TokenBridge",
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
    name: "messenger",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b03191690556117b0806100306000396000f3fe6080604052600436106100c65760003560e01c80638f601f661161007f578063a9f9e67511610059578063a9f9e6751461026d578063b1a1a8821461028d578063c0c53b8b146102a0578063f82b418e146102c057600080fd5b80638f601f66146101f457806391c49bf81461023a5780639a2ac6d51461025a57600080fd5b80631532ec341461013757806333151848146101575780633cb747bf1461019457806358a997f6146101b4578063838b2520146101d45780638b4c40b01461013057600080fd5b3661013257333b156100f35760405162461bcd60e51b81526004016100ea90611047565b60405180910390fd5b3233146101125760405162461bcd60e51b81526004016100ea90611070565b610130333362030d40604051806020016040528060008152506102e0565b005b600080fd5b34801561014357600080fd5b50610130610152366004611108565b6103ba565b34801561016357600080fd5b50600254610177906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101a057600080fd5b50600054610177906001600160a01b031681565b3480156101c057600080fd5b506101306101cf366004611194565b6105ec565b3480156101e057600080fd5b506101306101ef366004611217565b610642565b34801561020057600080fd5b5061022c61020f3660046112ad565b600360209081526000928352604080842090915290825290205481565b60405190815260200161018b565b34801561024657600080fd5b50600154610177906001600160a01b031681565b6101306102683660046112e6565b61065b565b34801561027957600080fd5b50610130610288366004611349565b6106a3565b61013061029b3660046113c2565b610870565b3480156102ac57600080fd5b506101306102bb366004611415565b6108f5565b3480156102cc57600080fd5b506101306102db366004611108565b61099c565b600063662a633a60e01b600073deaddeaddeaddeaddeaddeaddeaddeaddead11118787348760405160240161031a969594939291906114b8565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152600154909150610366906001600160a01b03168483610acb565b836001600160a01b0316856001600160a01b03167f35d79ab81f2b2017e19afb5c5571778877782d7a8786f5907f93b0f4702f4f2334856040516103ab929190611507565b60405180910390a35050505050565b6001546001600160a01b03166103d86000546001600160a01b031690565b6001600160a01b0316336001600160a01b0316146104085760405162461bcd60e51b81526004016100ea90611520565b806001600160a01b03166104246000546001600160a01b031690565b6001600160a01b0316636e296e456040518163ffffffff1660e01b815260040160206040518083038186803b15801561045c57600080fd5b505afa158015610470573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610494919061156e565b6001600160a01b0316146104ba5760405162461bcd60e51b81526004016100ea9061158b565b604080516000808252602082019092526001600160a01b0387169086906040516104e491906115db565b60006040518083038185875af1925050503d8060008114610521576040519150601f19603f3d011682016040523d82523d6000602084013e610526565b606091505b50509050806105945760405162461bcd60e51b815260206004820152603460248201527f5472616e7366657248656c7065723a3a736166655472616e736665724554483a60448201527308115512081d1c985b9cd9995c8819985a5b195960621b60648201526084016100ea565b856001600160a01b0316876001600160a01b03167f2ac69ee804d9a7a0984249f508dfab7cb2534b465b6ce1580f99a38ba9c5e6318787876040516105db93929190611620565b60405180910390a350505050505050565b333b1561060b5760405162461bcd60e51b81526004016100ea90611047565b32331461062a5760405162461bcd60e51b81526004016100ea90611070565b61063a8686333388888888610b2d565b505050505050565b6106528787338888888888610b2d565b50505050505050565b61069d33858585858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506102e092505050565b50505050565b6001546001600160a01b03166106c16000546001600160a01b031690565b6001600160a01b0316336001600160a01b0316146106f15760405162461bcd60e51b81526004016100ea90611520565b806001600160a01b031661070d6000546001600160a01b031690565b6001600160a01b0316636e296e456040518163ffffffff1660e01b815260040160206040518083038186803b15801561074557600080fd5b505afa158015610759573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077d919061156e565b6001600160a01b0316146107a35760405162461bcd60e51b81526004016100ea9061158b565b6001600160a01b038089166000908152600360209081526040808320938b16835292905220546107d4908590611659565b6001600160a01b03808a166000818152600360209081526040808320948d168352939052919091209190915561080b908686610d60565b856001600160a01b0316876001600160a01b0316896001600160a01b03167f3ceee06c1e37648fcbb6ed52e17b3e1f275a1f8c7b22a84b2b84732431e046b38888888860405161085e9493929190611670565b60405180910390a45050505050505050565b333b1561088f5760405162461bcd60e51b81526004016100ea90611047565b3233146108ae5760405162461bcd60e51b81526004016100ea90611070565b6108f033338585858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506102e092505050565b505050565b6000546001600160a01b03161561095d5760405162461bcd60e51b815260206004820152602660248201527f436f6e74726163742068617320616c7265616479206265656e20696e697469616044820152653634bd32b21760d11b60648201526084016100ea565b600080546001600160a01b039485166001600160a01b031991821617909155600180549385169382169390931790925560028054919093169116179055565b6001546001600160a01b03166109ba6000546001600160a01b031690565b6001600160a01b0316336001600160a01b0316146109ea5760405162461bcd60e51b81526004016100ea90611520565b806001600160a01b0316610a066000546001600160a01b031690565b6001600160a01b0316636e296e456040518163ffffffff1660e01b815260040160206040518083038186803b158015610a3e57600080fd5b505afa158015610a52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a76919061156e565b6001600160a01b031614610a9c5760405162461bcd60e51b81526004016100ea9061158b565b60025461063a906001600160a01b031673deaddeaddeaddeaddeaddeaddeaddeaddead000088888888886106a3565b600054604051633dbb202b60e01b81526001600160a01b0390911690633dbb202b90610aff908690859087906004016116a2565b600060405180830381600087803b158015610b1957600080fd5b505af1158015610652573d6000803e3d6000fd5b610b426001600160a01b038916873087610dc3565b6002546060906001600160a01b038a811691161415610c45576001600160a01b03881673deaddeaddeaddeaddeaddeaddeaddeaddead000014610bbe5760405162461bcd60e51b81526020600482015260146024820152732ab736b0ba31b432b2103a37b5b2b7103830b4b960611b60448201526064016100ea565b604051633315319d60e11b90610c0c90731a4b46696b2bb4794eb3d4c26f1c55f9170fa4c59073deaddeaddeaddeaddeaddeaddeaddeaddead0000908b908b908b908a908a906024016116dc565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091529050610ca0565b604051633315319d60e11b90610c6b908b908b908b908b908b908a908a906024016116dc565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915290505b600154610cb7906001600160a01b03168583610acb565b6001600160a01b03808a166000908152600360209081526040808320938c1683529290522054610ce890869061172d565b6001600160a01b03808b1660008181526003602090815260408083208e86168085529252918290209490945551918a1692917f718594027abd4eaed59f95162563e0cc6d0e8d5b86b1c7be8b1b0ac3343d039690610d4d908b908b908a908a90611670565b60405180910390a4505050505050505050565b6040516001600160a01b0383166024820152604481018290526108f090849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610dfb565b6040516001600160a01b038085166024830152831660448201526064810182905261069d9085906323b872dd60e01b90608401610d8c565b6000610e50826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610ecd9092919063ffffffff16565b8051909150156108f05780806020019051810190610e6e9190611745565b6108f05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016100ea565b6060610edc8484600085610ee6565b90505b9392505050565b606082471015610f475760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016100ea565b843b610f955760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100ea565b600080866001600160a01b03168587604051610fb191906115db565b60006040518083038185875af1925050503d8060008114610fee576040519150601f19603f3d011682016040523d82523d6000602084013e610ff3565b606091505b509150915061100382828661100e565b979650505050505050565b6060831561101d575081610edf565b82511561102d5782518084602001fd5b8160405162461bcd60e51b81526004016100ea9190611767565b6020808252600f908201526e4163636f756e74206e6f7420454f4160881b604082015260600190565b6020808252601b908201527f6d73672e73656e646572206973206e6f74207473206f726967696e0000000000604082015260600190565b6001600160a01b03811681146110bc57600080fd5b50565b60008083601f8401126110d157600080fd5b50813567ffffffffffffffff8111156110e957600080fd5b60208301915083602082850101111561110157600080fd5b9250929050565b60008060008060006080868803121561112057600080fd5b853561112b816110a7565b9450602086013561113b816110a7565b935060408601359250606086013567ffffffffffffffff81111561115e57600080fd5b61116a888289016110bf565b969995985093965092949392505050565b803563ffffffff8116811461118f57600080fd5b919050565b60008060008060008060a087890312156111ad57600080fd5b86356111b8816110a7565b955060208701356111c8816110a7565b9450604087013593506111dd6060880161117b565b9250608087013567ffffffffffffffff8111156111f957600080fd5b61120589828a016110bf565b979a9699509497509295939492505050565b600080600080600080600060c0888a03121561123257600080fd5b873561123d816110a7565b9650602088013561124d816110a7565b9550604088013561125d816110a7565b9450606088013593506112726080890161117b565b925060a088013567ffffffffffffffff81111561128e57600080fd5b61129a8a828b016110bf565b989b979a50959850939692959293505050565b600080604083850312156112c057600080fd5b82356112cb816110a7565b915060208301356112db816110a7565b809150509250929050565b600080600080606085870312156112fc57600080fd5b8435611307816110a7565b93506113156020860161117b565b9250604085013567ffffffffffffffff81111561133157600080fd5b61133d878288016110bf565b95989497509550505050565b600080600080600080600060c0888a03121561136457600080fd5b873561136f816110a7565b9650602088013561137f816110a7565b9550604088013561138f816110a7565b9450606088013561139f816110a7565b93506080880135925060a088013567ffffffffffffffff81111561128e57600080fd5b6000806000604084860312156113d757600080fd5b6113e08461117b565b9250602084013567ffffffffffffffff8111156113fc57600080fd5b611408868287016110bf565b9497909650939450505050565b60008060006060848603121561142a57600080fd5b8335611435816110a7565b92506020840135611445816110a7565b91506040840135611455816110a7565b809150509250925092565b60005b8381101561147b578181015183820152602001611463565b8381111561069d5750506000910152565b600081518084526114a4816020860160208601611460565b601f01601f19169290920160200192915050565b6001600160a01b03878116825286811660208301528581166040830152841660608201526080810183905260c060a082018190526000906114fb9083018461148c565b98975050505050505050565b828152604060208201526000610edc604083018461148c565b6020808252602e908201527f42564d5f58434841494e3a206d657373656e67657220636f6e7472616374207560408201526d1b985d5d1a195b9d1a58d85d195960921b606082015260800190565b60006020828403121561158057600080fd5b8151610edf816110a7565b60208082526030908201527f42564d5f58434841494e3a2077726f6e672073656e646572206f662063726f7360408201526f732d646f6d61696e206d65737361676560801b606082015260800190565b600082516115ed818460208701611460565b9190910192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b83815260406020820152600061163a6040830184866115f7565b95945050505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561166b5761166b611643565b500390565b60018060a01b03851681528360208201526060604082015260006116986060830184866115f7565b9695505050505050565b6001600160a01b03841681526060602082018190526000906116c69083018561148c565b905063ffffffff83166040830152949350505050565b6001600160a01b03888116825287811660208301528681166040830152851660608201526080810184905260c060a0820181905260009061172090830184866115f7565b9998505050505050505050565b6000821982111561174057611740611643565b500190565b60006020828403121561175757600080fd5b81518015158114610edf57600080fd5b602081526000610edf602083018461148c56fea26469706673582212207dfef70426523ad50b26b27047341335c749b4cdee6f2864c2839e0ef29631bb64736f6c63430008090033";

type L1StandardBridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1StandardBridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1StandardBridge__factory extends ContractFactory {
  constructor(...args: L1StandardBridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<L1StandardBridge> {
    return super.deploy(overrides || {}) as Promise<L1StandardBridge>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): L1StandardBridge {
    return super.attach(address) as L1StandardBridge;
  }
  override connect(signer: Signer): L1StandardBridge__factory {
    return super.connect(signer) as L1StandardBridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1StandardBridgeInterface {
    return new utils.Interface(_abi) as L1StandardBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1StandardBridge {
    return new Contract(address, _abi, signerOrProvider) as L1StandardBridge;
  }
}
