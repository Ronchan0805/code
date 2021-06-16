const express = require('express');
//express实例化
const app = express();
// var sqlRouter =require('./routerTest/sql');
// app.use(sqlRouter);

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'zr1998zr',
  port     : '3306',
  database : 'news'
});
connection.connect();
var data=null;
connection.query('select * from national_news', (err, rows, fields)=> {
  if (err) throw err
    this.data =rows;
})
connection.end();

app.get('/national',(req,res)=>{
    res.json(this.data)
});
app.listen(3000,()=>{
    //监听3000端口，开启服务器
    console.log('server start');
});