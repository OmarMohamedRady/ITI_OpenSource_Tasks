

const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
const fs = require("fs");
var profileFileHTML = fs.readFileSync("profile.html").toString();
function myPath(urPath) {
  return path.join(__dirname, urPath);
}
console.log(__dirname);
app.get("/", (req, res) => {
  res.send("Hello");
});
// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.get("/style.css", (req, res) => {
//   res.send("style.css");
// });

app.get("/index.html", (req, res) => {
  res.sendFile(myPath("/index.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(myPath("/style.css"));
  // res.sendFile(ahmed("/style.css"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(myPath("/script.js"));
});

app.get("/profile.html", (req, res) => {
  res.sendFile(myPath("/profile.html"));
});

app.post("/profile.html", (req, res) => {
  var name = req.body["name"];
  var number = req.body["number"];
  var email = req.body["email"];
  var address = req.body["address"];
  console.log(req.body);
  profileFileHTML = profileFileHTML
    .replace("{userName}", name)
    .replace("{phonenumer}", number)
    .replace("{email}", email)
    .replace("{address}", address);
  res.send(profileFileHTML);
});

app.listen("7003", () => {
  console.log("http://localhost:7003");
});
