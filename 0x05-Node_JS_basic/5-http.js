const { createServer } = require('http');
const fs = require('fs').promises;
const args = process.argv;

async function countStudents(path) {
  let fd;
  try {
    fd = await fs.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error("Cannot load the database")
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

  let out = `Number of students: ${parsdata.length}\n`;
  out += `Number of students in CS: ${cs.length}. List ${cs.join(', ')}\n`;
  out += `Number of students in SWE: ${se.length}. List ${se.join(', ')}`;
  return out;
}

const app = createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url == '/students') {
    let out = "This is the list of our students\n";
    out += await countStudents(args[2]);
    res.end(out);
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245, '127.0.0.1');
module.exports = app;
