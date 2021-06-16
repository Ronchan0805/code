var name = 'ronchan', age = 18;
var obj = {
  name: 'RONCHAN',
  myFunction: function () {
    console.log(this.name + '----' + this.age);
  }
}
obj.myFunction(); // RONCHAN----undefined
// myFunction中的this指针指向obj对象内部

/* --apply,call类似，bind返回一个新函数-- */
var obj2 = {
  name: 'zhan',
  age: 20
}
obj.myFunction.apply(obj2); // zhan----20
obj.myFunction.call(obj2); // zhan----20
obj.myFunction.bind(obj2)(); // zhan----20

/**
 *  不同: call('this',param1,param2,...)
 *        apply('this',[param1,param2,...])
 *        bind('this',param1,param2,...)()
 */

/* ---------- 手写bind函数 --------- */
Function.prototype.bind = function (thisArg) {
  if(typeof this !== 'function') {
    return;
  }
  var _self = this;
  // arguments是一个伪数组，可使用ES6的Array.from()转变为真正的数组
  var args = Array.from(arguments).shift(); // 去除数组第一项，剩余为bind函数参数
  return function () {
    return _self.apply(thisArg, args.concat(Array.prototype.slice.call(arguments)));
  }
}
