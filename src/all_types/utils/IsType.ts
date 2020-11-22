import {Boolean} from "ts-toolbelt";

export type IsType<T, K> = T extends K ? Boolean.True : Boolean.False;
