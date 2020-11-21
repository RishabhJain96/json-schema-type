import {ResolvedJsonSchema} from "../json_schema";

const basicString = <const>{
  type: "string",
};

type ResolvedBasicString = ResolvedJsonSchema<typeof basicString>;

const basicStringWithEnum = <const>{
  type: "string",
  enum: ["foo", "bar", 0, undefined],
};

type ResolvedBasicStringWithEnum = ResolvedJsonSchema<
  typeof basicStringWithEnum
>;

const basicObject = <const>{
  type: "object",
  required: ["test"],
  properties: {
    test: {type: "string"},
  },
};

type ResolvedBasicObject = ResolvedJsonSchema<typeof basicObject>;
