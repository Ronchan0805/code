/**
 * try...catch...补救
 */

(function () {
  var a = 1;
  console.log(b);
  console.log('hello world');
})();   // Error: b is not defined   且 hello world未执行

(function () {
  var a = 1;
  try {
    console.log(b);
  } catch(err) {
    // 输出错误但不停止向下执行
    console.log(err);
  }
  console.log('hello world');
})();    // hello world