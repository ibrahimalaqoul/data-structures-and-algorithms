# Graphs
Graphs are non-linear data structuers that consist of nodes(vertesies) and edges,
that used for representing data.
## Challenge
The challenge is to create a graph that represents the following mehods:
- `addNode`
- `addEdge`
- `getNodes`
- `getNeighbors`

## Approach & Efficiency
i used a vertex and edge class to represent the nodes and edges.
each node has a list of edges that it is connected to.
each edge has a reference to the node it is connected to.

## Big O:
 Time complexity: addNode: O(1) addEdge: O(1) getNodes: O(1) getNeighbors: O(1) removeNode: O(n) removeEdge: O(n)
Space complexity: addNode: O(1) addEdge: O(n) getNodes: O(1) getNeighbors: O(1); 
