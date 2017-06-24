/**
 * Created by Air on 2017/6/24.
 */

let WebSocket = require('ws');
let WebSocketServer = WebSocket.Server;

let port = 3001;
let ws = new WebSocketServer({
  port: port
});

let messages = [];
let validClients = new Set();

console.log('websockets server started');

ws.on('connection', function (socket) {
  console.log('client connection established');

  socket.on('message', function (data) {
    console.log('message received: ' + data);

    if (validClients.has(socket)) {
      publishData(socket, data);
    } else {
      validPassword(socket, data)
    }

  });
});

function validPassword(socket, data) {
  if (data === "123456") {
    didLogin(socket);
  } else {
    didFailToLogin(socket)
  }
}

function didLogin(socket) {
  validClients.add(socket);
  socket.send("Login Success!");
  messages.forEach(function (msg) {
    socket.send(msg);
  });
}

function didFailToLogin(socket) {
  socket.send("Password is incorrect!");
}

function publishData(socket, data) {

  validClients
    .forEach(function (clientSocket) {
      if (clientSocket !== socket) clientSocket.send(data);
    });
  messages.push(data);
}