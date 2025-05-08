const http = require('http');
const os = require('os');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(req.url == '/') {
    res.write('<html><body><p>This is Home Page.</p></body></html>');
    res.end();
  }else if(req.url == '/admin'){
    // set response content
    res.write('<html><body><p color="red">This is Admin Page.</p></body></html>');
    res.end();
  }else{// set Invalid response content
    res.statusCode = 401;
    res.end('Page Not Found');
    }
    console.log(`New request => http://${hostname}:${port}`+req.url);
});

server.listen(3000);