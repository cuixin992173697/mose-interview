// 使用setInterval实现
// 1.优点：代码简单，易于理解
// 2.缺点：回调函数执行时间过长，可能会造成多次调用重叠，setInterval 不会等待回调函数执行完毕就开始计时下一次，如果回调函数执行时间较长（比如里面有耗时操作），那么下一个定时器可能已经开始了，导致回调函数出现重叠执行。
let count = 1;

function printNumber() {
  const timer = setInterval(() => {
    console.log(count);
    count++;
    if (count > 4) {
      clearInterval(timer);
    }
  }, 1000);
}

printNumber();

// 2.使用递归setTimeout实现
// 1.优点：避免了回调函数重叠执行的问题，确保每次调用之间有固定的间隔时间
// 2.缺点：代码稍微复杂一些，需要使用递归调用
let count2 = 1;

function printNumber2() {
  const timer = setTimeout(() => {
    console.log(count2);
    count2++;
    if (count2 > 4) {
      clearTimeout(timer);
    } else {
      printNumber2();
    }
  }, 1000);
}

printNumber2();
