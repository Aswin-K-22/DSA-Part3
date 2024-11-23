class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    insert(value){
        let node = new Node(value);
        if(!this.root){
            this.root = node
            return
        }
        this.insertNode(this.root,node)
    }
    insertNode(root, node){
        if(root.value > node.value){
            if(!root.left){
                root.left = node
                return ;
            }
            this.insertNode(root.left ,node)
        }else{
            if(!root.right){
                root.right = node;
                return
            }
            this.insertNode(root.right,node)
        }
    }
    findClosestValue(target){
        return this.findClosestValueHelper(this.root , target , Infinity)
    }
    findClosestValueHelper(root , target , clossest){
        if(root === null){
            return clossest
        }
        if(Math.abs(root.value - target ) < Math.abs(clossest - target)){
            clossest = root.value;
        }
        if(root.value > target){
            this.findClosestValueHelper(root.left , target , clossest)
        }else{
            this.findClosestValueHelper(root.right , target , clossest)
        }
    }
}

// Example Usage
const tree = new Tree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

const target = 65;
console.log(`The closest value to ${target} is ${tree.findClosestValue(target)}`);