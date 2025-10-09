function promiseAllSettled(iterable) {
  const promises = Array.from(iterable);
  const result = [];
  let settledCount = 0;

  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(res => {
          result[i] = { status: 'fulfilled', value: res };
          settledCount++;
          if (settledCount === promises.length) {
            resolve(result);
          }
        })
        .catch(err => {
          result[i] = { status: 'rejected', reason: err };
          settledCount++;
          if (settledCount === promises.length) {
            resolve(result);
          }
        });
    }
  });
}

const p1 = new Promise(resolve => setTimeout(() => resolve(1), 3000));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));
const p4 = Promise.reject('error');
const p5 = Promise.reject(reject => setTimeout(() => reject('错误'), 1000));

// 测试用例
promiseAllSettled([p1, p2, p3, p4])
  .then(res => {
    console.log('测试结果:', res); // 应输出: 测试结果: [1, 2, 3]
  })
  .catch(err => {
    console.error('测试失败:', err);
  });

promiseAllSettled([p4, p5])
  .then(res => {
    console.log('测试结果:', res); // 应输出: 测试结果: [1, 2, 3]
  })
  .catch(err => {
    console.error('测试失败:', err);
  });
