export default function updateUniqueItems(val) {
  if (!(val instanceof Map)) throw new Error('Cannot process');

  val.forEach((value, key) => {
    if (value === 1) val.set(key, 100);
  });
  return val;
}
