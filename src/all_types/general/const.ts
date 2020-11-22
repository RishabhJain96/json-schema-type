export type ConstType<T = any> = {
  const: T;
};

export type ResolvedConstType<T> = T extends ConstType<infer U> ? U : never;
