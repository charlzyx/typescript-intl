
// type PathImpl<T, K extends keyof T> =
// K extends string
// ? T[K] extends Record<string, any>
//   ? T[K] extends ArrayLike<any>
//     ? K | `${K}.${PathImpl<T[K], Exclude<keyof T[K], keyof any[]>>}`
//     : K | `${K}.${PathImpl<T[K], keyof T[K]>}`
//   : K
// : never;

// type Path<T> = PathImpl<T, keyof T> | keyof T;

// type PathValue<T, P extends Path<T>> =
// P extends `${infer K}.${infer Rest}`
// ? K extends keyof T
//   ? Rest extends Path<T[K]>
//     ? PathValue<T[K], Rest>
//     : never
//   : never
// : P extends keyof T
//   ? T[P]
//   : never;

// declare function get<T, P extends Path<T>>(obj: T, path: P): PathValue<T, P>;

// const object = {
// firstName: "Diego",
// lastName: "Haz",
// age: 30,
// projects: [
//   { name: "Reakit", contributors: 68 },
//   { name: "Constate", contributors: 12 },
// ]
// } as const;
// // object.projects[0].contributors;
// const value = get(object, "projects.0.contributors");

// // // js
// // const world = 'world';
// // const jstr = `hello ${world}`;
// // const notok = `hello, ${world}`;

// // // ts
// // type World = "world";
// // type Greeting = `hello ${World}`;
// // type Greeting2 = 'hello world';

// // let tstr: Greeting = 'hello world';

// // // tstr = jstr;
// // // tstr = notok;

// // export default {}
