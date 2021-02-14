//引入http模块
const http = require('http');
//创建服务
const server = http.createServer();
//监听请求
server.on('request',(req,res)=>{  //这里必须是"request",不能是其他单词
    console.log('处理逻辑');
    res.end('hello node server');
})
//监听端口
server.listen('3000',()=>{
    console.log('server start');
})