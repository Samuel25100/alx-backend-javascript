const fs = require('fs');

function countStudents(path) {
  let fd;
  try {
    fd = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error("Cannot load the database");
  }
  const data = fd.split('\n');
  let parsdata = data.map(line => line.split(','));
  parsdata.shift()
  parsdata.pop()
  let cs = [];
  let se = [];
  for (let line of parsdata) {
    if (line[3] === "CS") {
      cs.push(line[0]);
    } else if (line[3] === "SWE") {
      se.push(line[0]);
    }
  }

  console.log(`Number of students: ${parsdata.length}`);
  console.log(`Number of students in CS: ${cs.length}. List ${cs.join(', ')}`);
  console.log(`Number of students in SWE: ${se.length}. List ${se.join(', ')}`);
}

module.exports = countStudents;
