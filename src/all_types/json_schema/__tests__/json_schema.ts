import {Ref} from "../../general/ref";
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

const withDefinition = <const>{
  definitions: {
    person: {
      type: "object",
      required: ["first_name", "last_name", "age"],
      properties: {
        first_name: {type: "string"},
        last_name: {type: "string"},
        age: {type: "integer"},
      },
    },
    football_team: {
      type: "object",
      required: ["name", "league"],
      properties: {
        name: {type: "string"},
        league: {type: "string"},
        year_founded: {type: "integer"},
      },
    },
  },
  anyOf: [
    {$ref: "#/definitions/person"},
    {$ref: "#/definitions/football_team"},
  ],
};

type ResolvedWithDefinitions = ResolvedJsonSchema<typeof withDefinition>;
