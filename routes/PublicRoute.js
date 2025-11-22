const express = require("express");
const findrole = require("../controllers/publicController");
const wrapAsync = require('../utills/wrapAsync');

const publicRouter = express.Router();

publicRouter.post("/findrole", wrapAsync(findrole));

module.exports = publicRouter;
