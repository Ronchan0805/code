const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname,'./static')))
//该种方法localhost:3000直接指向static静态目录
//故,http://localhost:3000/img/demo.jpg 访问图片
app.listen(3000,()=>{
    console.log('server start');
})