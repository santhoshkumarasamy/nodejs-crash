const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log(req) //log the request object, the request object have many useful data regarding to the request.

  // setting header for the returning type
  res.setHeader("Content-type", "text/html");
  // res.write("Hi there") //Sending a text data
  var path = "./htmlFiles/";
  // sending a html file as response
  try {
    switch (req.url) {
      case "/":
        res.statusCode = 200;
        path += "index.html";
        break;
      case "/about":
        res.statusCode = 200;
        path += "about.html";
        break;
        // redirecting a link to another one
      case "/about-me":
        res.statusCode = 301; // 301; to set the requested source is permanently moved
        // path += "about.html"; // we don't need this line since we are going to redirect the request
        res.setHeader('Location','/about') // to indicate the client(browser) to go to this site
        res.end() // we are going to end the request because we are redirecting the request.
        break;
      default:
        res.statusCode = 404;
        path += "404.html";
    }
  } catch (err) {
    console.log(err);
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.end();
    } else {
      // res.write(data) // if we are going a send a single data we can use end() function directly with the data
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("Listening on port 3000");
});
