const express = require('express');
const app = express();

app.use('/',(req,res,next)=>{
    console.log('中间件');
    let {token} = req.query;
    if(token){
        next() //next()是否向下执行
    }else{
        res.send('缺少token');
    }
})

app.get('/test1',(req,res)=>{
    console.log('test1');
    res.send('test1');
})

app.get('/test2',(req,res)=>{
    console.log('test2');
    res.send('test2');
})

app.listen(3000,()=>{
    console.log('server start');
})