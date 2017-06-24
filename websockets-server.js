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

console.log('websockets server started');

ws.on('connection', function (socket) {
  console.log('client connection established');

  messages.forEach(function (msg) {
    socket.send(msg);
  });

  socket.on('message', function (data) {
    console.log('message received: ' + data);
    ws.clients.forEach(function (clientSocket) {
      clientSocket.send(data);
    });
    messages.push(data);
  });
});