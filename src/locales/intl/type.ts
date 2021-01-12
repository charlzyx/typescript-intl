type PathAny<T, K extends keyof T> =
  K extends string
  ? T[K] extends Record<string, any>
    ? T[K] extends ArrayLike<any>
      ? K | `${K}.${PathAny<T[K], Exclude<keyof T[K], keyof any[]>>}`
      : K | `${K}.${PathAny<T[K], keyof T[K]>}`
    : K
  : never;

type PathLeaf<T, K extends keyof T> =
  K extends string
  ? T[K] extends Record<string, any>
    ? T[K] extends ArrayLike<any>
      ? `${K}.${PathAny<T[K], Exclude<keyof T[K], keyof any[]>>}`
      : `${K}.${PathAny<T[K], keyof T[K]>}`
    : K
  : never;

type PathAnyOf<T> = PathAny<T, keyof T> | keyof T;
export type PathLeafOf<T> = PathLeaf<T, keyof T>;

type PathValue<T, P extends PathAnyOf<T>> =
  P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? Rest extends PathAnyOf<T[K]>
      ? PathValue<T[K], Rest>
      : never
    : never
  : P extends keyof T
    ? T[P]
    : never;
