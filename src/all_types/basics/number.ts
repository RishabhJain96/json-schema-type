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
    type: "number";
  };

export type IntegerType = BaseType &
  BaseNumber & {
    type: "integer";
  };

export type ResolvedNumberType<T> = T extends NumberType | IntegerType
  ? number
  : never;
