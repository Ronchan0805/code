/**
 *  class类内部this指针丢失问题
 */
class Dep {
  constructor () {
    this.name = 'ronchan';
    this.getName = this.getName.bind(this);
  }
  getName () {
    return this.name;
  }
}
let i = new Dep();
console.log(i.getName()); // ronchan 

let { getName } = i;   
console.log(getName());  // Error: Cannot read property 'name' of undefined

/**
 *  当把类内部的方法单独提取出来使用，会出现this指针丢失问题
 *  解决: 
      class Dep {
        constructor () {
          this.name = 'ronchan';
          this.getName = this.getName.bind(this);
        }
        getName () {
          return this.name;
        }
      }
 */