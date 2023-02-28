const http = require("http");
const fs = require("fs");
/*fs.writeFile("file.txt", "Hii", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Write Success");
  }
});*/

http
  .createServer((req, res) => {
    if (req.url != "/favicon.ico") {
      var arr = req.url.split("/");
      var result = Number(arr[1]);
      console.log(arr);
      if (arr[arr.length - 1] == "add") {
        for (let i = 2; i < arr.length - 1; i++) {
          result += Number(arr[i]);
        }
        fs.appendFile("file.txt", ` ${result}`, () => {});
      } else if (arr[arr.length - 1] == "sub") {
        for (let i = 2; i < arr.length - 1; i++) {
          result -= Number(arr[i]);
        }
        fs.appendFile("file.txt", ` ${result}`, () => {});
      } else if (arr[arr.length - 1] == "multi") {
        for (let i = 2; i < arr.length - 1; i++) {
          result *= Number(arr[i]);
        }
        fs.appendFile("file.txt", ` ${result}`, () => {});
      } else if (arr[arr.length - 1] == "division") {
        for (let i = 2; i < arr.length - 1; i++) {
          result /= Number(arr[i]);
        }
        fs.appendFile("file.txt", ` ${result} `, () => {});
      }
    }

    res.end(`<h1> ${result}</h1>`);
  })
  .listen("7000", () => {
    console.log("listen");
  });
