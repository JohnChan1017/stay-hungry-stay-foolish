var http = require('http');
var fs = require('fs');
http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'image/jpg'});
  fs.createReadStream('./img/2019-02-08_153305.png').pipe(response);
}).listen(3000);
console.log('server running at http://localhost:3000')
