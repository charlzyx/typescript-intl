import enUS from './en-US'
import zhCN from './zh-CN'
import {PathLeafOf  } from "./intl/type";
export const messages = {
  en: enUS,
  zh: zhCN
}

const transfer = <T extends any>(lang: T):PathLeafOf<T> => {
  return {} as any;
}

export const flattenEn = transfer(enUS)





// loadsh.walk
// path -> push
