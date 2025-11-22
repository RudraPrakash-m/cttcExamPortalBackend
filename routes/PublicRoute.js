const express = require("express");
const {checkUserExistance, register} = require("../controllers/publicController")
const wrapAsync = require('../utils/wrapAsync');

const publicRouter = express.Router();


publicRouter.post("/userExistence", wrapAsync(checkUserExistance))
publicRouter.post("/register", wrapAsync(registerUser));

module.exports = publicRouter;
