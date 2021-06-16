/**
 *  es6 class类的继承
 */
class Type {
  constructor () {
    this.style = 'small';
    this.color = 'blue';
  }
}
class superType extends Type {
  constructor () {
    super ();  // 继承父类时，必须带上super()函数，该函数可以获得父类的this
    this.color = 'red';
  }
}
let type = new superType();
console.log('style:',type.style); // style: small
console.log('color:',type.color); // color: red



/* -------------------------------------- */
// 子类中没写constructor()构造函数时，会默认生成constructor和super函数
class Style {
  constructor () {
    this.style = 'big';
  }
}
class superStyle extends Style {
  printf () {
    console.log('This is superStyle');
  }
}
let style = new superStyle();
console.log('style:',style.style); // style: big


/* -------------------------------------- */
class Error {
  constructor () {
    this.err = 'This is a error';
  }
}
class superError extends Error {
  constructor () {
    this.mis = 'miss'; // this指针必须在super()之后调用
    super();
    this.suc = 'success'; // 正确
  }
}
let err = new superError();
console.log('mis:',err.mis); // ReferenceError: ...

/* -------------------------------------- */
// 获取子类继承的父类
Object.getPrototypeOf(superStyle);  // Style;

// Obeject.getPrototypeOf() 方法也可以用来获取实例的原型 替代 实例的_proto_方法,作用相同


/* -------------------------------------- */
/**
 *  super关键字:
 * 1. super做函数用，即super() 等价于 父类.prototype.constructor.call(this)
 * 2. super做对象使用，在普通方法中指向父类的原型对象，在静态方法中指向父类
 * 3. super内部的this指向的是子类,调用super.attr等价于在子类上进行属性赋值，父类上访问不到
 *      即子类中运行super.attr = 3 与 super.attr 不一样，前者访问的是子类，后者是父类
 */