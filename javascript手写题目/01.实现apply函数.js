Function.prototype.myApply = function (context, args) {
  // 1.判断调用者是否是函数
  if (typeof this !== 'function') {
    throw new TypeError('myApply must be called on a function');
  }

  // 2.处理 context 为空的情况
  context = context || globalThis;

  // 3.给context添加一个唯一的属性，保存当前函数
  const fnSymbol = Symbol('fn');
  context[fnSymbol] = this;

  // 4.执行函数
  let result;
  if (Array.isArray(args)) {
    // 通过context调用函数，this就指向context
    result = context[fnSymbol](...args);
  } else {
    result = context[fnSymbol]();
  }
  // 5.删除临时属性
  delete context[fnSymbol];

  // 6.返回结果
  return result;
};

function sum(a, b) {
  console.log(this.name, a, b);
  console.log('Sum:', a + b);
}

sum.myApply({ name: 'Alice' }, [1, 2]);
