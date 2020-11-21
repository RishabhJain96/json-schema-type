import {Any} from "ts-toolbelt";
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

type TypeResolution<T, Base extends object = {}> = T extends TypeName
  ? {type: T} extends JsonSchema
    ? ResolvedJsonSchema<Any.Cast<{type: T}, JsonSchema>, Base>
    : never
  : never;

export type ResolvedMultiType<
  T extends MultiType,
  Base extends object = {}
> = TypeResolution<T["type"][number], Base>;
