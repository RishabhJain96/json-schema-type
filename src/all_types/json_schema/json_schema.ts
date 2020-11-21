import {ArrayType, ResolvedArrayType} from "../array/array";
import {
  BooleanType,
  IntegerType,
  NullType,
  NumberType,
  ResolvedBooleanType,
  ResolvedNullType,
  ResolvedNumberType,
  ResolvedStringType,
  StringType,
} from "../basics";
import {ObjectType, ResolvedObjectType} from "../object/object";
import {MultiType, ResolvedMultiType} from "./type";

export type JsonSchema =
  | StringType
  | NumberType
  | IntegerType
  | BooleanType
  | NullType
  | ArrayType
  | ObjectType
  | MultiType;

export type ResolvedJsonSchema<T extends JsonSchema> = T extends StringType
  ? ResolvedStringType<T>
  : T extends NumberType | IntegerType
  ? ResolvedNumberType<T>
  : T extends BooleanType
  ? ResolvedBooleanType<T>
  : T extends NullType
  ? ResolvedNullType<T>
  : T extends ArrayType
  ? ResolvedArrayType<T>
  : T extends MultiType
  ? ResolvedMultiType<T>
  : T extends ObjectType
  ? ResolvedObjectType<T>
  : never;
