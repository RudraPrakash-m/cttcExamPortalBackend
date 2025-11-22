const { default: mongoose } = require("mongoose");
const studentSchema = require("../schemas/studentSchema");

const STUDENT_MODEL = mongoose.model("students", studentSchema);

module.exports = STUDENT_MODEL
