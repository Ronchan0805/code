const express = require('express');
const app = express();

let userRouter = require('./router/userRouter');
app.use('/a',userRouter);

app.listen(3000,()=>{
    //监听3000端口，开启服务器
    console.log('server start')
})