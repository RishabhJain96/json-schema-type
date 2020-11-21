import {BaseType} from "../basics/base";
import {JsonSchema, ResolvedJsonSchema} from "../json_schema/json_schema";

type ArrayRestrictions = {
  additionalItems?: boolean | JsonSchema;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
};

type ArrayWithItem = {
  type: "array";
  items: JsonSchema;
};

type BasicArrayType = {
  type: "array";
};

export type ArrayType = (ArrayWithItem | BasicArrayType) &
  ArrayRestrictions &
  BaseType;

export type ResolvedArrayType<
  T extends ArrayType,
  Base extends object = {}
> = T extends ArrayWithItem
  ? ResolvedJsonSchema<T["items"], Base>[]
  : T extends BasicArrayType
  ? any[]
  : never;
