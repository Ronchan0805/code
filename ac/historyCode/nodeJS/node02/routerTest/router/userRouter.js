var express = require('express');
var router = express.Router(); // 获取路由实例

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'zr1998zr',
  port     : '3306',
  database : 'myblog'
});

connection.connect();
var data=null;
connection.query('select * from users', (err, rows, fields)=> {
  if (err) throw err
    this.data =rows;
})

connection.end();

router.get('/b',(req,res)=>{
    res.send(this.data)
})
module.exports = router
