var http=require('http');

//创建服务器
http.createServer(function(request,response) {
  response.end('Success:server in runing...');
}).listen(8081);
 
console.log('Server running...');