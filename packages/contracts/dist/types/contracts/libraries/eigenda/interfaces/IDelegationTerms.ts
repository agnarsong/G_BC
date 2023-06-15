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
  PayableOverrides,
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
} from "../../../../common";

export interface IDelegationTermsInterface extends utils.Interface {
  functions: {
    "onDelegationReceived(address,address[],uint256[])": FunctionFragment;
    "onDelegationWithdrawn(address,address[],uint256[])": FunctionFragment;
    "payForService(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "onDelegationReceived"
      | "onDelegationWithdrawn"
      | "payForService"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "onDelegationReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onDelegationWithdrawn",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "payForService",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "onDelegationReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onDelegationWithdrawn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payForService",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IDelegationTerms extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IDelegationTermsInterface;

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
    onDelegationReceived(
      delegator: PromiseOrValue<string>,
      investorStrats: PromiseOrValue<string>[],
      investorShares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onDelegationWithdrawn(
      delegator: PromiseOrValue<string>,
      investorStrats: PromiseOrValue<string>[],
      investorShares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    payForService(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  onDelegationReceived(
    delegator: PromiseOrValue<string>,
    investorStrats: PromiseOrValue<string>[],
    investorShares: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onDelegationWithdrawn(
    delegator: PromiseOrValue<string>,
    investorStrats: PromiseOrValue<string>[],
    investorShares: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  payForService(
    token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    onDelegationReceived(
      delegator: PromiseOrValue<string>,
      investorStrats: PromiseOrValue<string>[],
      investorShares: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    onDelegationWithdrawn(
      delegator: PromiseOrValue<string>,
      investorStrats: PromiseOrValue<string>[],
      investorShares: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    payForService(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    onDelegationReceived(
      delegator: PromiseOrValue<string>,
      investorStrats: PromiseOrValue<string>[],
      investorShares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onDelegationWithdrawn(
      delegator: PromiseOrValue<string>,
      investorStrats: PromiseOrValue<string>[],
      investorShares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    payForService(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onDelegationReceived(
      delegator: PromiseOrValue<string>,
      investorStrats: PromiseOrValue<string>[],
      investorShares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onDelegationWithdrawn(
      delegator: PromiseOrValue<string>,
      investorStrats: PromiseOrValue<string>[],
      investorShares: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    payForService(
      token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}