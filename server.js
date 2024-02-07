var http = require('http');
var a = 10;
var b = 20;
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':"text/html"});
    res.write(`A value is ${a} `);
    res.write(`sum is ${a+b}`);

}).listen(3001);
console.log("Server started on http://127.0.0.1:3001");