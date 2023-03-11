const express = require("express");
let router = express.Router();
const coursesController = require("../Controllers/CoursesController");

router.get("/", coursesController.GetAllCourses);
router.get("/:id", coursesController.GetcourseByID);
router.post("/create", coursesController.AddNewcourse);

module.exports = router;
