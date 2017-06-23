/**
 * Created by Air on 2017/6/22.
 */

let http = require('http');
let fs = require('fs');
let mime = require('mime');

let extract = require('./extract');
// let handleError = require('./error');


let server = http.createServer(function (req, res) {
  console.log('Responding to a request.');
  let filePath = extract(req.url);
  fs.readFile(filePath, function (err, data) {
    if (err) {
      res.end('<h1> Error </h1>');
    } else {
      let contentType = mime.lookup(filePath);
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  })
});

server.listen(3000);