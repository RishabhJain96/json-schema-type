import {ResolvedJsonSchema} from "../json_schema";

export const defref = <const>{
  type: "object",
  required: ["image"],
  definitions: {
    simple_image: {
      type: "string",
    },

    image: {
      $ref: "#/definitions/simple_image",
    },
  },
  properties: {
    image: {
      $ref: "#/definitions/image",
    },
  },
};

type DefRef = ResolvedJsonSchema<typeof defref>;
