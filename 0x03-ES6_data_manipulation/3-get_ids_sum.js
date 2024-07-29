export default function getStudentIdsSum(val) {
  const lists = val.map((row) => (row.id));
  const result = lists.reduce((acc, id) => (acc + id));
  return result;
}
