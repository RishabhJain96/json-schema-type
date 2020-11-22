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
import {EnumType, ResolvedEnumType} from "../basics/enum";
import {
  AllOf,
  AnyOf,
  OneOf,
  ResolvedAllOf,
  ResolvedAnyOf,
  ResolvedOneOf,
} from "../general";
import {Ref, ResolvedRef} from "../general/ref";
import {ObjectType, ResolvedObjectType} from "../object/object";
import {MultiType, ResolvedMultiType} from "./type";

type DefinitionRecord = {[key: string]: JsonSchema | DefinitionRecord};

export type JsonSchema = {id?: string; definitions?: DefinitionRecord} & (
  | StringType
  | NumberType
  | IntegerType
  | BooleanType
  | NullType
  | ArrayType
  | ObjectType
  | MultiType
  | EnumType
  | AnyOf
  | AllOf
  | OneOf
  | Ref
);

export type ResolvedJsonSchema<
  T extends JsonSchema,
  Root extends object = T
> = T extends Ref
  ? ResolvedRef<T, Root>
  : T extends AllOf
  ? ResolvedAllOf<T, Root>
  : T extends AnyOf
  ? ResolvedAnyOf<T, Root>
  : T extends OneOf
  ? ResolvedOneOf<T, Root>
  : T extends EnumType
  ? ResolvedEnumType<T>
  : T extends StringType
  ? ResolvedStringType<T>
  : T extends NumberType | IntegerType
  ? ResolvedNumberType<T>
  : T extends BooleanType
  ? ResolvedBooleanType<T>
  : T extends NullType
  ? ResolvedNullType<T>
  : T extends ArrayType
  ? ResolvedArrayType<T, Root>
  : T extends MultiType
  ? ResolvedMultiType<T, Root>
  : T extends ObjectType
  ? ResolvedObjectType<T, Root>
  : never;
