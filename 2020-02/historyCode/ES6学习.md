# 一、let 与 const 命令
## 1.var提升变量而let并不提升
#### 例子一：
+ ES5:
```js
console.log('a');  //报错
```
```js
console.log('a'); //undefined
var a = 1;  
```
>第一个代码段报错是因为变量a未声明；
第二个代码段打印undefined是因为var导致变量声明提升了，但初始化并没有提升，所以结果没有报错但也不是1，而是undefined
+ ES6:
```js
console.log('a'); //报错
let a = 1;  
```
>以上对于let就会直接报错，因为let并不提升变量

#### 例子二：
+ ES5代码：
```js
var x = 'outer';
function test(inner) {
    if (inner) {
        var x = 'inner';
        return x;
    }
    return x;
}
console.log(test(false)); //undefined
```
>打印结果并不是预期的outer,其实以上代码等价于
```js
var x = 'outer';
function test(inner) {
    var x;
    if (inner) {
        x = 'inner';
        return x;
    }
    return x;
}
```
+ ES6代码：
```js
var x = 'outer';
function test(inner) {
    if (inner) {
        let x = 'inner';
        return x;
    }
    return x;
}
test(false); //outer
test(true); //inner
```
## 2.let和const都具有块级作用域
#### 例子一：
+ ES5代码：
```js
var a = [];
for (var i = 0; i < 10 ; i++) {
    a[i] = function () {
        console.log(i)
    }
}
a[6](); //10
```
+ ES6代码：
```js
var a = [];
for (let i = 0; i < 10 ; i++) {
    a[i] = function () {
        console.log(i)
    }
}
a[6](); //6
```
>ES5中使用var定义循环变量并未得到预期结果6，而是10，这是因为var定义的变量i成为了全局变量，经过10次循环后i的值为10，而每个函数内部的i指向的都是这个全局变量，故所有的项打印的结果都为10
#### 例子二：
>另外，对于for循环，其循环变量的那部分是一个父作用域，而循环体是一个子作用域
```js
for (let i = 0; i < 10; i++){
    let i = 'ronchan';
    console.log(i);
}
// ronchan
// ronchan
// ronchan
```
## 3.ES6暂时性死区
```js
var a = '我是块级外';
if (true){
    console.log(a);  //报错
    let a ='我是块级内';
}else {

}
console.log(a); 
```
> ES6 明确规定，如果区块中存在let和const命令,
这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
## 4.let不允许重复声明
>在同一个块级作用域内，let不允许重复声明，但可以修改值；
在不同的块级作用域内，let可以重复声明，比如父作用域let a = 1那么在子作用域中可以再let a = 2。
## 5.块级作用域内函数声明
>先看一段代码:
```js
function main() { console.log('outside'); }

(function () {

  if (false) {
    function main() { console.log('inside'); }
  }

  main();
}());
```
>上面的代码在ES5中输出inside，因为if内声明的main函数会被提升到作用域首部。理论上在ES6中由于块级作用域限制应该输出outside，但是结果是上面的代码在ES6浏览器中报错（ES6规定浏览器可以不遵守块级作用域限制函数声明提升），其实上面代码在ES6浏览器中相当于：
```js
// 浏览器的 ES6 环境
function main() { console.log('I am outside!'); }
(function () {
  var main = undefined;
  if (false) {
    function main() { console.log('I am inside!'); }
  }

  f();
}());
// Uncaught TypeError: f is not a function
```
>但在ES6非浏览器环境中，还是将块级作用域的函数声明当let处理。综上，由于环境差异较大，在ES6中，若确实需要在块级作用域中声明函数，应使用函数表达式形式，而非函数函数声明语句：
```js
//ES6,错误示范
{
    let a = 1;
    function main() {
        console.log('你好');
    }
}

//ES6，正确示范
{
    let a = 1;
    let main = function () {
        console.log('你好')
    }
}
```
## 6.关于const声明变量几点说明
>1.声明同时必须初始化 <p>2.一旦初始化后值就不能改变<p>3.其他属性和let一致<p>4.对象使用const定义，可以添加属性
## 7.ES6声明变量总结
>var<p>function<p>let<p>const<p>import<p>class<p>
## 8.关于顶层对象几点说明
>浏览器顶层对象为window.<p>Node中顶层对象为global.<p>ES5中全局环境声明的变量为顶层对象的属性，但在ES6中，ES6变量声明方式声明的变量与顶层对象无关，ES5中变量声明方式声明的变量仍然与顶层对象保持联系

# 二、 变量的解构赋值
## 1.数组的解构赋值
>部分基本用法：
```js
let [a, ...b] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // [2, 3, 4]

let [a, b, ...c] = [1];
//若变量解构不成功，其值就为undefined
console.log(a); // 1
console.log(b); // undefined
console.log(c); // []
```
>若等号右边不是数组，就会报错:
```js
let [a] = 1;
let [a] = false;
let [a] = NAN;
let [a] = undefined;
let [a] = null;
let [a] = {};
```
## 2.对象的解构赋值
>与数组按顺序解构不同，对象是按照属性名进行解构:
```js
let { b, a } = { a: '你好', b: 'ES6' };
console.log(a); // '你好'
console.log(b); // 'ES6'

let { b: str, a: strs} = { a: '你好', b: 'ES6'};
console.log(strs); // '你好'
console.log(str); // 'ES6'

let { log } = console; //console是一个DOM事件对象
log('你好'); // '你好'

//若解构不成功，变量的值就为undefined
```

## 3.允许设置默认值
>默认值要想生效，则一个数组成员或一个对象的属性必须严格等于undefined,否则都不会生效
```js
let [a=5, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

let [a=1, b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2

let [a=5, ...b] = [undefined,1, 2, 3];
console.log(a); // 5
console.log(b); // [1, 2, 3]
```
```js
let { name='Ron', age } = { name:undefined, age: 18};
或者
let { name='Ron', age } = { age: 18 };
console.log(name); //Ron
console.log(age); //18
```
## 4.注意的点
>1.不能将大括号放在行首避免js引擎把其当做代码块:
```js
// 错误的写法
let x;
{x} = {x: 1};
// SyntaxError: syntax error

// 正确的写法
let x;
({x} = {x: 1});
```

>2.数组本质上是特殊的对象，故可以按对象进行解构:
```js
let arr = [1, 2, 3];
let { 0: nub1, [arr.length-1]: nub3} = arr;
console.log(nub1); // 1
console.log(nub3); // 3
```

>3.字符串可以当做数组来解构，而数组又可以当做对象来解构
```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

let { length : len } = 'hello';
len // 5

let str = 'hello';
let { 0: first, [str.length-1]: last } = str;
console.log(first); // h
console.log(last); // o
```
>4.解构赋值的规则是只要等号右边的不是数组或对象，就先将其转换为对象,而由于undefined和null都无法转化为对象，故对它们解构就会报错

## 5.解构赋值的用途
+ 交换变量的值
+ 函数返回多个值
+ 函数的参数定义,设置参数默认值
+ 提取JSON数据
+ 引入模块的指定部分(CommonJS规范，ES6模块规范)
+ 遍历MAP结构
