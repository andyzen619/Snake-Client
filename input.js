let connection;
let moveArray = ['a', 'w', 'd', 's', ];

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (data) => {
    if (moveArray.includes(data)) {
      setInterval(() => { connection.write(`Move: ${data}`); }, 500);
    }
  });

  stdin.on('data', (data) => {
    if (data == "x") {
      connection.write(`Say: I WATCHING YOU...........`);
    }
  });

  stdin.resume();
  return stdin;
}

module.exports = {
  setupInput
}