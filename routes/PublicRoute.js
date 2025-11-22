const express = require("express");
const findrole = require("../controllers/publicController");

const publicRouter = express.Router();

publicRouter.post("/findrole", findrole);

module.exports = publicRouter;
