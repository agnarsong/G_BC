/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  CanonicalTransactionChain,
  CanonicalTransactionChainInterface,
} from "../../../../contracts/L1/rollup/CanonicalTransactionChain";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_libAddressManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxTransactionGasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_l2GasDiscountDivisor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_enqueueGasCost",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "l2GasDiscountDivisor",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "enqueueGasCost",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "enqueueL2GasPrepaid",
        type: "uint256",
      },
    ],
    name: "L2GasParamsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_startingQueueIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_numQueueElements",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalElements",
        type: "uint256",
      },
    ],
    name: "QueueBatchAppended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_startingQueueIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_numQueueElements",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_totalElements",
        type: "uint256",
      },
    ],
    name: "SequencerBatchAppended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_batchIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_batchRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_batchSize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_prevTotalElements",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_extraData",
        type: "bytes",
      },
    ],
    name: "TransactionBatchAppended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l1TxOrigin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_queueIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "TransactionEnqueued",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_ROLLUP_TX_SIZE",
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
    name: "MIN_ROLLUP_TX_GAS",
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
    name: "appendSequencerBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "batches",
    outputs: [
      {
        internalType: "contract IChainStorageContainer",
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
        name: "_target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gasLimit",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "enqueue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enqueueGasCost",
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
    name: "enqueueL2GasPrepaid",
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
    name: "getLastBlockNumber",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastTimestamp",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextQueueIndex",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumPendingQueueElements",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getQueueElement",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionHash",
            type: "bytes32",
          },
          {
            internalType: "uint40",
            name: "timestamp",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "blockNumber",
            type: "uint40",
          },
        ],
        internalType: "struct Lib_BVMCodec.QueueElement",
        name: "_element",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getQueueLength",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalBatches",
    outputs: [
      {
        internalType: "uint256",
        name: "_totalBatches",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalElements",
    outputs: [
      {
        internalType: "uint256",
        name: "_totalElements",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "l2GasDiscountDivisor",
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
    name: "libAddressManager",
    outputs: [
      {
        internalType: "contract Lib_AddressManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTransactionGasLimit",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "resolve",
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
        internalType: "uint256",
        name: "_l2GasDiscountDivisor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_enqueueGasCost",
        type: "uint256",
      },
    ],
    name: "setGasParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516116c03803806116c083398101604081905261002f91610070565b600080546001600160a01b0319166001600160a01b03861617905560048390556002829055600181905561006381836100bb565b600355506100e892505050565b6000806000806080858703121561008657600080fd5b84516001600160a01b038116811461009d57600080fd5b60208601516040870151606090970151919890975090945092505050565b60008160001904831182151516156100e357634e487b7160e01b600052601160045260246000fd5b500290565b6115c9806100f76000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063876ed5cb116100ad578063d0f8934411610071578063d0f8934414610256578063e561dddc1461025e578063e654b1fb14610266578063edcc4a451461026f578063f722b41a1461028257600080fd5b8063876ed5cb1461022b5780638d38c6c114610234578063b8f770051461023d578063ccf987c814610245578063cfdf677e1461024e57600080fd5b80635ae6256d116100f45780635ae6256d146101ed5780636fee07e0146101f557806378f4b2f21461020a5780637a167a8a146102145780637aa63a861461022357600080fd5b80630b3dfa9714610131578063299ca4781461014d5780632a7f18be1461017857806337899770146101bc578063461a4478146101da575b600080fd5b61013a60035481565b6040519081526020015b60405180910390f35b600054610160906001600160a01b031681565b6040516001600160a01b039091168152602001610144565b61018b610186366004611101565b61028a565b604080518251815260208084015164ffffffffff908116918301919091529282015190921690820152606001610144565b6101c4610308565b60405164ffffffffff9091168152602001610144565b6101606101e83660046111a6565b61031c565b6101c46103a3565b61020861020336600461120f565b6103b7565b005b61013a620186a081565b60055464ffffffffff166101c4565b61013a61073e565b61013a61c35081565b61013a60045481565b6006546101c4565b61013a60025481565b610160610759565b610208610781565b61013a610bab565b61013a60015481565b61020861027d36600461127c565b610c25565b6101c4610d6e565b6040805160608101825260008082526020820181905291810191909152600682815481106102ba576102ba61129e565b6000918252602091829020604080516060810182526002909302909101805483526001015464ffffffffff808216948401949094526501000000000090049092169181019190915292915050565b600080610313610d8a565b50949350505050565b6000805460405163bf40fac160e01b81526001600160a01b039091169063bf40fac19061034d908590600401611301565b60206040518083038186803b15801561036557600080fd5b505afa158015610379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039d919061131b565b92915050565b6000806103ae610d8a565b95945050505050565b61c350815111156104355760405162461bcd60e51b815260206004820152603d60248201527f5472616e73616374696f6e20646174612073697a652065786365656473206d6160448201527f78696d756d20666f7220726f6c6c7570207472616e73616374696f6e2e00000060648201526084015b60405180910390fd5b6004548211156104ad5760405162461bcd60e51b815260206004820152603d60248201527f5472616e73616374696f6e20676173206c696d69742065786365656473206d6160448201527f78696d756d20666f7220726f6c6c7570207472616e73616374696f6e2e000000606482015260840161042c565b620186a08210156105125760405162461bcd60e51b815260206004820152602960248201527f5472616e73616374696f6e20676173206c696d697420746f6f206c6f7720746f6044820152681032b738bab2bab29760b91b606482015260840161042c565b6003548211156105ce5760006002546003548461052f919061134e565b6105399190611365565b905060005a90508181116105a35760405162461bcd60e51b815260206004820152602b60248201527f496e73756666696369656e742067617320666f72204c322072617465206c696d60448201526a34ba34b73390313ab9371760a91b606482015260840161042c565b60005b825a6105b2908461134e565b10156105ca57806105c281611387565b9150506105a6565b5050505b6000333214156105df5750336105f8565b5033731111000000000000000000000000000000001111015b60008185858560405160200161061194939291906113a2565b60408051601f19818403018152828252805160209182012060608401835280845264ffffffffff42811692850192835243811693850193845260068054600181810183556000838152975160029092027ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f81019290925594517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40909101805496518416650100000000000269ffffffffffffffffffff19909716919093161794909417905591549193506106e49161134e565b905080866001600160a01b0316846001600160a01b03167f4b388aecf9fa6cc92253704e5975a6129a4f735bdbd99567df4ed0094ee4ceb588884260405161072e939291906113df565b60405180910390a4505050505050565b600080610749610d8a565b50505064ffffffffff1692915050565b600061077c6040518060600160405280602181526020016115736021913961031c565b905090565b60043560d81c60093560e890811c90600c35901c61079d61073e565b8364ffffffffff16146108185760405162461bcd60e51b815260206004820152603d60248201527f41637475616c20626174636820737461727420696e64657820646f6573206e6f60448201527f74206d6174636820657870656374656420737461727420696e6465782e000000606482015260840161042c565b6108466040518060400160405280600d81526020016c212b26afa9b2b8bab2b731b2b960991b81525061031c565b6001600160a01b0316336001600160a01b0316146108bc5760405162461bcd60e51b815260206004820152602d60248201527f46756e6374696f6e2063616e206f6e6c792062652063616c6c6564206279207460448201526c34329029b2b8bab2b731b2b91760991b606482015260840161042c565b60006108ce62ffffff83166010611408565b6108d990600f611427565b905064ffffffffff811636101561093d5760405162461bcd60e51b815260206004820152602260248201527f4e6f7420656e6f756768204261746368436f6e74657874732070726f76696465604482015261321760f11b606482015260840161042c565b6005546040805160808101825260008082526020820181905291810182905260608101829052909164ffffffffff169060005b8562ffffff168163ffffffff1610156109ce5760006109948263ffffffff16610e38565b80519093508391506109a6908661143f565b94508260200151846109b89190611467565b93505080806109c690611487565b915050610970565b5060065464ffffffffff83161115610a595760405162461bcd60e51b815260206004820152604260248201527f417474656d7074656420746f20617070656e64206d6f726520656c656d656e7460448201527f73207468616e2061726520617661696c61626c6520696e207468652071756575606482015261329760f11b608482015260a40161042c565b6000610a6a8462ffffff89166114ab565b63ffffffff169050600080836020015160001415610a9357505060408201516060830151610b04565b60006006610aa26001886114d0565b64ffffffffff1681548110610ab957610ab961129e565b6000918252602091829020604080516060810182526002909302909101805483526001015464ffffffffff808216948401859052650100000000009091041691018190529093509150505b610b28610b1260014361134e565b408a62ffffff168564ffffffffff168585610ebf565b7f602f1aeac0ca2e7a13e281a9ef0ad7838542712ce16780fa2ecffd351f05f899610b5384876114d0565b84610b5c61073e565b6040805164ffffffffff94851681529390921660208401529082015260600160405180910390a150506005805464ffffffffff191664ffffffffff949094169390931790925550505050505050565b6000610bb5610759565b6001600160a01b0316631f7b6d326040518163ffffffff1660e01b815260040160206040518083038186803b158015610bed57600080fd5b505afa158015610c01573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077c91906114ee565b60008054906101000a90046001600160a01b03166001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c7157600080fd5b505afa158015610c85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca9919061131b565b6001600160a01b0316336001600160a01b031614610d095760405162461bcd60e51b815260206004820181905260248201527f4f6e6c792063616c6c61626c6520627920746865204275726e2041646d696e2e604482015260640161042c565b60018190556002829055610d1d8183611408565b60038190556002546001546040805192835260208301919091528101919091527fc6ed75e96b8b18b71edc1a6e82a9d677f8268c774a262c624eeb2cf0a8b3e07e9060600160405180910390a15050565b60055460065460009161077c9164ffffffffff909116906114d0565b6000806000806000610d9a610759565b6001600160a01b031663ccf8f9696040518163ffffffff1660e01b815260040160206040518083038186803b158015610dd257600080fd5b505afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a9190611507565b64ffffffffff602882901c811697605083901c82169750607883901c8216965060a09290921c169350915050565b610e636040518060800160405280600081526020016000815260200160008152602001600081525090565b6000610e70601084611408565b610e7b90600f611427565b60408051608081018252823560e890811c82526003840135901c6020820152600683013560d890811c92820192909252600b90920135901c60608201529392505050565b6000610ec9610759565b9050600080610ed6610d8a565b50509150915060006040518060c00160405280856001600160a01b0316631f7b6d326040518163ffffffff1660e01b815260040160206040518083038186803b158015610f2257600080fd5b505afa158015610f36573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5a91906114ee565b81526020018a81526020018981526020018464ffffffffff16815260200160405180602001604052806000815250815260200160405180602001604052806000815250815250905080600001517fa47512905cf577d4cfae2efc3df461008ddb7234e91ce7f4eefcdb51e1077ccf82602001518360400151846060015185608001518660a00151604051610ff295949392919061152f565b60405180910390a26000611005826110b8565b9050600061104083604001518661101c9190611467565b6110268b87611467565b602890811b9190911760508b901b1760788a901b17901b90565b60405163080549db60e21b81526004810184905264ffffffffff19821660248201529091506001600160a01b03871690632015276c90604401600060405180830381600087803b15801561109357600080fd5b505af11580156110a7573d6000803e3d6000fd5b505050505050505050505050505050565b6020808201516040808401516060850151608086015160a087015193516000966110e49695910161152f565b604051602081830303815290604052805190602001209050919050565b60006020828403121561111357600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561114b5761114b61111a565b604051601f8501601f19908116603f011681019082821181831017156111735761117361111a565b8160405280935085815286868601111561118c57600080fd5b858560208301376000602087830101525050509392505050565b6000602082840312156111b857600080fd5b813567ffffffffffffffff8111156111cf57600080fd5b8201601f810184136111e057600080fd5b6111ef84823560208401611130565b949350505050565b6001600160a01b038116811461120c57600080fd5b50565b60008060006060848603121561122457600080fd5b833561122f816111f7565b925060208401359150604084013567ffffffffffffffff81111561125257600080fd5b8401601f8101861361126357600080fd5b61127286823560208401611130565b9150509250925092565b6000806040838503121561128f57600080fd5b50508035926020909101359150565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b818110156112da576020818501810151868301820152016112be565b818111156112ec576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061131460208301846112b4565b9392505050565b60006020828403121561132d57600080fd5b8151611314816111f7565b634e487b7160e01b600052601160045260246000fd5b60008282101561136057611360611338565b500390565b60008261138257634e487b7160e01b600052601260045260246000fd5b500490565b600060001982141561139b5761139b611338565b5060010190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906113d5908301846112b4565b9695505050505050565b8381526060602082015260006113f860608301856112b4565b9050826040830152949350505050565b600081600019048311821515161561142257611422611338565b500290565b6000821982111561143a5761143a611338565b500190565b600063ffffffff80831681851680830382111561145e5761145e611338565b01949350505050565b600064ffffffffff80831681851680830382111561145e5761145e611338565b600063ffffffff808316818114156114a1576114a1611338565b6001019392505050565b600063ffffffff838116908316818110156114c8576114c8611338565b039392505050565b600064ffffffffff838116908316818110156114c8576114c8611338565b60006020828403121561150057600080fd5b5051919050565b60006020828403121561151957600080fd5b815164ffffffffff198116811461131457600080fd5b85815284602082015283604082015260a06060820152600061155460a08301856112b4565b828103608084015261156681856112b4565b9897505050505050505056fe436861696e53746f72616765436f6e7461696e65722d4354432d62617463686573a26469706673582212200926ead08b18b4568252ea9064850956a30e292ef2908ebbb841dd73b4cccb2064736f6c63430008090033";

type CanonicalTransactionChainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CanonicalTransactionChainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CanonicalTransactionChain__factory extends ContractFactory {
  constructor(...args: CanonicalTransactionChainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _libAddressManager: PromiseOrValue<string>,
    _maxTransactionGasLimit: PromiseOrValue<BigNumberish>,
    _l2GasDiscountDivisor: PromiseOrValue<BigNumberish>,
    _enqueueGasCost: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CanonicalTransactionChain> {
    return super.deploy(
      _libAddressManager,
      _maxTransactionGasLimit,
      _l2GasDiscountDivisor,
      _enqueueGasCost,
      overrides || {}
    ) as Promise<CanonicalTransactionChain>;
  }
  override getDeployTransaction(
    _libAddressManager: PromiseOrValue<string>,
    _maxTransactionGasLimit: PromiseOrValue<BigNumberish>,
    _l2GasDiscountDivisor: PromiseOrValue<BigNumberish>,
    _enqueueGasCost: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _libAddressManager,
      _maxTransactionGasLimit,
      _l2GasDiscountDivisor,
      _enqueueGasCost,
      overrides || {}
    );
  }
  override attach(address: string): CanonicalTransactionChain {
    return super.attach(address) as CanonicalTransactionChain;
  }
  override connect(signer: Signer): CanonicalTransactionChain__factory {
    return super.connect(signer) as CanonicalTransactionChain__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CanonicalTransactionChainInterface {
    return new utils.Interface(_abi) as CanonicalTransactionChainInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CanonicalTransactionChain {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CanonicalTransactionChain;
  }
}