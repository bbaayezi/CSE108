var http = require('http');
function getIPAdress(){  
    var interfaces = require('os').networkInterfaces();  
    for(var devName in interfaces){  
          var iface = interfaces[devName];  
          for(var i=0;i<iface.length;i++){  
               var alias = iface[i];  
               if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
                     return alias.address;  
               }  
          }  
    }  
}
var ip = getIPAdress();
var server = http.createServer(function(req, res) {
    console.log('request for: ' + req.url + '::3000');
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    console.log(req.headers);
    res.end('Sample Message. Served by port 3000')
}).listen(3000, '127.0.0.1');

server.once('listening', function() {
    console.log('Server running at ' + ip + '::3000')
})