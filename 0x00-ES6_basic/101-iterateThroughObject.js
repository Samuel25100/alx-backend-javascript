export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  let count = 0;
  for (const val of reportWithIterator) {
    result += val;
    count += 1;
    if (count < reportWithIterator.length) {
      result += ' | ';
    }
  }
  return (result);
}
