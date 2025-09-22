// 实现一个浅拷贝函数 shallowCopy，能够拷贝对象和数组的第一层属性或元素。

// 1.使用展开运算符
function shallowCopy(obj) {
  // 处理 null 和非对象类型
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理数组
  if (Array.isArray(obj)) {
    return [...obj];
  }

  // 处理 Date 对象
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  // 处理 RegExp 对象
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  // 处理对象
  return { ...obj };
}

// 2.使用 Object.assign
// function shallowCopy(obj) {
//   if (obj === null || typeof obj !== 'object') {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return [...obj];
//   }

//   return Object.assign({}, obj);
// }

// 测试
const arr = [1, 2, { a: 3 }];
const obj = { x: 1, y: { z: 2 } };

console.log(shallowCopy(arr) === arr); // false
console.log(shallowCopy(obj).y === obj.y); // true
