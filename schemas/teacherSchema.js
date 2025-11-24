const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    clerkId:{
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
    roll_no: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    quesId: {
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


module.exports = teacherSchema;