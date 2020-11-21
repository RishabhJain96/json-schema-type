import {ResolvedEnumType} from "../enum";

const basic = <const>{
  enum: ["foo", "bar", undefined],
};

type ResolvedBasic = ResolvedEnumType<typeof basic>;

const enumWithString = <const>{
  type: "string",
  enum: ["foo", "bar", undefined],
};

type ResolvedEnumWithString = ResolvedEnumType<typeof enumWithString>;
