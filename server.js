var http = require('http');

var server = http.createServer(function (req, res) //creating server
{
    //handling incoming requests
    if(req.url == '/')
    {
        //setting response header
        res.writeHead(200, {'Content-Type': 'text/html'});

        //setting response content
        res.write('This is testing number 1');
        res.end();
    }

});

server.listen(5000); //listening to requests on port 5000

console.log('nodeJs server is running successfuly on port 5000');