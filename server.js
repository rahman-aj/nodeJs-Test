var http = require('http');

var server = http.createServer(function (req, res) //creating server
{
    //handling incoming requests

});

server.listen(5000); //listening to requests on port 5000

console.log('nodeJs server is running successfuly on port 5000');