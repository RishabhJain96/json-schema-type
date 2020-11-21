import {List} from "ts-toolbelt";

import {BaseType} from "../basics/base";
import {JsonSchema, ResolvedJsonSchema} from "../..";

export type AnyOf = BaseType & {
  anyOf: readonly JsonSchema[];
};

export type ResolvedAnyOf<T> = T extends AnyOf
  ? ResolvedJsonSchema<List.UnionOf<T["anyOf"]>>
  : never;
