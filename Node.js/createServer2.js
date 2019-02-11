var http = require('http');
var server = http.createServer();
server.on('request', function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello world!2\n');
});
server.listen(4000);
console.log('server running at http://localhost:4000')
