const STUDENT_MODEL = require("../models/studentModel");

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
      return res.status(200).json({
        role: "none",
        message: "User not found in students",
        exists: false,
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
