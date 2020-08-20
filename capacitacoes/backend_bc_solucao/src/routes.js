const express = require("express");
const { celebrate } = require("celebrate");
const routes = express.Router();

const userController = require("./controllers/userController");
const userValidator = require("./validators/userValidator");

const classController = require("./controllers/classController");
const classValidator = require("./validators/classValidator");

const taskController = require("./controllers/taskController");
const taskValidator = require("./validators/taskValidator");

const sessionController = require("./controllers/sessionController");
const sessionValidator = require("./validators/sessionValidator");

const { authenticateToken, isTeacher, isStudent } = require('./middlewares/authentication');
const imageUpload = require('./middlewares/imageUpload');

//USER
routes.post("/user",  celebrate(userValidator.create), userController.create);
routes.get("/user", userController.read);
routes.put("/user/:id", celebrate(userValidator.update), userController.update);
routes.delete("/user/:id", celebrate(userValidator.delete), userController.delete);

//CLASS
routes.post("/class",  celebrate(classValidator.create), classController.create);
routes.post("addStudents", authenticateToken, isTeacher, celebrate(classValidator.addStudents), classController.addStudents);
routes.get("/class", classController.read);
routes.put("/class/:id", celebrate(classValidator.update), classController.update);
routes.delete("/class/:id", celebrate(classValidator.delete), classController.delete);
routes.delete("removeStudents", authenticateToken, isTeacher, celebrate(classValidator.removeStudents), classController.removeStudents);

//TASK
routes.post("/task", authenticateToken, isTeacher, imageUpload('imageFile'), celebrate(taskValidator.create), taskController.create);
routes.get("/task", authenticateToken, isStudent, celebrate(taskValidator.read), taskController.read);
routes.put("/task/:taskId", authenticateToken, imageUpload('imageFile', 'update'), isTeacher, celebrate(taskValidator.update), taskController.update);
routes.delete("/task/:taskId", authenticateToken, isTeacher, celebrate(taskValidator.delete), taskController.delete);

//SESSION
routes.post("/session", celebrate(sessionValidator.create), sessionController.create);
routes.ger("/validate", celebrate(sessionValidator.validate), sessionController.validate);

module.exports = routes;