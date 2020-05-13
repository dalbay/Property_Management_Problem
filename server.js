const http = require("http");

// create server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    /*
        Building a (Very) Simple API
    First add another route(/api) to our project, and a simple placeholder for the response.
    Next,
        - Read data from the data.json file, then
        - parse JSON into a JavaScript object, and then
        - send back the result to the client.
    */
    res.end("This is an API");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

// use the server listen method()
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
