/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  L1ChugSplashProxy,
  L1ChugSplashProxyInterface,
} from "../../../contracts/chugsplash/L1ChugSplashProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "setCode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_value",
        type: "bytes32",
      },
    ],
    name: "setStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161081138038061081183398101604081905261002f9161005d565b610057817fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b5061008d565b60006020828403121561006f57600080fd5b81516001600160a01b038116811461008657600080fd5b9392505050565b6107758061009c6000396000f3fe60806040526004361061004a5760003560e01c806313af4035146100545780636c5d4ad014610074578063893d20e8146100945780639b0b0fda146100c5578063aaf10f42146100e5575b6100526100fa565b005b34801561006057600080fd5b5061005261006f366004610556565b6102e8565b34801561008057600080fd5b5061005261008f36600461059c565b61033b565b3480156100a057600080fd5b506100a961046d565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d157600080fd5b506100526100e036600461064d565b6104c6565b3480156100f157600080fd5b506100a9610508565b60006101126000805160206107008339815191525490565b60408051600481526024810182526020810180516001600160e01b0316635bca393160e11b179052905191925060009182916001600160a01b0385169161015991906106aa565b600060405180830381855afa9150503d8060008114610194576040519150601f19603f3d011682016040523d82523d6000602084013e610199565b606091505b50915091508180156101ac575080516020145b1561023c576000818060200190518101906101c791906106b6565b9050801561023a5760405162461bcd60e51b815260206004820152603560248201527f4c314368756753706c61736850726f78793a2073797374656d206973206375726044820152741c995b9d1b1e4818995a5b99c81d5c19dc98591959605a1b60648201526084015b60405180910390fd5b505b60006102546000805160206107208339815191525490565b90506001600160a01b0381166102c55760405162461bcd60e51b815260206004820152603060248201527f4c314368756753706c61736850726f78793a20696d706c656d656e746174696f60448201526f1b881a5cc81b9bdd081cd95d081e595d60821b6064820152608401610231565b3660008037600080366000845af43d6000803e806102e2573d6000fd5b503d6000f35b600080516020610700833981519152546001600160a01b0316336001600160a01b03161480610315575033155b15610333576103308160008051602061070083398151915255565b50565b6103306100fa565b600080516020610700833981519152546001600160a01b0316336001600160a01b03161480610368575033155b156103335760006103856000805160206107208339815191525490565b9050803f82516020840120141561039a575050565b6040516000906103c0906c600d380380600d6000396000f360981b9085906020016106cf565b604051602081830303815290604052905060008151602083016000f084516020860120909150813f146104515760405162461bcd60e51b815260206004820152603360248201527f4c314368756753706c61736850726f78793a20636f646520776173206e6f742060448201527231b7b93932b1ba363c903232b83637bcb2b21760691b6064820152608401610231565b6104678160008051602061072083398151915255565b50505050565b60006104856000805160206107008339815191525490565b6001600160a01b0316336001600160a01b031614806104a2575033155b156104bb57506000805160206107008339815191525490565b6104c36100fa565b90565b600080516020610700833981519152546001600160a01b0316336001600160a01b031614806104f3575033155b156104fc579055565b6105046100fa565b5050565b60006105206000805160206107008339815191525490565b6001600160a01b0316336001600160a01b0316148061053d575033155b156104bb57506000805160206107208339815191525490565b60006020828403121561056857600080fd5b81356001600160a01b038116811461057f57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156105ae57600080fd5b813567ffffffffffffffff808211156105c657600080fd5b818401915084601f8301126105da57600080fd5b8135818111156105ec576105ec610586565b604051601f8201601f19908116603f0116810190838211818310171561061457610614610586565b8160405282815287602084870101111561062d57600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000806040838503121561066057600080fd5b50508035926020909101359150565b6000815160005b818110156106905760208185018101518683015201610676565b8181111561069f576000828601525b509290920192915050565b600061057f828461066f565b6000602082840312156106c857600080fd5b5051919050565b72ffffffffffffffffffffffffffffffffffffff198316815260006106f7600d83018461066f565b94935050505056feb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbca2646970667358221220a2b9ac5ee1a01cc226ef31c36d5125ab2eb4383b5896a35053c0d882360df2ea64736f6c63430008090033";

type L1ChugSplashProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1ChugSplashProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1ChugSplashProxy__factory extends ContractFactory {
  constructor(...args: L1ChugSplashProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<L1ChugSplashProxy> {
    return super.deploy(_owner, overrides || {}) as Promise<L1ChugSplashProxy>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override attach(address: string): L1ChugSplashProxy {
    return super.attach(address) as L1ChugSplashProxy;
  }
  override connect(signer: Signer): L1ChugSplashProxy__factory {
    return super.connect(signer) as L1ChugSplashProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1ChugSplashProxyInterface {
    return new utils.Interface(_abi) as L1ChugSplashProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1ChugSplashProxy {
    return new Contract(address, _abi, signerOrProvider) as L1ChugSplashProxy;
  }
}
