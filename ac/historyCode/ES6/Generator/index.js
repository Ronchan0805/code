/**
 * Generator函数
 *  1. function和函数名之间用*隔开
 *  2. 函数内部使用yield表达式
 * 
 *  yield表达式用于定义generator函数内部的状态
 *  每调用一次next就会依次返回一个状态
 */
(function () {
  function* firstAddThenEx () {
    let n = 1;
    n += 1;
    yield n;
    n = n * 9;
    yield n;
    n = 0;
    return n;
  }
  var ae = firstAddThenEx();
  for(let i = 0; i < 3; i++) {
    console.log(ae.next());
  }
})();
// {value: 2, done: false}
// {value: 18, done: false}
// {value: 0, done: true}


/**
 * Genertor与Iterator接口:
 *   Generator函数返回一个遍历器对象,该对象可以赋给对象的[Symbol.interator]属性使用,以此实现了Iterator接口
 */
(function () {
  var obj = {};
  obj[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
    return 4;
  }
  for(let item of obj) {
    console.log(item);
  }
})();
// 1
// 2
// 3


/**
 * yield表达式本身没有返回值,而是next()方法返回了上一个yield关键字后面的值
 * 当为next方法传递参数时,该参数会被当做上一个yield表达式的返回值
 * 由于V8引擎内部机制缘故,第一次为next()方法传递参数是无效的
 */
(function () {
  function* f () {
    for(var i = 0; true; i++) {
      var r = yield i;
      if(r){
        i = -1;
      }
    }
  }
  let g = f();
  for(let i = 0; i < 5; i++) {
    console.log(g.next());
  }
})();



/**
 * for...of方法自动遍历生成器对象,无需每次调用next()方法
 * eg: 通过Generator函数生成 生成器对象赋给obj对象的Symbol.iterator属性,使其能够使用for...of遍历
 */
(function () {
  function* obejectForOf () {
    let keys = Object.keys(this);
    for(let i of keys) {
      yield i;
    }
  }
  let obj = {name: 'ronchan', age: 18}
  obj[Symbol.iterator] = obejectForOf;
  /**
   * 这里把obejectForOf赋给obj的Symbol.iterator属性,其内部的this就指向了obj对象
   * obejctForOf 与 obejctForOf()区别在于前面是把函数赋给某个变量,
   * 而后面是把函数的返回值付给某个变量
   */
  for(let item of obj) {
    console.log('obj对象的key:',item);
  }
})();


/**
 * Generator函数的嵌套调用:
 * 1. 在一个Generator函数内调用另一个Generator函数需使用yield表达式
 */
// 1.
(function () {
  function* a () {
    yield 'x';
    yield 'y';
  }
  function* b () {
    yield 'a';
    yield* a();
    yield 'b';
  }
  for(let i of b()) {
    console.log('Generator嵌套调用1.',i);
  }
})();