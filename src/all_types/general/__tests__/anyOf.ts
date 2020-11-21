import {ResolvedAnyOf} from "..";

const basic = <const>{
  anyOf: [{type: "string"}, {type: "integer"}],
};

type ResolvedBasic = ResolvedAnyOf<typeof basic>;

const no = <const>{
  anyOf: [],
};

type ResolvedNo = ResolvedAnyOf<typeof no>;
