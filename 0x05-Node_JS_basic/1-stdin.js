console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', function(val) {
  if (val != null) {
    process.stdout.write(`Your name is: ${val}`);
  }
});

process.stdin.on('end', function () {
  console.log("This important software is now closing");
});

