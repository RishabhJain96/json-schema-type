import {Object} from "ts-toolbelt";
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
  Excluded = T extends Ref ? Object.Omit<T, "$ref"> : never,
  R = T extends Ref ? Pick<Base, GetRefPath<T["$ref"]>> : never
> = T extends Ref
  ? R & Excluded extends JsonSchema
    ? ResolvedJsonSchema<R & Excluded, Base>
    : never
  : never;
