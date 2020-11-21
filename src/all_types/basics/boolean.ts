export type BooleanType = {
  type: "boolean";
};

export type ResolvedBooleanType<T> = T extends BooleanType ? boolean : never;
