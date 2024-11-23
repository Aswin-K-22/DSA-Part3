class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Insert method to create a tree (standard BST insertion)
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    break;
                } else {
                    current = current.left;
                }
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
    }

    // Validate if the tree is a BST
  isBST(){
    return this.validateBST(this.root,-Infinity,Infinity)
  }
  validateBST(node,min,max){
    if(node === null) {
        return true ;
    }
    if(node.value <= min || node.value >= max){
        return false;
    }
     
    return (this.validateBST(node.left , min,node.value) && this.validateBST(node.right , node.value , max))

  }
}

// Example Usage
const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(8);
tree.insert(12);
tree.insert(20);

console.log("Is the tree a BST?", tree.isBST()); // Should return true

// Example of a non-BST
const invalidTree = new Node(10);
invalidTree.left = new Node(15); // Violates BST property
invalidTree.right = new Node(5);

const bstChecker = new BST();
bstChecker.root = invalidTree;

console.log("Is the invalid tree a BST?", bstChecker.isBST()); // Should return false
