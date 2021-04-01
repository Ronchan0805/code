/**
 *  ES6的class类 <=> ES5构造函数
 */

class Des {
  constructor () {
    this.name = 'ronchan';
    this.age = 18;
  }
  getName () {
    return this.name;
  }
  /* 无需逗号 */
  getAge () {
    return this.age;
  }
}

// 添加一个方法
Des.prototype.getMyInfo = function () {
  console.log(`myname is ${ this.name } and myage is ${ this.age }`);
}
// 添加多个方法
Object.assign(Des.prototype, {
  setName(v) {
    this.name = v;
  },
  /* 逗号隔开 */
  setAge(v) {
    this.age = v;
  }
})
