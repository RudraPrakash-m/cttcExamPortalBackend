const STUDENT_MODEL = require("../models/studentModel");
<<<<<<< HEAD

const findrole = async (req, res) => {
  try {
    console.log("=== FINDROLE ENDPOINT HIT ===");
    console.log("Incoming user data:", req.body);

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email missing" });
    }

    // FIND STUDENT BASED ON EMAIL
    const student = await STUDENT_MODEL.findOne({ email });

    if (!student) {
      console.log("Student not found for email:", email);
      // Return 200 OK with role: 'none' instead of 404
=======
const TEACHER_MODEL = require("../models/teacherModel");
const ExpressError = require("../utills/ExpressError");

module.exports.findrole = async (req, res) => {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: " id is missing" });
    }

    // FIND STUDENT BASED ON EMAIL
    const user = await STUDENT_MODEL.findOne({id: 'STU001'}) || await TEACHER_MODEL.findOne({id});

    if (!user) {
      console.log("Student not found for id:", id);
>>>>>>> 0ebfa5b (added)
      return res.status(200).json({
        role: "none",
        message: "User not found in students",
        exists: false,
<<<<<<< HEAD
      });
    }

    console.log("Student found:", student);

    return res.status(200).json({
      role: student.role,
      message: "Role fetched successfully",
      exists: true,
      user: student,
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = findrole;
=======
        success: false,
      });
    }

    
    return res.status(200).json({
      role: user.role,
      message: "Role fetched successfully",
      exists: true,
      user: user,
    });
 
};

>>>>>>> 0ebfa5b (added)
