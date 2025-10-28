Function.prototype.myBind = function (context, ...args) {
  // 1.判断
  if (typeof this !== 'function') {
    throw new TypeError('Bind must be called on a function');
  }

  // 2.处理context为空的情况
  context = context || globalThis;

  // 3.给context添加一个唯一的属性
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  // 4.返回一个函数
  return function (...newArgs) {
    const result = context[fnSymbol](...args, ...newArgs);
    delete context[fnSymbol];
    return result;
  };
};

function sum(a, b, c) {
  console.log('this.name:', this.name);
  console.log('a + b + c:', a + b + c);
}

sum.myBind({ name: 'Alice' }, 1)(2, 3);
