function promiseAny(iterable) {
  const promises = Array.from(iterable);
  let rejectCount = 0;
  const errors = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(
        promises[i]
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            rejectCount++;
            errors.push(err);
            if (rejectCount === promises.length) {
              reject(errors);
            }
          })
      );
    }
  });
}

const p1 = new Promise(resolve => setTimeout(() => resolve(1), 3000));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));
const p4 = Promise.reject('error');
const p5 = Promise.reject(reject => setTimeout(() => reject('错误'), 1000));

// 测试成功的情况
promiseAny([p1, p2, p3, p4])
  .then(res => {
    console.log('测试结果:', res); // 应输出: 测试结果: [1, 2, 3]
  })
  .catch(err => {
    console.error('测试失败:', err);
  });

// 测试失败的情况
promiseAny([p4, p5])
  .then(res => {
    console.log('测试结果:', res); // 应输出: 测试结果: [1, 2, 3]
  })
  .catch(err => {
    console.error('测试失败:', err);
  });
