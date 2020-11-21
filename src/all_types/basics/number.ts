type BaseNumber = {
  minimum?: number;
  exclusiveMinimum?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  multipleOf?: number;
};

export type NumberType = BaseNumber & {
  type: "number";
};

export type IntegerType = BaseNumber & {
  type: "integer";
};

export type ResolvedNumberType<T> = T extends NumberType | IntegerType
  ? number
  : never;
