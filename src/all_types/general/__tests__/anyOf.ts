import {ResolvedAnyOf} from "..";

const basic = <const>{
  anyOf: [
    {type: "string"},
    {type: "integer"},
    {type: "object", properties: {name: {type: "string"}}},
    {type: "object", properties: {user: {type: "string"}}},
  ],
};

type ResolvedBasic = ResolvedAnyOf<typeof basic>;

const test: ResolvedBasic = {
  name: "test",
  user: "wow",
};

const no = <const>{
  anyOf: [],
};

type ResolvedNo = ResolvedAnyOf<typeof no>;

const allOfAnyOf = <const>{
  type: "object",
  anyOf: [
    {
      properties: {
        extractStyles: {
          $ref: "#/definitions/extractStyling/properties/extractStyles",
        },
      },
    },
  ],
};

type ResolvedAllOf = ResolvedAnyOf<typeof allOfAnyOf>;
