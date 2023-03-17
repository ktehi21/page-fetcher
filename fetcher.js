const args = process.argv.slice(2);
const request = require('request');
const net = require("net");
const fs = require('fs');

console.log(args);
const url = args[0];
const localFilePath = args[1];
const fileName = args[1].slice(2);
let content = "";

request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  content = body; // Print the HTML for the example.edu homepage.

  let fileSize = 0;

  fs.writeFile(localFilePath, content, function(err) {
    if(err) {
      return console.log(err);
    }
    fs.stat(fileName, (err, stats) => {
      if (err) {
        console.log(`File doesn't exist.`)
      } else {
        fileSize = stats.size;
        console.log(`Downloaded and saved ${fileSize} bytes to ${localFilePath}`);
      }
    });
    }
  );

});
