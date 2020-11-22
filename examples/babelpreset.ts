import {ResolvedJsonSchema} from "../src";

const babelPreset = <const>{
  type: "array",
  items: {
    type: ["string", "array"],
    items: {
      description: "the preset name in .[0] and the options object in .[1]",
      type: ["string", "object"],
    },
  },
};

type BabelPreset = ResolvedJsonSchema<typeof babelPreset>;

const preset: BabelPreset = [["test", {type: "test"}]];
