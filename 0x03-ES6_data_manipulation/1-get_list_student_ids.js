export default function getListStudentIds(val) {
  if (!(val instanceof Array)) {
    return [];
  }
  const result = [];
  val.map((row) => {
    result.push(row.id);
    return result;
  });
  return result;
}
