const STUDENT_MODEL = require("../models/studentModel");
const TEACHER_MODEL = require("../models/teacherModel");

module.exports.findrole = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "id is missing" });
  }

  // FIND USER (STUDENT OR TEACHER)
  const user =
    (await STUDENT_MODEL.findOne({ id })) ||
    (await TEACHER_MODEL.findOne({ id }));

  if (!user) {
    console.log("User not found for id:", id);
    return res.status(200).json({
      role: "none",
      message: "User not found",
      exists: false,
    });
  }

  return res.status(200).json({
    role: user.role,
    message: "Role fetched successfully",
    exists: true,
    user: user,
  });
};
