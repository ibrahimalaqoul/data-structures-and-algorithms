# Hashtables
Hash Tables are Data structures that store key-value pairs.
each key is unique and each value can be associated with multiple keys.
if there are more than one pair has the same (key) they will be chained within a linked list.
## Challenge
The challenge is to create a hashtable that has the following methods:
- set(key, value)
- get(key)
-hash(key)
- contains(key)
- keys()

## Time and space complexity :
set BigO ---> time O(1) space O(1)
get BigO ---> time O(n) space O(1)
hash BigO ---> time O(n) space O(1)
contains BigO ---> time O(n) space O(1)
keys BigO ---> time O(n) space O(1)


## Approach & Efficiency
i've used the for each and while loops to iterate over the hashtable's array and linked list for each key.

## API
npm test hash.test.js