const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '172.46.2.204',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("connect", () => {
    console.log(`Connetion to server successful`);
    conn.write("Name: 619");
    setInterval(() => { conn.write(`Move: left`); }, 50);


  });

  conn.on("data", (data) => {
    console.log(`Server: ${data}`);
  });

  return conn;
}

const moveCircle = function(conn) {
  const moveArr = ["Move: up", "Move: left", "Move: down", "Move: right"];
  for (let i = 0; i < 4; i++) {
    let move = moveArr[Math.floor(Math.random() * 2)];
    console.log(move);
    setInterval(() => { conn.write(`Move: up`); }, 50);
  }
}

module.exports = {
  connect
}