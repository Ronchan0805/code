const fs = require('fs')

//创建文件
// fs.writeFile('../name.txt','创建文件-覆盖写入',(err)=>{
//     console.log(err);
// })

//写入文件
fs.appendFile('../name.text','追加的内容',(err)=>{
    console.log(err);
})

//读取文件
// fs.readFile('../name.txt',(err,data)=>{
//     console.log(err);
//     console.log(data);
// })

//删除文件
// fs.unlink('../name.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("文件已删除")
//     }
// })