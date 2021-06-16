var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.end('8080 server connection success')
});

server.listen('8080');
console.log('Server is running at port 8080...');