Promise.prototype.myCatch = function (onRejected) {
  return this.then(undefined, onRejected);
};

// 成功情况
Promise.resolve('OK')
  .myCatch(err => console.log('捕获错误:', err))
  .then(res => console.log('结果:', res));

// 失败情况
Promise.reject('出错了')
  .myCatch(err => {
    console.log('捕获错误:', err);
    return '处理后的结果';
  })
  .then(res => console.log('结果:', res));