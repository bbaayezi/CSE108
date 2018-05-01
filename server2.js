var http = require('http');

var server = http.createServer(function(req, res) {
    console.log('request for: ' + req.url + '::3001');
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Sample Message. Served by port 3001')
}).listen(3001, '127.0.0.1');

server.once('listening', function() {
    console.log('Server running at 127.0.0.1::3001')
})