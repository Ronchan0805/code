//定义一个表单中间件
const querystring = require('querystring')

function bodyParser(req,res,next) {
    let str =''
    req.on('data',(chunk)=>{
        // console.log(chunk)
        str += chunk
    })
    req.on('end',()=>{
        // console.log('接收完毕' + str)
        req.body = querystring.parse(str.toString())
        console.log(req.body)
    })
    next()
}

module.exports = bodyParser