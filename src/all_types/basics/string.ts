import {BaseType} from "./base";

export type StringType = BaseType & {
  type: "string";
  minLen?: number;
  maxLen?: number;
  pattern?: string; // this should be a regexp
};

export type ResolvedStringType<T> = T extends StringType ? string : never;
