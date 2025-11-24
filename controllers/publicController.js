const STUDENT_MODEL = require("../models/studentModel");
const TEACHER_MODEL = require("../models/teacherModel");

// ---------------------------------------------------
// CHECK USER EXISTENCE
// ---------------------------------------------------
const checkUserExistance = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Missing Clerk user ID",
      });
    }

    const user =
      (await STUDENT_MODEL.findOne({ clerkId: id })) ||
      (await TEACHER_MODEL.findOne({ clerkId: id }));

    return res.status(200).json({
      success: true,
      exists: Boolean(user),
    });

  } catch (error) {
    console.error("Existence Check Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ---------------------------------------------------
// REGISTER USER (student / teacher)
// ---------------------------------------------------

const registerUser = async (req, res) => {
  try {
    const { clerkId, email, name, role, roll_no, batch } = req.body;

    // -------------------------------
    // Basic validation
    // -------------------------------
    if (!clerkId || !email || !name || !role) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // Determine model based on role
    let model;
    if (role === "student") model = STUDENT_MODEL;
    else if (role === "teacher") model = TEACHER_MODEL;
    else {
      return res.status(400).json({
        success: false,
        message: "Invalid role type",
      });
    }

    // Check if user already exists
    const exists = await model.findOne({ clerkId });
    if (exists) {
      return res.status(200).json({
        success: true,
        exists: true,
        message: "User already exists",
        user: exists,
      });
    }

    // -------------------------------
    // Generate backend-controlled IDs
    // -------------------------------
    let examId = null;
    let quesId = null;

    if (role === "student") {
      if (!roll_no || !batch) {
        return res.status(400).json({
          success: false,
          message: "roll_no and batch are required for student",
        });
      }
      examId = `${clerkId}-${roll_no}`;
    }

    if (role === "teacher") {
      quesId = `${clerkId}-QUES`;
    }

    // -------------------------------
    // Create new user document
    // -------------------------------
    const newUser = await model.create({
      clerkId,
      email,
      name,
      role,

      // Student-only fields
      roll_no: role === "student" ? roll_no : undefined,
      batch: role === "student" ? batch : undefined,
      examId: role === "student" ? examId : undefined,

      // Teacher-only fields
      quesId: role === "teacher" ? quesId : undefined,
    });

    return res.status(201).json({
      success: true,
      exists: false,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    console.error("Register Error:", err);

    // Handle MongoDB duplicate key error specifically
    if (err.code === 11000) {
      const duplicateField = Object.keys(err.keyPattern)[0];
      return res.status(400).json({
        success: false,
        message: `Duplicate value for ${duplicateField}`,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { registerUser };


module.exports = { checkUserExistance, registerUser };
