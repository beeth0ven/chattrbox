/**
 * Created by Air on 2017/6/22.
 */

let path = require('path');

let extractFilePath = function (url) {
  let filePath;
  let fileName = 'index.html';

  if (url.length > 1) {
    fileName = url.substring(1);
  }
  console.log('The fileName is: ' + fileName);

  filePath = path.resolve(__dirname, 'app', fileName);
  return filePath;
};

module.exports = extractFilePath;