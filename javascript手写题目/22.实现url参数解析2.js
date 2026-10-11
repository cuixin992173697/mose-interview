const url = 'https://www.baidu.com?a=1&a=2&a=3&c="cuixin"';

// function getUrlParams(url) {
//   const result = {};
//   const queryString = url.split('?')[1];

//   if (!queryString) {
//     return result;
//   }
//   const params = queryString.split('&');

//   params.forEach(param => {
//     const [key, value] = param.split('=');
//     const k = decodeURIComponent(key);
//     const v = decodeURIComponent(value);

//     if (result.hasOwnProperty(k)) {
//       if (Array.isArray(result[k])) {
//         result[k].push(v);
//       } else {
//         result[k] = [result[k], v];
//       }
//     } else {
//       result[k] = v;
//     }
//   });

//   return result;
// }


 function getUrlParams(url) {
  const qs = url.split('?')[1] ?? '';
  const search = new URLSearchParams(qs);
  const result = {}
  for (const [k, v] of search) {       // 重复 key 会重复迭代
    if (Object.hasOwn(result, k)) {
      (Array.isArray(result[k]) ? result[k] : (result[k] = [result[k]])).push(v);
    } else {
      result[k] = v;
    }
  }
  return result;
}

const a = getUrlParams(url);
console.log(a);
