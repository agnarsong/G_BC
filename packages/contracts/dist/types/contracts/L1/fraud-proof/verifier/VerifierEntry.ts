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
} from "../../../../common";

export declare namespace EVMTypesLib {
  export type TransactionStruct = {
    nonce: PromiseOrValue<BigNumberish>;
    gasPrice: PromiseOrValue<BigNumberish>;
    gas: PromiseOrValue<BigNumberish>;
    to: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    data: PromiseOrValue<BytesLike>;
    v: PromiseOrValue<BigNumberish>;
    r: PromiseOrValue<BigNumberish>;
    s: PromiseOrValue<BigNumberish>;
  };

  export type TransactionStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    nonce: BigNumber;
    gasPrice: BigNumber;
    gas: BigNumber;
    to: string;
    value: BigNumber;
    data: string;
    v: BigNumber;
    r: BigNumber;
    s: BigNumber;
  };
}

export declare namespace VerificationContext {
  export type ContextStruct = {
    coinbase: PromiseOrValue<string>;
    timestamp: PromiseOrValue<BigNumberish>;
    number: PromiseOrValue<BigNumberish>;
    origin: PromiseOrValue<string>;
    transaction: EVMTypesLib.TransactionStruct;
    inputRoot: PromiseOrValue<BytesLike>;
    txHash: PromiseOrValue<BytesLike>;
  };

  export type ContextStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string,
    EVMTypesLib.TransactionStructOutput,
    string,
    string
  ] & {
    coinbase: string;
    timestamp: BigNumber;
    number: BigNumber;
    origin: string;
    transaction: EVMTypesLib.TransactionStructOutput;
    inputRoot: string;
    txHash: string;
  };
}

export interface VerifierEntryInterface extends utils.Interface {
  functions: {
    "blockFinalizationVerifier()": FunctionFragment;
    "blockInitiationVerifier()": FunctionFragment;
    "callOpVerifier()": FunctionFragment;
    "environmentalOpVerifier()": FunctionFragment;
    "initialize()": FunctionFragment;
    "interTxVerifier()": FunctionFragment;
    "invalidOpVerifier()": FunctionFragment;
    "memoryOpVerifier()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setVerifier(uint8,address)": FunctionFragment;
    "stackOpVerifier()": FunctionFragment;
    "storageOpVerifier()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "verifyOneStepProof((address,uint256,uint256,address,(uint64,uint256,uint64,address,uint256,bytes,uint256,uint256,uint256),bytes32,bytes32),uint8,bytes32,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "blockFinalizationVerifier"
      | "blockInitiationVerifier"
      | "callOpVerifier"
      | "environmentalOpVerifier"
      | "initialize"
      | "interTxVerifier"
      | "invalidOpVerifier"
      | "memoryOpVerifier"
      | "owner"
      | "renounceOwnership"
      | "setVerifier"
      | "stackOpVerifier"
      | "storageOpVerifier"
      | "transferOwnership"
      | "verifyOneStepProof"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "blockFinalizationVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockInitiationVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callOpVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "environmentalOpVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "interTxVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "invalidOpVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "memoryOpVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setVerifier",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stackOpVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "storageOpVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyOneStepProof",
    values: [
      VerificationContext.ContextStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "blockFinalizationVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockInitiationVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callOpVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "environmentalOpVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "interTxVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "invalidOpVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "memoryOpVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stackOpVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storageOpVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyOneStepProof",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface VerifierEntry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VerifierEntryInterface;

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
    blockFinalizationVerifier(overrides?: CallOverrides): Promise<[string]>;

    blockInitiationVerifier(overrides?: CallOverrides): Promise<[string]>;

    callOpVerifier(overrides?: CallOverrides): Promise<[string]>;

    environmentalOpVerifier(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    interTxVerifier(overrides?: CallOverrides): Promise<[string]>;

    invalidOpVerifier(overrides?: CallOverrides): Promise<[string]>;

    memoryOpVerifier(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVerifier(
      verifier: PromiseOrValue<BigNumberish>,
      impl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stackOpVerifier(overrides?: CallOverrides): Promise<[string]>;

    storageOpVerifier(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifyOneStepProof(
      ctx: VerificationContext.ContextStruct,
      verifier: PromiseOrValue<BigNumberish>,
      currStateHash: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  blockFinalizationVerifier(overrides?: CallOverrides): Promise<string>;

  blockInitiationVerifier(overrides?: CallOverrides): Promise<string>;

  callOpVerifier(overrides?: CallOverrides): Promise<string>;

  environmentalOpVerifier(overrides?: CallOverrides): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  interTxVerifier(overrides?: CallOverrides): Promise<string>;

  invalidOpVerifier(overrides?: CallOverrides): Promise<string>;

  memoryOpVerifier(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVerifier(
    verifier: PromiseOrValue<BigNumberish>,
    impl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stackOpVerifier(overrides?: CallOverrides): Promise<string>;

  storageOpVerifier(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifyOneStepProof(
    ctx: VerificationContext.ContextStruct,
    verifier: PromiseOrValue<BigNumberish>,
    currStateHash: PromiseOrValue<BytesLike>,
    encoded: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    blockFinalizationVerifier(overrides?: CallOverrides): Promise<string>;

    blockInitiationVerifier(overrides?: CallOverrides): Promise<string>;

    callOpVerifier(overrides?: CallOverrides): Promise<string>;

    environmentalOpVerifier(overrides?: CallOverrides): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    interTxVerifier(overrides?: CallOverrides): Promise<string>;

    invalidOpVerifier(overrides?: CallOverrides): Promise<string>;

    memoryOpVerifier(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setVerifier(
      verifier: PromiseOrValue<BigNumberish>,
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stackOpVerifier(overrides?: CallOverrides): Promise<string>;

    storageOpVerifier(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyOneStepProof(
      ctx: VerificationContext.ContextStruct,
      verifier: PromiseOrValue<BigNumberish>,
      currStateHash: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    blockFinalizationVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    blockInitiationVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    callOpVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    environmentalOpVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    interTxVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    invalidOpVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    memoryOpVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVerifier(
      verifier: PromiseOrValue<BigNumberish>,
      impl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stackOpVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    storageOpVerifier(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifyOneStepProof(
      ctx: VerificationContext.ContextStruct,
      verifier: PromiseOrValue<BigNumberish>,
      currStateHash: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    blockFinalizationVerifier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    blockInitiationVerifier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callOpVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    environmentalOpVerifier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    interTxVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    invalidOpVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    memoryOpVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVerifier(
      verifier: PromiseOrValue<BigNumberish>,
      impl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stackOpVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    storageOpVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifyOneStepProof(
      ctx: VerificationContext.ContextStruct,
      verifier: PromiseOrValue<BigNumberish>,
      currStateHash: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}