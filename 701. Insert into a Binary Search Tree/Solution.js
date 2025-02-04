//https://leetcode.com/problems/insert-into-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    var newNode = new TreeNode(val);
       if (root === null) {
           root = newNode;
       }
       else {
           insertNode(root, newNode);
       }

       return root;
};

function insertNode(node, newNode) {
       if (newNode.val < node.val) {
           if (node.left === null) {
               node.left = newNode;
           }
           else {
               insertNode(node.left, newNode);
           }
       }
       else { // value of new node is larger than root data ist time
           if (node.right === null) {
               node.right = newNode;
           }
           else {
               // if right is not null recur until
               // null is found
               insertNode(node.right, newNode);
           }
       }
}
