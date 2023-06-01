"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeployedContractArtifact = void 0;
const goerli_qa__Lib_AddressManager = require('../deployments/goerli-qa/Lib_AddressManager.json');
const goerli_qa__Proxy__BVM_L1CrossDomainMessenger = require('../deployments/goerli-qa/Proxy__BVM_L1CrossDomainMessenger.json');
const goerli_qa__Proxy__BVM_L1StandardBridge = require('../deployments/goerli-qa/Proxy__BVM_L1StandardBridge.json');
const goerli_qa__StateCommitmentChain = require('../deployments/goerli-qa/StateCommitmentChain.json');
const goerli_testnet__Lib_AddressManager = require('../deployments/goerli-testnet/Lib_AddressManager.json');
const goerli_testnet__Proxy__BVM_L1CrossDomainMessenger = require('../deployments/goerli-testnet/Proxy__BVM_L1CrossDomainMessenger.json');
const goerli_testnet__Proxy__BVM_L1StandardBridge = require('../deployments/goerli-testnet/Proxy__BVM_L1StandardBridge.json');
const goerli_testnet__StateCommitmentChain = require('../deployments/goerli-testnet/StateCommitmentChain.json');
const local__AddressDictator = require('../deployments/local/AddressDictator.json');
const local__AssertionMap = require('../deployments/local/AssertionMap.json');
const local__BondManager = require('../deployments/local/BondManager.json');
const local__BVM_EigenDataLayrChain = require('../deployments/local/BVM_EigenDataLayrChain.json');
const local__BVM_EigenDataLayrFee = require('../deployments/local/BVM_EigenDataLayrFee.json');
const local__BVM_L1CrossDomainMessenger = require('../deployments/local/BVM_L1CrossDomainMessenger.json');
const local__CanonicalTransactionChain = require('../deployments/local/CanonicalTransactionChain.json');
const local__ChainStorageContainer_CTC_batches = require('../deployments/local/ChainStorageContainer-CTC-batches.json');
const local__ChainStorageContainer_SCC_batches = require('../deployments/local/ChainStorageContainer-SCC-batches.json');
const local__ChugSplashDictator = require('../deployments/local/ChugSplashDictator.json');
const local__L1MantleToken = require('../deployments/local/L1MantleToken.json');
const local__L1StandardBridge_for_verification_only = require('../deployments/local/L1StandardBridge_for_verification_only.json');
const local__Lib_AddressManager = require('../deployments/local/Lib_AddressManager.json');
const local__Proxy__AssertionMap = require('../deployments/local/Proxy__AssertionMap.json');
const local__Proxy__BVM_EigenDataLayrChain = require('../deployments/local/Proxy__BVM_EigenDataLayrChain.json');
const local__Proxy__BVM_EigenDataLayrFee = require('../deployments/local/Proxy__BVM_EigenDataLayrFee.json');
const local__Proxy__BVM_L1CrossDomainMessenger = require('../deployments/local/Proxy__BVM_L1CrossDomainMessenger.json');
const local__Proxy__BVM_L1StandardBridge = require('../deployments/local/Proxy__BVM_L1StandardBridge.json');
const local__Proxy__L1MantleToken = require('../deployments/local/Proxy__L1MantleToken.json');
const local__Proxy__Rollup = require('../deployments/local/Proxy__Rollup.json');
const local__Proxy__TSS_GroupManager = require('../deployments/local/Proxy__TSS_GroupManager.json');
const local__Proxy__TSS_StakingSlashing = require('../deployments/local/Proxy__TSS_StakingSlashing.json');
const local__Proxy__Verifier = require('../deployments/local/Proxy__Verifier.json');
const local__Rollup = require('../deployments/local/Rollup.json');
const local__StateCommitmentChain = require('../deployments/local/StateCommitmentChain.json');
const local__TssGroupManager = require('../deployments/local/TssGroupManager.json');
const local__TssStakingSlashing = require('../deployments/local/TssStakingSlashing.json');
const local__VerifierEntry = require('../deployments/local/VerifierEntry.json');
const getDeployedContractArtifact = (name, network) => {
    return {
        goerli_qa__Lib_AddressManager,
        goerli_qa__Proxy__BVM_L1CrossDomainMessenger,
        goerli_qa__Proxy__BVM_L1StandardBridge,
        goerli_qa__StateCommitmentChain,
        goerli_testnet__Lib_AddressManager,
        goerli_testnet__Proxy__BVM_L1CrossDomainMessenger,
        goerli_testnet__Proxy__BVM_L1StandardBridge,
        goerli_testnet__StateCommitmentChain,
        local__AddressDictator,
        local__AssertionMap,
        local__BondManager,
        local__BVM_EigenDataLayrChain,
        local__BVM_EigenDataLayrFee,
        local__BVM_L1CrossDomainMessenger,
        local__CanonicalTransactionChain,
        local__ChainStorageContainer_CTC_batches,
        local__ChainStorageContainer_SCC_batches,
        local__ChugSplashDictator,
        local__L1MantleToken,
        local__L1StandardBridge_for_verification_only,
        local__Lib_AddressManager,
        local__Proxy__AssertionMap,
        local__Proxy__BVM_EigenDataLayrChain,
        local__Proxy__BVM_EigenDataLayrFee,
        local__Proxy__BVM_L1CrossDomainMessenger,
        local__Proxy__BVM_L1StandardBridge,
        local__Proxy__L1MantleToken,
        local__Proxy__Rollup,
        local__Proxy__TSS_GroupManager,
        local__Proxy__TSS_StakingSlashing,
        local__Proxy__Verifier,
        local__Rollup,
        local__StateCommitmentChain,
        local__TssGroupManager,
        local__TssStakingSlashing,
        local__VerifierEntry
    }[(network + '__' + name).replace(/-/g, '_')];
};
exports.getDeployedContractArtifact = getDeployedContractArtifact;
//# sourceMappingURL=contract-deployed-artifacts.js.map