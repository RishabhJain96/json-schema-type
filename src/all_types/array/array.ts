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

export type ArrayType = (ArrayWithItem | BasicArrayType) & ArrayRestrictions;

export type ResolvedArrayType<T extends ArrayType> = T extends ArrayWithItem
  ? ResolvedJsonSchema<T["items"]>[]
  : T extends BasicArrayType
  ? any[]
  : never;
