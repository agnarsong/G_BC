/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
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

export interface IVerifierInterface extends utils.Interface {
  functions: {
    "verifyOneStepProof((address,uint256,uint256,address,(uint64,uint256,uint64,address,uint256,bytes,uint256,uint256,uint256),bytes32,bytes32),bytes32,bytes)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "verifyOneStepProof"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verifyOneStepProof",
    values: [
      VerificationContext.ContextStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyOneStepProof",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVerifierInterface;

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
    verifyOneStepProof(
      ctx: VerificationContext.ContextStruct,
      currStateHash: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  verifyOneStepProof(
    ctx: VerificationContext.ContextStruct,
    currStateHash: PromiseOrValue<BytesLike>,
    encoded: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    verifyOneStepProof(
      ctx: VerificationContext.ContextStruct,
      currStateHash: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    verifyOneStepProof(
      ctx: VerificationContext.ContextStruct,
      currStateHash: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyOneStepProof(
      ctx: VerificationContext.ContextStruct,
      currStateHash: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}