/**
 * JS的部分对象内定义了一个Symbol类型且标识符为Symbol.iterator的属性,
 * 该属性指向Iterator函数,Iterator函数又称遍历器/迭代器
 * 那么Iterator函数的作用是什么呢？
 */

// Iterator函数模拟
function bIterator (arr) {
  let index = 0;
  return {

    next () {
      if(index < arr.length) {
        return {
          value: arr[index++],
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
    }

  }
}

/**
 * 由上可见,Interator函数生成一个对象（又称'遍历器对象'）,该对象内部包含一个next()方法,
 * 每次调用next方法都会返回一个{value: xxx, done: xxx},只要不断的调用同一个对象的next方法,
 * 就会一直拿到{value: xxx, done: xxx},直至done: true,就相当于完成了遍历
 * 
 * 
 * 图解: 
 *    一个需要遍历的数据结构（可以是任何类型,例如Array、String...）
 *  
 *          ---调用Interator函数--->
 * 
 *    得到一个遍历器对象,内部包含next方法
 *   
 *          ---不断调用该对象的next(),直至done: true--->
 * 
 *    完成了对该数据结构的遍历
 */



/**
 * for...of循环内部就是借助Iterator()函数实现,当调用for..of循环就会自动去找该数据类型下的Symbol.iterator属性,
 * 该属性是一个Iterator()函数,ES6的某些数据结构原生具备了Symbol.iterator属性,例如数组Array类型
 * 但例如对象Object类型就不包含该属性 (可把对象转换为Map数据结构再用for...of进行遍历)
 */