const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  roll_no: { type: String, required: true }, // STRING, not Number
  batch: { type: String, required: true },
  examId: { type: String, required: true, unique: true }, // unique
});



module.exports = studentSchema