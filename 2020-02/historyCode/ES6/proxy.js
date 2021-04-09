/**
 *  Proxy - 对象拦截机制
 *  new Proxy(target, handle)
 *  参数: target - 目标对象
 *        handle - 拦截行为
 */
// let pro = new Proxy({}, {
//   // 第一个参数为目标对象，第二个参数为访问的属性名
//   get: function (target, proxyKey) {
//     return target + '---' + proxyKey;
//   }
// });
// console.log(pro.name); // [object Object]---name


// let target = {};
// let handle = {};
// let a = new Proxy(target,handle);
// a.name = 'ronchan';
// console.log(target.name); // ronchan
