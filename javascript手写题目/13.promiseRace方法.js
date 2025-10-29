function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    const promises = Array.from(iterable);

    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then(res => resolve(res))
        .catch(err => reject(err));
    }
  });
}

const p1 = new Promise(resolve => setTimeout(() => resolve(1), 300));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 200));
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 100));

promiseRace([p1, p2, p3])
  .then(res => {
    console.log('测试结果:', res); // 应输出: 测试结果: [1, 2, 3]
  })
  .catch(err => {
    console.error('测试失败:', err);
  });

const p4 = Promise.reject('error');
promiseRace([p1, p2, p4])
  .then(res => {
    console.log('测试结果:', res); // 应输出: 测试结果: [1, 2, 3]
  })
  .catch(err => {
    console.error('测试失败:', err);
  });
