function curry(fn) {
  return function curried(...args) {
    const self = this;
    console.log('this', this);
    if (args.length >= fn.length) {
      return fn.apply(self, args);
    }
    return function (...nextArgs) {
      return curried.apply(self, [...args, ...nextArgs]);
    };
  };
}
// 测试用例
function add(a, b, c) {
  return a + b + c;
}

function multiply(a, b, c, d) {
  return a * b * c * d;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));

const curriedMultiply = curry(multiply);
console.log(curriedMultiply.call('aaa', 2)(3)(4)(5));
