const express = require("express");
const {checkUserExistance, registerUser} = require("../controllers/publicController")
const wrapAsync = require('../utils/wrapAsync');

const publicRouter = express.Router();

publicRouter.post("/register", wrapAsync(registerUser));

publicRouter.post("/userExistance", wrapAsync(checkUserExistance))

module.exports = publicRouter;
