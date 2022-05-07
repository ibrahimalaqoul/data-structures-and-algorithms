# merge sort
is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

 ## Pseudocode
    ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

    ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

  ## Trace

### Sample Array: [3,1,2,4]

### pass 1 : 
        the array is split into two halves, left and right.
        the left half is sorted and the right half is sorted.
        this is repeated until the array is sorted.
        this is the left side of the array.
        [1,3]

    
### pass 2 :
        the left half is sorted and the right half is sorted.
        this is repeated until the array is sorted.
        this is the right side of the array.
        [2,4]

# Efficency

* Time: O(n log n)
* because the algorithm is recursive, it will take log n time to sort the array.


* Space: O(n)
* because the algorithm is recursive, it will take n space to sort the array.

