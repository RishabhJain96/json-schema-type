import {BaseType} from "./base";

type BaseNumber = {
  minimum?: number;
  exclusiveMinimum?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;
};

export type NumberType = BaseType &
  BaseNumber & {
    readonly type: "number";
  };

export type IntegerType = BaseType &
  BaseNumber & {
    readonly type: "integer";
  };

export type ResolvedNumberType<T> = T extends NumberType | IntegerType
  ? number
  : never;
