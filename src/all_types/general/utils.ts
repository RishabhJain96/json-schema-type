import {List, Boolean} from "ts-toolbelt";

export type HasSlash<T extends string> = T extends `${infer U}/${infer F}`
  ? Boolean.True
  : Boolean.False;

export type GetPath<T extends string> = List.Filter<
  List.Flatten<
    HasSlash<T> extends Boolean.True
      ? T extends `${infer U}/${infer F}`
        ? HasSlash<F> extends Boolean.True
          ? [U, GetPath<F>]
          : [U, F]
        : []
      : []
  >,
  ""
>;

export type GetRefPath<T extends string> = T extends `#${infer U}`
  ? GetPath<U>
  : never;
