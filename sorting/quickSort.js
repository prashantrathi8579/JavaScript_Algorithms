/* Quicksort Features:
* 
* Divide And Conquer algorithm: Breaking down the problem recursively into two or more sub-problems of the same and related type.
* 
* Is an inplace sort which doesn't need any extra space as compared to mergeSort.
*
* Complexity: NlogN (Average case), N2 (Worst case: list is already sorted)
*
* Speed: Faster then merge sort with similar complexity.
* 
* Optimization can be added to randomize given dataset to reduce the probablity of going into worst case. Its recommended to use 
* insertion sort for smaller dataset.
* 
* Quicksort firstly organize the data and then go recursively to sort whereas 
* mergesort firstly go recursively to sort and then merge sorted lists
*/


const exchange = (data, i, j) => {
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}

const partition = (data, lo, hi) => {
    let i = lo + 1,
        j = hi;

    while (true) {
        while (data[i] <= data[lo]) {
            ++i;
            if (i == hi) break;
        }
    
        while (data[j] > data[lo]) {
            --j;
            if (j == lo) break;
        }
    
        if (i >= j) {
            break;
        }
        exchange(data, i, j);
    }
    exchange(data, lo, j);
    return j;
}

const quickSort = (data, lo, hi) => {

    if (hi <= lo) return;
    let j = partition(data, lo, hi);
    quickSort(data, lo, j - 1);
    quickSort(data, j+1, hi);
}

const sort = (data) => {
    quickSort(data, 0, data.length - 1);
}

let data = [23, 45, 67, 43, 1, 20, 19, 87, 26];
console.log(data);
sort(data);
console.log(data);