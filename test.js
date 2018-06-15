var http = require('http');
var request = require('request');
let times = [];
let time = 0;
let date1 = new Date().getTime();
// let date2;
for (let i = 0; i < 2000; i++) {
    let key = i;
    // console.log(key)
    // console.log('sending request...')
    // console.time(key);
    request('http://192.168.1.13', function(err, res, body) {
        let date2 = new Date().getTime();
        time = date2 - date1;
        times.push(time);
        console.log(time);
        console.log('Average: '+times.reduce((l, c) => l + c) / times.length);
    })
    
}

// console.log(date1);
// console.log('last time: ' + time)