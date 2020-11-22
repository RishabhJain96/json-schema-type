import {List, Union, Object, Any} from "ts-toolbelt";

import {BaseType} from "../basics/base";
import {JsonSchema, ResolvedJsonSchema} from "../..";

export type AllOf = BaseType & {
  allOf: readonly any[];
};

export type ResolvedAllOf<
  T,
  Base extends object = {},
  Items extends List.List = T extends AllOf ? T["allOf"] : never,
  Excluded = T extends AllOf ? Object.Omit<T, "allOf"> : never,
  Total = T extends AllOf
    ? Union.IntersectOf<
        {
          [k in keyof Items]: Items[k] & Excluded;
        }[number]
      >
    : never
> = Total extends JsonSchema ? ResolvedJsonSchema<Total, Base> : never;
