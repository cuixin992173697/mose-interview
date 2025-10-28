function checkString(s) {
  if (s.length === 1) return s;

  let left = 0;
  let right = 0;
  let res = '';
  let count = 0;
  let maxCount = 0;

  while (left < s.length && right < s.length) {
    if (s[left] === s[right]) {
      count++;
      right++;
    } else {
      if (count > maxCount) {
        res = s[left];
        maxCount = count;
      }
      left = right;
    }
  }
  return res;
}

const res = checkString('abcccccaaaaaaaaff');
console.log(res);