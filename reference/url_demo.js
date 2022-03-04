const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
// console.log(myUrl.href);
// console.log(myUrl.toString());

// HOST (root domain)
// console.log(myUrl.host);
// Host Name (doesnot get the port)
// console.log(myUrl.hostname);
// Path Name 
console.log(myUrl.pathname);
// Serialized Query
console.log(myUrl.search);
// Params Object
console.log(myUrl.searchParams);
// Add Param
myUrl.searchParams.append('abc', 123);
console.log(myUrl.searchParams);
// Loop Throught the param
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));