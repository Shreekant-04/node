const http = require("http");
const fs = require("fs");
const path = require("path");

// Function to serve static files
const serveStaticFile = (filePath, contentType, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading the page");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    serveStaticFile(path.join(__dirname, "index.html"), "text/html", res);
  } else if (req.url === "/about") {
    serveStaticFile(path.join(__dirname, "about.html"), "text/html", res);
  } else if (req.url === "/contact") {
    serveStaticFile(path.join(__dirname, "contact.html"), "text/html", res);
  } else if (req.url.startsWith("/css/")) {
    serveStaticFile(path.join(__dirname, req.url), "text/css", res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
