const express = require('express');
const app = express();

app.get('/api',(req,res)=>{
    res.send('<h1>文本</h1>');
});

app.listen(3000,()=>{
    //监听3000端口，开启服务器
});
