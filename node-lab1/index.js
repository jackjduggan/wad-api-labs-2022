// Load the http module to create an http server.
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

// eslint-disable-next-line no-undef
const port = process.env.PORT || "8080"; //Added Fallback because port was undefined.
//https://stackoverflow.com/questions/71312868/port-undefined-run-by-npm-run-start

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello WAD2');
});

server.listen(port);

// Put a friendly message on the terminal
console.log(`Server running at ${port}`);