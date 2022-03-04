const fs = require('fs')
const path = require('path')

// Create a folder on a system
// Aynchronous Method it has also callback
// Function ProtoType => (path of current FileSystemDirectoryEntry, options, Function Parameters)

// fs.mkdir(path.join(__dirname, './test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder Created');
// });

// Create and Write to the file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File Created and written Successfully ... ');

//     fs.appendFile(path.join(__dirname, './test', 'hello.txt'), ' I love NodeJS', err => {
//         if (err) throw err;
//         console.log('File Written...')
//     })
// })

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello1.txt'), err => {
    if (err) throw err;
    console.log('File Renamed...');
})