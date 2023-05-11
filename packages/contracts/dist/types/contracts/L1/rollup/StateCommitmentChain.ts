/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace Lib_BVMCodec {
  export type ChainBatchHeaderStruct = {
    batchIndex: PromiseOrValue<BigNumberish>;
    batchRoot: PromiseOrValue<BytesLike>;
    batchSize: PromiseOrValue<BigNumberish>;
    prevTotalElements: PromiseOrValue<BigNumberish>;
    signature: PromiseOrValue<BytesLike>;
    extraData: PromiseOrValue<BytesLike>;
  };

  export type ChainBatchHeaderStructOutput = [
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string,
    string
  ] & {
    batchIndex: BigNumber;
    batchRoot: string;
    batchSize: BigNumber;
    prevTotalElements: BigNumber;
    signature: string;
    extraData: string;
  };

  export type ChainInclusionProofStruct = {
    index: PromiseOrValue<BigNumberish>;
    siblings: PromiseOrValue<BytesLike>[];
  };

  export type ChainInclusionProofStructOutput = [BigNumber, string[]] & {
    index: BigNumber;
    siblings: string[];
  };
}

export interface StateCommitmentChainInterface extends utils.Interface {
  functions: {
    "FRAUD_PROOF_WINDOW()": FunctionFragment;
    "SEQUENCER_PUBLISH_WINDOW()": FunctionFragment;
    "appendStateBatch(bytes32[],uint256,bytes)": FunctionFragment;
    "batches()": FunctionFragment;
    "deleteStateBatch((uint256,bytes32,uint256,uint256,bytes,bytes))": FunctionFragment;
    "getLastSequencerTimestamp()": FunctionFragment;
    "getTotalBatches()": FunctionFragment;
    "getTotalElements()": FunctionFragment;
    "insideFraudProofWindow((uint256,bytes32,uint256,uint256,bytes,bytes))": FunctionFragment;
    "libAddressManager()": FunctionFragment;
    "messenger()": FunctionFragment;
    "resolve(string)": FunctionFragment;
    "rollBackL2Chain(uint256,uint256,bytes)": FunctionFragment;
    "setFraudProofWindow(uint256)": FunctionFragment;
    "verifyStateCommitment(bytes32,(uint256,bytes32,uint256,uint256,bytes,bytes),(uint256,bytes32[]))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FRAUD_PROOF_WINDOW"
      | "SEQUENCER_PUBLISH_WINDOW"
      | "appendStateBatch"
      | "batches"
      | "deleteStateBatch"
      | "getLastSequencerTimestamp"
      | "getTotalBatches"
      | "getTotalElements"
      | "insideFraudProofWindow"
      | "libAddressManager"
      | "messenger"
      | "resolve"
      | "rollBackL2Chain"
      | "setFraudProofWindow"
      | "verifyStateCommitment"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FRAUD_PROOF_WINDOW",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SEQUENCER_PUBLISH_WINDOW",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "appendStateBatch",
    values: [
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "batches", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deleteStateBatch",
    values: [Lib_BVMCodec.ChainBatchHeaderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastSequencerTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBatches",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalElements",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "insideFraudProofWindow",
    values: [Lib_BVMCodec.ChainBatchHeaderStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "libAddressManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "messenger", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "resolve",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "rollBackL2Chain",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setFraudProofWindow",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyStateCommitment",
    values: [
      PromiseOrValue<BytesLike>,
      Lib_BVMCodec.ChainBatchHeaderStruct,
      Lib_BVMCodec.ChainInclusionProofStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "FRAUD_PROOF_WINDOW",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SEQUENCER_PUBLISH_WINDOW",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "appendStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "batches", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deleteStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastSequencerTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBatches",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalElements",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insideFraudProofWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "libAddressManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messenger", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rollBackL2Chain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFraudProofWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyStateCommitment",
    data: BytesLike
  ): Result;

  events: {
    "DistributeTssReward(uint256,uint256,uint256,address[])": EventFragment;
    "RollBackL2Chain(uint256)": EventFragment;
    "StateBatchAppended(uint256,bytes32,uint256,uint256,bytes,bytes)": EventFragment;
    "StateBatchDeleted(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DistributeTssReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RollBackL2Chain"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StateBatchAppended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StateBatchDeleted"): EventFragment;
}

export interface DistributeTssRewardEventObject {
  _startBlockNumber: BigNumber;
  _length: BigNumber;
  _batchTime: BigNumber;
  _tssMembers: string[];
}
export type DistributeTssRewardEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, string[]],
  DistributeTssRewardEventObject
>;

export type DistributeTssRewardEventFilter =
  TypedEventFilter<DistributeTssRewardEvent>;

export interface RollBackL2ChainEventObject {
  _startBlockNumber: BigNumber;
}
export type RollBackL2ChainEvent = TypedEvent<
  [BigNumber],
  RollBackL2ChainEventObject
>;

export type RollBackL2ChainEventFilter = TypedEventFilter<RollBackL2ChainEvent>;

export interface StateBatchAppendedEventObject {
  _batchIndex: BigNumber;
  _batchRoot: string;
  _batchSize: BigNumber;
  _prevTotalElements: BigNumber;
  _signature: string;
  _extraData: string;
}
export type StateBatchAppendedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string, string],
  StateBatchAppendedEventObject
>;

export type StateBatchAppendedEventFilter =
  TypedEventFilter<StateBatchAppendedEvent>;

export interface StateBatchDeletedEventObject {
  _batchIndex: BigNumber;
  _batchRoot: string;
}
export type StateBatchDeletedEvent = TypedEvent<
  [BigNumber, string],
  StateBatchDeletedEventObject
>;

export type StateBatchDeletedEventFilter =
  TypedEventFilter<StateBatchDeletedEvent>;

export interface StateCommitmentChain extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StateCommitmentChainInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FRAUD_PROOF_WINDOW(overrides?: CallOverrides): Promise<[BigNumber]>;

    SEQUENCER_PUBLISH_WINDOW(overrides?: CallOverrides): Promise<[BigNumber]>;

    appendStateBatch(
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    batches(overrides?: CallOverrides): Promise<[string]>;

    deleteStateBatch(
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getLastSequencerTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastSequencerTimestamp: BigNumber }>;

    getTotalBatches(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalBatches: BigNumber }>;

    getTotalElements(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _totalElements: BigNumber }>;

    insideFraudProofWindow(
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _inside: boolean }>;

    libAddressManager(overrides?: CallOverrides): Promise<[string]>;

    messenger(overrides?: CallOverrides): Promise<[string]>;

    resolve(
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    rollBackL2Chain(
      _shouldRollBack: PromiseOrValue<BigNumberish>,
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFraudProofWindow(
      _fraudProofWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyStateCommitment(
      _element: PromiseOrValue<BytesLike>,
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      _proof: Lib_BVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  FRAUD_PROOF_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

  SEQUENCER_PUBLISH_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

  appendStateBatch(
    _batch: PromiseOrValue<BytesLike>[],
    _shouldStartAtElement: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  batches(overrides?: CallOverrides): Promise<string>;

  deleteStateBatch(
    _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

  insideFraudProofWindow(
    _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  libAddressManager(overrides?: CallOverrides): Promise<string>;

  messenger(overrides?: CallOverrides): Promise<string>;

  resolve(
    _name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  rollBackL2Chain(
    _shouldRollBack: PromiseOrValue<BigNumberish>,
    _shouldStartAtElement: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFraudProofWindow(
    _fraudProofWindow: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyStateCommitment(
    _element: PromiseOrValue<BytesLike>,
    _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
    _proof: Lib_BVMCodec.ChainInclusionProofStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    FRAUD_PROOF_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    SEQUENCER_PUBLISH_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    appendStateBatch(
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    batches(overrides?: CallOverrides): Promise<string>;

    deleteStateBatch(
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

    insideFraudProofWindow(
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    libAddressManager(overrides?: CallOverrides): Promise<string>;

    messenger(overrides?: CallOverrides): Promise<string>;

    resolve(
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    rollBackL2Chain(
      _shouldRollBack: PromiseOrValue<BigNumberish>,
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFraudProofWindow(
      _fraudProofWindow: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyStateCommitment(
      _element: PromiseOrValue<BytesLike>,
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      _proof: Lib_BVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "DistributeTssReward(uint256,uint256,uint256,address[])"(
      _startBlockNumber?: PromiseOrValue<BigNumberish> | null,
      _length?: null,
      _batchTime?: PromiseOrValue<BigNumberish> | null,
      _tssMembers?: null
    ): DistributeTssRewardEventFilter;
    DistributeTssReward(
      _startBlockNumber?: PromiseOrValue<BigNumberish> | null,
      _length?: null,
      _batchTime?: PromiseOrValue<BigNumberish> | null,
      _tssMembers?: null
    ): DistributeTssRewardEventFilter;

    "RollBackL2Chain(uint256)"(
      _startBlockNumber?: PromiseOrValue<BigNumberish> | null
    ): RollBackL2ChainEventFilter;
    RollBackL2Chain(
      _startBlockNumber?: PromiseOrValue<BigNumberish> | null
    ): RollBackL2ChainEventFilter;

    "StateBatchAppended(uint256,bytes32,uint256,uint256,bytes,bytes)"(
      _batchIndex?: PromiseOrValue<BigNumberish> | null,
      _batchRoot?: null,
      _batchSize?: null,
      _prevTotalElements?: null,
      _signature?: null,
      _extraData?: null
    ): StateBatchAppendedEventFilter;
    StateBatchAppended(
      _batchIndex?: PromiseOrValue<BigNumberish> | null,
      _batchRoot?: null,
      _batchSize?: null,
      _prevTotalElements?: null,
      _signature?: null,
      _extraData?: null
    ): StateBatchAppendedEventFilter;

    "StateBatchDeleted(uint256,bytes32)"(
      _batchIndex?: PromiseOrValue<BigNumberish> | null,
      _batchRoot?: null
    ): StateBatchDeletedEventFilter;
    StateBatchDeleted(
      _batchIndex?: PromiseOrValue<BigNumberish> | null,
      _batchRoot?: null
    ): StateBatchDeletedEventFilter;
  };

  estimateGas: {
    FRAUD_PROOF_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    SEQUENCER_PUBLISH_WINDOW(overrides?: CallOverrides): Promise<BigNumber>;

    appendStateBatch(
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    batches(overrides?: CallOverrides): Promise<BigNumber>;

    deleteStateBatch(
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getLastSequencerTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalBatches(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalElements(overrides?: CallOverrides): Promise<BigNumber>;

    insideFraudProofWindow(
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    libAddressManager(overrides?: CallOverrides): Promise<BigNumber>;

    messenger(overrides?: CallOverrides): Promise<BigNumber>;

    resolve(
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rollBackL2Chain(
      _shouldRollBack: PromiseOrValue<BigNumberish>,
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFraudProofWindow(
      _fraudProofWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyStateCommitment(
      _element: PromiseOrValue<BytesLike>,
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      _proof: Lib_BVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FRAUD_PROOF_WINDOW(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SEQUENCER_PUBLISH_WINDOW(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    appendStateBatch(
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    batches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deleteStateBatch(
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getLastSequencerTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalBatches(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalElements(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    insideFraudProofWindow(
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    libAddressManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messenger(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolve(
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rollBackL2Chain(
      _shouldRollBack: PromiseOrValue<BigNumberish>,
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFraudProofWindow(
      _fraudProofWindow: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyStateCommitment(
      _element: PromiseOrValue<BytesLike>,
      _batchHeader: Lib_BVMCodec.ChainBatchHeaderStruct,
      _proof: Lib_BVMCodec.ChainInclusionProofStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}