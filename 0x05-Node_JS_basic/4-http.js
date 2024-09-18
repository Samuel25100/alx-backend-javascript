const { createServer } = require('http');

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

server.listen(1245, '127.0.0.1');
