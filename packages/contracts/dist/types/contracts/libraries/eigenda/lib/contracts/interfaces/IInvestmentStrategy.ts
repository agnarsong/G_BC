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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../../../common";

export interface IInvestmentStrategyInterface extends utils.Interface {
  functions: {
    "deposit(address,uint256)": FunctionFragment;
    "explanation()": FunctionFragment;
    "sharesToUnderlying(uint256)": FunctionFragment;
    "sharesToUnderlyingView(uint256)": FunctionFragment;
    "totalShares()": FunctionFragment;
    "underlyingToShares(uint256)": FunctionFragment;
    "underlyingToSharesView(uint256)": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "userUnderlying(address)": FunctionFragment;
    "userUnderlyingView(address)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deposit"
      | "explanation"
      | "sharesToUnderlying"
      | "sharesToUnderlyingView"
      | "totalShares"
      | "underlyingToShares"
      | "underlyingToSharesView"
      | "underlyingToken"
      | "userUnderlying"
      | "userUnderlyingView"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deposit",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "explanation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sharesToUnderlying",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sharesToUnderlyingView",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToShares",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToSharesView",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "userUnderlying",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "userUnderlyingView",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "explanation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharesToUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharesToUnderlyingView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToSharesView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userUnderlyingView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface IInvestmentStrategy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IInvestmentStrategyInterface;

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
    deposit(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    explanation(overrides?: CallOverrides): Promise<[string]>;

    sharesToUnderlying(
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sharesToUnderlyingView(
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    underlyingToShares(
      amountUnderlying: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    underlyingToSharesView(
      amountUnderlying: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    userUnderlying(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    userUnderlyingView(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdraw(
      depositor: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deposit(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  explanation(overrides?: CallOverrides): Promise<string>;

  sharesToUnderlying(
    amountShares: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sharesToUnderlyingView(
    amountShares: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  underlyingToShares(
    amountUnderlying: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  underlyingToSharesView(
    amountUnderlying: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  userUnderlying(
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  userUnderlyingView(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdraw(
    depositor: PromiseOrValue<string>,
    token: PromiseOrValue<string>,
    amountShares: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deposit(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    explanation(overrides?: CallOverrides): Promise<string>;

    sharesToUnderlying(
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sharesToUnderlyingView(
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToShares(
      amountUnderlying: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingToSharesView(
      amountUnderlying: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    userUnderlying(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userUnderlyingView(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      depositor: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    deposit(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    explanation(overrides?: CallOverrides): Promise<BigNumber>;

    sharesToUnderlying(
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sharesToUnderlyingView(
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToShares(
      amountUnderlying: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingToSharesView(
      amountUnderlying: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    userUnderlying(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    userUnderlyingView(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      depositor: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    explanation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sharesToUnderlying(
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sharesToUnderlyingView(
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlyingToShares(
      amountUnderlying: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingToSharesView(
      amountUnderlying: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    userUnderlying(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    userUnderlyingView(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      depositor: PromiseOrValue<string>,
      token: PromiseOrValue<string>,
      amountShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}