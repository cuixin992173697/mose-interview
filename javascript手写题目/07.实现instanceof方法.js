// 实现instanceof检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

function myInstanceof(left, right) {
    // null 单独处理（typeof null === 'object' 会骗过下面的判断）
    // 基本类型字面量(string/number/boolean/symbol/bigint)和 undefined 返回 false
    // 函数要放行（typeof === 'function'）
    if (left === null || (typeof left !== 'object' && typeof left !== 'function')) {
      return false;
    }

    let leftProto = Object.getPrototypeOf(left);

    while (leftProto !== null) {
      if (leftProto === right.prototype) {
        return true;
      }
      leftProto = Object.getPrototypeOf(leftProto);
    }
    return false;
  }

function Person() {}
let p = new Person();
console.log(myInstanceof(p, Object));



