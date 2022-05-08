# Quick sort
is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

 ## Pseudocode
    ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

    ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

    ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp


# Trace

### Sample Array: [3,1,6,4]

## pass 1 :
The first thing happenes in our code is checking if the left index is less than the right index. If it is, then we know that we have more than one element to sort, then the partition fu nction is called with ([3,1,6,4],0,3).(arr, left, right)
the pivot value is set to the last element of the array which is 4.
then the low index is set to 0(left) - 1 which is -1.
the right value is set to the last index of the array which is 3.


## pass 2 
Now we loop through the array and check if the current index is less than Or equals to  the pivot value if it is, then we increment the low index by 1 and swap the current index with the low index.
now we place the pivot value in the middle of the array.
all numbers smaller than the pivot are on the left, larger on the right.
[1,3,4,6]

in the swap function we swap the current index with the low index.
3 <-- 1
6 <-- 4
## pass 3 :
this will be repeated until the array is sorted (by chaging the value of the pivot index) it will be repeated for all the array elements until the array is sorted.


# Efficency

* Time: O(n^2)
* because the algorithm is recursive, it will take log n time to sort the array.
* Space: O(n)
* because the algorithm is recursive, it will take n space to sort the array.


    




