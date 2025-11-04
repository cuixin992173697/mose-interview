// 1. 统计所有后代节点（包括元素节点、文本节点、注释节点等所有类型）
function countAllDescendants(node) {
  let count = node.childNodes.length; // 当前节点的直接子节点数量（所有类型）

  // 遍历所有子节点，递归统计子节点的后代节点数
  for (const child of node.childNodes) {
    count += countAllDescendants(child);
  }

  return count;
}

// 2. 统计所有元素节点（不包括文本节点、注释节点等其他类型）
function countAllElementDescendants(node) {
  let count = node.children.length; // 当前节点的直接子元素数量

  // 遍历所有子元素，递归统计子元素的后代元素数量
  for (const child of node.children) {
    count += countAllElementDescendants(child);
  }

  return count;
}