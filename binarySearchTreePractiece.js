class Node {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor (){
        this.root = null;
    }
    insert(value){
        const node = new Node(value);
        this.root  = this.insertHelper(this.root, node)
    }

    insertHelper(root,node){
     if(root === null){
        return node;
     }
     if(root.value > node.value){
        root.left = this.insertHelper(root.left , node);
     }else{
        root.right = this.insertHelper(root.right , node);
     }
     return root;
    }
    search(value){
        let current = this.root;
        while(current){
            if(current.value > value){
                current = current.left;
            }else if(current.value < value ){
                current = current.right;
            }else{
                console.log('tree constain you search value',current.value);
                return true
            }
        }
        console.log('Value not in tree');
        
        return false;
    }

    delete(value){
        if(!this.search(value)){
            console.log('value not contain this tree for deletion');
            
        }else{
            this.root = this.deleteHelper(this.root , value);
        }
    }
    deleteHelper(root,value){
        
        if(root.value < value){
            root.right = this.deleteHelper(root.right , value);
        }else if(root.value > value){
            root.left = this.deleteHelper(root.left , value);
        }else{
            if(!root.left && !root.right){
                return null;
            }else if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }else{
                root.value = this.minValue(root.right);
                root.right = this.deleteHelper(root.right , root.value);
            }
        }
        return root;
    }
    minValue(root){
        if(root){
            if(!root.left) return root.value;
            return this.minValue(root.left);
        }
    }
    bfs(){
        
        let queue = [this.root]
        while(queue.length){
            let node = queue.shift();
            console.log(node.value);
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
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
    sumOfEvenNumbers(){
        let output = 0 ;
        let current = this.root;
        let stack = [];
        while(stack.length || current ){
            while(current){
                stack.push(current);
                current = current.left;
            }
            let node = stack.pop();
            if(node.value % 2 === 0){
                console.log(node.value);
                
                output += node.value;
            }
            if(node.right){
                current = node.right;
            }
        }
        console.log('Sum of even number in tree' ,output);
        
    }
    isBinary(){
        return this.isBSTcheck(this.root , -Infinity , Infinity);
    }
    isBSTcheck(root,min,max){

        if(root === null)return true;
        if(root.value <= min || root.value >= max) return false;
        return (this.isBSTcheck(root.left , min, root.value) && this.isBSTcheck(root.right , root.value , max))
    }
    maxHeight(node){
        if(node === null) return -1;
        const leftHeight = this.maxHeight(node.left);
        const rightHeight = this.maxHeight(node.right);
        return Math.max(leftHeight ,rightHeight ) + 1;
    }
   

}
function findKthLargestElement(root,k){
    let count  = 0;
    let result ;
    function find(node){
        if(node === null || count >= k) return ;
        find(node.right);
        count++;
        if(count === k){
            result = node.value;
            return result;
        }
        find(node.left);
    }
    find(root);
    return result;
}


const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(40);
tree.insert(60);
tree.insert(35);
tree.insert(45);
tree.insert(55);
// tree.bfs();
// console.log('---------------------');
// tree.preOrder(tree.root);

// console.log('---------------------');
// tree.inOrder(tree.root);

// console.log('---------------------');
// tree.postOrder(tree.root);
tree.sumOfEvenNumbers();

console.log(tree.isBinary());
console.log(tree.maxHeight(tree.root));
console.log(findKthLargestElement(tree.root,4));

