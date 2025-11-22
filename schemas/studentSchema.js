const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    clerk_id:{
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
      type: Number,
      required: true,
      unique: true,
      lowercase: true,
    },
    batch: {

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