var dir = {
  name: "ahmed",
  age: "27",
};

var fs = require("fs");

if (!fs.existsSync("data.json")) {
  //add data to json file
  // fs.writeFileSync("student.json", JSON.stringify([data]))
  fs.writeFileSync("data.json", JSON.stringify([dir]));
} else {
  //append data to jso file
  // const json = JSON.parse(file.toString())
  let json = fs.readFileSync("data.json").toString();
  let json1 = JSON.parse(json);
  //add json element to json object
  json1.push(dir);
  fs.writeFileSync("data.json", JSON.stringify(json1));
}

let json5 = fs.readFileSync("data.json").toString();
let json6 = JSON.parse(json5);
console.log(json6[0].name);
