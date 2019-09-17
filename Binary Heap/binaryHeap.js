/*BinaryHeap: is an optimized algorithm to implement Priority Queue opertaions
* in O(logN) time.
* Priority Queue is highly used algorithm across various situations.
* Situation 1: Out of many input data process firstly the one with high priority.
* Situation 2: Client wants to maintain only top 100 investers out of 
* million investors to server top 100 on Priority.
* 
* There are two types of binary heaps:
* a) Max Heap: provide a way to fetch max key and process it. Max key will be removed from the
* data strucure.
* b) Min Heap: provide a way to access minimum key data and process it. Min key will be removed 
* from the data structure.

* Situation 1 can be solved using Max Heap.
* Situation 2 can be solved using Min Heap.
* 
* Binary Heap is made of Binary tree. A binary tree is either empty or its a node 
* with links to left and right binary trees.
* A complete binary tree is one thats perfectly balanced, except possibly for the 
* bottom level. So, there might be a few nodes on the bottom level and one level 
* lower than the bottom level, but otherwise all the levels are full.
*/

/*
* Binary Heap conditions:
* 
* MaxHeap:
*  Parent key should be greater than its left and right children.

* MinHep:
*  Parent key should be less than its left and right children.
*
* 2) Below array is used to represent Binary Heap data structure. Implementation will 
* make data entry from index 1 for the ease.
* 
* 3) If the node at position k, (index k in the array) then its parent is at k/2.
* 
* 4) The other way, its easy to see that the children of the node at k are 2k and 2k + 1
* Since we have access to parent and children through indeces, so we don't need
* any explicit links. Just indexes will help to move around.
* 
*/ 


class PriorityQ {
    constructor() {
        this.data = [];
        this.N = 0;
    }

    // Used  for MaxHeap order maintenance.
   less (idx1, idx2) {
        if (this.data[idx1] && this.data[idx2] && this.data[idx1] < this.data[idx2])
            return true;
        return false;
    }
    
    exchange (idx1, idx2) {
        if (idx1 !== idx2) {
            let temp = this.data[idx1];
            this.data[idx1] = this.data[idx2];
            this.data[idx2] = temp;
        }
    }

    /* Insert method start at index 1. Starting at index one is done for the ease
    * in maintaining the PQ operations. Once key is inserted swim operation is 
    * attempted to check if heap order is maintained. If heap order is not found 
    * then swim operation will do the same.
    */
    insert(data) {
        this.data[++this.N] = data;
        this.swim(this.N);
    }

    /* swim method below is implemented for MaxHeap. 
    * If newly inserted key is greater then its parent. Then this node needs
    * to be exchanged with the parent i.e (node will swim up) to maintain the 
    * heep order.
    * 
    * For MinHeap if newly inserted key is less than its parent then this needs
    * to be exchanged with the parent to maintain the heap order.
    */
    swim (k) {
        let parent = Math.floor(k/2);
        // for 1 index there is no parent
        while (k !== 1 && this.less(parent, k)) {
            this.exchange(parent, k);
            k = parent;
            parent = Math.floor(k/2);
        }
    }

    /* sink method below is implemented for MaxHeap.
    * If for any reason any key value is less than its children then 
    * that node needs to be exchanged with the greater children to maintain
    * the heap order.
    * 
    * For MinHeap inverse of the above statement needs to be maintained for 
    * heap order.
    */
    sink (k) {
        while (k < this.N) {
            let j = 2*k;
            if (j < this.N && this.less(j, j+1)) j++;
            if(!this.less(k, j)) break;
            this.exchange(k, j);
            k = j;
        }
    }

    /* Max heap: the highest key is at index 1 with heap order maintained.
    * Below method gives the highest key at index 1. To maintain the heap order,
    * index 1 key is exchanged with the last index key and then sink is used to 
    * maintain the heap order. The last index key is nullified and 
    * total keys are updated.
    */
    delMax () {
        let maxData = this.data[1];
        this.exchange(1, this.N);
        this.data[this.N--] = null;
        this.sink(1);
        return maxData;
    }

    // Helper method display to print the entire data.
    display() {
        console.log(this.data);
        return this.data;
    }
    
};

// TODO: Write Unit tests

// Local check of above algorithm.
const data = [23, 45, 67, 89, 100, 1, 23, 42, 12, 3, 981];
const pq = new PriorityQ();
for(let index = 0; index < data.length; ++index) {
    console.log(data[index]);
    pq.insert(data[index]);
}

console.log("Heap Ordered Data: ");
const heap = pq.display();

// Situation 1: Process in the order of highest key first.
// Looping length - 1 since we store data from index 1 only.
for (let index = 0; index < heap.length - 1; ++index) {
    console.log(pq.delMax())
}
