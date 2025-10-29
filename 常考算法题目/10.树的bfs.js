function levelOrder( root ) {
    // write code here
    const res = []

    function bfs(node, level) {
        if(!node) return

        if(!res[level]) {
            res[level] = []
        }

        res[level].push(node.val)
        bfs(node.left, level + 1)
        bfs(node.right, level + 1)
    }
    bfs(root, 0)
    return res
}