module.exports = (tree) => {
  // return JSON.stringify(tree).match(/\d+/g).map(x => parseInt(x))
  const treeWalker = (tree) => {
    buff.push(tree.val)
    tree.children.forEach(treeWalker)
  }

  const buff = []
  treeWalker(tree)
  return buff
}

