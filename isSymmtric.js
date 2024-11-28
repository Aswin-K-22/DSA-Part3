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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function recurtion(t1,t2){
        if(!t1 && !t2) return true;
        if(!t1 || !t2) return false;
        if(t1.val !== t2.val) return false;
        return recurtion(t1.left , t2.right) && recurtion(t2.left , t1.right);
    }
    return recurtion(root.left,root.right)
};