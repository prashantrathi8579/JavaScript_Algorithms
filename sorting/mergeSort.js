/* MergeSort Features:
* 
* Divide And Conquer algorithm: Breaking down the problem recursively into two or more sub-problems of the same and related type.
* 
* Is an stable sort: maintains the order of the similar key in sorting result
*
* Time complexity: O(NlogN) (Average case), O(NlogN) (Worst case)
* Space complexity: O(n): Mergesort requires auxilliary array of input data size.
*
* Its recommended to use insertion sort for smaller dataset.
* 
*/


const data = [23, 12, 33, 1, 45, 65, 34, 29, 11, 8, 12];


const merge = (a, aux, lo, mid, hi) => {
    for (let k = lo; k <= hi; ++k) {
        aux[k] = a[k];
        a[k] = 0;
    }
    let i = lo, j = mid + 1;
    for(let k = lo; k <= hi; ++k) {
        if(i > mid) a[k] = aux[j++];
        else if (j > hi) a[k] = aux[i++];
        else if (aux[j] < aux[i]) a[k] = aux[j++];
        else a[k] = aux[i++];
    }
}

const sort = (a, aux, lo, hi) => {
    
    if (hi <= lo) return;
    let mid = Math.floor(lo + (hi - lo) / 2);
    sort(a, aux, lo, mid);
    sort(a, aux, mid + 1, hi);
    merge(a, aux, lo, mid, hi);
}

let aux = [];
console.log(data);
sort(data, aux, 0, data.length - 1);
console.log(data);
