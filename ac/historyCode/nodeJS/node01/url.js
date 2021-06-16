const url =require('url');
let urlString = 'http://nodejs.cn/api/fs.html#fs_fs_unlink_path_callback';
console.log(url.parse(urlString));
//也可通过url.format()将对象转换成地址