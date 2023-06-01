"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContractArtifact = void 0;
let iL1ChugSplashDeployer;
try {
    iL1ChugSplashDeployer = require('../artifacts/contracts/chugsplash/interfaces/iL1ChugSplashDeployer.sol/iL1ChugSplashDeployer.json');
}
catch (_a) { }
let L1ChugSplashProxy;
try {
    L1ChugSplashProxy = require('../artifacts/contracts/chugsplash/L1ChugSplashProxy.sol/L1ChugSplashProxy.json');
}
catch (_b) { }
let TransparentUpgradeableProxy;
try {
    TransparentUpgradeableProxy = require('../artifacts/contracts/chugsplash/TransparentUpgradeableProxy.sol/TransparentUpgradeableProxy.json');
}
catch (_c) { }
let BVM_EigenDataLayrChain;
try {
    BVM_EigenDataLayrChain = require('../artifacts/contracts/da/BVM_EigenDataLayrChain.sol/BVM_EigenDataLayrChain.json');
}
catch (_d) { }
let BVM_EigenDataLayrFee;
try {
    BVM_EigenDataLayrFee = require('../artifacts/contracts/da/BVM_EigenDataLayrFee.sol/BVM_EigenDataLayrFee.json');
}
catch (_e) { }
let AddressDictator;
try {
    AddressDictator = require('../artifacts/contracts/L1/deployment/AddressDictator.sol/AddressDictator.json');
}
catch (_f) { }
let ChugSplashDictator;
try {
    ChugSplashDictator = require('../artifacts/contracts/L1/deployment/ChugSplashDictator.sol/ChugSplashDictator.json');
}
catch (_g) { }
let AssertionMap;
try {
    AssertionMap = require('../artifacts/contracts/L1/fraud-proof/AssertionMap.sol/AssertionMap.json');
}
catch (_h) { }
let Challenge;
try {
    Challenge = require('../artifacts/contracts/L1/fraud-proof/challenge/Challenge.sol/Challenge.json');
}
catch (_j) { }
let ChallengeLib;
try {
    ChallengeLib = require('../artifacts/contracts/L1/fraud-proof/challenge/ChallengeLib.sol/ChallengeLib.json');
}
catch (_k) { }
let IChallenge;
try {
    IChallenge = require('../artifacts/contracts/L1/fraud-proof/challenge/IChallenge.sol/IChallenge.json');
}
catch (_l) { }
let IRollup;
try {
    IRollup = require('../artifacts/contracts/L1/fraud-proof/IRollup.sol/IRollup.json');
}
catch (_m) { }
let BitLen;
try {
    BitLen = require('../artifacts/contracts/L1/fraud-proof/libraries/BitLen.sol/BitLen.json');
}
catch (_o) { }
let BytesLib;
try {
    BytesLib = require('../artifacts/contracts/L1/fraud-proof/libraries/BytesLib.sol/BytesLib.json');
}
catch (_p) { }
let DeserializationLib;
try {
    DeserializationLib = require('../artifacts/contracts/L1/fraud-proof/libraries/DeserializationLib.sol/DeserializationLib.json');
}
catch (_q) { }
let MerkleLib;
try {
    MerkleLib = require('../artifacts/contracts/L1/fraud-proof/libraries/MerkleLib.sol/MerkleLib.json');
}
catch (_r) { }
let MPT;
try {
    MPT = require('../artifacts/contracts/L1/fraud-proof/libraries/MPT.sol/MPT.json');
}
catch (_s) { }
let RLPReader;
try {
    RLPReader = require('../artifacts/contracts/L1/fraud-proof/libraries/RLPReader.sol/RLPReader.json');
}
catch (_t) { }
let RLPWriter;
try {
    RLPWriter = require('../artifacts/contracts/L1/fraud-proof/libraries/RLPWriter.sol/RLPWriter.json');
}
catch (_u) { }
let Rollup;
try {
    Rollup = require('../artifacts/contracts/L1/fraud-proof/Rollup.sol/Rollup.json');
}
catch (_v) { }
let RollupBase;
try {
    RollupBase = require('../artifacts/contracts/L1/fraud-proof/Rollup.sol/RollupBase.json');
}
catch (_w) { }
let RollupLib;
try {
    RollupLib = require('../artifacts/contracts/L1/fraud-proof/RollupLib.sol/RollupLib.json');
}
catch (_x) { }
let IVerifier;
try {
    IVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/IVerifier.sol/IVerifier.json');
}
catch (_y) { }
let IVerifierEntry;
try {
    IVerifierEntry = require('../artifacts/contracts/L1/fraud-proof/verifier/IVerifierEntry.sol/IVerifierEntry.json');
}
catch (_z) { }
let BloomLib;
try {
    BloomLib = require('../artifacts/contracts/L1/fraud-proof/verifier/libraries/BloomLib.sol/BloomLib.json');
}
catch (_0) { }
let EVMTypesLib;
try {
    EVMTypesLib = require('../artifacts/contracts/L1/fraud-proof/verifier/libraries/EVMTypesLib.sol/EVMTypesLib.json');
}
catch (_1) { }
let GasTable;
try {
    GasTable = require('../artifacts/contracts/L1/fraud-proof/verifier/libraries/GasTable.sol/GasTable.json');
}
catch (_2) { }
let MemoryLib;
try {
    MemoryLib = require('../artifacts/contracts/L1/fraud-proof/verifier/libraries/MemoryLib.sol/MemoryLib.json');
}
catch (_3) { }
let OneStepProof;
try {
    OneStepProof = require('../artifacts/contracts/L1/fraud-proof/verifier/libraries/OneStepProof.sol/OneStepProof.json');
}
catch (_4) { }
let Params;
try {
    Params = require('../artifacts/contracts/L1/fraud-proof/verifier/libraries/Params.sol/Params.json');
}
catch (_5) { }
let VerificationContext;
try {
    VerificationContext = require('../artifacts/contracts/L1/fraud-proof/verifier/libraries/VerificationContext.sol/VerificationContext.json');
}
catch (_6) { }
let VerifierHelper;
try {
    VerifierHelper = require('../artifacts/contracts/L1/fraud-proof/verifier/libraries/VerifierHelper.sol/VerifierHelper.json');
}
catch (_7) { }
let BlockFinalizationVerifier;
try {
    BlockFinalizationVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/BlockFinalizationVerifier.sol/BlockFinalizationVerifier.json');
}
catch (_8) { }
let BlockInitiationVerifier;
try {
    BlockInitiationVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/BlockInitiationVerifier.sol/BlockInitiationVerifier.json');
}
catch (_9) { }
let CallOpVerifier;
try {
    CallOpVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/CallOpVerifier.sol/CallOpVerifier.json');
}
catch (_10) { }
let EnvironmentalOpVerifier;
try {
    EnvironmentalOpVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/EnvironmentalOpVerifier.sol/EnvironmentalOpVerifier.json');
}
catch (_11) { }
let InterTxVerifier;
try {
    InterTxVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/InterTxVerifier.sol/InterTxVerifier.json');
}
catch (_12) { }
let InvalidOpVerifier;
try {
    InvalidOpVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/InvalidOpVerifier.sol/InvalidOpVerifier.json');
}
catch (_13) { }
let MemoryOpVerifier;
try {
    MemoryOpVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/MemoryOpVerifier.sol/MemoryOpVerifier.json');
}
catch (_14) { }
let StackOpVerifier;
try {
    StackOpVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/StackOpVerifier.sol/StackOpVerifier.json');
}
catch (_15) { }
let StorageOpVerifier;
try {
    StorageOpVerifier = require('../artifacts/contracts/L1/fraud-proof/verifier/subverifiers/StorageOpVerifier.sol/StorageOpVerifier.json');
}
catch (_16) { }
let VerifierTestDriver;
try {
    VerifierTestDriver = require('../artifacts/contracts/L1/fraud-proof/verifier/test-driver/VerifierTestDriver.sol/VerifierTestDriver.json');
}
catch (_17) { }
let VerifierEntry;
try {
    VerifierEntry = require('../artifacts/contracts/L1/fraud-proof/verifier/VerifierEntry.sol/VerifierEntry.json');
}
catch (_18) { }
let Whitelist;
try {
    Whitelist = require('../artifacts/contracts/L1/fraud-proof/WhiteList.sol/Whitelist.json');
}
catch (_19) { }
let L1MantleToken;
try {
    L1MantleToken = require('../artifacts/contracts/L1/local/TestMantleToken.sol/L1MantleToken.json');
}
catch (_20) { }
let IL1CrossDomainMessenger;
try {
    IL1CrossDomainMessenger = require('../artifacts/contracts/L1/messaging/IL1CrossDomainMessenger.sol/IL1CrossDomainMessenger.json');
}
catch (_21) { }
let IL1ERC20Bridge;
try {
    IL1ERC20Bridge = require('../artifacts/contracts/L1/messaging/IL1ERC20Bridge.sol/IL1ERC20Bridge.json');
}
catch (_22) { }
let IL1StandardBridge;
try {
    IL1StandardBridge = require('../artifacts/contracts/L1/messaging/IL1StandardBridge.sol/IL1StandardBridge.json');
}
catch (_23) { }
let L1CrossDomainMessenger;
try {
    L1CrossDomainMessenger = require('../artifacts/contracts/L1/messaging/L1CrossDomainMessenger.sol/L1CrossDomainMessenger.json');
}
catch (_24) { }
let L1StandardBridge;
try {
    L1StandardBridge = require('../artifacts/contracts/L1/messaging/L1StandardBridge.sol/L1StandardBridge.json');
}
catch (_25) { }
let CanonicalTransactionChain;
try {
    CanonicalTransactionChain = require('../artifacts/contracts/L1/rollup/CanonicalTransactionChain.sol/CanonicalTransactionChain.json');
}
catch (_26) { }
let ChainStorageContainer;
try {
    ChainStorageContainer = require('../artifacts/contracts/L1/rollup/ChainStorageContainer.sol/ChainStorageContainer.json');
}
catch (_27) { }
let ICanonicalTransactionChain;
try {
    ICanonicalTransactionChain = require('../artifacts/contracts/L1/rollup/ICanonicalTransactionChain.sol/ICanonicalTransactionChain.json');
}
catch (_28) { }
let IChainStorageContainer;
try {
    IChainStorageContainer = require('../artifacts/contracts/L1/rollup/IChainStorageContainer.sol/IChainStorageContainer.json');
}
catch (_29) { }
let IStateCommitmentChain;
try {
    IStateCommitmentChain = require('../artifacts/contracts/L1/rollup/IStateCommitmentChain.sol/IStateCommitmentChain.json');
}
catch (_30) { }
let StateCommitmentChain;
try {
    StateCommitmentChain = require('../artifacts/contracts/L1/rollup/StateCommitmentChain.sol/StateCommitmentChain.json');
}
catch (_31) { }
let ITssGroupManager;
try {
    ITssGroupManager = require('../artifacts/contracts/L1/tss/ITssGroupManager.sol/ITssGroupManager.json');
}
catch (_32) { }
let IStakingSlashing;
try {
    IStakingSlashing = require('../artifacts/contracts/L1/tss/ITssStakingSlashing.sol/IStakingSlashing.json');
}
catch (_33) { }
let TssGroupManager;
try {
    TssGroupManager = require('../artifacts/contracts/L1/tss/TssGroupManager.sol/TssGroupManager.json');
}
catch (_34) { }
let TssStakingSlashing;
try {
    TssStakingSlashing = require('../artifacts/contracts/L1/tss/TssStakingSlashing.sol/TssStakingSlashing.json');
}
catch (_35) { }
let BondManager;
try {
    BondManager = require('../artifacts/contracts/L1/verification/BondManager.sol/BondManager.json');
}
catch (_36) { }
let IBondManager;
try {
    IBondManager = require('../artifacts/contracts/L1/verification/IBondManager.sol/IBondManager.json');
}
catch (_37) { }
let IL2CrossDomainMessenger;
try {
    IL2CrossDomainMessenger = require('../artifacts/contracts/L2/messaging/IL2CrossDomainMessenger.sol/IL2CrossDomainMessenger.json');
}
catch (_38) { }
let IL2ERC20Bridge;
try {
    IL2ERC20Bridge = require('../artifacts/contracts/L2/messaging/IL2ERC20Bridge.sol/IL2ERC20Bridge.json');
}
catch (_39) { }
let L2CrossDomainMessenger;
try {
    L2CrossDomainMessenger = require('../artifacts/contracts/L2/messaging/L2CrossDomainMessenger.sol/L2CrossDomainMessenger.json');
}
catch (_40) { }
let L2StandardBridge;
try {
    L2StandardBridge = require('../artifacts/contracts/L2/messaging/L2StandardBridge.sol/L2StandardBridge.json');
}
catch (_41) { }
let L2StandardTokenFactory;
try {
    L2StandardTokenFactory = require('../artifacts/contracts/L2/messaging/L2StandardTokenFactory.sol/L2StandardTokenFactory.json');
}
catch (_42) { }
let BVM_DeployerWhitelist;
try {
    BVM_DeployerWhitelist = require('../artifacts/contracts/L2/predeploys/BVM_DeployerWhitelist.sol/BVM_DeployerWhitelist.json');
}
catch (_43) { }
let BVM_ETH;
try {
    BVM_ETH = require('../artifacts/contracts/L2/predeploys/BVM_ETH.sol/BVM_ETH.json');
}
catch (_44) { }
let BVM_GasPriceOracle;
try {
    BVM_GasPriceOracle = require('../artifacts/contracts/L2/predeploys/BVM_GasPriceOracle.sol/BVM_GasPriceOracle.json');
}
catch (_45) { }
let BVM_L2ToL1MessagePasser;
try {
    BVM_L2ToL1MessagePasser = require('../artifacts/contracts/L2/predeploys/BVM_L2ToL1MessagePasser.sol/BVM_L2ToL1MessagePasser.json');
}
catch (_46) { }
let BVM_MANTLE;
try {
    BVM_MANTLE = require('../artifacts/contracts/L2/predeploys/BVM_MANTLE.sol/BVM_MANTLE.json');
}
catch (_47) { }
let BVM_SequencerFeeVault;
try {
    BVM_SequencerFeeVault = require('../artifacts/contracts/L2/predeploys/BVM_SequencerFeeVault.sol/BVM_SequencerFeeVault.json');
}
catch (_48) { }
let IBVM_GasPriceOracle;
try {
    IBVM_GasPriceOracle = require('../artifacts/contracts/L2/predeploys/iBVM_GasPriceOracle.sol/IBVM_GasPriceOracle.json');
}
catch (_49) { }
let iBVM_L1BlockNumber;
try {
    iBVM_L1BlockNumber = require('../artifacts/contracts/L2/predeploys/iBVM_L1BlockNumber.sol/iBVM_L1BlockNumber.json');
}
catch (_50) { }
let iBVM_L2ToL1MessagePasser;
try {
    iBVM_L2ToL1MessagePasser = require('../artifacts/contracts/L2/predeploys/iBVM_L2ToL1MessagePasser.sol/iBVM_L2ToL1MessagePasser.json');
}
catch (_51) { }
let ITssRewardContract;
try {
    ITssRewardContract = require('../artifacts/contracts/L2/predeploys/iTssRewardContract.sol/ITssRewardContract.json');
}
catch (_52) { }
let TssRewardContract;
try {
    TssRewardContract = require('../artifacts/contracts/L2/predeploys/TssRewardContract.sol/TssRewardContract.json');
}
catch (_53) { }
let WETH9;
try {
    WETH9 = require('../artifacts/contracts/L2/predeploys/WETH9.sol/WETH9.json');
}
catch (_54) { }
let WMANTLE9;
try {
    WMANTLE9 = require('../artifacts/contracts/L2/tokens/wmantle.sol/WMANTLE9.json');
}
catch (_55) { }
let WMANTLEDeployer;
try {
    WMANTLEDeployer = require('../artifacts/contracts/L2/tokens/wmantle.sol/WMANTLEDeployer.json');
}
catch (_56) { }
let CrossDomainEnabled;
try {
    CrossDomainEnabled = require('../artifacts/contracts/libraries/bridge/CrossDomainEnabled.sol/CrossDomainEnabled.json');
}
catch (_57) { }
let ICrossDomainMessenger;
try {
    ICrossDomainMessenger = require('../artifacts/contracts/libraries/bridge/ICrossDomainMessenger.sol/ICrossDomainMessenger.json');
}
catch (_58) { }
let Lib_CrossDomainUtils;
try {
    Lib_CrossDomainUtils = require('../artifacts/contracts/libraries/bridge/Lib_CrossDomainUtils.sol/Lib_CrossDomainUtils.json');
}
catch (_59) { }
let Lib_BVMCodec;
try {
    Lib_BVMCodec = require('../artifacts/contracts/libraries/codec/Lib_BVMCodec.sol/Lib_BVMCodec.json');
}
catch (_60) { }
let Lib_DefaultValues;
try {
    Lib_DefaultValues = require('../artifacts/contracts/libraries/constants/Lib_DefaultValues.sol/Lib_DefaultValues.json');
}
catch (_61) { }
let Lib_PredeployAddresses;
try {
    Lib_PredeployAddresses = require('../artifacts/contracts/libraries/constants/Lib_PredeployAddresses.sol/Lib_PredeployAddresses.json');
}
catch (_62) { }
let BN254;
try {
    BN254 = require('../artifacts/contracts/libraries/eigenda/BN254.sol/BN254.json');
}
catch (_63) { }
let DataLayrDisclosureLogic;
try {
    DataLayrDisclosureLogic = require('../artifacts/contracts/libraries/eigenda/DataLayrDisclosureLogic.sol/DataLayrDisclosureLogic.json');
}
catch (_64) { }
let DataStoreUtils;
try {
    DataStoreUtils = require('../artifacts/contracts/libraries/eigenda/DataStoreUtils.sol/DataStoreUtils.json');
}
catch (_65) { }
let IDataLayrPaymentManager;
try {
    IDataLayrPaymentManager = require('../artifacts/contracts/libraries/eigenda/interfaces/IDataLayrPaymentManager.sol/IDataLayrPaymentManager.json');
}
catch (_66) { }
let IDataLayrServiceManager;
try {
    IDataLayrServiceManager = require('../artifacts/contracts/libraries/eigenda/interfaces/IDataLayrServiceManager.sol/IDataLayrServiceManager.json');
}
catch (_67) { }
let IDelayedService;
try {
    IDelayedService = require('../artifacts/contracts/libraries/eigenda/interfaces/IDelayedService.sol/IDelayedService.json');
}
catch (_68) { }
let IDelegationTerms;
try {
    IDelegationTerms = require('../artifacts/contracts/libraries/eigenda/interfaces/IDelegationTerms.sol/IDelegationTerms.json');
}
catch (_69) { }
let IEigenLayrDelegation;
try {
    IEigenLayrDelegation = require('../artifacts/contracts/libraries/eigenda/interfaces/IEigenLayrDelegation.sol/IEigenLayrDelegation.json');
}
catch (_70) { }
let IInvestmentStrategy;
try {
    IInvestmentStrategy = require('../artifacts/contracts/libraries/eigenda/interfaces/IInvestmentStrategy.sol/IInvestmentStrategy.json');
}
catch (_71) { }
let IPaymentManager;
try {
    IPaymentManager = require('../artifacts/contracts/libraries/eigenda/interfaces/IPaymentManager.sol/IPaymentManager.json');
}
catch (_72) { }
let IServiceManager;
try {
    IServiceManager = require('../artifacts/contracts/libraries/eigenda/interfaces/IServiceManager.sol/IServiceManager.json');
}
catch (_73) { }
let Merkle;
try {
    Merkle = require('../artifacts/contracts/libraries/eigenda/Merkle.sol/Merkle.json');
}
catch (_74) { }
let Parser;
try {
    Parser = require('../artifacts/contracts/libraries/eigenda/Parse.sol/Parser.json');
}
catch (_75) { }
let Lib_AddressManager;
try {
    Lib_AddressManager = require('../artifacts/contracts/libraries/resolver/Lib_AddressManager.sol/Lib_AddressManager.json');
}
catch (_76) { }
let Lib_AddressResolver;
try {
    Lib_AddressResolver = require('../artifacts/contracts/libraries/resolver/Lib_AddressResolver.sol/Lib_AddressResolver.json');
}
catch (_77) { }
let Lib_ResolvedDelegateProxy;
try {
    Lib_ResolvedDelegateProxy = require('../artifacts/contracts/libraries/resolver/Lib_ResolvedDelegateProxy.sol/Lib_ResolvedDelegateProxy.json');
}
catch (_78) { }
let Lib_RLPReader;
try {
    Lib_RLPReader = require('../artifacts/contracts/libraries/rlp/Lib_RLPReader.sol/Lib_RLPReader.json');
}
catch (_79) { }
let Lib_RLPWriter;
try {
    Lib_RLPWriter = require('../artifacts/contracts/libraries/rlp/Lib_RLPWriter.sol/Lib_RLPWriter.json');
}
catch (_80) { }
let Lib_MerkleTrie;
try {
    Lib_MerkleTrie = require('../artifacts/contracts/libraries/trie/Lib_MerkleTrie.sol/Lib_MerkleTrie.json');
}
catch (_81) { }
let Lib_SecureMerkleTrie;
try {
    Lib_SecureMerkleTrie = require('../artifacts/contracts/libraries/trie/Lib_SecureMerkleTrie.sol/Lib_SecureMerkleTrie.json');
}
catch (_82) { }
let Lib_Buffer;
try {
    Lib_Buffer = require('../artifacts/contracts/libraries/utils/Lib_Buffer.sol/Lib_Buffer.json');
}
catch (_83) { }
let Lib_Bytes32Utils;
try {
    Lib_Bytes32Utils = require('../artifacts/contracts/libraries/utils/Lib_Bytes32Utils.sol/Lib_Bytes32Utils.json');
}
catch (_84) { }
let Lib_BytesUtils;
try {
    Lib_BytesUtils = require('../artifacts/contracts/libraries/utils/Lib_BytesUtils.sol/Lib_BytesUtils.json');
}
catch (_85) { }
let Lib_MerkleTree;
try {
    Lib_MerkleTree = require('../artifacts/contracts/libraries/utils/Lib_MerkleTree.sol/Lib_MerkleTree.json');
}
catch (_86) { }
let AddressAliasHelper;
try {
    AddressAliasHelper = require('../artifacts/contracts/standards/AddressAliasHelper.sol/AddressAliasHelper.json');
}
catch (_87) { }
let IL2StandardERC20;
try {
    IL2StandardERC20 = require('../artifacts/contracts/standards/IL2StandardERC20.sol/IL2StandardERC20.json');
}
catch (_88) { }
let L2StandardERC20;
try {
    L2StandardERC20 = require('../artifacts/contracts/standards/L2StandardERC20.sol/L2StandardERC20.json');
}
catch (_89) { }
let FailingReceiver;
try {
    FailingReceiver = require('../artifacts/contracts/test-helpers/FailingReceiver.sol/FailingReceiver.json');
}
catch (_90) { }
let L1StandardBridgeUpgrade;
try {
    L1StandardBridgeUpgrade = require('../artifacts/contracts/test-helpers/L1StandardBridgeUpgrade.sol/L1StandardBridgeUpgrade.json');
}
catch (_91) { }
let MockStateCommitmentChain;
try {
    MockStateCommitmentChain = require('../artifacts/contracts/test-helpers/MockStateCommitmentChain.sol/MockStateCommitmentChain.json');
}
catch (_92) { }
let TestERC20;
try {
    TestERC20 = require('../artifacts/contracts/test-helpers/TestERC20.sol/TestERC20.json');
}
catch (_93) { }
let Test;
try {
    Test = require('../artifacts/contracts/test-helpers/TestUpgrade.sol/Test.json');
}
catch (_94) { }
let TestUpgrade;
try {
    TestUpgrade = require('../artifacts/contracts/test-helpers/TestUpgrade.sol/TestUpgrade.json');
}
catch (_95) { }
let TestLib_CrossDomainUtils;
try {
    TestLib_CrossDomainUtils = require('../artifacts/contracts/test-libraries/bridge/TestLib_CrossDomainUtils.sol/TestLib_CrossDomainUtils.json');
}
catch (_96) { }
let TestLib_BVMCodec;
try {
    TestLib_BVMCodec = require('../artifacts/contracts/test-libraries/codec/TestLib_BVMCodec.sol/TestLib_BVMCodec.json');
}
catch (_97) { }
let TestLib_RLPReader;
try {
    TestLib_RLPReader = require('../artifacts/contracts/test-libraries/rlp/TestLib_RLPReader.sol/TestLib_RLPReader.json');
}
catch (_98) { }
let TestLib_RLPWriter;
try {
    TestLib_RLPWriter = require('../artifacts/contracts/test-libraries/rlp/TestLib_RLPWriter.sol/TestLib_RLPWriter.json');
}
catch (_99) { }
let TestLib_AddressAliasHelper;
try {
    TestLib_AddressAliasHelper = require('../artifacts/contracts/test-libraries/standards/TestLib_AddressAliasHelper.sol/TestLib_AddressAliasHelper.json');
}
catch (_100) { }
let TestLib_MerkleTrie;
try {
    TestLib_MerkleTrie = require('../artifacts/contracts/test-libraries/trie/TestLib_MerkleTrie.sol/TestLib_MerkleTrie.json');
}
catch (_101) { }
let TestLib_SecureMerkleTrie;
try {
    TestLib_SecureMerkleTrie = require('../artifacts/contracts/test-libraries/trie/TestLib_SecureMerkleTrie.sol/TestLib_SecureMerkleTrie.json');
}
catch (_102) { }
let TestLib_Buffer;
try {
    TestLib_Buffer = require('../artifacts/contracts/test-libraries/utils/TestLib_Buffer.sol/TestLib_Buffer.json');
}
catch (_103) { }
let TestLib_Bytes32Utils;
try {
    TestLib_Bytes32Utils = require('../artifacts/contracts/test-libraries/utils/TestLib_Bytes32Utils.sol/TestLib_Bytes32Utils.json');
}
catch (_104) { }
let TestLib_BytesUtils;
try {
    TestLib_BytesUtils = require('../artifacts/contracts/test-libraries/utils/TestLib_BytesUtils.sol/TestLib_BytesUtils.json');
}
catch (_105) { }
let TestLib_MerkleTree;
try {
    TestLib_MerkleTree = require('../artifacts/contracts/test-libraries/utils/TestLib_MerkleTree.sol/TestLib_MerkleTree.json');
}
catch (_106) { }
const getContractArtifact = (name) => {
    return {
        iL1ChugSplashDeployer,
        L1ChugSplashProxy,
        TransparentUpgradeableProxy,
        BVM_EigenDataLayrChain,
        BVM_EigenDataLayrFee,
        AddressDictator,
        ChugSplashDictator,
        AssertionMap,
        Challenge,
        ChallengeLib,
        IChallenge,
        IRollup,
        BitLen,
        BytesLib,
        DeserializationLib,
        MerkleLib,
        MPT,
        RLPReader,
        RLPWriter,
        Rollup,
        RollupBase,
        RollupLib,
        IVerifier,
        IVerifierEntry,
        BloomLib,
        EVMTypesLib,
        GasTable,
        MemoryLib,
        OneStepProof,
        Params,
        VerificationContext,
        VerifierHelper,
        BlockFinalizationVerifier,
        BlockInitiationVerifier,
        CallOpVerifier,
        EnvironmentalOpVerifier,
        InterTxVerifier,
        InvalidOpVerifier,
        MemoryOpVerifier,
        StackOpVerifier,
        StorageOpVerifier,
        VerifierTestDriver,
        VerifierEntry,
        Whitelist,
        L1MantleToken,
        IL1CrossDomainMessenger,
        IL1ERC20Bridge,
        IL1StandardBridge,
        L1CrossDomainMessenger,
        L1StandardBridge,
        CanonicalTransactionChain,
        ChainStorageContainer,
        ICanonicalTransactionChain,
        IChainStorageContainer,
        IStateCommitmentChain,
        StateCommitmentChain,
        ITssGroupManager,
        IStakingSlashing,
        TssGroupManager,
        TssStakingSlashing,
        BondManager,
        IBondManager,
        IL2CrossDomainMessenger,
        IL2ERC20Bridge,
        L2CrossDomainMessenger,
        L2StandardBridge,
        L2StandardTokenFactory,
        BVM_DeployerWhitelist,
        BVM_ETH,
        BVM_GasPriceOracle,
        BVM_L2ToL1MessagePasser,
        BVM_MANTLE,
        BVM_SequencerFeeVault,
        IBVM_GasPriceOracle,
        iBVM_L1BlockNumber,
        iBVM_L2ToL1MessagePasser,
        ITssRewardContract,
        TssRewardContract,
        WETH9,
        WMANTLE9,
        WMANTLEDeployer,
        CrossDomainEnabled,
        ICrossDomainMessenger,
        Lib_CrossDomainUtils,
        Lib_BVMCodec,
        Lib_DefaultValues,
        Lib_PredeployAddresses,
        BN254,
        DataLayrDisclosureLogic,
        DataStoreUtils,
        IDataLayrPaymentManager,
        IDataLayrServiceManager,
        IDelayedService,
        IDelegationTerms,
        IEigenLayrDelegation,
        IInvestmentStrategy,
        IPaymentManager,
        IServiceManager,
        Merkle,
        Parser,
        Lib_AddressManager,
        Lib_AddressResolver,
        Lib_ResolvedDelegateProxy,
        Lib_RLPReader,
        Lib_RLPWriter,
        Lib_MerkleTrie,
        Lib_SecureMerkleTrie,
        Lib_Buffer,
        Lib_Bytes32Utils,
        Lib_BytesUtils,
        Lib_MerkleTree,
        AddressAliasHelper,
        IL2StandardERC20,
        L2StandardERC20,
        FailingReceiver,
        L1StandardBridgeUpgrade,
        MockStateCommitmentChain,
        TestERC20,
        Test,
        TestUpgrade,
        TestLib_CrossDomainUtils,
        TestLib_BVMCodec,
        TestLib_RLPReader,
        TestLib_RLPWriter,
        TestLib_AddressAliasHelper,
        TestLib_MerkleTrie,
        TestLib_SecureMerkleTrie,
        TestLib_Buffer,
        TestLib_Bytes32Utils,
        TestLib_BytesUtils,
        TestLib_MerkleTree
    }[name];
};
exports.getContractArtifact = getContractArtifact;
//# sourceMappingURL=contract-artifacts.js.map