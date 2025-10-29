// 快速排序（Quick Sort）
function quickSort(arr) {
  // 递归终止条件：数组长度 <= 1，直接返回
  if (arr.length <= 1) return arr;

  // 选择基准（pivot）—— 这里选取中间的元素
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // 定义左右两个数组
  const left = [];
  const right = [];

  // 遍历数组，将小于和大于 pivot 的元素分别放入两侧
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) continue; // 跳过基准元素
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  // 递归排序左右两部分，再合并结果
  return [...quickSort(left), pivot, ...quickSort(right)];
}