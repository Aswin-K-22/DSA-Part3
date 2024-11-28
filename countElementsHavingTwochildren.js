// Define a k-ary tree node
class KaryTreeNode {
    constructor(value) {
      this.value = value;
      this.children = []; // Array to store child nodes
    }
  }
  
  // Function to count nodes with more than one child
  function countNodesWithMultipleChildren(root) {
    if (!root) return 0; // Base case: if tree is empty, return 0
  
    // Initialize the count
    let count = 0;
  
    // Use a queue for level-order traversal (BFS)
    const queue = [root];
  
    while (queue.length > 0) {
      const currentNode = queue.shift();
  
      // Check if the current node has more than 1 child
      if (currentNode.children.length > 1) {
        count++;
      }
  
      // Add all children to the queue
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
  
    return count;
  }
  
  // Example Usage
  const root = new KaryTreeNode(1);
  const child1 = new KaryTreeNode(2);
  const child2 = new KaryTreeNode(3);
  const child3 = new KaryTreeNode(4);
  
  root.children.push(child1, child2, child3); // Root has 3 children
  child1.children.push(new KaryTreeNode(5), new KaryTreeNode(6)); // Node 2 has 2 children
  child2.children.push(new KaryTreeNode(7)); // Node 3 has 1 child
  
  console.log(countNodesWithMultipleChildren(root)); // Output: 2
  