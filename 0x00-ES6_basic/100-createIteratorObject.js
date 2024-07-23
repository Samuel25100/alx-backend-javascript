export default function createIteratorObject(report) {
  const result = [];
  for (const val of Object.values(report.allEmployees)) {
    for (const name of val) {
      result.push(name);
    }
  }
  return (result);
}
