// 实现解析Url参数对象
function parseUrlParams(url) {
  const params = {};
  // 取?后面的query字符串
  const queryString = url.split('?')[1];
  if (!queryString) return params;
  // 按&拆分每个键值对
  const pairs = queryString.split('&');
  for (const pair of pairs) {
    const [key, value] = pair.split('=');
    params[decodeURIComponent(key)] = decodeURIComponent(value || '');
  }
  return params;
}

// 示例用法
const url = 'https://example.com/page?name=Tom&age=18';
console.log(parseUrlParams(url)); // { name: 'Tom', age: '18' }