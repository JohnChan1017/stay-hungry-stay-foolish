var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};
var chatServer = request('./lib/chat_server');
chatServer.listen(server);

function send404(response){
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('Error 404: resource not found');
  response.end();
}

function sendFile(response, filePath, fileContent){
  response.writeHead(200, {'Content-Type': mime.getType(path.basename(filePath))});
  response.end(fileContent)
}
function serverStatic(response, cache, abspath){
  if(cache[abspath]){ // 文件内容是否存在
    sendFile(response, abspath, cache[abspath]);
  }else { // 否则就去查找是否有该文件,如果有,就读取出来,如果,读取失败就send404,如果没有文件，就send404
    fs.exists(abspath, function(exists){
      if(exists){
        fs.readFile(abspath, function(err, data){
          if(err){
            send404(response);
          } else {
            cache[abspath] = data;
            sendFile(response, abspath, cache[abspath])
          }
        })
      } else {
        send404(response)
      }
    })
  }
}
var server = http.createServer(function(request, response){
  var filePath = false;
  if(request.url == '/'){
    filePath = 'public/index.html'
  }else {
    filePath = 'public'+request.url;
  }
  var abspath = './' + filePath;
  serverStatic(response, cache, abspath)
})

server.listen(3000, function(){
  console.log('server listening on port 3000')
})
