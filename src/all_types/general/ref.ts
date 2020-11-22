import {_ListOf} from "Object/ListOf";
import {BaseType} from "../basics/base";
import {GetRefPath} from "./utils";
import {Pick} from "./pick";
import {JsonSchema, ResolvedJsonSchema} from "../json_schema/json_schema";

export type Ref<Base = {}> = BaseType & {
  readonly $ref: string;
};

export type ResolvedRef<
  T,
  Base extends object = {},
  R = T extends Ref ? Pick<Base, GetRefPath<T["$ref"]>> : never
> = T extends Ref
  ? R extends JsonSchema
    ? ResolvedJsonSchema<R, Base>
    : never
  : never;

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
