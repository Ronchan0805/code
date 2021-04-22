/**
 * async与await就是Generator的另一种写法.
 * Generator函数无法自动执行,必须依靠Thunk或者Promise才能自动执行,而async_await内置了自动执行器
 * async表示该函数内部包含异步操作,await表示需要等到后面的表达式返回结果后代码才能继续向下执行
 * async表示的函数返回一个Promise对象,async函数内部的return返回值,会成为.then()回调函数的参数,
 *  async内部抛出错误 throw new Error('');会使得Promise变为reject状态,被.catch()接收
 */