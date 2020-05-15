//-------------MODEL-------------------
// require mongoose package
const mongoose = require("mongoose");
// create schema for tasks:
const taskSchema = new mongoose.Schema({
  worker: {
    type: String,
    required: [true, "A task must have a name"], //pass in an array instead to use validators
    unique: true,
  },
  date: {
    type: String,
  },
  owner: {
    type: String,
    required: [true, "A task must have an owner"],
  },
  phone: {
    type: String,
    required: [true, "A task must have a phone number"],
  },
  address: {
    type: String,
    required: [true, "A task must have an address"],
  },
  description: {
    type: String,
  },
});

// create a model out of that schema
const Task = mongoose.model("Task", taskSchema);
// Exporting Functions:

// get ALL Tasks
exports.getAllTasks = async (request, response) => {
  try {
    // use the models find method - gets all data in Tour collection
    const tasks = await Task.find();

    response.status(200).json({
      status: "success",
      results: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (err) {
    response.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};

// get a Task
exports.getTask = (request, response) => {};
// create a Task
exports.createTask = (request, response) => {};
// update a Task
exports.updateTask = (request, response) => {};

// middleware function to check id (if task exists)
exports.checkId = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

// Create a checkBody middleware - check if body contains name and price properties, if not send back 400 (bad request).
// Add it to the post handler stack
exports.checkBody = (req, res, next) => {
  if (!req.body.ownerName || !req.body.phone || !req.body.address) {
    return res.status(400).json({
      status: "fail",
      message: "Missing Owner Name, Phone Number or Address",
    });
  }
  next();
};
