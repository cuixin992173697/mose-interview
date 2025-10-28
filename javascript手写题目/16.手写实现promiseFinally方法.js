Promise.prototype.myFinally = function (callback) {
  // this 指向当前 Promise 实例
  return this.then(
    // 成功回调
    res => {
      return Promise.resolve(callback()).then(() => res);
    },
    // 失败回调
    rej => {
      return Promise.resolve(callback()).then(() => {
        throw rej;
      });
    }
  );
};

Promise.resolve('成功')
  .then(res => console.log(res))
  .myFinally(() => console.log('finally 执行了'));

Promise.reject('失败')
  .catch(err => console.log(err))
  .myFinally(() => console.log('finally 仍会执行'));
