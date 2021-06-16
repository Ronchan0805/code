const fs = require('fs');
let jane = fs.lstatSync('../node01');
console.log(jane.isDirectory());
// fs.readdir('../',(err,dirs)=>{
//     for(let index = 0;index < dirs.length; index++){
//         // console.log(dirs[index]);
//         let a = fs.lstatSync(dirs[index]);
//             if(a.isDirectory()){
//                 console.log('isDirectory');
//             }else{
//                 console.log('is file');
//             }
//         }
//     }
// )
// fs.stat('./dirtree',(err,stats)=>{
//     if(stats.isFile()){
//         console.log('is File');
//     }else{
//         console.log('is Dir')
//     }
// });