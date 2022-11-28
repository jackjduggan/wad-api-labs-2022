// Load the http module to create an http server.
import http from 'http';
import dotenv from 'dotenv';
import greeting from './greeting.js';

dotenv.config();

// eslint-disable-next-line no-undef
const port = process.env.PORT || "8080"; //Added Fallback because port was undefined.
//https://stackoverflow.com/questions/71312868/port-undefined-run-by-npm-run-start

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
    let lang = req.headers['accept-language'];
    const defaultLang='en';
    if (!greeting[lang]) lang=defaultLang;
    const response={
      lang: lang,
      message: greeting[lang],
    };
  
    res.writeHead(200, {'Content-Type': 'text/plain',
                        'Content-Language': response.lang});
    res.end(response.message);
  });
  
  server.listen(port);
  
  // Put a friendly message on the terminal
  console.log(`Server running at ${port}`);