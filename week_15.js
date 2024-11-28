class TreeNode {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  function removeDuplicates(root) {
    const seen = new Set();
  
    function traverseAndFilter(node) {
      if (!node) return null;
  
      // If the value is already seen, skip this node
      if (seen.has(node.value)) {
        return null;
      }
  
      // Mark this value as seen
      seen.add(node.value);
  
      // Recursively process left and right subtrees
      node.left = traverseAndFilter(node.left);
      node.right = traverseAndFilter(node.right);
  
      return node;
    }
  
    return traverseAndFilter(root);
  }
  
  // Helper function to print the tree in-order
  function printTree(root) {
    if (!root) return;
    printTree(root.left);
    console.log(root.value);
    printTree(root.right);
  }
  
  // Example Usage
  const root = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(3), new TreeNode(4)),
    new TreeNode(7, new TreeNode(5), new TreeNode(8))
  );
  
  console.log("Original Tree:");
  printTree(root);
  
  const uniqueTree = removeDuplicates(root);
  
  console.log("Tree After Removing Duplicates:");
  printTree(uniqueTree);
  