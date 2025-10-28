Function.prototype.myCall = function (context, ...args) {
  // 1.判断
  if (typeof this !== 'function') {
    throw new TypeError('Call must be called on a function');
  }

  // 2.处理context为空的情况
  context = context || globalThis;

  // 3.给context添加一个唯一的属性
  const fnSymbol = Symbol();
  context[fnSymbol] = this;

  // 4.返回一个函数
  const result = context[fnSymbol](...args);

  // 5.删除属性
  delete context[fnSymbol];

  return result;
};

function sum(a, b) {
  console.log('this:', this);
  console.log('a + b:', a + b);
}

sum.myCall({ name: 'mose' }, 10, 20);
