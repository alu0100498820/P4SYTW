var static = require('node-static');
var fileServer = new static.Server('./');
console.log("Visit http://localhost:8080/tests/test_blanket.html")
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);
