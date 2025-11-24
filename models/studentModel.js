const { default: mongoose } = require("mongoose");
const studentSchema = require("../schemas/studentSchema");

const STUDENT_MODEL = mongoose.model("student", studentSchema);

module.exports = STUDENT_MODEL;
