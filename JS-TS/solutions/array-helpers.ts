/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(
  source: readonly T[],
  mapper: (item: T, index: number) => R,
): R[] {
  if (source == null) {
    throw new TypeError("Source cannot be null or underfined");
  }
  const result: R[] = [];
  for (let i = 0; i < source.length; i++) {
    result.push(mapper(source[i], i));
  }
  return result;
  // throw new Error('mapArray: not implemented');
}

export function filterArray<T>(
  source: readonly T[],
  predicate: (item: T, index: number) => boolean,
): T[] {
  if (source == null) {
    throw new TypeError("filterArray: not implemented");
  }
  const result: T[] = [];
  for (let i = 0; i < source.length; i++) {
    if (predicate(source[i], i)) {
      result.push(source[i]);
    }
  }
  return result;
}

export function reduceArray<T, R>(
  source: readonly T[],
  reducer: (acc: R, item: T, index: number) => R,
  initial: R,
): R {
  if (source == null) {
    throw new TypeError("reduceArray: not implemented");
  }
  let acc: R = initial;
  for (let i = 0; i < source.length; i++) {
    acc = reducer(acc, source[i], i);
  }
  return acc;
}

export function partition<T>(
  source: readonly T[],
  predicate: (item: T) => boolean,
): [T[], T[]] {
  if(source==null){
    throw new TypeError("partition: not implemented");
  }
  const pass: T[]=[];
  const fail:T[]=[];
  for(const item of source){
    if(predicate(item)){
      pass.push(item)
    }else{
      fail.push(item)
    }
  }
  return[pass,fail]
}

export function groupBy<T, K extends PropertyKey>(
  source: readonly T[],
  keySelector: (item: T) => K,
): Record<K, T[]> {
  if(source==null){
    throw new TypeError("groupBy: not implemented");
  }
  const acc={} as Record<K,T[]>
  for(const item of source){
    const key=keySelector(item)
    if (!acc[key]){
      acc[key]=[]
    }
    acc[key].push(item)
  }
return acc
}
