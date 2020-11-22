import {List, Any, Union, Object} from "ts-toolbelt";
import {JsonSchema, ResolvedJsonSchema} from "../..";
import {BaseType} from "../basics/base";

export type AnyOf = BaseType & {
  anyOf: readonly any[];
};

export type ResolvedAnyOf<
  T,
  Base extends object = {},
  Excluded = T extends AnyOf ? Object.Omit<T, "anyOf"> : never,
  Items extends List.List = T extends AnyOf ? T["anyOf"] : [],
  K extends Any.Key = List.Keys<Items>,
  AL = List.AtLeast<
    Union.ListOf<
      {
        [k in K]-?: List.At<Items, k>;
      }[K]
    >
  >
> = AL extends List.List
  ? AL[number] & Excluded extends JsonSchema
    ? ResolvedJsonSchema<AL[number] & Excluded, Base>
    : never
  : never;
