const http = require("http");
const fs = require("fs");

let MainFileHTML = fs.readFileSync("index.html").toString();
let ProfileFileHTML = fs.readFileSync("profile.html").toString();
let StyleCSS = fs.readFileSync("style.css").toString();
let ScriptFile = fs.readFileSync("script.js").toString();
/*let myImage = fs.readFileSync("../ClientSide/2.jpg");
let myIcon = fs.readFileSync("../ClientSide/favicon.ico");
*/
var userName = "";
http
  .createServer((req, res) => {
    //#region GET
    console.log(req.url);
    if (req.method == "GET") {
      if (req.url != "/favicon.icon") {
        switch (req.url) {
          case "/index.html":
            res.setHeader("Access-Control-Allow-Origin", "*"); //MiddleWare ==> install ==> use

            res.write(MainFileHTML);
            break;
          case "/profile.html":
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.write(ProfileFileHTML);
            break;
          case "/style.css":
            res.writeHead(200, "Ok", { "content-type": "text/css" });
            res.write(StyleCSS);
            break;
          case "/script.js":
            res.writeHead(300, "Hii", { "content-type": "text/javascript" });
            res.write(ScriptFile);
            break;
        }
      }
      res.end();
    }
    //#endregion
    //#region POST
    else if (req.method == "POST") {
      //url
      req.on("data", (data) => {
        //console.log(data.toString())
        //res.write(MainFileHTML);
        userName = data.toString().split(/[=&]+/);
        //userName = data.toString();
        console.log(userName);
      });
      req.on("end", () => {
        ProfileFileHTML = ProfileFileHTML.replaceAll("+", " ");
        ProfileFileHTML = ProfileFileHTML.replaceAll("%40", "@");

        ProfileFileHTML = ProfileFileHTML.replace("{userName}", userName[1]);
        ProfileFileHTML = ProfileFileHTML.replace("{phonenumer}", userName[3]);
        ProfileFileHTML = ProfileFileHTML.replace("{email}", userName[5]);
        ProfileFileHTML = ProfileFileHTML.replace("{address}", userName[7]);
        res.write(ProfileFileHTML);
        res.end();
      });
    }
    //#endregion
    //#region PUT
    /*else if(req.method == "PUT"){

    }
    //#endregion
    //#region DELETE
    else if(req.method == "DELETE"){

    }
    //#endregion
    */
  })
  .listen("7001", () => {
    console.log("http://localhost:7001");
  });
