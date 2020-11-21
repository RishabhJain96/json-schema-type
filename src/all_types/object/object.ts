import {Boolean} from "ts-toolbelt";
import {BaseType} from "../basics/base";
import {JsonSchema, ResolvedJsonSchema} from "../json_schema/json_schema";

type BasicObjectType = {
  type: "object";
};

type PropertiesObjectType = {
  type: "object";
  properties: Record<string, JsonSchema>;
};

type AdditionalPropertiesObjectType = {
  type: "object";
  additionalProperties: boolean | JsonSchema;
};

type ArrDependency = Record<string, string[]>;

type SchemaDependency = Record<string, JsonSchema>;

type ObjectDependency = ArrDependency | SchemaDependency;

export type ObjectType = BaseType & {
  type: "object";
  properties?: Record<string, JsonSchema>;
  required?: readonly string[];
  additionalProperties?: boolean | JsonSchema;
  minProperties?: number;
  maxProperties?: number;
  dependencies?: ObjectDependency | ObjectDependency[];
  patternProperties?: Record<string, JsonSchema> | Record<string, JsonSchema>[];
};

export type RequiredPropertyKeys<Props, Req> = Req extends readonly string[]
  ? {[K in keyof Props]-?: K extends Req[number] ? K : never}[keyof Props]
  : never;

// we add keyof Props here so that if no required is given then everything is optional
export type OptionalPropertyKeys<Props, Req> = Req extends readonly string[]
  ? {[K in keyof Props]-?: K extends Req[number] ? never : K}[keyof Props]
  : keyof Props;

export type ResolvedObjectType<
  T extends ObjectType,
  Base extends object = {},
  Props = T["properties"],
  Req = T["required"],
  AdditionalProps = T["additionalProperties"]
> = T extends PropertiesObjectType
  ? {
      [K in RequiredPropertyKeys<Props, Req>]: Props[K] extends JsonSchema
        ? ResolvedJsonSchema<Props[K], Base>
        : never;
    } &
      {
        [K in OptionalPropertyKeys<Props, Req>]?: Props[K] extends JsonSchema
          ? ResolvedJsonSchema<Props[K], Base>
          : never;
      } &
      (T extends AdditionalPropertiesObjectType
        ? AdditionalProps extends boolean
          ? Boolean.BooleanOf<AdditionalProps> extends Boolean.True
            ? {[key: string]: any}
            : {}
          : AdditionalProps extends JsonSchema
          ? {[key: string]: ResolvedJsonSchema<AdditionalProps, Base>}
          : {}
        : {})
  : T extends BasicObjectType
  ? {[key: string]: any}
  : never;
