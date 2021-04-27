/**
 * try...catch...补救
 */

// (function () {
//   var a = 1;
//   console.log(b);
//   console.log('hello world');
// })();   // Error: b is not defined   且 hello world未执行

// (function () {
//   var a = 1;
//   try {
//     console.log(b);
//   } catch(err) {
//     // 输出错误但不停止向下执行
//     console.log(err);
//   }
//   console.log('hello world');
// })();    // hello world
function tr () {
  let res;
  try {
    let arr = [1,2,3];
    arr.forEach(item => {
      console.log('循环执行了');
      if(item == 2) {
        res = 'ok';
        throw new Error('eee');
      }
      if(item == 3) {
        throw new Error('找到3了');
      } 
    })
  } catch (e) {
    if(e.toString() !== 'eee') {
      return new Error(`捕获:${e}`);
    } else {
      return res;
    }
  }
}
tr();
console.log('res:',res);