//https://leetcode.com/problems/minimum-absolute-difference-in-bst/

var pre = null;
var min = Number.MAX_VALUE;

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
 * @return {number}
 */
var getMinimumDifference = function(root) {
    pre = null;
    min = Number.MAX_VALUE;

    if (root == null ) return 0;
    inOrder(root)
    return min;
};

var inOrder = function(root) {
    if ( root == null) return;

    inOrder(root.left);

    if ( pre != null){
        min = Math.min(min, Math.abs(pre.val - root.val));
    }

    pre= root;

    inOrder(root.right);
    };