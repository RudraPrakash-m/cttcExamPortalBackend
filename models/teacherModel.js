const { default: mongoose } = require("mongoose");
const teacherSchema = require("../schemas/teacherSchema");

const TEACHER_MODEL = mongoose.model("teachers", teacherSchema);

module.exports = TEACHER_MODEL;
