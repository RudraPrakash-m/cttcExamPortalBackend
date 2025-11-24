const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  quesId: { type: String, unique: true },
  role: { type: String, enum: ["teacher"], required: true }
});


module.exports = teacherSchema;