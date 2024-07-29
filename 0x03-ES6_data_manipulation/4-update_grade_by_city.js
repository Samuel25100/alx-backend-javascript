export default function updateStudentGradeByCity(val, city, update) {
  const studincity = val.filter((row) => (row.location === city));
  const result = studincity.map((row) => {
    const up = update.filter((val) => (row.id === val.studentId));
    const line = row;
    if (up.length) {
      line.grade = up[0].grade;
    } else {
      line.grade = 'N/A';
    }
    return line;
  });
  return result;
}
