/**
 * Generator函数可以用来解决异步
 */

(function () {
  function* resolveAsync () {
    console.log('操作一:');
    yield setTimeout(() => {console.log('异步操作执行完毕')},1000);
    console.log('操作三:');
  }
  let r = resolveAsync();
  r.next();
  r.next();
})();
// 操作一  操作三  异步操作执行完毕
// The Problem is When to operate r.next() Secend;