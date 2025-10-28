// 数组扁平化函数
// 1. 使用递归
// function flatten(arr) {
//   const result = [];
//   for (const item of arr) {
//     if (Array.isArray(item)) {
//       // 如果是数组，递归调用flatten
//       result.push(...flatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// 2. 使用reduce
function flatten(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}

// 测试
console.log(flatten([1, [2, 3], [4, [5, 6]]]));
