/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  L1MantleToken,
  L1MantleTokenInterface,
} from "../../../../../contracts/L1/local/TestMantleToken.sol/L1MantleToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MantleToken_ImproperlyInitialized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maximumAmount",
        type: "uint256",
      },
    ],
    name: "MantleToken_MintAmountTooLarge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "numerator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maximumNumerator",
        type: "uint256",
      },
    ],
    name: "MantleToken_MintCapNumeratorTooLarge",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextMintTimestamp",
        type: "uint256",
      },
    ],
    name: "MantleToken_NextMintTimestampNotElapsed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousMintCapNumerator",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMintCapNumerator",
        type: "uint256",
      },
    ],
    name: "MintCapNumeratorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    name: "MINT_CAP_DENOMINATOR",
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
    name: "MINT_CAP_MAX_NUMERATOR",
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
    name: "MIN_MINT_INTERVAL",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20VotesUpgradeable.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
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
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintCapNumerator",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextMint",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintCapNumerator",
        type: "uint256",
      },
    ],
    name: "setMintCapNumerator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405260c86080523480156200001657600080fd5b506200002162000027565b620000e9565b600054610100900460ff1615620000945760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e7576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6080516125b062000113600039600081816104a9015281816105cf015261060b01526125b06000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c806379cc679011610125578063a9f8ad04116100ad578063da35a26f1161007c578063da35a26f1461047e578063dd62ed3e14610491578063e40172b3146104a4578063f1127ed8146104cb578063f2fde38b1461050857600080fd5b8063a9f8ad0414610443578063c3cda5201461044e578063cf66544314610461578063d505accf1461046b57600080fd5b80638e539e8c116100f45780638e539e8c146103ef57806395d89b41146104025780639ab24eb01461040a578063a457c2d71461041d578063a9059cbb1461043057600080fd5b806379cc6790146103af5780637ecebe00146103c257806389110e5d146103d55780638da5cb5b146103de57600080fd5b80633a46b1a8116101a85780635c19a95c116101775780635c19a95c146103395780636561e2111461034c5780636fcfff451461035657806370a082311461037e578063715018a6146103a757600080fd5b80633a46b1a8146102bb57806340c10f19146102ce57806342966c68146102e1578063587cde1e146102f457600080fd5b806323b872dd116101e457806323b872dd1461027e578063313ce567146102915780633644e515146102a057806339509351146102a857600080fd5b806306fdde0314610216578063095ea7b31461023457806318160ddd146102575780631ae7f5f314610269575b600080fd5b61021e61051b565b60405161022b91906121d4565b60405180910390f35b610247610242366004612245565b6105ad565b604051901515815260200161022b565b6035545b60405190815260200161022b565b61027c61027736600461226f565b6105c5565b005b61024761028c366004612288565b610684565b6040516012815260200161022b565b61025b6106a8565b6102476102b6366004612245565b6106b7565b61025b6102c9366004612245565b6106d9565b61027c6102dc366004612245565b610754565b61027c6102ef36600461226f565b610802565b6103216103023660046122c4565b6001600160a01b03908116600090815261013060205260409020541690565b6040516001600160a01b03909116815260200161022b565b61027c6103473660046122c4565b61080f565b61025b6101625481565b6103696103643660046122c4565b610819565b60405163ffffffff909116815260200161022b565b61025b61038c3660046122c4565b6001600160a01b031660009081526033602052604090205490565b61027c610842565b61027c6103bd366004612245565b610856565b61025b6103d03660046122c4565b61086f565b61025b61271081565b6097546001600160a01b0316610321565b61025b6103fd36600461226f565b61088d565b61021e6108ea565b61025b6104183660046122c4565b6108f9565b61024761042b366004612245565b610982565b61024761043e366004612245565b6109fd565b61025b6301e1338081565b61027c61045c3660046122f0565b610a0b565b61025b6101635481565b61027c610479366004612348565b610b41565b61027c61048c3660046123b2565b610ca5565b61025b61049f3660046123de565b610e88565b61025b7f000000000000000000000000000000000000000000000000000000000000000081565b6104de6104d9366004612408565b610eb3565b60408051825163ffffffff1681526020928301516001600160e01b0316928101929092520161022b565b61027c6105163660046122c4565b610f38565b60606036805461052a90612448565b80601f016020809104026020016040519081016040528092919081815260200182805461055690612448565b80156105a35780601f10610578576101008083540402835291602001916105a3565b820191906000526020600020905b81548152906001019060200180831161058657829003601f168201915b5050505050905090565b6000336105bb818585610fae565b5060019392505050565b6105cd6110d2565b7f000000000000000000000000000000000000000000000000000000000000000081111561063c57604051632ea5b1a360e21b8152600481018290527f000000000000000000000000000000000000000000000000000000000000000060248201526044015b60405180910390fd5b610162805490829055604080518281526020810184905233917fe2ee754bdb1a4ec4a5ecd3f810e4e7ca817cbbc379c89ff4e7a8b4dc6841a766910160405180910390a25050565b60003361069285828561112c565b61069d8585856111a6565b506001949350505050565b60006106b261137a565b905090565b6000336105bb8185856106ca8383610e88565b6106d49190612493565b610fae565b600043821061072a5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e6564006044820152606401610633565b6001600160a01b03831660009081526101316020526040902061074d90836113f5565b9392505050565b61075c6110d2565b60006127106101625461076e60355490565b61077891906124ab565b61078291906124ca565b9050808211156107af57604051635d84733f60e01b81526004810183905260248101829052604401610633565b610163544210156107e1576101635460405163750a55e960e11b81524260048201526024810191909152604401610633565b6107ef6301e1338042612493565b610163556107fd83836114b2565b505050565b61080c33826114bc565b50565b61080c33826114c6565b6001600160a01b0381166000908152610131602052604081205461083c90611541565b92915050565b61084a6110d2565b61085460006115aa565b565b61086182338361112c565b61086b82826114bc565b5050565b6001600160a01b038116600090815260fd602052604081205461083c565b60004382106108de5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e6564006044820152606401610633565b61083c610132836113f5565b60606037805461052a90612448565b6001600160a01b03811660009081526101316020526040812054801561096f576001600160a01b03831660009081526101316020526040902061093d6001836124ec565b8154811061094d5761094d612503565b60009182526020909120015464010000000090046001600160e01b0316610972565b60005b6001600160e01b03169392505050565b600033816109908286610e88565b9050838110156109f05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610633565b61069d8286868403610fae565b6000336105bb8185856111a6565b83421115610a5b5760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e617475726520657870697265640000006044820152606401610633565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610ad590610acd9060a001604051602081830303815290604052805190602001206115fc565b85858561164a565b9050610ae081611672565b8614610b2e5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e6365000000000000006044820152606401610633565b610b3881886114c6565b50505050505050565b83421115610b915760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610633565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610bc08c611672565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c1b826115fc565b90506000610c2b8287878761164a565b9050896001600160a01b0316816001600160a01b031614610c8e5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610633565b610c998a8a8a610fae565b50505050505050505050565b600054610100900460ff1615808015610cc55750600054600160ff909116105b80610cdf5750303b158015610cdf575060005460ff166001145b610d425760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610633565b6000805460ff191660011790558015610d65576000805461ff0019166101001790555b821580610d7957506001600160a01b038216155b15610d9757604051637abee13b60e11b815260040160405180910390fd5b610dda604051806040016040528060068152602001654d616e746c6560d01b8152506040518060400160405280600381526020016213539560ea1b81525061169a565b610de26116cb565b610dea6116f2565b610e11604051806040016040528060068152602001654d616e746c6560d01b815250611721565b610e196116cb565b610e2382846114b2565b610e316301e1338042612493565b61016355610e3e826115aa565b80156107fd576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a1505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b038316600090815261013160205260409020805463ffffffff8416908110610ef857610ef8612503565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b610f406110d2565b6001600160a01b038116610fa55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610633565b61080c816115aa565b6001600160a01b0383166110105760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610633565b6001600160a01b0382166110715760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610633565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6097546001600160a01b031633146108545760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610633565b60006111388484610e88565b905060001981146111a057818110156111935760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610633565b6111a08484848403610fae565b50505050565b6001600160a01b03831661120a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610633565b6001600160a01b03821661126c5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610633565b6001600160a01b038316600090815260336020526040902054818110156112e45760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610633565b6001600160a01b0380851660009081526033602052604080822085850390559185168152908120805484929061131b908490612493565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161136791815260200190565b60405180910390a36111a084848461176b565b60006106b27f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6113a960c95490565b60ca546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b818110156114595760006114108284611776565b90508486828154811061142557611425612503565b60009182526020909120015463ffffffff16111561144557809250611453565b611450816001612493565b91505b506113fc565b811561149d578461146b6001846124ec565b8154811061147b5761147b612503565b60009182526020909120015464010000000090046001600160e01b03166114a0565b60005b6001600160e01b031695945050505050565b61086b8282611791565b61086b828261181c565b6001600160a01b0382811660008181526101306020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46111a0828483611835565b600063ffffffff8211156115a65760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610633565b5090565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600061083c61160961137a565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061165b87878787611974565b9150915061166881611a61565b5095945050505050565b6001600160a01b038116600090815260fd602052604090208054600181018255905b50919050565b600054610100900460ff166116c15760405162461bcd60e51b815260040161063390612519565b61086b8282611c1c565b600054610100900460ff166108545760405162461bcd60e51b815260040161063390612519565b600054610100900460ff166117195760405162461bcd60e51b815260040161063390612519565b610854611c6a565b600054610100900460ff166117485760405162461bcd60e51b815260040161063390612519565b61080c81604051806040016040528060018152602001603160f81b815250611c9a565b6107fd838383611cdb565b600061178560028484186124ca565b61074d90848416612493565b61179b8282611d0e565b6035546001600160e01b03101561180d5760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b6064820152608401610633565b6111a0610132611df583611e01565b6118268282611f7a565b6111a06101326120cf83611e01565b816001600160a01b0316836001600160a01b0316141580156118575750600081115b156107fd576001600160a01b038316156118e6576001600160a01b0383166000908152610131602052604081208190611893906120cf85611e01565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516118db929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156107fd576001600160a01b038216600090815261013160205260408120819061191d90611df585611e01565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611965929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156119ab5750600090506003611a58565b8460ff16601b141580156119c357508460ff16601c14155b156119d45750600090506004611a58565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611a28573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611a5157600060019250925050611a58565b9150600090505b94509492505050565b6000816004811115611a7557611a75612564565b1415611a7e5750565b6001816004811115611a9257611a92612564565b1415611ae05760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610633565b6002816004811115611af457611af4612564565b1415611b425760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610633565b6003816004811115611b5657611b56612564565b1415611baf5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610633565b6004816004811115611bc357611bc3612564565b141561080c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610633565b600054610100900460ff16611c435760405162461bcd60e51b815260040161063390612519565b8151611c56906036906020850190612144565b5080516107fd906037906020840190612144565b600054610100900460ff16611c915760405162461bcd60e51b815260040161063390612519565b610854336115aa565b600054610100900460ff16611cc15760405162461bcd60e51b815260040161063390612519565b81516020928301208151919092012060c99190915560ca55565b6001600160a01b03838116600090815261013060205260408082205485841683529120546107fd92918216911683611835565b6001600160a01b038216611d645760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610633565b8060356000828254611d769190612493565b90915550506001600160a01b03821660009081526033602052604081208054839290611da3908490612493565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361086b6000838361176b565b600061074d8284612493565b825460009081908015611e4c5785611e1a6001836124ec565b81548110611e2a57611e2a612503565b60009182526020909120015464010000000090046001600160e01b0316611e4f565b60005b6001600160e01b03169250611e6883858763ffffffff16565b9150600081118015611ea657504386611e826001846124ec565b81548110611e9257611e92612503565b60009182526020909120015463ffffffff16145b15611f0657611eb4826120db565b86611ec06001846124ec565b81548110611ed057611ed0612503565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550611f71565b856040518060400160405280611f1b43611541565b63ffffffff168152602001611f2f856120db565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b6001600160a01b038216611fda5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610633565b6001600160a01b0382166000908152603360205260409020548181101561204e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610633565b6001600160a01b038316600090815260336020526040812083830390556035805484929061207d9084906124ec565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36107fd8360008461176b565b600061074d82846124ec565b60006001600160e01b038211156115a65760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401610633565b82805461215090612448565b90600052602060002090601f01602090048101928261217257600085556121b8565b82601f1061218b57805160ff19168380011785556121b8565b828001600101855582156121b8579182015b828111156121b857825182559160200191906001019061219d565b506115a69291505b808211156115a657600081556001016121c0565b600060208083528351808285015260005b81811015612201578581018301518582016040015282016121e5565b81811115612213576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461224057600080fd5b919050565b6000806040838503121561225857600080fd5b61226183612229565b946020939093013593505050565b60006020828403121561228157600080fd5b5035919050565b60008060006060848603121561229d57600080fd5b6122a684612229565b92506122b460208501612229565b9150604084013590509250925092565b6000602082840312156122d657600080fd5b61074d82612229565b803560ff8116811461224057600080fd5b60008060008060008060c0878903121561230957600080fd5b61231287612229565b9550602087013594506040870135935061232e606088016122df565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561236357600080fd5b61236c88612229565b965061237a60208901612229565b95506040880135945060608801359350612396608089016122df565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156123c557600080fd5b823591506123d560208401612229565b90509250929050565b600080604083850312156123f157600080fd5b6123fa83612229565b91506123d560208401612229565b6000806040838503121561241b57600080fd5b61242483612229565b9150602083013563ffffffff8116811461243d57600080fd5b809150509250929050565b600181811c9082168061245c57607f821691505b6020821081141561169457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156124a6576124a661247d565b500190565b60008160001904831182151516156124c5576124c561247d565b500290565b6000826124e757634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156124fe576124fe61247d565b500390565b634e487b7160e01b600052603260045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052602160045260246000fdfea264697066735822122091e16bc2f03d18061fda7c41daa0b03797c426b74e750a6f0099175d7d3426ae64736f6c63430008090033";

type L1MantleTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1MantleTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1MantleToken__factory extends ContractFactory {
  constructor(...args: L1MantleTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<L1MantleToken> {
    return super.deploy(overrides || {}) as Promise<L1MantleToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): L1MantleToken {
    return super.attach(address) as L1MantleToken;
  }
  override connect(signer: Signer): L1MantleToken__factory {
    return super.connect(signer) as L1MantleToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1MantleTokenInterface {
    return new utils.Interface(_abi) as L1MantleTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1MantleToken {
    return new Contract(address, _abi, signerOrProvider) as L1MantleToken;
  }
}
