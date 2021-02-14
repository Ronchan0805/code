const fs = require('fs')
let dir = fs.readdirSync('../')
console.log(dir)

//异步：
// fs.readdir('./',(err,data)=>{
//     console.log(err)
//     console.log(data)
// })
// console.log(222)
//错误的回调优先，回调函数中第一个对象表示错误对象，默认值为null，若出现错误，第一个参数就位错误对象


//同步：
// try{
//     //可能出错的代码
//     fs.readdirSync('./helloNode') //不加try,catch，同步执行一旦出错就终止执行后面语句
// }
// catch(err){
//     console.log("出错",err)
// }
// console.log(222)