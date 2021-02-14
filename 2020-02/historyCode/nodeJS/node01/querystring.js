const qs = require('querystring');
// let string ='name=one&pass=two&sex=0';
// let obj = qs.parse(string,'&','=');
// console.log(obj);

let obj = {name:'one',pass:'two',sex:'0'};
let string = qs.stringify(obj,'^','?');
console.log(string);

// URL编码：qs.escape 
// URL解码：qs.unescape