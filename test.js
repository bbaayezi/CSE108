var http = require('http');
var request = require('request');

for (var i = 0; i < 50; i++) {
    request('http://192.168.1.11', function(err, res, body) {
        if (!err && res.statusCode == 200) console.log(body)
    })
}