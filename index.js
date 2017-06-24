/**
 * Created by Air on 2017/6/22.
 */

let http = require('http');
let fs = require('fs');
let extract = require('./extract');
let wss = require('./websockets-server');

let handleError = function (err, res) {
  res.writeHead(404);
  res.end();
};

let server = http.createServer(function (req, res) {
  console.log('Responding to a request.');
  let filePath = extract(req.url);
  fs.readFile(filePath, function (err, data) {
    if (err) {
      handleError(err, res);
    } else {
      res.end(data);
    }
  })
});

server.listen(3000);