## insertion Sort 
is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence. The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

## Pseudocode
         InsertionSort(int[] arr)
        FOR i = 1 to arr.length
            int j <-- i - 1
            int temp <-- arr[i]
        WHILE j >= 0 AND temp < arr[j]
            arr[j + 1] <-- arr[j]
            j <-- j - 1
        arr[j + 1] <-- temp


## Trace

### Sample Array: [3,1,2,4]

### pass 1 : 
    [3,1,2,4]
    1 <-- 3
    [1,3,2,4]
| i   |      j      |  currentVal |
|----------|:-------------:|------:|
| 1 |  0 |3 |

in pass 1, we are looking at the second element of the array, 1 index of (i as the intial value of i is 1), We know that 3 (arr[j]) is greater than 1, so we swap the values.


### pass 2 : 
    [3,1,2,4]
    1 <-- 2
    [1,3,2,4]
| i   |      j      |  currentVal |
|----------|:-------------:|------:|
| 2 |   1   |  1 |

in pass 2, we are looking at the third element of the array, 2 index of (i as the  value of i is 2), We know that 1 (arr[1]) is not greater than 2, so we don't swap the values.



### pass 3 : 
    [1,2,3,4]
| i   |      j      |  currentVal |
|----------|:-------------:|------:|
| 3 |  2 |2 |

in pass 3, we are looking at the fourth element of the array, 4 index of (i as the intial value of i is 3), We know that 4 (arr[3]) is greater than 3, so we swap the values.

now while the array is sorted, we can see that the array is now [1,2,3,4]

# Efficency

* Time: O(n^2)
* The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.


* Space: O(1)
* No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).


