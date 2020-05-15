/*
REST Principles
1 - Separate API into logical resources -> 
Example:
tours, users, review,...

2 - Expose structured, resource-based URLs ->
Example:
https://www.natours.com/addNewTour (/addNewTour is called ENDPOINT - Entpoints will send back different data to the client)

3 - Use HTTP methods -> 
Example:
/getTours - GET /tours : Read
/addNewTour - POST /tours : Create
/updateTour - PUT(sent the entire object) / PATCH(part of object) /tours : Update
/deleteTour - DELETE /tours : Delete

4 - Send data as JSON -> We can send JSON without formatting; we can also do some simple response formatting before sending it to the client. The standard that we are using is called JSend. We create a new object; add a status message to it; and add the data into an object called data.
This formatting is called Enveloping- common practive to mitigate some security issues. There are also other response formatting standarts like JSOPN:API, OData JSON Protocol, ...

5 - Be stateless -> All state is handled on the client. (State refers to a piece of data in the application that might change overtime; ex: loggedIn, currentPage) This means that each request must contain all the information necessary to process a certain request. The server should not have to remember previous requests.
*/

// DotENV extension used for environmental variables
const dotenv = require("dotenv");

// require mongoose
const mongoose = require("mongoose");

const http = require("http");
// Use Express:
const express = require("express");

// Define app variable and assign express to it:
const app = express();

// Create a Middleware (function that can modify request data)
app.use(express.json());

/* 
Read Data - in top-level code; not in the route handler.
Top level will be executed only once right after the application startup.
    const tours = JSON.parse(
        fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
    );
*/
// import Routes:
const tourRouter = require("./taskRoutes");
// Mounting tourRouter on a Router
app.use("/api/tasks", tourRouter);

//-------------Using Mongoose----------------------//
dotenv.config({ path: "./config.env" });
// connect to mongoose:
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connections);
    console.log("DB connection successful");
  });

/*
__________________Handling Requests Without Express Router_____________
//Handling GET Requests
app.get("/", (request, response) => {
  response.status(200).send("Hello from the server side!");
});

//Handling POST Requests
// - Create a new Route
// - To send data from the client to the server on the request, add a middleware to the top-level -  app.use(express.json());.
app.post("/api/v1/tours", (request, response) => {
  console.log(request.body);
  response.send("Done"); // always need to send response to finish the cycle.
});

//Responding to URL Parameters
// - Define Parameters in the URL
// - we can make parameters optional by adding a ? to the end of the variable name, like /:variable_name?. This way if we no longer have to specify it at the endpoint.
// - Read these Parameters and respond to them
// Define a Route to GET ONE Tour by defining a variable:
/*
app.get('/api/v1/tours/:id', (request, response) => {
  console.log(request.params);

  const id = request.params.id * 1; // converts string to number.

  if (id > tours.length) {
    return response.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    }); // exit the function
  }
  // we could also try to get the tour first,
  // and then test and see if we got a tour:
  // if(!tour){
  
  const tour = tours.find(element => element.id === id);
  response.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});
*/
/*
Handling PATCH Requests

app.patch('/api/v1/tours/:id', (request, response) => {
  if (request.params.id * 1 > tours.length) {
    response.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }
  response.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  });
});

Handling DELETE Requests
the response for a DELETE request is usually 204. This means No Content. We don't send data back, instead we send null.

app.delete('/api/v1/tours/:id', (request, response) => {
  if (request.params.id * 1 > tours.length) {
    response.status(404).json({
      status: 'fail',
      message: 'Invalid ID'
    });
  }
  response.status(204).json({
    status: 'success',
    data: null
  });
});
*/

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running no port ${port}...`);
});

//__________________CREATE SERVER WITHOUT EXPRESS_______________________
// // create server
// const server = http.createServer((req, res) => {
//   const pathName = req.url;
//   // Home page
//   if (pathName === "/" || pathName === "/index") {
//     // Product page
//     res.end("This is the Home Page");
//   } else if (pathName === "/product") {
//     res.end("This is the PRODUCT");
//     // API
//   } else if (pathName === "/api") {
//     /*
//             Building a (Very) Simple API
//         First add another route(/api) to our project, and a simple placeholder for the response.
//         Next,
//             - Read data from the data.json file, then
//             - parse JSON into a JavaScript object, and then
//             - send back the result to the client.
//         */
//     res.end("This is an API");
//     // Not  Found
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "my-own-header": "hello-world",
//     });
//     res.end("<h1>Page not found!</h1>");
//   }
// });
// // use the server listen method()
// server.listen(8000, "127.0.0.1", () => {
//   console.log("Listening to requests on port 8000");
// });
