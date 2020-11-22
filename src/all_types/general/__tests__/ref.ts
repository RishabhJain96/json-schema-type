import {ResolvedRef} from "../ref";

const test = <const>{
  $ref: "#/definitions/obj2",
};

type Base = {
  definitions: {
    obj1: {type: "string"};
    obj2: {
      type: "object";
      required: ["test1"];
      properties: {test1: {type: "string"}};
    };
  };
};

type ResolvedTest = ResolvedRef<typeof test, Base>;
