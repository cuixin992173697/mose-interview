function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inherit(SubType, SuperType) {
  SubType.prototype = createObj(SuperType.prototype);
  SubType.prototype.constructor = SubType;
  Object.setPrototypeOf(SubType, SuperType);
}

// ================================
// 测试代码
// ================================
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function () {
  console.log('父类方法 sayName:', this.name);
};
SuperType.staticMethod = function () {
  console.log('父类静态方法被调用');
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

// 使用你写的 inherit 方法
inherit(SubType, SuperType);

// 子类自己的方法
SubType.prototype.sayAge = function () {
  console.log('子类方法 sayAge:', this.age);
};

// ================================
// 实例验证
// ================================
const instance1 = new SubType('崔鑫', 26);
const instance2 = new SubType('小李', 22);

console.log('instance1.name:', instance1.name); // 崔鑫
console.log('instance1.colors:', instance1.colors); // ["red", "blue", "green"]
instance1.colors.push('black');
console.log('instance2.colors:', instance2.colors); // ["red", "blue", "green"] ✅ 互不影响

instance1.sayName(); // 父类方法 sayName: 崔鑫 ✅
instance1.sayAge(); // 子类方法 sayAge: 26 ✅

SubType.staticMethod(); // 父类静态方法被调用 ✅

console.log(instance1 instanceof SubType); // true ✅
console.log(instance1 instanceof SuperType); // true ✅
console.log(SubType.__proto__ === SuperType); // true ✅
