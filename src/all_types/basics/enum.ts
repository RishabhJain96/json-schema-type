export type EnumType<T = any> = {
  enum: readonly T[];
};

export type ResolvedEnumType<T> = T extends EnumType<infer U> ? U : never;
