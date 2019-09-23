/* BinaryHeap is used to provide one of the inplace guaranteed O(NLogN) sorting algorithm called HeapSort.
* 
* Building heap takes linear time N and sorting takes for N elements logN 
* (since the size is LogN. Array data is arranged as a complete binary tree). So total sorting time is NLogN
* Total time for the algorithm is NLogN.
*
* Which is inplace sorting algorithm with guaranteed O(NLogN) in worst case?
*
* MergeSort: No, it needs linear size extra space.
* QuickSort: No, it results in O(N square) in worst case. Though probability is reduced by random suffling
* HeapSort: Yes, only algorithm which is simple inplace guaranteed NlogN
*
* HeapSort is optimal for both time and space but heapSort is not used extinsevely.
* It is not stable sort. Heap Sort does long exchanges which brings data out of the order 
* and removes stability. Sometimes people use MergeSort due to stability.
*
* When data is very high, inner loop is longer than quickSort due to many comparisons.
* 
*/


class HeapSort {

    /* data: input data to check
    *  idx1 & idx2: data at index 1 will be exchanged with data at index 2
    *
    *  out: updated input data
    */

    exchange(data, idx1, idx2) {
        if(idx1 !== idx2 &&  data[idx1] && data[idx2]) {
            let temp = data[idx1];
            data[idx1] = data[idx2];
            data[idx2] = temp;
        }
    }


    /* data: input data to check
    *  idx1 & idx2: data at index 1 is less than data at index 2
    *  
    *  out: true or false
    */
    less(data, idx1, idx2) {
        if (data[idx1] && data[idx2] && data[idx1] < data[idx2]) {
            return true;
        }
        return false;
    }

    /* data: input data
    *  k: index to check for heap order
    *  N: total items
    */
    sink(data, k, N,) {
        while(k < N) {
            let j = 2*k + 1;
            if (j < N && this.less(data, j, j+1)) j++;
            if (j > N || !this.less(data, k, j)) return;
            this.exchange(data, k, j);
            k = j;
        }
    }

    /* delMax is used to swap 0th index data with last index data. In Maxheap 0th index data 
    * will have highest value. After this sink operation is used to maintain heap ordered
    * with remaining data.
    *
    */
    delMax(data, N) {
        let max = data[0];
        this.exchange(data, 0, N);
        this.sink(data, 0, N - 1);
    }
};


const sortData = (data) => {
    const hSort = new HeapSort();
    let N = data.length;
    // Creating heap ordered as MaxHeap. Starting from half - 1 since other remaining will
    // be last node i.e heap with one node. 
    for(let index = Math.floor(N/2) - 1; index >= 0; --index) {
        hSort.sink(data, index, N - 1);
    }

    // Ordering with MaxHeap to get sorted data.
    while (N > 0) {
        hSort.delMax(data, N - 1);
        --N
    }

}

let data = [34, 12, 56, 3, 24, 50, 78, 98, 1];
sortData(data);
console.log(data);
