// import the express module
const express = require("express");

// create new router for the tasks
const router = express.Router();

// Import tourController (route handlers) in tourRouter.js
const taskController = require("./taskController");

//Param Middleware
// - middleware that only runs for certain parameters in the URL.
// - We can make use of the param middleware and perform a validation to check if id exists before the execution hits the handler functions.
router.param("id", taskController.checkId);

// use that router:
router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.checkBody, taskController.createTask);
router
  .route("/:id")
  .get(taskController.getTask)
  .patch(taskController.updateTask);

// when we have only one thing to export we use module.export
module.exports = router;
