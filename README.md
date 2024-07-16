# Simple Node.js Server for Serving HTML and CSS Files

## Overview

This project sets up a simple Node.js server to serve HTML and CSS files. It includes an `index.html` file for the home page, a `style.css` file for styling, and a `server.js` file to handle HTTP requests and serve the files.

## File Structure

project-directory/
├── css/
│ └── style.css
├── index.html
└── server.js
 

## Explanation of the serveStaticFile Function
The serveStaticFile function is a utility function that reads a file from the disk and sends it to the client with the appropriate content type. Here's how it works:

Parameters:

<li>filePath: The path to the file to be served.</li>
<li></li>contentType: The MIME type of the file (e.g., text/html for HTML files, text/css for CSS files).</li>
<li>res: The HTTP response object.</li>
<li>
File Reading:
<li>The function uses fs.readFile to read the file specified by filePath.</li>
<li>If an error occurs while reading the file, the server responds with a 500 status code and an error message.</li>
<li>If the file is read successfully, the server responds with a 200 status code, sets the Content-Type header, and sends the file content as the response body.</li>
  
</li>


 
