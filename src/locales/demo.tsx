import { FC } from 'react'
import lang from './en-US'

type TKeys = keyof typeof lang;

const ShowKey: FC<{id: TKeys}> = ({ id }) => {
  return <div>{id}</div>
}

const Demo = ()=> {
  // return <ShowKey
  // // id=""
  // ></ShowKey>
  return {}
}

// lodash.get
// get(obj, 'a.b.c')
