// let arr = [1, 2, 3, 4, 5];
// let nArr = arr.map((item, index, arr) => {
//   if(item == 2) {
//     return 'ok';
//   } else {
//     return item;
//   }
// });
// console.log(nArr);
// function name (a) {
//   a.forEach(item => {
//     if(item == 1) {
//       arguments.callee(item);
//     }
//   })
// };
// name([1,2,3,1]);
function name (a) {
  if(a == 1) {
    return 'ok';
  }

  else if (a == 2) {
    return 'fail';
  }

  else {
    return 'success';
  }
}
console.log(name(2));