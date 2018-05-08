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
    console.log('request for: ' + req.url + '::3002');
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Sample Message. Served by port 3002')
}).listen(3002, ip);

server.once('listening', function() {
    console.log('Server running at '+ ip +'::3002')
})