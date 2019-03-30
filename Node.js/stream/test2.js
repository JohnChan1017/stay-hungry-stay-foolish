const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res){
  var method = req.method;
  if(method === 'POST') {
    var fileName = path.resolve(__dirname, 'post.txt');
    var writeStream = fs.createWriteStream(fileName);
    req.pipe(writeStream);
    req.on('end', function(){
      // 接收数据完成
      res.end('OK');
    });
  }
  // 其他方法暂不关心
});
server.listen(8888);
console.log('server runing at http://localhost:8888')
