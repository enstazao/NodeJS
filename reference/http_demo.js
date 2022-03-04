const http = require('http');

// Create a Server object
http.createServer((req, res) =>  {
    // Write Respone
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('Server Running'));