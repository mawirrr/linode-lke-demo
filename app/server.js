// app/server.js
const http = require('http');
const port = process.env.PORT || 3000;
const version = process.env.VERSION || 'v1';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/plain'});
  res.end(`Hello from LKE demo test Image hari ini dengan version ${process.env.VERSION}\n`);
});

server.listen(port, () => console.log(`listening ${port}`));
