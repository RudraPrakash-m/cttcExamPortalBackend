<<<<<<< HEAD
const express = require("express");
const findrole = require("../controllers/publicController");
=======
const express = require('express')
const publicController = require('../controllers/publicController');
const wrapAsync = require('../utills/wrapAsync');

>>>>>>> 0ebfa5b (added)

const publicRouter = express.Router();

<<<<<<< HEAD
publicRouter.post("/findrole", findrole);

module.exports = publicRouter;
=======
publicRouter.post("/findrole",wrapAsync(publicController.findrole))

module.exports = publicRouter;
>>>>>>> 0ebfa5b (added)
