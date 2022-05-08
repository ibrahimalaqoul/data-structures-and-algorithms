'use strict';
function quickSort(arr, left, right) {
    if (left < right) {
        var pivot = partition(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
}
function partition(arr, left, right) {
    var pivot = arr[right];
    var low = left - 1;
    for (var i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            low++;
            swap(arr, low, i);
        }
    }
    swap(arr, low + 1, right);
    return low + 1;

}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
module.exports = quickSort;