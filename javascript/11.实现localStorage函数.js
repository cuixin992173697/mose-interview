// 设置
function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// 查看
function getItem(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// 删除
function removeItem(key) {
  localStorage.removeItem(key);
}

// 清空
function clear() {
  localStorage.clear();
}

setItem('user1', { name: '小明', age: 20 });
setItem('user2', { name: '小红', age: 18 });

const user1 = getItem('user1');
console.log(user1);

removeItem('user1	');
const user2 = getItem('user2');
console.log(user2);

clear();
