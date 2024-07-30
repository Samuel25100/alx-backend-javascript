export const weakMap = new WeakMap();
export function queryAPI(endpt) {
  if (weakMap.has(endpt)) {
    let key = weakMap.get(endpt);
    if (key < 5) {
      key += 1;
      weakMap.set(endpt, key);
    } else {
      throw new Error('Endpoint load is high');
    }
  } else weakMap.set(endpt, 1);
}
