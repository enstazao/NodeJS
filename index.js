const path = require('path');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Build file path dynamic
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    // Extension of the file
    let extname = path.extname(filePath);

    // Set the Initial Content Type
    let contentType = 'text/html';

    // Set the ext and set the content Type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENONET') {
                // Page Not Found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(content, 'utf8');
                })
            } else {
                // Some Server Error
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});
// When you deploy it to server it will go to the port that is available to environment variable, or the port 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));


//  // req.url = '/' or whatever you type in search bar that route will be shown to you
//  if (req.url === '/') {
//     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//         if (err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(content);
//     });
// }

// if (req.url === '/api/users') {
//     // Normally we are going to fetch data from server but in this case we are going to hardcode it
//     const users = [
//         { name: 'Bob Smith', age: 40 },
//         { name: 'John Doe', age: 30 } 
//     ];
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(users));

// }