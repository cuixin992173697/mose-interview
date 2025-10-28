// new 创建一个对象时候，背后执行哪些步骤

// 1、创建一个空对象

// 2.让新对象的原型（__proto__）指向构造函数的原型对象

// 3.将构造函数内部的this绑定到新对象，并执行函数体

// 4.判断返回值、没有返回值 或者 返回一个原始值（字符串、数字、布尔值等）返回新创建的对象 obj，返回一个对象（包括数组、函数等引用类型）返回那个对象，而不是 obj


function myNew(fn, ...args) {
	const obj = {}

	obj.__proto__ = fn.prototype;

	const result = fn.apply(obj, args);

	return  result instanceof Object ? result : obj;

}

function Person(name) {
  this.name = name;
}
const p = myNew(Person, 'mose');
console.log(p.name); 

