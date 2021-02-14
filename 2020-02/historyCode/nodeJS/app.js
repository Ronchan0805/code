var express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var app = express();

app.use('/', createProxyMiddleware({
    // 代理跨域目标接口
    target: 'http://localhost:8080',
    changeOrigin: true,

    // 修改响应头信息
    onProxyRes: function(proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', '*');
    },

}));

app.listen(3000);
console.log('Proxy server is listen at port 3000...');



// const express = require('express')

// const app = express()

// // //第一个中间件
// // app.use((req,res,next)=>{
// //     req.body = {}
// //     next()
// // })
// // //第二个中间件
// // app.use((req,res,next)=>{
// //     req.body.name = 'chan'
// //     next()
// // })

// // const RON = require('./RON')
// // app.use(RON)

// const bodyParser = require('./bodyParser')
// app.use(bodyParser)

// // app.get('/',(req,res)=>{
// //     // console.log(req.body)
// //     res.send('express server 2')
// // })

// app.post('/api/post',(req,res)=>{
//     res.send(req)
// })

// app.listen(3000,()=>{
//     console.log('serve start')
// })
