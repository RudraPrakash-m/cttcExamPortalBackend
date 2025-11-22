const STUDENT_MODEL = require("../models/studentModel");
const TEACHER_MODEL = require("../models/teacherModel");

const findrole = async (req, res) => {
  try {
    console.log("Incoming user:", req.body);

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email missing" });
    }

    // FIND STUDENT BASED ON EMAIL
    const user = await STUDENT_MODEL.findOne({ email }) || await TEACHER_MODEL.findOne({email});

    if (!user) {
      return res.status(404).json({
        role: "none",
        message: "User not found in users",
      });
    }

    return res.status(200).json({
      role: user.role,
      message: "Role fetched successfully",
      user: user,
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = findrole;
