// 用递归和非递归求树的深度

class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = []; // 多叉树
  }
}

// 递归
function getTreeDepth(root) {
  if (!root) return 0;
  if (!root.children || root.children.length === 0) return 1;

  let maxDepth = 0;
  for (const child of root.children) {
    const depth = getTreeDepth(child);
    if (depth > maxDepth) maxDepth = depth;
  }

  return maxDepth + 1;
}

// 非递归
function getTreeDepthIterative(root) {
  if (!root) return 0;

  let depth = 0;
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length; // 当前层节点数
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      if (node.children) {
        for (const child of node.children) {
          queue.push(child);
        }
      }
    }
    depth++; // 每遍历一层，深度 +1
  }

  return depth;
}



const root = new TreeNode(1);
const c1 = new TreeNode(2);
const c2 = new TreeNode(3);
const c3 = new TreeNode(4);
root.children.push(c1, c2);
c1.children.push(c3);

console.log(getTreeDepth(root)); 
console.log(getTreeDepthIterative(root)); 