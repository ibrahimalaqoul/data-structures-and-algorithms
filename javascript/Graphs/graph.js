const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addNode(node) {
        return this.adjacencyList.set(node, []);
    }
    addEdge(node1, node2, weight) {
        node1 || node2 ? this.adjacencyList.get(node1).push(new Edge(node2, weight)) : null;
        console.log("this.adjacencyList", this.adjacencyList);
    }
    getNodes() {
        return this.adjacencyList.keys();
    }

    getNeioughbors(node) {
        return this.adjacencyList.get(node);
    }
    size() {
        //returns the number of nodes in the graph
        return this.adjacencyList.size;
    }
    removeEdge(node1, node2) {
        //remove an edge between two nodes
        const neighbors = this.adjacencyList.get(node1);
        console.log("1111111", neighbors);
        const newNeighbors = neighbors.filter(neighbor => neighbor.vertex !== node2);
        console.log("222222", newNeighbors);
        this.adjacencyList.set(node1, newNeighbors);

    }
    removeNode(node) {
        //remove a node from the graph
        this.adjacencyList.delete(node);
        this.adjacencyList.forEach((value, key) => {
            const newNeighbors = value.filter(neighbor => neighbor.vertex !== node);
            this.adjacencyList.set(key, newNeighbors);
        });

    }
    getWeight(node1, node2) {
        //returns the weight of an edge between two nodes
        const neighbors = this.adjacencyList.get(node1);
        const Weight = neighbors.find(neighbor => neighbor.vertex === node2);
        if (Weight) {
            return Weight.weight;
        } else {
            return null;
        }
        //    console.log('111',Weight);
        //    console.log('222',neighbors);
        //    console.log(Weight.weight); 
    }
    BreadthFirst(start) {
        if (this.adjacencyList.size === 0) {
            return 'The Graph is empty';
        }
        if (!this.adjacencyList.has(start)) {
            return null;
        }
        let queue = [];
        let visited = new Set();
        let current;
        queue.push(start);
        visited.add(start);
        while (queue.length) {
            let front = queue.shift();
            current = this.getNeioughbors(front);
            current.forEach(neighbor => {
                if (!visited.has(neighbor.vertex)) {
                    queue.push(neighbor.vertex);
                    visited.add(neighbor.vertex);
                }
            })
        }
        return visited;
    }
    DepthFirst(start) {
        if (this.adjacencyList.size === 0) {
            return 'The Graph is empty';
        }
        if (!this.adjacencyList.has(start)) {
            return null;
        }
        let visitedNodes = []
        let stack = [];
        const traverse = (node, visitedNodes) => {
            if (!node) return;
            visitedNodes.push(node);
            if (!stack.includes(node)) {
                stack.push(node);
            }
            const neighbors = this.getNeioughbors(node);
            console.log("neighbors", neighbors);
            for (let neighbor of neighbors) {
                console.log("neighbor", neighbor);
                if (!visitedNodes.includes(neighbor.vertex)) {
                    traverse(neighbor.vertex, visitedNodes);
                }
            }
            console.log('111',visitedNodes);
            console.log('222',stack);
        };

        traverse(start, visitedNodes);

        return stack;

    }
}

module.exports = Graph;

// let myGraph = new Graph();
// myGraph.addNode(1);
// myGraph.addNode(2);
// myGraph.addNode(3);
// myGraph.addNode(4);
// myGraph.addNode(5);
// myGraph.addEdge(1, 2, 5);
// myGraph.addEdge(1, 3, 3);
// myGraph.addEdge(1, 3, 5);
// myGraph.addEdge(2, 3, 5);
// myGraph.addEdge(2, 4, 5);
// myGraph.addEdge(4, 5, 5);
// myGraph.addEdge(5, 3, 5);
// console.log(myGraph.removeEdge(1, 2));
// console.log(myGraph.getNeioughbors(1));
// console.log(myGraph.size());
// myGraph.removeEdge(1, 2);
// myGraph.addEdge(1, 2, 5);
// console.log(myGraph.getNeioughbors(1));
// console.log(myGraph.size());
// myGraph.removeNode(1);
// console.log(myGraph.getNeioughbors(1));
// console.log(myGraph.size());
// console.log(myGraph.adjacencyList);
// console.log(myGraph.getNodes());
// console.log(myGraph.adjacencyList); 
// console.log(myGraph.getWeight(4,5));