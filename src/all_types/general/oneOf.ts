import {List} from "ts-toolbelt";

import {BaseType} from "../basics/base";
import {JsonSchema, ResolvedJsonSchema} from "../..";

export type OneOf = BaseType & {
  oneOf: readonly JsonSchema[];
};

export type ResolvedOneOf<T, Base extends object = {}> = T extends OneOf
  ? ResolvedJsonSchema<List.UnionOf<T["oneOf"]>, Base>
  : never;
