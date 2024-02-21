const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const queryString = parsedUrl.query;
  console.log('Path:', path);
  console.log('Query String:', queryString);
  if (path === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
  } else if (path === '/greet') {
    const name = queryString.name || 'Anonymous';
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello, ${name}!`);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});