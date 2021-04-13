/**
 *  set是一种数据结构，特点之一是元素具有不重复性  ---"类数组"
 */
let a = new Set([1,2,3,3]);
console.log('a',a); // Set { 1, 2, 3 }

let b = new Set();
console.log('b:',b); // Set {}

let c = new Set([1,2,3,3]);
console.log('c:',[...c]); // [1,2,3] - 数组去重

// Set实例的属性和方法
// 属性: constructor,size
// 方法: add(val),delete(val),has(val),clear()

let d = new Set([1,2,3,3]);
console.log('d:',Array.from(d)); // [1,2,3] - Array.from()方法可将set结果转换为数组 - 数组去重

/**
 *  WeakSet数据结构，与set不同在于其值是对象;其次WeakSet内部的对象不会被垃圾回收机制识别
 */


/**
 *  map是一种数据结构, 解决了object对象的key只能是字符串的问题  --- "类对象"
 */

let map_01 = new Map();
map_01.set([1,2,3],'Helloworld');
console.log('map_01的[1,2,3]的值为:',map_01.get([1,2,3])); // undefined (对比map_02找不同)

let map_02 = new Map();
let key = [1,2,3];
map_02.set(key,'Helloworld');
console.log('map_01的[1,2,3]值为:',map_02.get(key)); // Helloworld (用非基本类型做key时，注意key必须来源同一个实例)

// let map_03 = new Map([ ['name','ronchan'],['title','practice'] ]); // map数据结构也可调用数组的forEach方法
// map_03.forEach((val,key,map) => {
//   // do something
// })

// map数据结构的set()和get()方法分别可用来设置和获取值
// map数据结构可以和数组，对象，JSON相互转换
// WeakMap 略


/**
 * set与数组相互转换
 */
// 数组 -> Set
(function() {
  let arr = [1,2,2,3];
  console.log('数组->Set:',new Set(arr)); // Set { 1, 2, 3 }
})();
// Set -> 数组
(function() {
  console.log('Set->数组:',[...new Set( [1,2,2,3] )] ); // [ 1, 2, 3 ]
})();


/**
 * map与对象相互转换
 */
// 对象 -> Map
(function() {
  let obj = {
    name: 'ronchan',
    age: 18
  }
  console.log('对象->Map:',new Map( Object.entries(obj) ) );
})();
// Map -> 对象
(function() {
  const myMap = new Map()
    .set('yes', true)
    .set('no', false);
  let obj = Object.create(null);
  for(let [k,v] of myMap) {
    obj[k] = v;
  }
  console.log('Map->对象:',obj);  // { yes: true, no: false }
})();