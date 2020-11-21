import {ResolvedObjectType} from "../object";

const basic = <const>{
  type: "object",
};

// should be any object type
type Basic = ResolvedObjectType<typeof basic>;

const withOnlyProperties = <const>{
  type: "object",
  properties: {
    simple: {type: "integer"},
  },
};

type OnlyProperties = ResolvedObjectType<typeof withOnlyProperties>;

const withProperties = <const>{
  type: "object",
  required: ["stringTest", "multiTest", "nullTest"],
  properties: {
    stringTest: {type: "string"},
    integerTest: {type: "integer"},
    booleanTest: {type: "boolean"},
    arrayTest: {type: "array"},
    arrayWithItemsTest: {type: "array", items: {type: "string"}},
    nullTest: {type: "null"},
    multiTest: {type: ["string", "null"]},
  },
};

type Properties = ResolvedObjectType<typeof withProperties>;

const test: Properties = {
  stringTest: "test",
  integerTest: 0,
  booleanTest: false,
  arrayTest: [],
  arrayWithItemsTest: ["test"],
  nullTest: null,
  multiTest: null,
};

const withAdditionalProperties = <const>{
  type: "object",
  properties: {
    simple: {type: "integer"},
  },
  additionalProperties: {type: ["string", "number"]},
};

type WithAdditionalProperties = ResolvedObjectType<
  typeof withAdditionalProperties
>;
