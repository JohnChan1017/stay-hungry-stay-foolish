const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res){
  const method = req.method;
  if(method === 'GET') {
    const fileName = path.resolve(__dirname, 'data.txt');
    // fs.readFile(fileName, function(err, data){
    //   res.end(data);
    // });
    const stream = fs.createReadStream(fileName);
    stream.pipe(res);
  }
  // 其他 method 暂时忽略
});
server.listen(8000);
console.log('server running at http://localhost:8000')
