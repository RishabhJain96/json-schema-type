import {BaseType} from "./base";

export type BooleanType = BaseType & {
  type: "boolean";
  default?: boolean;
};

export type ResolvedBooleanType<T> = T extends BooleanType ? boolean : never;
