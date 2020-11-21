import {List, Any, Union} from "ts-toolbelt";
import {JsonSchema, ResolvedJsonSchema} from "../..";
import {BaseType} from "../basics/base";

export type AnyOf = BaseType & {
  anyOf: readonly any[];
};

export type ResolvedAnyOf<
  T,
  Base extends object = {},
  Items extends List.List = T extends AnyOf ? T["anyOf"] : [],
  K extends Any.Key = List.Keys<Items>,
  AL = List.AtLeast<
    Union.ListOf<
      {
        [k in K]-?: List.At<Items, k> extends JsonSchema
          ? List.At<Items, k>
          : never;
      }[K]
    >
  >
> = AL extends List.List
  ? AL[number] extends JsonSchema
    ? ResolvedJsonSchema<AL[number], Base>
    : never
  : never;
