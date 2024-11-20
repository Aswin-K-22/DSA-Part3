class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Get the parent, left, and right child indices
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    leftChildIndex(index) {
        return 2 * index + 1;
    }

    rightChildIndex(index) {
        return 2 * index + 2;
    }

    // Swap utility
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Insert into heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Heapify up to maintain max-heap property
    heapifyUp(index) {
        let currentIndex = index;
        while (
            currentIndex > 0 &&
            this.heap[currentIndex] > this.heap[this.parentIndex(currentIndex)]
        ) {
            this.swap(currentIndex, this.parentIndex(currentIndex));
            currentIndex = this.parentIndex(currentIndex);
        }
    }

    // Remove and return max element (root)
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop(); // Replace root with last element
        this.heapifyDown(0); // Fix the heap property
        return max;
    }

    // Heapify down to maintain max-heap property
    heapifyDown(index) {
        let largest = index;
        const left = this.leftChildIndex(index);
        const right = this.rightChildIndex(index);

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {

            this.swap(index, largest);
            this.heapifyDown(largest);
        
        }
    }

    // Peek at the maximum value
    peek() {
        return this.heap[0];
    }
}

// Example usage
const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(15);
heap.insert(30);
heap.insert(40);

console.log("Max:", heap.peek()); // Output: 40
console.log("Extracted Max:", heap.extractMax()); // Output: 40
console.log("Heap after extraction:", heap.heap);
