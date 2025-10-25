// 输入
const list =[
  {id: 1, node: 'root', parentId: 0},
  {id: 2, node: 'node1', parentId: 1},
  {id: 3, node: 'node3', parentId: 2},
  {id: 4, node: 'node4', parentId: 2},
  {id: 5, node: 'node5', parentId: 1},
  {id: 6, node: 'node6', parentId: 3},
  {id: 7, node: 'node7', parentId: 2},
]

function arrayToTree(list) {
	const map = {};
	const result = [];

	for (const item of list) {
		map[item.id] = {...item, children: []};
	}
	for (const item of list) {
		const parent = map[item.parentId];
		if(parent) {
			parent.children.push(map[item.id]);
		} else {
			result.push(map[item.id]);
		}
	}

	return result;
}

const res = arrayToTree(list);
console.log(JSON.stringify(res));