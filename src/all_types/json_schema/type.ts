import {Any, List, Object} from "ts-toolbelt";
import {ArrayType} from "../array/array";
import {
  BooleanType,
  IntegerType,
  NullType,
  NumberType,
  StringType,
} from "../basics";
import {ObjectType} from "../object/object";
import {JsonSchema, ResolvedJsonSchema} from "./json_schema";

type ExtractType<T extends {type: string}> = T["type"];

export type TypeName =
  | ExtractType<StringType>
  | ExtractType<NumberType>
  | ExtractType<IntegerType>
  | ExtractType<BooleanType>
  | ExtractType<NullType>
  | ExtractType<ArrayType>
  | ExtractType<ObjectType>;

export type MultiType = {
  type: readonly TypeName[];
};

export type ResolvedMultiType<
  T,
  Base extends object = {},
  Types extends List.List = T extends MultiType ? T["type"] : [],
  WithoutType = T extends MultiType ? Object.Omit<T, "type"> : {}
> = T extends MultiType
  ? {
      [k in keyof Types]: ResolvedJsonSchema<
        Any.Cast<{type: Types[k]} & WithoutType, JsonSchema>,
        Base
      >;
    }[number]
  : never;
