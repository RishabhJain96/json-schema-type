import {List} from "ts-toolbelt";
import {AllOf, ResolvedAllOf} from "..";
import {IsType} from "../../utils/IsType";

const basic = <const>{
  allOf: [{type: "string"}, {type: "string", pattern: ""}],
};

type ResolvedBasic = ResolvedAllOf<typeof basic>;

const no = <const>{
  allOf: [],
};

type ResolvedNo = ResolvedAllOf<typeof no>;

const simpleMergeTest = <const>{
  type: "object",
  allOf: [
    {
      properties: {
        name: {type: "string"},
        random: {type: "boolean"},
      },
    },
    {required: ["name"]},
  ],
};

type ResolvedSimpleMergeTest = ResolvedAllOf<typeof simpleMergeTest>;

type T = IsType<ResolvedSimpleMergeTest, List.List>;

const matchingKeyMergeTest = <const>{
  type: "object",
  allOf: [
    {
      properties: {
        name: {type: "string"},
        random: {type: "boolean"},
      },
    },
    {
      properties: {
        second: {type: "string"},
      },
    },
    {required: ["name"]},
  ],
};
type ResolvedMatchingKeyMergeTest = ResolvedAllOf<typeof matchingKeyMergeTest>;
