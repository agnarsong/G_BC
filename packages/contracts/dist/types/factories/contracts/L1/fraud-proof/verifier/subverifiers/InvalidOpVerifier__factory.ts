/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  InvalidOpVerifier,
  InvalidOpVerifierInterface,
} from "../../../../../../contracts/L1/fraud-proof/verifier/subverifiers/InvalidOpVerifier";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "coinbase",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "origin",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
              },
              {
                internalType: "uint256",
                name: "gasPrice",
                type: "uint256",
              },
              {
                internalType: "uint64",
                name: "gas",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "v",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "r",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "s",
                type: "uint256",
              },
            ],
            internalType: "struct EVMTypesLib.Transaction",
            name: "transaction",
            type: "tuple",
          },
          {
            internalType: "bytes32",
            name: "inputRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "txHash",
            type: "bytes32",
          },
        ],
        internalType: "struct VerificationContext.Context",
        name: "ctx",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "currStateHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "encoded",
        type: "bytes",
      },
    ],
    name: "executeOneStepProof",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "blockNumber",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "transactionIdx",
            type: "uint64",
          },
          {
            internalType: "uint16",
            name: "depth",
            type: "uint16",
          },
          {
            internalType: "uint64",
            name: "gas",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "refund",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "lastDepthHash",
            type: "bytes32",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "caller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "callFlag",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "out",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "outSize",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "pc",
            type: "uint64",
          },
          {
            internalType: "uint8",
            name: "opCode",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "codeHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "stackSize",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "stackHash",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "memSize",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "memRoot",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "inputDataSize",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "inputDataRoot",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "returnDataSize",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "returnDataRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "committedGlobalStateRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "globalStateRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "selfDestructAcc",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "logAcc",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "blockHashRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "accessListRoot",
            type: "bytes32",
          },
        ],
        internalType: "struct OneStepProof.StateProof",
        name: "endState",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "coinbase",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "number",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "origin",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint64",
                name: "nonce",
                type: "uint64",
              },
              {
                internalType: "uint256",
                name: "gasPrice",
                type: "uint256",
              },
              {
                internalType: "uint64",
                name: "gas",
                type: "uint64",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "v",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "r",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "s",
                type: "uint256",
              },
            ],
            internalType: "struct EVMTypesLib.Transaction",
            name: "transaction",
            type: "tuple",
          },
          {
            internalType: "bytes32",
            name: "inputRoot",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "txHash",
            type: "bytes32",
          },
        ],
        internalType: "struct VerificationContext.Context",
        name: "ctx",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "currStateHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "encoded",
        type: "bytes",
      },
    ],
    name: "verifyOneStepProof",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612556806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632138b3e41461003b57806389c3ad0f14610061575b600080fd5b61004e610049366004612098565b610081565b6040519081526020015b60405180910390f35b61007461006f366004612098565b6100a2565b6040516100589190612181565b6000610097610092868686866100a2565b6101ff565b90505b949350505050565b6100aa611d1c565b60006100b4611d1c565b6100c08786868561029e565b604051919350915060009083878237839020905086811461011a5760405162461bcd60e51b815260206004820152600f60248201526e2130b21029ba30ba3290283937b7b360891b60448201526064015b60405180910390fd5b6040805180820190915260008082526020820152610139878786610ce8565b6101a0850151919550915061014d81610e4b565b6101875760405162461bcd60e51b815260206004820152600b60248201526a556e726561636861626c6560a81b6044820152606401610111565b61019385858a8a610f88565b50604084015161ffff16156101f1578361018001516001600160401b031682602001516001600160401b031611156101e8576101808401516101da9083908a908a90610f99565b60ff166101a08501526101f1565b60006101a08501525b509198975050505050505050565b6000816040015161ffff16600014156102875761021a611e08565b82516001600160401b039081168252602080850151909116908201526103008301516040820152610100830151606082015260a08084015160808301526103608401519082015261032083015160c082015261034083015160e082015261028081610ffc565b9392505050565b61029082611007565b805190602001209050919050565b60006102a8611d1c565b60006102b48486612367565b90506101436001600160401b0382168111156102e25760405162461bcd60e51b81526004016101119061238f565b61032e856001600160401b031688888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061142d9050565b6001600160401b0316835261038f6103478660086123c6565b6001600160401b031688888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061142d9050565b6001600160401b031660208401526103f36103ab8660106123c6565b6001600160401b031688888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061148a9050565b61ffff16604084015261040a6103478660126123c6565b6001600160401b0316606084015261042661034786601a6123c6565b6001600160401b0316608084015261048a6104428660226123c6565b6001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506114e79050565b60a084015261049a8560426123c6565b94506001836040015161ffff1611156106b1576104b86061826123c6565b9050806001600160401b0316826001600160401b031610156104ec5760405162461bcd60e51b81526004016101119061238f565b610538856001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506115459050565b6001600160a01b031660c084015261059c6105548660146123c6565b6001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506115459050565b6001600160a01b031660e08401526106006105b88660286123c6565b6001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506115aa9050565b61010084015261065c6106148660486123c6565b6001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506115ff9050565b60ff166101208401526106736103478660496123c6565b6001600160401b03166101408401526106906103478660516123c6565b6001600160401b03166101608401526106aa6059866123c6565b945061071f565b6080880151606001516001600160a01b031660c084015260608801516001600160a01b031660e0840152608080890151015161010084015260006106fa89608001516060015190565b6001600160a01b0316141561071657600461012084015261071f565b60006101208401525b61076b856001600160401b031688888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061142d9050565b6001600160401b03166101808401526107886106148660086123c6565b60ff166101a084015261079f6104428660096123c6565b6101c08401526107b36103478660296123c6565b6001600160401b03166101e08401526107cd6031866123c6565b9450826101e001516001600160401b0316600014610884576107f06020826123c6565b9050806001600160401b0316826001600160401b031610156108245760405162461bcd60e51b81526004016101119061238f565b610870856001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506114e79050565b6102008401526108816020866123c6565b94505b6108d0856001600160401b031688888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061142d9050565b6001600160401b03166102208401526108ea6008866123c6565b94508261022001516001600160401b03166000146109a15761090d6020826123c6565b9050806001600160401b0316826001600160401b031610156109415760405162461bcd60e51b81526004016101119061238f565b61098d856001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506114e79050565b61024084015261099e6020866123c6565b94505b6001836040015161ffff161115610ad4576109fe856001600160401b031688888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061142d9050565b6001600160401b0316610260840152610a186008866123c6565b94508261026001516001600160401b0316600014610acf57610a3b6020826123c6565b9050806001600160401b0316826001600160401b03161015610a6f5760405162461bcd60e51b81526004016101119061238f565b610abb856001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506114e79050565b610280840152610acc6020866123c6565b94505b610afd565b608088015160a00151516001600160401b0316610260840152610af68861165b565b6102808401525b610b49856001600160401b031688888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061142d9050565b6001600160401b03166102a0840152610b636008866123c6565b9450826102a001516001600160401b0316600014610c1a57610b866020826123c6565b9050806001600160401b0316826001600160401b03161015610bba5760405162461bcd60e51b81526004016101119061238f565b610c06856001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506114e79050565b6102c0840152610c176020866123c6565b94505b610c66856001600160401b031688888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506114e79050565b6102e0840152610c7a6104428660206123c6565b610300840152610c8e6104428660406123c6565b610320840152610ca26104428660606123c6565b610340840152610cb66104428660806123c6565b610360840152610cca6104428660a06123c6565b610380840152610cdb8560c06123c6565b9350505094509492505050565b60408051808201909152600080825260208201819052906008610d146001600160401b038516866123f1565b1015610d5b5760405162461bcd60e51b815260206004820152601660248201527550726f6f6620556e646572666c6f772028436f64652960501b6044820152606401610111565b6000610da9846001600160401b031687878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929392505061142d9050565b9050610db68160086123c6565b6001600160401b0390811690610dce908616876123f1565b1015610e155760405162461bcd60e51b815260206004820152601660248201527550726f6f6620556e646572666c6f772028436f64652960501b6044820152606401610111565b610e206008856123c6565b6001600160401b038082168452821660208401529350610e4081856123c6565b925050935093915050565b60008160ff1660fe1415610e6157506001919050565b600c8260ff1610158015610e795750600f8260ff1611155b15610e8657506001919050565b601e8260ff1610158015610e9e5750601f8260ff1611155b15610eab57506001919050565b60218260ff1610158015610ec35750602f8260ff1611155b15610ed057506001919050565b60478260ff1610158015610ee85750604f8260ff1611155b15610ef557506001919050565b605c8260ff1610158015610f0d5750605f8260ff1611155b15610f1a57506001919050565b60a58260ff1610158015610f32575060ef8260ff1611155b15610f3f57506001919050565b60f68260ff1610158015610f57575060f98260ff1611155b80610f6557508160ff1660fb145b80610f7357508160ff1660fc145b15610f8057506001919050565b506000919050565b610f90611d1c565b50919392505050565b600084602001516001600160401b0316826001600160401b031610610fc05750600061009a565b8383838760000151610fd291906123c6565b6001600160401b0316818110610fea57610fea612408565b919091013560f81c9695505050505050565b600061029082611686565b60606110388260000151604051602001611021919061241e565b60408051601f198184030181529190528290611781565b90506110528260200151604051602001611021919061241e565b905061107f8260400151604051602001611021919060f09190911b6001600160f01b031916815260020190565b90506110998260600151604051602001611021919061241e565b90506110b38260800151604051602001611021919061241e565b90506110cf8260a0015160405160200161102191815260200190565b90506001826040015161ffff1611156111c8576111128260c00151604051602001611021919060609190911b6bffffffffffffffffffffffff1916815260140190565b90506111448260e00151604051602001611021919060609190911b6bffffffffffffffffffffffff1916815260140190565b905061116182610100015160405160200161102191815260200190565b905061118f826101200151604051602001611021919060f89190911b6001600160f81b031916815260010190565b90506111aa826101400151604051602001611021919061241e565b90506111c5826101600151604051602001611021919061241e565b90505b6111e1826101800151604051602001611021919061241e565b905061120f826101a00151604051602001611021919060f89190911b6001600160f81b031916815260010190565b905061122c826101c0015160405160200161102191815260200190565b9050611247826101e00151604051602001611021919061241e565b9050816101e001516001600160401b031660001461127d5761127a82610200015160405160200161102191815260200190565b90505b611296826102200151604051602001611021919061241e565b90508161022001516001600160401b03166000146112cc576112c982610240015160405160200161102191815260200190565b90505b6001826040015161ffff16111561132c576112f6826102600151604051602001611021919061241e565b90508161026001516001600160401b031660001461132c5761132982610280015160405160200161102191815260200190565b90505b611345826102a00151604051602001611021919061241e565b9050816102a001516001600160401b031660001461137b57611378826102c0015160405160200161102191815260200190565b90505b611396826102e0015160405160200161102191815260200190565b90506113b382610300015160405160200161102191815260200190565b90506113d082610320015160405160200161102191815260200190565b90506113ed82610340015160405160200161102191815260200190565b905061140a82610360015160405160200161102191815260200190565b905061142782610380015160405160200161102191815260200190565b92915050565b600061143a826008612436565b835110156114815760405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b6044820152606401610111565b50016008015190565b6000611497826002612436565b835110156114de5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606401610111565b50016002015190565b60006114f4826020612436565b8351101561153c5760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610111565b50016020015190565b6000611552826014612436565b8351101561159a5760405162461bcd60e51b8152602060048201526015602482015274746f416464726573735f6f75744f66426f756e647360581b6044820152606401610111565b500160200151600160601b900490565b60006115b7826020612436565b8351101561153c5760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606401610111565b600061160c826001612436565b835110156116525760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610111565b50016001015190565b60a081015160009061167e57611678826080015160a001516117fe565b60a08301525b5060a0015190565b60606116a08260000151604051602001611021919061241e565b90506116ba8260200151604051602001611021919061241e565b90506116d6826040015160405160200161102191815260200190565b90506116f2826060015160405160200161102191815260200190565b905061170e826080015160405160200161102191815260200190565b905061172a8260a0015160405160200161102191815260200190565b90506117468260c0015160405160200161102191815260200190565b90506117628260e0015160405160200161102191815260200190565b905061142782610100015160000151604051602001611021919061244e565b6060806040519050835180825260208201818101602087015b818310156117b257805183526020928301920161179a565b50855184518101855292509050808201602086015b818310156117df5780518352602092830192016117c7565b508651929092011591909101601f01601f191660405250905092915050565b60008061180d60008451611924565b90506000816001600160401b03166001600160401b0381111561183257611832611e81565b60405190808252806020026020018201604052801561185b578160200160208202803683370190505b50905060005b61186c600184612367565b6001600160401b03168110156118c05761189161188a826020612483565b86906114e7565b8282815181106118a3576118a3612408565b6020908102919091010152806118b8816124a2565b915050611861565b506118ea6118cf600184612367565b6118da9060206124bd565b85906001600160401b031661195c565b816118f6600185612367565b6001600160401b03168151811061190f5761190f612408565b60200260200101818152505061009a816119a2565b60006119316020846124ec565b602061193d84866123c6565b61194890601f6123c6565b61195291906124ec565b6102809190612367565b6020818301810151600091611972908490612436565b8451101561028057835160009061198a856020612436565b61199491906123f1565b91821c90911b949350505050565b6000611427825160001b6119b5846119c4565b60009182526020526040902090565b60006114276119d2836119d7565b611bdf565b805160609060006119ef60018084169084901c612436565b9050806001600160401b03811115611a0957611a09611e81565b604051908082528060200260200182016040528015611a32578160200160208202803683370190505b5092506000805b82821015611bd65750600181811b90611a5290856123f1565b811415611ad757600060f81b868281518110611a7057611a70612408565b6020026020010151604051602001611a9e9291906001600160f81b0319929092168252600182015260210190565b60405160208183030381529060405280519060200120858381518110611ac657611ac6612408565b602002602001018181525050611bd6565b611ba8600060f81b878381518110611af157611af1612408565b6020026020010151604051602001611b1f9291906001600160f81b0319929092168252600182015260210190565b60408051601f198184030181529190528051602090910120600088611b45856001612436565b81518110611b5557611b55612408565b6020026020010151604051602001611b839291906001600160f81b0319929092168252600182015260210190565b6040516020818303038152906040528051906020012060009182526020526040902090565b8583611bb3816124a2565b945081518110611bc557611bc5612408565b602002602001018181525050611a39565b50505050919050565b805160009081805b6001831115611cf75750600181811b90611c0190846123f1565b811415611c5b57848181518110611c1a57611c1a612408565b6020026020010151858381518110611c3457611c34612408565b602090810291909101015260009150611c5460018085169085901c612436565b9250611be7565b828110611c775760009150611c5460018085169085901c612436565b611cc9858281518110611c8c57611c8c612408565b602002602001015186836001611ca29190612436565b81518110611cb257611cb2612408565b602002602001015160009182526020526040902090565b8583611cd4816124a2565b945081518110611ce657611ce6612408565b602002602001018181525050611be7565b84600081518110611d0a57611d0a612408565b60200260200101519350505050919050565b604080516103a081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e08101829052610200810182905261022081018290526102408101829052610260810182905261028081018290526102a081018290526102c081018290526102e08101829052610300810182905261032081018290526103408101829052610360810182905261038081019190915290565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091526101008101611e56611e5b565b905290565b60408051610120810190915280611e566020820160088161010080368337509192915050565b634e487b7160e01b600052604160045260246000fd5b60405161012081016001600160401b0381118282101715611eba57611eba611e81565b60405290565b60405160e081016001600160401b0381118282101715611eba57611eba611e81565b80356001600160a01b0381168114611ef957600080fd5b919050565b80356001600160401b0381168114611ef957600080fd5b600082601f830112611f2657600080fd5b81356001600160401b0380821115611f4057611f40611e81565b604051601f8301601f19908116603f01168101908282118183101715611f6857611f68611e81565b81604052838152866020858801011115611f8157600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006101208284031215611fb457600080fd5b611fbc611e97565b9050611fc782611efe565b815260208201356020820152611fdf60408301611efe565b6040820152611ff060608301611ee2565b60608201526080820135608082015260a08201356001600160401b0381111561201857600080fd5b61202484828501611f15565b60a08301525060c082013560c082015260e082013560e082015261010080830135818301525092915050565b60008083601f84011261206257600080fd5b5081356001600160401b0381111561207957600080fd5b60208301915083602082850101111561209157600080fd5b9250929050565b600080600080606085870312156120ae57600080fd5b84356001600160401b03808211156120c557600080fd5b9086019060e082890312156120d957600080fd5b6120e1611ec0565b6120ea83611ee2565b8152602083013560208201526040830135604082015261210c60608401611ee2565b606082015260808301358281111561212357600080fd5b61212f8a828601611fa1565b60808301525060a083013560a082015260c083013560c08201528096505060208701359450604087013591508082111561216857600080fd5b5061217587828801612050565b95989497509550505050565b81516001600160401b031681526103a0810160208301516121ad60208401826001600160401b03169052565b5060408301516121c3604084018261ffff169052565b5060608301516121de60608401826001600160401b03169052565b5060808301516121f960808401826001600160401b03169052565b5060a083015160a083015260c083015161221e60c08401826001600160a01b03169052565b5060e083015161223960e08401826001600160a01b03169052565b5061010083810151908301526101208084015160ff90811691840191909152610140808501516001600160401b039081169185019190915261016080860151821690850152610180808601518216908501526101a080860151909216918401919091526101c080850151908401526101e08085015182169084015261020080850151908401526102208085015182169084015261024080850151908401526102608085015182169084015261028080850151908401526102a080850151909116908301526102c080840151908301526102e08084015190830152610300808401519083015261032080840151908301526103408084015190830152610360808401519083015261038092830151929091019190915290565b634e487b7160e01b600052601160045260246000fd5b60006001600160401b038381169083168181101561238757612387612351565b039392505050565b60208082526017908201527f50726f6f6620556e646572666c6f772028537461746529000000000000000000604082015260600190565b60006001600160401b038083168185168083038211156123e8576123e8612351565b01949350505050565b60008282101561240357612403612351565b500390565b634e487b7160e01b600052603260045260246000fd5b60c09190911b6001600160c01b031916815260080190565b6000821982111561244957612449612351565b500190565b60008183825b6008811015612473578151835260209283019290910190600101612454565b5050506101008201905092915050565b600081600019048311821515161561249d5761249d612351565b500290565b60006000198214156124b6576124b6612351565b5060010190565b60006001600160401b03808316818516818304811182151516156124e3576124e3612351565b02949350505050565b60006001600160401b038084168061251457634e487b7160e01b600052601260045260246000fd5b9216919091049291505056fea26469706673582212202c95fafa2bf5e75b6690026d3d89a3c39e0e27f58c8c9414057d688df6b9da3064736f6c63430008090033";

type InvalidOpVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InvalidOpVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InvalidOpVerifier__factory extends ContractFactory {
  constructor(...args: InvalidOpVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InvalidOpVerifier> {
    return super.deploy(overrides || {}) as Promise<InvalidOpVerifier>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InvalidOpVerifier {
    return super.attach(address) as InvalidOpVerifier;
  }
  override connect(signer: Signer): InvalidOpVerifier__factory {
    return super.connect(signer) as InvalidOpVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InvalidOpVerifierInterface {
    return new utils.Interface(_abi) as InvalidOpVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InvalidOpVerifier {
    return new Contract(address, _abi, signerOrProvider) as InvalidOpVerifier;
  }
}
