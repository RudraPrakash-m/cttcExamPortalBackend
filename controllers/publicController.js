const STUDENT_MODEL = require("../models/studentModel");
const TEACHER_MODEL = require("../models/teacherModel");

// --------------------------------------
// CHECK IF USER EXISTS
// --------------------------------------
const checkUserExistance = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Missing Clerk user ID",
      });
    }

    const existingUser =
      (await STUDENT_MODEL.findOne({ clerkId: id })) ||
      (await TEACHER_MODEL.findOne({ clerkId: id }));

    return res.status(200).json({
      success: true,
      exists: !!existingUser,
    });

  } catch (error) {
    console.error("Error checking user existance:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// --------------------------------------
// REGISTER USER (STUDENT / TEACHER)
// --------------------------------------
const registerUser = async (req, res) => {
  try {
    const { id, email, name, role } = req.body;

    // Validate incoming data
    if (!id || !email || !name || !role) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    let userModel;

    // Choose model
    if (role === "student") {
      userModel = STUDENT_MODEL;
    } else if (role === "faculty") {
      userModel = TEACHER_MODEL;
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    // Check if user already exists
    const existing = await userModel.findOne({ clerkId: id });
    if (existing) {
      return res.status(200).json({
        success: true,
        message: "User already exists",
        user: existing,
        exists: true,
      });
    }

    // Create new user
    const newUser = await userModel.create({
      clerkId: id,
      email,
      name,
      role,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      exists: false,
      user: newUser,
    });

  } catch (error) {
    console.error("Error registering user:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { checkUserExistance, registerUser };
