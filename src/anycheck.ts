type CheckNever<T> = T extends never ? 'yes' : 'no';

type AnyCheck<T> = CheckNever<T> extends 'no' ? 'no' : 'yes';

type a = CheckNever<any>; // yes | no
type b = CheckNever<unknown>; // no
type c = CheckNever<undefined>; // no
type d = CheckNever<null>; // no
type e = CheckNever<never>; // never
type f = CheckNever<string>; // no
type g = CheckNever<B>; // yes | no


type aa = AnyCheck<any>; // yes | no
type bb = AnyCheck<unknown>; // no
type cc = AnyCheck<undefined>; // no
type dd = AnyCheck<null>; // no
type ee = AnyCheck<never>; // no
type ff = AnyCheck<string>; // no
type gg = AnyCheck<B>; // yes | no


export default {}
