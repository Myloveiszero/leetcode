function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
let a4 = new TreeNode(5);
let a5 = new TreeNode(6);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;

var countNodes = function(root) {
    if (!root)  return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
}
