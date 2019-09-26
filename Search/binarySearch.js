/*  Binary Search: mid key of the data set is compared with the given key and decision is taken to go left or right.
*       Every decision will divide the next search with half number of remaining keys.
*       
*   Conditions:
*   - Given input data array should be sorted.
*      
*   Binary search time complexity is O(logN) 
*
*/


const binarySearch = (data, key, lo, hi) => {

    let index = -1;
    while(lo <= hi) {
        let mid = Math.floor(lo + (hi - lo)/2),
            value = data[mid];
            // key to find is less then mid. So next search is needed only within the keys
            // available to the left of the mid. 
        if (key < value) {
            hi = mid - 1;
        } else if (key > value) {   // key to find is greater then mid. So next search is needed only within the keys
            lo = mid + 1;           // available to the right of the mid. 
        } else {
            index = mid;
            break;
        }
    }
    return index;
};

const search = (data, key) => binarySearch(data, key, 0, data.length - 1);
  
let data = [1, 3, 6, 10, 22, 34, 43, 50, 65, 73, 86, 98];

console.log(search(data, 22));