import {ResolvedArrayType} from "../array";

const basicSchema = <const>{
  type: "array",
};

// should be any[]
type ResolvedBasic = ResolvedArrayType<typeof basicSchema>;

const schemaWithStringItems = <const>{
  type: "array",
  items: {
    type: "string",
  },
};

// should be string[]
type ResolvedStringItems = ResolvedArrayType<typeof schemaWithStringItems>;

const schemaWithNumberItems = <const>{
  type: "array",
  items: {
    type: "integer",
  },
};

// should be number[]
type ResolvedNumberItems = ResolvedArrayType<typeof schemaWithNumberItems>;

const fake = <const>{
  type: "random",
};

const schemaWithArrayItems = <const>{
  type: "array",
  items: {
    type: "array",
    items: {
      type: "number",
    },
  },
};

// should be number[][]
type ResolvedArrayItems = ResolvedArrayType<typeof schemaWithArrayItems>;

const schemaWithMultipleItems = <const>{
  type: "array",
  items: {
    type: ["string", "number"],
  },
};

// should be (string | number)[]
type ResolvedMultiple = ResolvedArrayType<typeof schemaWithMultipleItems>;

const nestedArrayWithMultipleItems = <const>{
  type: "array",
  items: {
    type: "array",
    items: {
      type: ["string", "number", "null"],
    },
  },
};

type ResolvedNestedMultiple = ResolvedArrayType<
  typeof nestedArrayWithMultipleItems
>;
