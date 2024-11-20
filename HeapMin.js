class MinHeap{
    constructor(){
        this.head = [];
    }
    parantIndex(index){
        return Math.floor((index-1)/2)
    }
    leftChildIndex(index){
        return 2 * index + 1 
     }
    rightChildIndex(index){
        return 2 * index + 2
    }
    swap(index1,index2){
        [this.head[index1],this.head[index2]] = [this.head[index2],this.head[index1]]
    }
    
    insert(value){
        this.head.push(value);
        this.heapifyUp(this.head.length - 1)
    }
    heapifyUp(index){
        if(this.head.length === 1 ) return;

        let currentIndex =index;
        let parantIndex = this.parantIndex(index);
        while (currentIndex > 1 && this.head[parantIndex] > this.head[currentIndex]) {
            this.swap(currentIndex,parantIndex);
            currentIndex = parantIndex;
            parantIndex = this.parantIndex(currentIndex);
        }
    }
    extractMin(){
        if(this.head.length === 0) return null;
        if(this.head.length === 1) return this.head.pop();

        let min = this.head[0];
        this.head[0] = this.head.pop();
        this.heapifyDown(0);
        return min;
    }
    heapifyDown(index){

        let parant = index;
        let leftChild = this.leftChildIndex(index);
        let rightChild = this.rightChildIndex(index);
        if(leftChild < this.head.length && this.head[parant] > this.head[leftChild]){
            parant = leftChild;
        }
        if(rightChild < this.head.length && this.head[parant] > this.head[rightChild]){
            parant = rightChild;
        }

        if(index !== parant){
            this.swap(index , parant);
            this.heapifyDown(parant);
        }

    }

    peek(){
        return this.head[0];
    }


}

const heap = new MinHeap();
heap.insert(10);
heap.insert(20);
heap.insert(15);
heap.insert(30);
heap.insert(40);

console.log("Min:", heap.peek()); // Output: 10
console.log("Extracted Min:", heap.extractMin()); // Output: 10
console.log("Heap after extraction:", heap.head); //15
