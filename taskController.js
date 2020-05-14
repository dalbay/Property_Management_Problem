// Exporting Functions:

// get ALL Tasks
exports.getAllTasks = (request, response) => {
  response.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
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
