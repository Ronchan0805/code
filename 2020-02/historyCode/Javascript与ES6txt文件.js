JS面向对象
设计模式
ajax异步
Promise
ES6语法
模块化，项目构建工具
git
sass预处理
jquery等
 




    ES6:
        1.变量的块级作用域

           1.1 
              例子一：
                -console.log(a);  //报错

                -console.log(a);
                var a = 1;       //undefined

                第一个代码段报错是因为a没有声明；而第二个运行结果为undefined，
                因为var 会导致变量声明提升！但初始化不提升,所以结果没有报错但也不是1


              例子二：
           ES5代码：var x = 'outer';                         
                    function test(inner) {                        
                      if (inner) {
                        var x = 'inner';                
                        return x;
                      }
                      return x; 
                    }
                    console.log(test(false));// undefined    预想结果是 outer

                    其实以上代码等价于：

                    var x = 'outer';                         
                    function test(inner) {
                        var x ;                        
                      if (inner) {
                        x = 'inner';                
                        return x;
                      }
                      return x; 
                    }
                    console.log(test(false));// undefined

                    --总结：var 变量提升是指声明被提升，而初始化不提升

            ES6写法：let x = 'outer';
                    function test(inner) {
                      if (inner) {
                        let x = 'inner';
                        return x;
                      }
                      return x; // 从第1行获得预期结果
                    }
                    test(false); // outer
                    test(true); // inner
                    --总结： let 是块级作用域。注意在声明之前不能使用

              例子三：
              var a = [];
              for(var i = 0; i < 10; i++) {
                a[i] = function () {
                  console.log(i)
                };
              }
              a[6]()  //10

              var a = [];
              for(let i = 0; i < 10; i++) {
                a[i] = function () {
                  console.log(i)
                };
              }
              a[6]()  //6



           1.2 ES5:    IIFE写法： (function(){            立即调用函数表达式
                                  var private2 = 1;
                                })();
                                console.log(private2); // 未捕获 ReferenceError 

                ES6：           {
                                let private2 = 1;
                                }

            1.3  var let const   
                    let与const都是块级作用域，let值可修改，const值不能修改

        2.ES6的暂时性死区
          var a = '我是块级外';
          if (true){
              console.log(a);  //···发生错误
              let a ='我是块级内';
          }else {

          }
          console.log(a); 
          ES6 明确规定，如果区块中存在let和const命令，
          这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
          凡是在声明之前就使用这些变量，就会报错。
          
        3.模板字符串，解构赋值（略）

        4.ES6 class语法
            class Name {
                //class属性添加在constructor构造器中
                constructor(name,sex,age){
                    this.name = name;
                    this.sex = sex;
                    this.age = age;
                }
                myMethod(){
                    alert('方法');
                }
            }

            使用时直接传入参数: var ron = new Name('chan','男',18);
                                ron.myMethod();