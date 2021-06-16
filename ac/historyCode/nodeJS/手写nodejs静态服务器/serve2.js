//引入http模块
const http = require('http');
//创建服务
const server = http.createServer();
//监听请求
server.on('request',(req,res)=>{  //这里必须是"request",不能是其他单词
    // console.log('处理逻辑');
    // res.end('hello node server');
    if(req.url==='/index.html'){
        res.end(`<!DOCTYPE html>
                <html lang='en'>
                <head>
                <meta charset="UTF-8">  //不加会出现乱码
                    <title>movie</title>
                </head>
                <body>
                    电影
                </body>
                </html>`)    //注意这里使用的是着重符 ``
    }else if(req.url==='/movie'){
        res.end('电影')
    }else{
        res.end('404not found')
    }
})
//监听端口
server.listen('3000',()=>{
    console.log('server start');
})