const express = require('express');
//express实例化
const app = express();

const bodyparser = require('body-parser');
//app.use 使用中间件（插件）
//解析前端传来的表单数据 x-www-form-urlencode
app.use(bodyparser.urlencoded({ extended:false }));
//解析前端传来的JSON数据
app.use(bodyparser.json());

//最简单api接口
app.get('/user/login',(req,res)=>{
    //接收get参数   req.query
    console.log(req.query);
    let {us,ps} = req.query;
    if(us==='1234'&&ps==='5678'){
        res.send({err:0,msg:'regist ok'});
    }else{
        res.send({err:0,msg:'wrong'});
    }
});

app.post('/user/reg',(req,res)=>{
    //接收post数据  消息体 请求体 req.body
    console.log(req.body);
    //express不能直接解析消息体
    //需通过第三方插件body-parser来解析(npm install body-parser,使用行5~行10)
    let{us,ps} = req.body;
    if(us==='1234'&&ps==='5678'){
        res.send({err:0,msg:'regist ok'});
    }else{
        res.send({err:0,msg:'wrong'});
    }
});

app.listen(3000,()=>{
    //监听3000端口，开启服务器
    console.log('server start');
});

/*api构成：
ip
port
pathname
method get post
接收用户传递数据， 数据格式由后端定义
*/
