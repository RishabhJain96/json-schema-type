import {BaseType} from "./base";

export type NullType = BaseType & {
  type: "null";
};

export type ResolvedNullType<T> = T extends NullType ? null : never;
