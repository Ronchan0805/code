/**
 *  ES6 - class里的get,set拦截函数
 */

// 首先来看几种情形：
/* ----------------------------------------------------------------------*/
class Type {
  constructor () {
    this.name = 'ronchan';
  }
}
let a = new Type();
a.name = '666';
console.log('a.name:',a.name);  // a.name:666

/* ----------------------------------------------------------------------*/
// class Type2 {
//   constructor () {
//     this.name = 'ronchan';
//   }
//   get name() {
//     console.log('get拦截到了');
//     return this.name;
//   }
//   set name(val) {
//     console.log('set拦截到了');
//     this.name = val;
//   }
// }
// let b = new Type2();
// b.name = '666';
// console.log('b.name:',b.name); // Error: Maximum call stack size exceeded 堆栈溢出（属性名和方法名重复了）

/* ----------------------------------------------------------------------*/
class Type3 {
  constructor () {
    this._name = 'ronchan';
  }
  get name() {
    console.log('get拦截到了');
    return this._name;
  }
  set name(val) {
    console.log('set拦截到了');
    this._name = val;
  }
}
let c = new Type3();
console.log('c.name:',c.name); // get拦截到了  c.name:ronchan
c.name = '666';  // set拦截到了
console.log('c.name:',c.name); // get拦截到了  c.name:666

/**
 *  总结：对象内部的属性约定为_开头（实质上和普通属性并无任何区别），
 *        get和set方法其实相当于创建了一个内部属性的副本(_name的副本是name),将该副本暴露到对象外部使用
 *        这样外部在使用该属性时（注意，使用的是副本属性）就至少一定会走get（读）或者set（改）两个函数其中之一，
 *        以此就实现了对属性的拦截。
 * 
 *  辨析： 1. 内部属性其实在外部可以随时访问到，但为了实现拦截，不能直接使用
 *         2. Type3中的_name和name是两个不同的属性!，如果名称重复就会导致Type2中的报错
 *         3. 可以在get或者set函数中添加更多逻辑，例如Type3中  get name() {return this._name + 'np';}等
 *        
 */


