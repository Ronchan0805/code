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


/**
 *  Thunk函数
 *  
 *    背景 - 函数求值策略：传值调用(表达式作为参数先求值再传参) 和 传名调用(表达式作为参数先传表达式,使用到时再求值)
 *                 传统Thunk函数用于传名调用(即用函数封装表达式)
 * 
 *    作用 - Thunk函数相当于一个转换器,将多参数函数变成单参数函数
 */
let ThunkFn;
// ES5 
(function () {
  var Thunk = function (fn) {
    return function () {
      var args = Array.prototype.slice.call(arguments); // arguments是一个类数组,使用该方法转换为数组
      return function (callback) {
        args.push(callback);
        return fn.apply(this, args); // apply和call方法都是修改函数内部指针并立即调用
      }
    }
  }
  ThunkFn = Thunk;
})();

// ES6
(function () {
  var Thunk = function (fn) {
    return function (...args) {
      return function (callback) {
        return fn.call(this, ...args, callback);
      }
    }
  }
})();
// eg
(function () {
  function fn(a, func) {
    func(a);
  }
  const ft = ThunkFn(fn); // 修改fn的指针与参数,使其与下方console.log里的相同
  
  ft(1)(console.log);
  /**
   * ft(1)(console.log)执行步骤:
   *   1. ft(1)先执行创建一个args,这里包含参数1,执行完毕后返回一个函数,该函数参数是console.log( 即下方的T(console.log)函数 )
   *   2. 令T = ft(1),即第二步执行T(console.log)函数,该函数将console.log与args整合在一起,得到最终的arguments
   *   3. 将arguments赋给最初的fn函数,立即执行fn(arguments),其中arguments 等价于 [1,console.log]
   *   4. 执行fn(1, console.log),最终打印结果为1
   */
})();


/**
 *  如此Thunk函数就解决了最上方 '何时执行第二次next()方法的问题'。但本质上Thunk其实也是依赖于内部的回调函数
 *  仍然是在回调函数里执行next()方法,只不过对回调函数进行了流程化封装,让代码看起来更像同步代码而已?(个人见解)
 */
/** 关于完整的Thunk函数配合Generator解决异步的实例见文档:https://es6.ruanyifeng.com/#docs/generator-async */
/** 应用：大规模数据分块依次处理 */