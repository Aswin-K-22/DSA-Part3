
function heapify(array , n , index){
    let largest = index;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    if(left < n && array[left] > array[largest]){
        largest = left;
    }
    if(right < n  && array[right] > array[largest]){
        largest =right;
    }

    if(largest !== index){
        [array[largest] ,array[index]] = [ array[index], array[largest]];
        heapify(array,index,largest);
    }
}

function heapSort(array){
    let n = array.length;
    for(let i = Math.floor(n/2)-1 ; i>=0;i--){
        heapify(array,n,i);
    }

    for(let i = n - 1 ; i >=0 ;i--){
        [array[0],array[i]] = [array[i],array[0]] ;
        heapify(array,i,0);
    }
    console.log("heap sorted array =" , array);
    
}

let array = [2,4,343,322,21,3,21,3];
heapSort(array);