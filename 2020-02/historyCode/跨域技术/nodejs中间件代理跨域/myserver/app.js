var express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var app = express();

//设置nodeja中间件代理跨域，如果有多个需要代理的地址，多写几个app.use()
app.use('/proxy', createProxyMiddleware({
    // 代理跨域目标接口
    target: 'https://lvyueyang.gitee.io/web-music/system/musicList.json?timestamp=1586696733203',
    changeOrigin: true,

    // 修改响应头信息
    onProxyRes: function(proxyRes, req, res) {
        res.header('Access-Control-Allow-Origin', '*');
    },
}));


app.get('/api',(req,res)=>{
        res.send('hello')
})

app.listen(3000);
console.log('Proxy server is listen at port 3000...');