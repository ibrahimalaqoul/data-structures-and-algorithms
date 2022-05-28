const graph = require('./graph');
let myGraph;

describe('Graph', () => {
    beforeEach(() => {
        myGraph = new graph();
    });
    
    it('should be a function', () => {
        expect(myGraph).toBeInstanceOf(graph);
    });
    
    it('should be able to add a node', () => {
        myGraph.addNode(1);
        expect(myGraph.adjacencyList.get(1)).toBeDefined();
    });
    
    it('should be able to add an edge', () => {
        myGraph.addNode(1);
        myGraph.addNode(2);
        myGraph.addEdge(1, 2, 5);
        expect(myGraph.adjacencyList.get(1).length).toBe(1);
    });
    
    it('should be able to get neighbors', () => {
        myGraph.addNode(1);
        myGraph.addNode(2);
        myGraph.addEdge(1, 2, 5);
        expect(myGraph.getNeioughbors(1)).toEqual([{ vertex: 2, weight: 5 }]);
    });
    
    it('should be able to get the size of the graph', () => {
        myGraph.addNode(1);
        myGraph.addNode(2);
        expect(myGraph.size()).toBe(2);
    });
    
    it('should be able to get the size of the graph', () => {
        myGraph.addNode(1);
        myGraph.addNode(2);
        myGraph.addNode(3);
        myGraph.addNode(4);
        myGraph.addNode(5);
        myGraph.addEdge(1, 2, 5);
        myGraph.addEdge(1, 3, 5);
        myGraph.addEdge(2, 3, 5);
        myGraph.addEdge(2, 4, 5);
        myGraph.addEdge(4, 5, 5);
        myGraph.addEdge(5, 3, 5);
        expect(myGraph.size()).toBe(5);
    });
    it('should be able to remove an edge', () => {
        myGraph.addNode(1);
        myGraph.addNode(2);
        myGraph.addEdge(1, 2, 5);
        expect(myGraph.adjacencyList.get(1).length).toBe(1);
        myGraph.removeEdge(1, 2);
        expect(myGraph.adjacencyList.get(1).length).toBe(0);
    })
    it('should be able to remove a node', () => {
        myGraph.addNode(1);
        myGraph.addNode(2);
        myGraph.addNode(3);  
        expect(myGraph.size()).toBe(3);
        myGraph.removeNode(1);
        expect(myGraph.size()).toBe(2);
    })
})