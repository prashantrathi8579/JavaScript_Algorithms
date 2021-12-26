class PriorityQMinHeap {
    constructor() {
        this.data = [];
        this.N = 0;
    }

    // Used for MinHeap order maintenance
    greater (idx1, idx2) {
      if (
            (this.data[idx1] || this.data[idx1] === 0) &&
            (this.data[idx2] || this.data[idx2] === 0) &&
            this.data[idx1] > this.data[idx2]
        )
        return true;
     return false;
    }

    exchange (idx1, idx2) {
        let temp = this.data[idx1];
        this.data[idx1] = this.data[idx2];
        this.data[idx2] = temp;
    }

    /* Insert method start at index 1. Starting at index one is done for the ease
    * in maintaining the PQ operations. Once key is inserted swim operation is 
    * attempted to check if heap order is maintained.
    */
    insert(data) {
        this.data[++this.N] = data;
        this.swim(this.N);
    }

    /* swim method below is implemented for MinHeap. 
    * If parent of newly inserted key is greater then new keyt. Then this node needs
    * to be exchanged with the parent i.e (new node will swim up) to maintain the 
    * heep order.
    * 
    * For MinHeap if parent of newly inserted key is greater then newly inserted key
    * needs to be exchanged with the parent to maintain the heap order.
    */
    swim (k) {
        let parent = Math.floor(k/2);
        // for 1 index there is no parent
        while (k !== 1 && this.greater(parent, k)) {
            this.exchange(parent, k);
            k = parent;
            parent = Math.floor(k/2);
        }
    }

    /* sink method below is implemented for MinHeap.
    * If for any reason any key value is greater than its children then 
    * that node needs to be exchanged with the smalled key children to maintain
    * the heap order.
    */
    sink (k) {
        while (k < this.N) {
            let j = 2*k;
            if (j < this.N && this.greater(j, j+1)) j++;
            if(j > this.N || !this.greater(k, j)) break;
            this.exchange(k, j);
            k = j;
        }
    }

    /* Min heap: the lowest key is at index 1 with heap order maintained.
    * Below method gives the lowest key at index 1. To maintain the heap order,
    * index 1 key is exchanged with the last index key and then sink is used to 
    * maintain the heap order. The last index key is nullified and 
    * total keys are updated.
    */
    delMin () {
        let minData = this.data[1];
        this.exchange(1, this.N);
        this.data[this.N--] = null;
        this.sink(1);
        return minData;
    }

    // Helper method display to print the entire data.
    display() {
        for (let index = 1; index <= this.N; ++index) {
            console.log(this.data[index]);
        }
    }

    size() {
        // ignoring 0th index from the length.
        // We are inserting from index 1 for the ease of PQ implementation.
        return this.N;
    }
};

//Test

// Situation 2: Client wants to maintain only top 5 investers out of 
// 100 investors to serve top 5 on Priority.
const pq = new PriorityQMinHeap();
for(index = 0; index < 100; ++index) {
    // key represent the money of the investor. We want to have top 5 
    // investor.
    const key = Math.floor(Math.random() * 100 + 1);
    pq.insert(key);
    if (pq.size() > 5) {
        pq.delMin();
    }
}
pq.display();
