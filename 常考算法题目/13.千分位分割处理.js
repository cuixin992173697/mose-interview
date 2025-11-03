// 千分位分割处理

function formatNumber(num) {
  const str = num.toString();

  // 判断是否为负数
  const isNegative = str.startsWith('-');

  // 去掉负号后再处理
  const [integer, decimal] = (isNegative ? str.slice(1) : str).split('.');

  // 从后往前每三位分组
  const arr = [];
  for (let i = integer.length; i > 0; i -= 3) {
    arr.unshift(integer.slice(Math.max(i - 3, 0), i));
  }

  // 拼接结果
  const formattedInt = arr.join(',');

  // 加回负号和小数部分
  return (
    (isNegative ? '-' : '') +
    (decimal ? `${formattedInt}.${decimal}` : formattedInt)
  );
}

console.log(formatNumber(123)); // 123
console.log(formatNumber(1298734)); // 1,298,734
console.log(formatNumber(-1234.789)); // -1,234.789
