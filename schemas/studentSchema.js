const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    id:{
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },

    examid: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
      default: "student",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = studentSchema