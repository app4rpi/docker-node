'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write('<head><meta charset="utf-8" />');
    response.write("<title>Hola món!</title>");
    response.write("<style>body{background:#BA0020;font:bold normal 4em 'Arial'} h1{ color: #ded; margin-top: 21%; text-align: center; }</style >");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>Hello world!</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
}).listen(port);
