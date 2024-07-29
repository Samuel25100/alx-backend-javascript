export default function getStudentsByLocation(val, name) {
  const result = val.filter((row) => (row.location === name));
  return result;
}
