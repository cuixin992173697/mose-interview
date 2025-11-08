function generateParenthesis(n) {
  const res = [];

  function backtrack(cur, open, close) {

    // 结束条件：左右括号都用完
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }

    // 可以放左括号
    if (open < n) {
      backtrack(cur + '(', open + 1, close);
    }

    // 可以放右括号
    if (close < open) {
      backtrack(cur + ')', open, close + 1);
    }
  }

  backtrack('', 0, 0);
  return res;
}

// 示例
console.log(generateParenthesis(3));
