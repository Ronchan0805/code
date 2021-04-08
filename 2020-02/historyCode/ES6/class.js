/**
 *  ES6的class类 <=> ES5构造函数
 */

class Des {
  constructor () {
    this._name = 'ronchan';
    this._age = 18;
  }
  getName () {
    return this._name;
  }
  /* 无需逗号 */
  getAge () {
    return this._age;
  }
}
let i = new Des();
console.log(i.getName())
// 添加一个方法
Des.prototype.getMyInfo = function () {
  console.log(`myname is ${ this._name } and myage is ${ this._age }`);
}
// 添加多个方法
Object.assign(Des.prototype, {
  setName(v) {
    this._name = v;
  },
  /* 逗号隔开 */
  setAge(v) {
    this._age = v;
  }
})

/**
 *  1.类不存在变量提升
 *  2.关于get和set函数见_class.js
 */

/**
 *  class类中的static静态方法属性
 *  1. 类中static声明的方法和属性不会被实例继承，只能通过类名.xxx()调用
 *  2. 静态方法中的this指向的是类而非实例
 *  3. NodeJS中暂不支持static,#声明静态变量和私有变量
 */
// class Test {
//   static name = 'ronchan'; // 静态变量 - 通过类名.xxx()调用
//   #age = 16; // 私有变量 - 只能在类的内部访问到
// }
