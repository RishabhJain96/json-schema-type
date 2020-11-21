import {ResolvedAllOf} from "..";

const basic = <const>{
  allOf: [{type: "string"}, {type: "string", pattern: ""}],
};

type ResolvedBasic = ResolvedAllOf<typeof basic>;

const no = <const>{
  anyOf: [],
};

type ResolvedNo = ResolvedAllOf<typeof no>;
