# Singly Linked List
  Linked List is a sequence of Nodes that are connected/linked to each other. The most defining feature of a Linked List is that each Node references the next Node in the link.
  Linked lists are dynamic data structures. A static data structure needs all of its resources to be allocated when the structure is created; this means that even if the structure was to grow or shrink in size and elements were to be added or removed, it still always needs a given size and amount of memory
## Challenge
the challange asked me to create an empty linked list and node also inserting the node to the empty Linked list, also the challange asks me to check if the value if the node is included (exist) in each node.
The last thing asked for creating a certain string which takes the node values as "{ a } -> { b } -> { c } -> NULL".
## Approach & Efficiency
while loop because this kind of loop does't have starting and ending values so it will be flixable with the condition untill the condition is fale. 
Also,The challange asks me to create three methods one for append, Also one for addBefore , and one fore AddAfter.

### kth method
the challange asked us
to ask give the output of a specific index from the right to the left of the linked list


insert --> BigO O(1).
include --> BigO O(n).
toString --> BigO O(n).
append --> BigO O(1).
addBefore --> BigO O(n).
addAgter --> BigO O(n).
Kth ----> BigO o(n)
zipLists ---->BigO o(n)
## Whiteboard Process
![](./append.png)
![](./insertBefore.png)
![](./insertAfter.png)
![](./Kth.png)
![](./chal08.png)

## Solution
npm test linked-list.test.js
### Efficiency :
linked list is usually efficient when it comes to adding and removing most elements, but can be very slow to search and find a single element.
## API
**insert** : it inserts a value to the beginning of the linked list if the linked list is empty it or not.

**include** : it checks if the value of each node is exist it will return true if it is not it will return false until it reaches the last node.
aslo if the linked list was empty it will return false.

**toString** : it will check if each node has a value if it has it it will store the value in a variable as a  for each node  until the loop reaches the last node.
when we rech the last node we add NULL to the variable which has the node values in a string.
