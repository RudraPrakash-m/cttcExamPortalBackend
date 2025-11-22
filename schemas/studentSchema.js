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
      unique: true,
      trim: true,
    },

    role: {
      type: String,
      enum: ["student", "faculty", "admin"],
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