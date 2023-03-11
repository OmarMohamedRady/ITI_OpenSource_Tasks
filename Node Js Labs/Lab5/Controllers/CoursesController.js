const validate = require("../utils/CoursesValidation");
let coursesModel = require("../Models/CoursesModel");

var GetAllCourses = async (req, res) => {
  var Allcourses = await coursesModel.find({});
  res.json(Allcourses);
};
var GetcourseByID = async (req, res) => {
  var idS = req.params.id;
  var foundcourse = await coursesModel.find({ id: idS });
  res.json(foundcourse);
};
var AddNewcourse = async (req, res) => {
  var newcourse = req.body;
  var valid = validate(newcourse);
  if (valid) {
    var course = new coursesModel(newcourse);
    await course.save();
    await res.json(course);
  } else {
    res.status(400).send("Check ur Data Type");
  }
};

module.exports = {
  GetAllCourses,
  GetcourseByID,
  AddNewcourse,
};
