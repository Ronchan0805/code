/**
 *  Proxy - 对象拦截机制
 *  new Proxy(target, handle)
 *  参数: target - 目标对象
 *        handle - 拦截行为
 *  作用前提: 使Proxy拦截起作用，就必须针对Proxy实例操作，针对原对象操作无效
 * 
 *  备注: 1.Proxy的实例是一个对象
 *        2. 对象一定是通过函数创建的，而函数本身也是对象
 */
let pro = new Proxy({}, {
  // 第一个参数为目标对象，第二个参数为访问的属性名
  get: function (target, proxyKey) {
    return target + '---' + proxyKey;
  }
});
console.log(pro.name); // [object Object]---name


let target = {};
let handle = {};
let a = new Proxy(target,handle);
a.name = 'ronchan';
console.log(target.name); // ronchan
