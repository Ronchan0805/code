/**
 *    Promise三种状态: 
 *    pending(运行中), fulfilled(已成功), rejected(已失败)
 *    API: resolve()函数 - 将promise状态变为成功并返回值
 *         rejected()函数 - 将promise状态变为失败并抛出值
 */

/**
 *  Promise.all()
 *  接受几个promise实例组成的数组
 *  有一个被reject那么.all就返回reject
 *  全部resolve那么.all返回各实例resolve组成的数组
 *  类似： 逻辑和 &&
 */
let a = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('a');
  },1000);
})

let b = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('b');
  },2000)
})

let c = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('c');
  },3000)
})
let p = Promise.all([a,b,c]);
p.then(res => {
  console.log('p函数输出:',res);
  // p函数输出: ['a','b','c']
}).catch(err => {
  console.log('promise报错');
})

/**
 *  Promise.race()
 *  与上不同在于，当其中任何一个子promise实例改变就会改变
 *  返回率先改变的promise实例的返回值
 *  // 注意： 任何promise，当状态改变后就无法再次改变。不可类比逻辑或 ||
 */
// Promise.allSettled(),无论状态怎么变，直至所有子promise执行完毕后才返回，且一定返回fulfilled状态
// Promise.any(), 当任一子promise成功就成功，当遇到失败状态promise时会等待，直至所有promise失败，才变为rejected。 逻辑或 ||
