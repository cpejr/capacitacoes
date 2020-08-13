const express = require("express");
const { celebrate } = require("celebrate");
const routes = express.Router();

const userController = require("./controllers/userController");
const userValidator = require("./validators/userValidator");

const classController = require("./controllers/classController");
const classValidator = require("./validators/classValidator");

//USER
routes.post("/user",  celebrate(userValidator.create), userController.create);
routes.get("/user", userController.read);
routes.put("/user/:id", celebrate(userValidator.update), userController.update);
routes.delete("/user/:id", celebrate(userValidator.delete), userController.delete);


//CLASS
routes.post("/class",  celebrate(classValidator.create), classController.create);
routes.get("/class", classController.read);
routes.put("/class/:id", celebrate(classValidator.update), classController.update);
routes.delete("/class/:id", celebrate(classValidator.delete), classController.delete);

module.exports = routes;