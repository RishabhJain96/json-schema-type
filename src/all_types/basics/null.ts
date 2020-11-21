export type NullType = {
  type: "null";
};

export type ResolvedNullType<T> = T extends NullType ? null : never;
