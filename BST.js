class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(root,node){
        
        if(root.value > node.value){
            if(root.left === null){
                root.left = node;
                return
            }else{
                this.insertNode(root.left , node);
            }
        }else{
            if(root.right == null){
                root.right = node;
                return 
            }else{
                this.insertNode(root.right ,node);
            }
        }
    }
    search(value){
        if(this.isEmpty()){
            return false;
        }
        let root = this.root;
        while(root){
            if(root.value > value){
                root = root.left;
            }else if (root.value < value){
                root = root.right;
            }else{
                console.log(` Search value : ${value} : Search Result = ${root.value === value}` );
                return true;
            }
        }

        console.log("Value not available");
        
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
            
        }
    }
    levelOrder(root){
        let queue = [];
        queue.push(root)
        while(queue.length){
            let node = queue.shift();
            console.log(node.value);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    minValue(root){
        if(!root.left){
            console.log("Min value = ",root.value);
            return root.value;
        }else{
           return  this.minValue(root.left);
        }
    }
    maxValue(root){
        if(!root.right){
            console.log("Max value =" ,root.value);
            return root.value;
        }else{
           return  this.maxValue(root.right);
        }
    }
    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null ) return null;
        if(root.value > value){
            root.left = this.deleteNode(root.left , value);
        }else if( root.value < value){
            root.right = this.deleteNode(root.right , value);
        }else{
            if(!root.left && ! root.right) return null;
            if(!root.right) return root.left;
            else if(!root.left) return root.right ; 
            else{
                console.log("it has to child");
                console.log(`left child = ${root.left.value} ,right childe ${root.right.value} ,value = ${root.value}` );
                root.value = this.minValue(root.right);
                console.log(`left child = ${root.left.value} ,right childe ${root.right.value} ,value = ${root.value}` );
                
                root.right = this.deleteNode(root.right , root.value)
            }
        }
        return root;
    }
}

const tree = new BST();
console.log(tree.isEmpty());
tree.insert(50);
tree.insert(90);
tree.insert(100);
tree.insert(10);
tree.insert(30);
tree.insert(60);
console.log(tree.minValue(tree.root));

// tree.search(10);
// tree.search(20);

// console.log("pre order");
// tree.preOrder(tree.root)
// console.log("in order");
// tree.inOrder(tree.root);
// console.log("post order");
// tree.postOrder(tree.root);
console.log("Breadth Search Order");
tree.levelOrder(tree.root)
// tree.maxValue(tree.root);
// tree.minValue(tree.root);
tree.delete(50);
console.log("After deletion Breadth Search Order");
tree.levelOrder(tree.root)





