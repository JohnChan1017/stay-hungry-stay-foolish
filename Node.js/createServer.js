var http = require('http');
http.createServer(function(requset, response){
  response.writeHead(200, {'content-Type': 'text/plain'});
  response.end('Hello World! \n');
}).listen(3000);
console.log('server running at http://localhost:3000')
