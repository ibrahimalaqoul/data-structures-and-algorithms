'user strict'
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left =mergeSort( arr.slice(0, mid));
    // console.log(left);
    let right = mergeSort(arr.slice(mid, arr.length));
    // console.log(right);
    let result = [];
    while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    while (left.length || right.length) {
        result.push(left.length ? left.shift() : right.shift());

    }
    return result
}
module.exports = mergeSort;
