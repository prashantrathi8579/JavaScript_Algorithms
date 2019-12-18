/*
*   SelectionSort: 
*   Time complexity: Big O of N Square in Best, Average and Worst case
*   Starting from ith index all remaining indexes are scanned to find the 
*   minimum value. ith index value is replaced with min value index.
*   Same process is repeated for all N values starting from 0th index.
*   
*/

const exchange = (data, i, j) => {
    let k = data[i];
    data[i] = data[j];
    data[j] = k;
}

const selectionSort = (data) => {
    let size = data.length;
    for (let i = 0; i < data.length; ++i) {
        let min = i;

        for(let j = i + 1; j < size; ++j) {
            if (data[j] < data[min]) {
                min = j;
            }
        }
        exchange(data, i, min);
    }
}

let data = [1, 89, 23, 45, 6, 78, 90, 154, 4, 34];
selectionSort(data);
