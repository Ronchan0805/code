//定义一个日志中间件
const fs = require('fs')
const path = require('path')

function RON(req,res,next){
    let data = req.url + '----' +req.method

    fs.appendFile(path.join(__dirname,'./name.txt'),data,err=>{
        if(err) return console.log(err.message)
            console.log('写入成功')
        next()
    })
}

module.exports = RON