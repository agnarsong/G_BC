/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  WBITDeployer,
  WBITDeployerInterface,
} from "../../../../../contracts/L2/tokens/wbit.sol/WBITDeployer";

const _abi = [
  {
    inputs: [],
    name: "calculateAddr",
    outputs: [
      {
        internalType: "address",
        name: "predictedAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611060806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636c9ba9721461003b578063775c300c1461005f575b600080fd5b610043610067565b6040516001600160a01b03909116815260200160405180910390f35b610043610135565b6000806040516020016100859064574249543960d81b815260050190565b60405160208183030381529060405280519060200120905060ff60f81b3082604051806020016100b4906101a2565b6020820181038252601f19601f820116604052508051906020012060405160200161011694939291906001600160f81b031994909416845260609290921b6bffffffffffffffffffffffff191660018401526015830152603582015260550190565b6040516020818303038152906040528051906020012060001c91505090565b6000806040516020016101539064574249543960d81b815260050190565b60405160208183030381529060405280519060200120905060008160405161017a906101a2565b8190604051809103906000f590508015801561019a573d6000803e3d6000fd5b509392505050565b610e7b806101b08339019056fe60806040523480156200001157600080fd5b50604080518082018252600b81526a15dc985c1c19590810925560aa1b60208083019182528351808501909452600484526315d0925560e21b908401528151919291620000619160039162000080565b5080516200007790600490602084019062000080565b50505062000163565b8280546200008e9062000126565b90600052602060002090601f016020900481019282620000b25760008555620000fd565b82601f10620000cd57805160ff1916838001178555620000fd565b82800160010185558215620000fd579182015b82811115620000fd578251825591602001919060010190620000e0565b506200010b9291506200010f565b5090565b5b808211156200010b576000815560010162000110565b600181811c908216806200013b57607f821691505b602082108114156200015d57634e487b7160e01b600052602260045260246000fd5b50919050565b610d0880620001736000396000f3fe6080604052600436106100c65760003560e01c8063395093511161007f578063a457c2d711610059578063a457c2d71461021e578063a9059cbb1461023e578063d0e30db0146100d5578063dd62ed3e1461025e576100d5565b806339509351146101b357806370a08231146101d357806395d89b4114610209576100d5565b806306fdde03146100dd578063095ea7b31461010857806318160ddd1461013857806323b872dd146101575780632e1a7d4d14610177578063313ce56714610197576100d5565b366100d5576100d36102a4565b005b6100d36102a4565b3480156100e957600080fd5b506100f26102e5565b6040516100ff9190610b0d565b60405180910390f35b34801561011457600080fd5b50610128610123366004610b7e565b610377565b60405190151581526020016100ff565b34801561014457600080fd5b506002545b6040519081526020016100ff565b34801561016357600080fd5b50610128610172366004610ba8565b61038d565b34801561018357600080fd5b506100d3610192366004610be4565b61043c565b3480156101a357600080fd5b50604051601281526020016100ff565b3480156101bf57600080fd5b506101286101ce366004610b7e565b610503565b3480156101df57600080fd5b506101496101ee366004610bfd565b6001600160a01b031660009081526020819052604090205490565b34801561021557600080fd5b506100f261053f565b34801561022a57600080fd5b50610128610239366004610b7e565b61054e565b34801561024a57600080fd5b50610128610259366004610b7e565b6105e7565b34801561026a57600080fd5b50610149610279366004610c1f565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6102ae33346105f4565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b6060600380546102f490610c52565b80601f016020809104026020016040519081016040528092919081815260200182805461032090610c52565b801561036d5780601f106103425761010080835404028352916020019161036d565b820191906000526020600020905b81548152906001019060200180831161035057829003601f168201915b5050505050905090565b60006103843384846106d3565b50600192915050565b600061039a8484846107f8565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156104245760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b61043185338584036106d3565b506001949350505050565b336000908152602081905260409020548111156104935760405162461bcd60e51b815260206004820152601560248201527434b739bab33334b1b4b2b73a103130b630b731b29760591b604482015260640161041b565b61049d33826109c7565b604051339082156108fc029083906000818181858888f193505050501580156104ca573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161038491859061053a908690610ca3565b6106d3565b6060600480546102f490610c52565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105d05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161041b565b6105dd33858584036106d3565b5060019392505050565b60006103843384846107f8565b6001600160a01b03821661064a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161041b565b806002600082825461065c9190610ca3565b90915550506001600160a01b03821660009081526020819052604081208054839290610689908490610ca3565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0383166107355760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161041b565b6001600160a01b0382166107965760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161041b565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03831661085c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161041b565b6001600160a01b0382166108be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161041b565b6001600160a01b038316600090815260208190526040902054818110156109365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161041b565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061096d908490610ca3565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109b991815260200190565b60405180910390a350505050565b6001600160a01b038216610a275760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161041b565b6001600160a01b03821660009081526020819052604090205481811015610a9b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161041b565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610aca908490610cbb565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016107eb565b600060208083528351808285015260005b81811015610b3a57858101830151858201604001528201610b1e565b81811115610b4c576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610b7957600080fd5b919050565b60008060408385031215610b9157600080fd5b610b9a83610b62565b946020939093013593505050565b600080600060608486031215610bbd57600080fd5b610bc684610b62565b9250610bd460208501610b62565b9150604084013590509250925092565b600060208284031215610bf657600080fd5b5035919050565b600060208284031215610c0f57600080fd5b610c1882610b62565b9392505050565b60008060408385031215610c3257600080fd5b610c3b83610b62565b9150610c4960208401610b62565b90509250929050565b600181811c90821680610c6657607f821691505b60208210811415610c8757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610cb657610cb6610c8d565b500190565b600082821015610ccd57610ccd610c8d565b50039056fea26469706673582212208b605ef908eae2d40a1a3b62a0afeabee118d5e8de13b062c97cd444df59fd9964736f6c63430008090033a2646970667358221220b652e15e2a89390f5555f950c1096801cd9e73bba5a32d23da0e35bbc513287364736f6c63430008090033";

type WBITDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WBITDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WBITDeployer__factory extends ContractFactory {
  constructor(...args: WBITDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WBITDeployer> {
    return super.deploy(overrides || {}) as Promise<WBITDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WBITDeployer {
    return super.attach(address) as WBITDeployer;
  }
  override connect(signer: Signer): WBITDeployer__factory {
    return super.connect(signer) as WBITDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WBITDeployerInterface {
    return new utils.Interface(_abi) as WBITDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WBITDeployer {
    return new Contract(address, _abi, signerOrProvider) as WBITDeployer;
  }
}
