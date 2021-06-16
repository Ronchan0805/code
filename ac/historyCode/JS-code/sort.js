/**
 * sort 排序结果唯一性验证
 */
// let arr = [1, '2', {}, [123,{name:'ron'},false], false];
// arr.sort();
// console.log(arr);
// let ayy = ['2', 1, false, [123,{name:'ron'},false], {}];
// ayy.sort();
// console.log(ayy);
// console.log(JSON.stringify(arr)===JSON.stringify(ayy))
/**
 * 类型检测 - Array
 */
 function _isArray (a) {
  return a !== null && Object.prototype.toString.call(a) === "[object Array]";
}

/**
 * 类型检测 - Object 
 */
function _isObject (o) {
  return o !== null && Object.prototype.toString.call(o) === "[object Object]";
}
function _diffArray (a1, a2) {
  // 对a1, a2内部Object类型排序
  a1.forEach((item, index, arr) => {
    if(_isArray(item)) {
      item.sort();
    } else if (_isObject(item)) {
      let newObj = {};
      Object.keys(item).sort().forEach(key => {
        newObj[key] = item[key];
        arr[index] = newObj;
      });
    } else {
      return;
    }
  });
  a2.forEach((item, index, arr) => {
    if(_isArray(item)) {
      item.sort();
    } else if (_isObject(item)) {
      let newObj = {};
      Object.keys(item).sort().forEach(key => {
        newObj[key] = item[key];
        arr[index] = newObj;
      });
    } else {
      return;
    }
  });
  // 对a1, a2排序
  a1.sort();
  a2.sort();
  if(JSON.stringify(a1) === JSON.stringify(a2)) {
    return true;
  } else {
    return false;
  }
}
console.log(_diffArray([1, '2', {}, [123,{name:'ron',age:'1'},false], false],['2', 1, {}, [123,false,{age:'1',name:'ron'}], false]))