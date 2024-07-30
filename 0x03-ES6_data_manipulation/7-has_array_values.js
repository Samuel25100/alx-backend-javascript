export default function hasValuesFromArray(set, val) {
  for (const i of val) {
    const result = set.has(i);
    if (result === false) return false;
  }
  return true;
}
