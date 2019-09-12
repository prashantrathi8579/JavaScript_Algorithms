/* QuickSelect: This is the good usage of quick select partitioning.
* To find kth smallest: 
* 
* One way is to sort in O(NlogN) and find the required 
* smallest from the index. Like smallest will be at 0th index, hioghtest will be at n-1
* index and median will be at n/2 index.
*
* Second way is to use quicksort partioning as done below and find the kth smallest 
* in O(N) i.e linear time complexity. 
* 
*/

const exchange = (data, i, j) =>  {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
};

// Same as quick sort partitioning where all values left to pivot element is
// made smaller then pivot value and all values right to pivot is made greater than pivot
// value. Here pivot is taken as 0th index value. i from the left is starting
// from index 1 and j from the end starting from n-1 index.
const partitioning = (data, lo, hi) => {
    let i = lo + 1,
        j = hi;

    while(true) {
        while (data[i] < data[lo]) {
            i++;
            if (i === hi) break;
        }

        while (data[j] > data[lo]) {
            j--;
            if (j === lo) break;
        }

        if (i>= j) break;
        exchange(data, i, j);
    }

    exchange(data, lo, j);
    return j;
};

const quickSelect = (data, lo, hi, kth) => {
    while (hi >= lo) {
        let j = partitioning(data, lo, hi );
        if (kth < j) hi = j - 1;
        else if (kth > j) lo = j + 1;
        else return data[kth];
    }
};

// To select kth smallest element from the unsorted data set.
// To get in O(N) time data must be unsorted. i.e distributed randomly
const select = (data, kth) => {
    
    //kth - 1: since data is 0 based index.

    return quickSelect(data, 0, data.length - 1, kth - 1);
};

const data = [45, 1, 23, 67, 89, 62, 34, 10, 8, 61];

// 3rd smallest: is 10 in above dataset
console.log(select(data, 3));