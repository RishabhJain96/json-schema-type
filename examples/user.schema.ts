import {ResolvedJsonSchema} from "../src";

const UserSchema = <const>{
  type: "object",
  required: ["email", "password"],
  properties: {
    name: {type: "string"},
    email: {type: "string"},
    password: {type: "string"},
    tags: {
      type: "array",
      items: {
        type: "string",
      },
    },
    profile: {
      type: "object",
      additionalProperties: {type: "string"},
      properties: {
        avatar: {type: "string"},
        createdYear: {type: "integer"},
        isAdmin: {type: "boolean"},
      },
    },
  },
};

type User = ResolvedJsonSchema<typeof UserSchema>;

const SampleUser: User = {
  email: "test@test.com",
  password: "very_secure_password",
  profile: {
    sample: "test",
  },
};
