// 实现instanceof检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

function myInstanceof(left, right) {
  const prototype = right.prototype;

  let leftProto = Object.getPrototypeOf(left);

  while (leftProto !== null) {
    if (leftProto === prototype) {
      return true;
    }
    leftProto = Object.getPrototypeOf(leftProto);
  }
  return false;
}

function Person() {}
let p = new Person();
console.log(myInstanceof(p, Object));