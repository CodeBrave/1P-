// Import the http module: This allows you to create a server
// new comment new new 
const http = require('http');
/* Use http.createServer() to create a server. Inside this function, specify what should happen when the server receives a request (req) and sends a response (res). When the server receives a request, it processes the request, prepares the appropriate response, and then sends the response back to the client. */
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});
/* Use server.listen(3000, '127.0.0.1', () => { ... }) to make the server listen on port 3000. Think of a port as giving the server a specific address where it can receive messages. This means the server is running and can respond to requests made to http://127.0.0.1:3000/. */
const port = 3000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
