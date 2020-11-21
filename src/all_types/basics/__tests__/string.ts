import {ResolvedStringType} from "../string";

const basic = <const>{
  type: "string",
};

// should be string
type ResolvedBasic = ResolvedStringType<typeof basic>;
