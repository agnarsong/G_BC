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

export interface RollupBaseInterface extends utils.Interface {
  functions: {
    "advanceStake(uint256)": FunctionFragment;
    "assertions()": FunctionFragment;
    "baseStakeAmount()": FunctionFragment;
    "challengeAssertion(address[2],uint256[2])": FunctionFragment;
    "completeChallenge(address,address)": FunctionFragment;
    "confirmFirstUnresolvedAssertion()": FunctionFragment;
    "confirmedInboxSize()": FunctionFragment;
    "createAssertion(bytes32,uint256)": FunctionFragment;
    "createAssertionWithStateBatch(bytes32,uint256,bytes32[],uint256,bytes)": FunctionFragment;
    "currentRequiredStake()": FunctionFragment;
    "isStaked(address)": FunctionFragment;
    "minimumAssertionPeriod()": FunctionFragment;
    "rejectFirstUnresolvedAssertion()": FunctionFragment;
    "removeStake(address)": FunctionFragment;
    "stake(uint256,address)": FunctionFragment;
    "stakeToken()": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
    "verifier()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "advanceStake"
      | "assertions"
      | "baseStakeAmount"
      | "challengeAssertion"
      | "completeChallenge"
      | "confirmFirstUnresolvedAssertion"
      | "confirmedInboxSize"
      | "createAssertion"
      | "createAssertionWithStateBatch"
      | "currentRequiredStake"
      | "isStaked"
      | "minimumAssertionPeriod"
      | "rejectFirstUnresolvedAssertion"
      | "removeStake"
      | "stake"
      | "stakeToken"
      | "unstake"
      | "verifier"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "advanceStake",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "assertions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "baseStakeAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "challengeAssertion",
    values: [
      [PromiseOrValue<string>, PromiseOrValue<string>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "completeChallenge",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmFirstUnresolvedAssertion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "confirmedInboxSize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createAssertion",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAssertionWithStateBatch",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRequiredStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isStaked",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "minimumAssertionPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rejectFirstUnresolvedAssertion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeStake",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "advanceStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assertions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "baseStakeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "challengeAssertion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "completeChallenge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmFirstUnresolvedAssertion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmedInboxSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAssertion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAssertionWithStateBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRequiredStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isStaked", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumAssertionPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rejectFirstUnresolvedAssertion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AssertionChallenged(uint256,address)": EventFragment;
    "AssertionConfirmed(uint256)": EventFragment;
    "AssertionCreated(uint256,address,bytes32,uint256)": EventFragment;
    "AssertionRejected(uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "StakerStaked(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssertionChallenged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssertionConfirmed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssertionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssertionRejected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakerStaked"): EventFragment;
}

export interface AssertionChallengedEventObject {
  assertionID: BigNumber;
  challengeAddr: string;
}
export type AssertionChallengedEvent = TypedEvent<
  [BigNumber, string],
  AssertionChallengedEventObject
>;

export type AssertionChallengedEventFilter =
  TypedEventFilter<AssertionChallengedEvent>;

export interface AssertionConfirmedEventObject {
  assertionID: BigNumber;
}
export type AssertionConfirmedEvent = TypedEvent<
  [BigNumber],
  AssertionConfirmedEventObject
>;

export type AssertionConfirmedEventFilter =
  TypedEventFilter<AssertionConfirmedEvent>;

export interface AssertionCreatedEventObject {
  assertionID: BigNumber;
  asserterAddr: string;
  vmHash: string;
  inboxSize: BigNumber;
}
export type AssertionCreatedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  AssertionCreatedEventObject
>;

export type AssertionCreatedEventFilter =
  TypedEventFilter<AssertionCreatedEvent>;

export interface AssertionRejectedEventObject {
  assertionID: BigNumber;
}
export type AssertionRejectedEvent = TypedEvent<
  [BigNumber],
  AssertionRejectedEventObject
>;

export type AssertionRejectedEventFilter =
  TypedEventFilter<AssertionRejectedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface StakerStakedEventObject {
  stakerAddr: string;
  assertionID: BigNumber;
}
export type StakerStakedEvent = TypedEvent<
  [string, BigNumber],
  StakerStakedEventObject
>;

export type StakerStakedEventFilter = TypedEventFilter<StakerStakedEvent>;

export interface RollupBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RollupBaseInterface;

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
    advanceStake(
      assertionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    assertions(overrides?: CallOverrides): Promise<[string]>;

    baseStakeAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    challengeAssertion(
      players: [PromiseOrValue<string>, PromiseOrValue<string>],
      assertionIDs: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    completeChallenge(
      winner: PromiseOrValue<string>,
      loser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    confirmFirstUnresolvedAssertion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    confirmedInboxSize(overrides?: CallOverrides): Promise<[BigNumber]>;

    createAssertion(
      vmHash: PromiseOrValue<BytesLike>,
      inboxSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createAssertionWithStateBatch(
      vmHash: PromiseOrValue<BytesLike>,
      inboxSize: PromiseOrValue<BigNumberish>,
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    currentRequiredStake(overrides?: CallOverrides): Promise<[BigNumber]>;

    isStaked(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    minimumAssertionPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    rejectFirstUnresolvedAssertion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeStake(
      stakerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stake(
      stakeAmount: PromiseOrValue<BigNumberish>,
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<[string]>;

    unstake(
      stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    verifier(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  advanceStake(
    assertionID: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  assertions(overrides?: CallOverrides): Promise<string>;

  baseStakeAmount(overrides?: CallOverrides): Promise<BigNumber>;

  challengeAssertion(
    players: [PromiseOrValue<string>, PromiseOrValue<string>],
    assertionIDs: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  completeChallenge(
    winner: PromiseOrValue<string>,
    loser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  confirmFirstUnresolvedAssertion(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  confirmedInboxSize(overrides?: CallOverrides): Promise<BigNumber>;

  createAssertion(
    vmHash: PromiseOrValue<BytesLike>,
    inboxSize: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createAssertionWithStateBatch(
    vmHash: PromiseOrValue<BytesLike>,
    inboxSize: PromiseOrValue<BigNumberish>,
    _batch: PromiseOrValue<BytesLike>[],
    _shouldStartAtElement: PromiseOrValue<BigNumberish>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  currentRequiredStake(overrides?: CallOverrides): Promise<BigNumber>;

  isStaked(
    addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  rejectFirstUnresolvedAssertion(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeStake(
    stakerAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stake(
    stakeAmount: PromiseOrValue<BigNumberish>,
    operator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakeToken(overrides?: CallOverrides): Promise<string>;

  unstake(
    stakeAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  verifier(overrides?: CallOverrides): Promise<string>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    advanceStake(
      assertionID: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    assertions(overrides?: CallOverrides): Promise<string>;

    baseStakeAmount(overrides?: CallOverrides): Promise<BigNumber>;

    challengeAssertion(
      players: [PromiseOrValue<string>, PromiseOrValue<string>],
      assertionIDs: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: CallOverrides
    ): Promise<string>;

    completeChallenge(
      winner: PromiseOrValue<string>,
      loser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmFirstUnresolvedAssertion(overrides?: CallOverrides): Promise<void>;

    confirmedInboxSize(overrides?: CallOverrides): Promise<BigNumber>;

    createAssertion(
      vmHash: PromiseOrValue<BytesLike>,
      inboxSize: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createAssertionWithStateBatch(
      vmHash: PromiseOrValue<BytesLike>,
      inboxSize: PromiseOrValue<BigNumberish>,
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    currentRequiredStake(overrides?: CallOverrides): Promise<BigNumber>;

    isStaked(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    rejectFirstUnresolvedAssertion(overrides?: CallOverrides): Promise<void>;

    removeStake(
      stakerAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      stakeAmount: PromiseOrValue<BigNumberish>,
      operator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakeToken(overrides?: CallOverrides): Promise<string>;

    unstake(
      stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    verifier(overrides?: CallOverrides): Promise<string>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AssertionChallenged(uint256,address)"(
      assertionID?: null,
      challengeAddr?: null
    ): AssertionChallengedEventFilter;
    AssertionChallenged(
      assertionID?: null,
      challengeAddr?: null
    ): AssertionChallengedEventFilter;

    "AssertionConfirmed(uint256)"(
      assertionID?: null
    ): AssertionConfirmedEventFilter;
    AssertionConfirmed(assertionID?: null): AssertionConfirmedEventFilter;

    "AssertionCreated(uint256,address,bytes32,uint256)"(
      assertionID?: null,
      asserterAddr?: null,
      vmHash?: null,
      inboxSize?: null
    ): AssertionCreatedEventFilter;
    AssertionCreated(
      assertionID?: null,
      asserterAddr?: null,
      vmHash?: null,
      inboxSize?: null
    ): AssertionCreatedEventFilter;

    "AssertionRejected(uint256)"(
      assertionID?: null
    ): AssertionRejectedEventFilter;
    AssertionRejected(assertionID?: null): AssertionRejectedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "StakerStaked(address,uint256)"(
      stakerAddr?: null,
      assertionID?: null
    ): StakerStakedEventFilter;
    StakerStaked(
      stakerAddr?: null,
      assertionID?: null
    ): StakerStakedEventFilter;
  };

  estimateGas: {
    advanceStake(
      assertionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    assertions(overrides?: CallOverrides): Promise<BigNumber>;

    baseStakeAmount(overrides?: CallOverrides): Promise<BigNumber>;

    challengeAssertion(
      players: [PromiseOrValue<string>, PromiseOrValue<string>],
      assertionIDs: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    completeChallenge(
      winner: PromiseOrValue<string>,
      loser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    confirmFirstUnresolvedAssertion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    confirmedInboxSize(overrides?: CallOverrides): Promise<BigNumber>;

    createAssertion(
      vmHash: PromiseOrValue<BytesLike>,
      inboxSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createAssertionWithStateBatch(
      vmHash: PromiseOrValue<BytesLike>,
      inboxSize: PromiseOrValue<BigNumberish>,
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    currentRequiredStake(overrides?: CallOverrides): Promise<BigNumber>;

    isStaked(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minimumAssertionPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    rejectFirstUnresolvedAssertion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeStake(
      stakerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stake(
      stakeAmount: PromiseOrValue<BigNumberish>,
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    unstake(
      stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    verifier(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    advanceStake(
      assertionID: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    assertions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseStakeAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    challengeAssertion(
      players: [PromiseOrValue<string>, PromiseOrValue<string>],
      assertionIDs: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
      ],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    completeChallenge(
      winner: PromiseOrValue<string>,
      loser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    confirmFirstUnresolvedAssertion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    confirmedInboxSize(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAssertion(
      vmHash: PromiseOrValue<BytesLike>,
      inboxSize: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createAssertionWithStateBatch(
      vmHash: PromiseOrValue<BytesLike>,
      inboxSize: PromiseOrValue<BigNumberish>,
      _batch: PromiseOrValue<BytesLike>[],
      _shouldStartAtElement: PromiseOrValue<BigNumberish>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    currentRequiredStake(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isStaked(
      addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minimumAssertionPeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rejectFirstUnresolvedAssertion(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeStake(
      stakerAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      stakeAmount: PromiseOrValue<BigNumberish>,
      operator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unstake(
      stakeAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
