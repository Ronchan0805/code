// class Dep {
//   constructor () {
//     this.name = 'ronchan';
//   }
// }
// let r = new Dep();
// let P = new Proxy(Dep,{
//   construct: function (target,keyName) {
//     console.log('拦截到了');
//     return {
//       name: 'zhanrun'
//     };
//   }
// });
// let p = new P();
// console.log(p.name);

class Dep {
  constructor () {
    this.name = 'ronchan';
  }
}
let r = new Dep();
let p = new Proxy(r,{
  get: function (target,keyName) {
    console.log('拦截到了');
    return 'hell'
  }
});
console.log(p.name);