import {ResolvedMultiType} from "../type";

const basic = <const>{
  type: ["string", "number"],
};

// should be string | number
type BasicResolved = ResolvedMultiType<typeof basic>;

const single = <const>{
  type: ["string"],
};

// should be string
type SingleResolved = ResolvedMultiType<typeof single>;

const multiArray = <const>{
  type: ["string", "array"],
  items: {
    type: "string",
  },
};

// should be string | string[]
type MultiArrayResolved = ResolvedMultiType<typeof multiArray>;
