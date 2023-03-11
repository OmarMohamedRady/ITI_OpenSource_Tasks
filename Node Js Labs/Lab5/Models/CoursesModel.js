const mongoose = require("mongoose");
var URL = "mongodb://localhost:27017/People";

mongoose.connect(URL, { useNewUrlParser: true });
let studentsSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String },
});

module.exports = mongoose.model("courses", coursesSchema);
