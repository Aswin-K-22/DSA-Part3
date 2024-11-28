class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root= null;
    }
    insert(value){
        const node = new Node(value);
        if(this.root === null){
            this.root = node
            
        }else{
            let currentNode = this.root;
            while(currentNode){
                if(currentNode.value <= value){
                    if(!currentNode.right){
                        currentNode.right = node;
                        return;
                    }
                    currentNode =  currentNode.right;

                }else{
                    if(!currentNode.left){
                        currentNode.left = node;
                        return ;
                    }
                    currentNode = currentNode.left
                }
            }
        }
    }
    delete(value , root = this.root){
        if(root === null ) return null;
        
        if(root.value > value){
            root.left = this.delete(value,root.left);
        }else if (root.value < value ){
            root.right = this.delete(value,root.right);
        }else{
            if(!root.left && !root.right){
                return null;
            }else if(!root.left){
                return root.right;
            }else if (!root.right){
                return root.left;
            }else{
                let minValue = this.minValue(root.right);
                root.value = minValue;
                root.right = this.delete(minValue , root.right);
                
            }

        }
        return root;
    }
    minValue(root){
        if(root){
            if(!root.left){
                return root.value;
            }
            return this.minValue(root.left);
        }
    }
    bfs(){
        let queue = [this.root];
        while(queue.length){
            let node = queue.shift();
            console.log(node.value);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }
    uniqeElement(){
        let frequency = new Map();
        let stack = [];
        let current = this.root;
        while(stack.length > 0|| current){
            while(current){
                stack.push(current);
                current =current.left;
            }

            current = stack.pop();
            frequency.set(current.value , (frequency.get(current.value) || 0) + 1);
           current = current.right;
        }
        for(let [value , count] of frequency.entries()){
            if (count > 1) {
                while (this.search(value)) {
                    this.delete(value);
                }
        }
    }
        console.log('Aftert deletion');
        console.log(frequency);
        this.bfs()
        
        
    }
    search(value){
        let currentNode = this.root;
        while(currentNode){
            if(currentNode.value < value){
                currentNode = currentNode.right;
            }else if( currentNode.value > value){
                currentNode = currentNode.left;
            }else{
                return true;
            } 
        }
        return false;
        l
    }
}

const tree  = new BST();
tree.insert(6)
tree.insert(4)
tree.insert(7)
tree.insert(3)
tree.insert(4)
tree.insert(6)
tree.insert(8)
tree.insert(3)
tree.bfs();
console.log('-------------AD');
tree.delete(4);
tree.bfs();
tree.uniqeElement();
