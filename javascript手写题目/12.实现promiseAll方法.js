function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(iterable);
    const results = [];
    let count = 0;

    // 如果输入为空，直接resolve
    if (promises.length === 0) {
      return resolve(results);
    }

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(res => {
          results[i] = res;
          count++;
          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch(err => {
          reject(err);
        });
    }
  });
}

// 测试用例
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 100));

promiseAll([p1, p2, p3])
  .then(res => {
    console.log('测试结果:', res); // 应输出: 测试结果: [1, 2, 3]
  })
  .catch(err => {
    console.error('测试失败:', err);
  });

const p4 = Promise.reject('error');
promiseAll([p1, p4, p2])
  .then(res => {
    console.log('不应该输出:', res);
  })
  .catch(err => {
    console.error('测试 reject:', err); // 应输出: 测试 reject: error
  });

promiseAll([]).then(res => {
  console.log('空数组结果:', res); // 应输出: 空数组结果: []
});
