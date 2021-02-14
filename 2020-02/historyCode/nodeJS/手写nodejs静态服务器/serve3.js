//引入http模块
const http = require('http');
const fs = require('fs');
const path = require('path');
//创建服务
const server = http.createServer();
//监听请求
server.on('request',(req,res)=>{  //这里必须是"request",不能是其他单词
    if(req.url==='/index.html'){
        fs.readFile(path.join(__dirname,'/views/movie.html'),'utf8',(err,data)=>{  
            //读取并返回一个html页面
            if(err) return console.log(err.message)
            res.end(data)
        })
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