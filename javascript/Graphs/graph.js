const Vertex = require('./vertex');
const Edge = require('./edge');

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addNode(node) {
      return  this.adjacencyList.set(node, []);
    }
    addEdge(node1, node2, weight) {
      node1 || node2 ? this.adjacencyList.get(node1).push(new Edge(node2, weight)) : null;
    }
    getNodes() {
      return  this.adjacencyList.keys();
    }
    
    getNeioughbors(node) {
        return this.adjacencyList.get(node);
    }
    size() {
        //returns the number of nodes in the graph
        return this.adjacencyList.size;
    }

}

module.exports = Graph;

