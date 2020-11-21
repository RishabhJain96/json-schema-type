import {GetPath, GetRefPath} from "../utils";

const leftSlash = "/test";
const midSlash = "test/test";
const rightSlash = "test/";
const noSlash = "test";
const threeSlash = "test/test/test";

type LeftSlashPath = GetPath<typeof leftSlash>;
type MidSlashPath = GetPath<typeof midSlash>;
type RightSlashPath = GetPath<typeof rightSlash>;
type NoSlash = GetPath<typeof noSlash>;
type ThreeSlashPath = GetPath<typeof threeSlash>;

const simpleRef = "#/test";
type SimpleRefPath = GetRefPath<typeof simpleRef>;

const multiRefPath = "#/definitions/user1";
type MultiRefPath = GetRefPath<typeof multiRefPath>;
