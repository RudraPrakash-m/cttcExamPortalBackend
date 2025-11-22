const STUDENT_MODEL = require("../models/studentModel");

const allstudents = async (req, res) => {
  try {
    const allstudent = await STUDENT_MODEL.find();
    res.json(allstudent);
  } catch (error) {
    res.json({ error });
  }
};

module.exports = allstudents;
