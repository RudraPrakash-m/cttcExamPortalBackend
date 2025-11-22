const express = require("express")
const allstudents = require("../../controllers/studentControler")

const studentRoutes = express.Router()

studentRoutes.get("/allstudents",allstudents)

module.exports = studentRoutes