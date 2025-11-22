const express = require("express");
const findrole = require("../controllers/publicController");
const wrapAsync = require('../utills/wrapAsync');

const publicRouter = express.Router();

publicRouter.post("/register", wrapAsync(findrole));

module.exports = publicRouter;
