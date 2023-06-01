/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  TestLib_MerkleTree,
  TestLib_MerkleTreeInterface,
} from "../../../../contracts/test-libraries/utils/TestLib_MerkleTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_elements",
        type: "bytes32[]",
      },
    ],
    name: "getMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
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
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "_siblings",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_totalLeaves",
        type: "uint256",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b05806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634869bfb61461003b5780637b0467a014610061575b600080fd5b61004e61004936600461095d565b610084565b6040519081526020015b60405180910390f35b61007461006f36600461099a565b610095565b6040519015158152602001610058565b600061008f826100ae565b92915050565b60006100a4868686868661058e565b9695505050505050565b6000808251116101225760405162461bcd60e51b815260206004820152603460248201527f4c69625f4d65726b6c65547265653a204d7573742070726f76696465206174206044820152733632b0b9ba1037b732903632b0b3103430b9b41760611b60648201526084015b60405180910390fd5b81516001141561014e578160008151811061013f5761013f6109fc565b60200260200101519050919050565b60408051610200810182527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56381527f633dc4d7da7256660a892f8f1604a44b5432649cc8ec5cb3ced4c4e6ac94dd1d60208201527f890740a8eb06ce9be422cb8da5cdafc2b58c0a5e24036c578de2a433c828ff7d818301527f3b8ec09e026fdc305365dfc94e189a81b38c7597b3d941c279f042e8206e0bd86060808301919091527fecd50eee38e386bd62be9bedb990706951b65fe053bd9d8a521af753d139e2da60808301527fdefff6d330bb5403f63b14f33b578274160de3a50df4efecf0e0db73bcdd3da560a08301527f617bdd11f7c0a11f49db22f629387a12da7596f9d1704d7465177c63d88ec7d760c08301527f292c23a9aa1d8bea7e2435e555a4a60e379a5a35f3f452bae60121073fb6eead60e08301527fe1cea92ed99acdcb045a6726b2f87107e8a61620a232cf4d7d5b5766b3952e106101008301527f7ad66c0a68c72cb89e4fb4303841966e4062a76ab97451e3b9fb526a5ceb7f826101208301527fe026cc5a4aed3c22a58cbd3d2ac754c9352c5436f638042dca99034e836365166101408301527f3d04cffd8b46a874edf5cfae63077de85f849a660426697b06a829c70dd1409c6101608301527fad676aa337a485e4728a0b240d92b3ef7b3c372d06d189322bfd5f61f1e7203e6101808301527fa2fca4a49658f9fab7aa63289c91b7c7b6c832a6d0e69334ff5b0a3483d09dab6101a08301527f4ebfd9cd7bca2505f7bef59cc1c12ecc708fff26ae4af19abe852afe9e20c8626101c08301527f2def10d13dd169f550f578bda343d9717a138562e0093b380a1120789d53cf106101e083015282518381529081018352909160009190602082018180368337505085519192506000918291508180805b6001841115610564576103ff600285610a3e565b915061040c600285610a52565b600114905060005b828110156104b8578a610428826002610a66565b81518110610438576104386109fc565b602002602001015196508a8160026104509190610a66565b61045b906001610a85565b8151811061046b5761046b6109fc565b6020026020010151955086602089015285604089015287805190602001208b828151811061049b5761049b6109fc565b6020908102919091010152806104b081610a9d565b915050610414565b50801561053457896104cb600186610ab8565b815181106104db576104db6109fc565b602002602001015195508783601081106104f7576104f76109fc565b602002015160001b945085602088015284604088015286805190602001208a8381518110610527576105276109fc565b6020026020010181815250505b80610540576000610543565b60015b6105509060ff1683610a85565b93508261055c81610a9d565b9350506103eb565b89600081518110610577576105776109fc565b602002602001015198505050505050505050919050565b60008082116106055760405162461bcd60e51b815260206004820152603760248201527f4c69625f4d65726b6c65547265653a20546f74616c206c6561766573206d757360448201527f742062652067726561746572207468616e207a65726f2e0000000000000000006064820152608401610119565b8184106106605760405162461bcd60e51b8152602060048201526024808201527f4c69625f4d65726b6c65547265653a20496e646578206f7574206f6620626f756044820152633732399760e11b6064820152608401610119565b610669826107d3565b8351146106f45760405162461bcd60e51b815260206004820152604d60248201527f4c69625f4d65726b6c65547265653a20546f74616c207369626c696e6773206460448201527f6f6573206e6f7420636f72726563746c7920636f72726573706f6e6420746f2060648201526c3a37ba30b6103632b0bb32b99760991b608482015260a401610119565b8460005b84518110156107c657856001166001141561075f5784818151811061071f5761071f6109fc565b602002602001015182604051602001610742929190918252602082015260400190565b6040516020818303038152906040528051906020012091506107ad565b81858281518110610772576107726109fc565b6020026020010151604051602001610794929190918252602082015260400190565b6040516020818303038152906040528051906020012091505b60019590951c94806107be81610a9d565b9150506106f8565b5090951495945050505050565b600080821161083d5760405162461bcd60e51b815260206004820152603060248201527f4c69625f4d65726b6c65547265653a2043616e6e6f7420636f6d70757465206360448201526f32b4b6143637b3af99149037b310181760811b6064820152608401610119565b816001141561084e57506000919050565b81600060805b6001811061088c578061086a600180831b610ab8565b901b8316156108845761087d8183610a85565b92811c9291505b60011c610854565b506001811b84146108a5576108a2600182610a85565b90505b9392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126108d357600080fd5b8135602067ffffffffffffffff808311156108f0576108f06108ac565b8260051b604051601f19603f83011681018181108482111715610915576109156108ac565b60405293845285810183019383810192508785111561093357600080fd5b83870191505b8482101561095257813583529183019190830190610939565b979650505050505050565b60006020828403121561096f57600080fd5b813567ffffffffffffffff81111561098657600080fd5b610992848285016108c2565b949350505050565b600080600080600060a086880312156109b257600080fd5b853594506020860135935060408601359250606086013567ffffffffffffffff8111156109de57600080fd5b6109ea888289016108c2565b95989497509295608001359392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082610a4d57610a4d610a12565b500490565b600082610a6157610a61610a12565b500690565b6000816000190483118215151615610a8057610a80610a28565b500290565b60008219821115610a9857610a98610a28565b500190565b6000600019821415610ab157610ab1610a28565b5060010190565b600082821015610aca57610aca610a28565b50039056fea264697066735822122011743e05c6ff3e6a27e90de35ae39c530f241e17ebcd23d8b4fd1695c55ae6d064736f6c63430008090033";

type TestLib_MerkleTreeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestLib_MerkleTreeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestLib_MerkleTree__factory extends ContractFactory {
  constructor(...args: TestLib_MerkleTreeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestLib_MerkleTree> {
    return super.deploy(overrides || {}) as Promise<TestLib_MerkleTree>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestLib_MerkleTree {
    return super.attach(address) as TestLib_MerkleTree;
  }
  override connect(signer: Signer): TestLib_MerkleTree__factory {
    return super.connect(signer) as TestLib_MerkleTree__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestLib_MerkleTreeInterface {
    return new utils.Interface(_abi) as TestLib_MerkleTreeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLib_MerkleTree {
    return new Contract(address, _abi, signerOrProvider) as TestLib_MerkleTree;
  }
}
