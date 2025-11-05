function deepClone(obj) {
  // 处理 null 或 原始类型
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理数组
  if (Array.isArray(obj)) {
    const newArr = [];
    for (let i = 0; i < obj.length; i++) {
      newArr[i] = deepClone(obj[i]);
    }
    return newArr;
  }

  // 处理普通对象
  const newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
}



function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;

  // 处理循环引用
  if (hash.has(obj)) return hash.get(obj);

  // 特殊对象处理
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Map) {
    const result = new Map();
    hash.set(obj, result);
    obj.forEach((v, k) => {
      result.set(deepClone(k, hash), deepClone(v, hash));
    });
    return result;
  }
  if (obj instanceof Set) {
    const result = new Set();
    hash.set(obj, result);
    obj.forEach(v => {
      result.add(deepClone(v, hash));
    });
    return result;
  }

  // 数组或普通对象
  const cloneObj = Array.isArray(obj) ? [] : {};
  hash.set(obj, cloneObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
