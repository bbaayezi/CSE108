var http = require('http');

var server1 = http.createServer(function(req, res) {
    console.log('request for: ' + req.url + '::3000');
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Sample Message. Served by port 3000')
}).listen(3000, '127.0.0.1');

var server2 = http.createServer(function(req, res) {
    console.log('request for: ' + req.url + '::3001');
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Sample Message. Served by port 3001')
}).listen(3001, '127.0.0.1');

server1.once('listening', function() {
    console.log('Server running at 127.0.0.1::3000')
})

server2.once('listening', function() {
    console.log('Server running at 127.0.0.1::3001')
})