const validate = require("../utils/StudentsValidation");
let StudentModel = require("../Models/StudentsModel");

var GetAllStudents = async (req, res) => {
  var AllStudents = await StudentModel.find({});
  res.json(AllStudents);
};
var GetStudentByID = async (req, res) => {
  var idS = req.params.id;
  var foundStudent = await StudentModel.find({ id: idS });
  res.json(foundStudent);
};
var AddNewStudent = async (req, res) => {
  var newStudent = req.body;
  var valid = validate(newStudent);
  if (valid) {
    var Std = new StudentModel(newStudent);
    await Std.save();
    await res.json(Std);
  } else {
    res.status(400).send("Check ur Data Type");
  }
};
var DeleteStudentByID = async (req, res) => {
  var ID = req.params.id;
  var index;
  var data = await StudentModel.deleteOne({ id: ID });
  await res.json(data);
  res.send("Deleted Successfully");
};
var UpdateStudentByID = async (req, res) => {
  var ID = req.params.id;
  var updatedStudent = req.body;
  updatedStudent = await StudentModel.updateOne({ id: ID }, updatedStudent);

  await res.json(updatedStudent);

  // Students[index] = updatedStudent;
  // console.log(index)
  res.json(Students[index] || "Not Found");
};
module.exports = {
  GetAllStudents,
  GetStudentByID,
  AddNewStudent,
  DeleteStudentByID,
  UpdateStudentByID,
};
