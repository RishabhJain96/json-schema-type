import {List, Union} from "ts-toolbelt";

import {BaseType} from "../basics/base";
import {JsonSchema, ResolvedJsonSchema} from "../..";

export type AllOf = BaseType & {
  allOf: readonly JsonSchema[];
};

export type ResolvedAllOf<T, Base extends object = {}> = T extends AllOf
  ? Union.IntersectOf<ResolvedJsonSchema<List.UnionOf<T["allOf"]>, Base>>
  : never;
