const { describe } = require('eslint/lib/rule-tester/rule-tester');
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
    it('should be able to BreadthFirst search', () => {
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
        expect(myGraph.BreadthFirst(1)).toEqual(new Set([1, 2, 3, 4, 5]));
        let myGraph2 = new graph();
        expect(myGraph2.BreadthFirst('')).toEqual('The Graph is empty');
        myGraph2.addNode();
        expect(myGraph2.BreadthFirst('')).toEqual(null);

    })
})
describe('Deapth first', () => {
    let myGraph = new graph();
    it('should be able to Deapth first search', () => {
        myGraph.addNode('A');
        myGraph.addNode('B');
        myGraph.addNode('C');
        myGraph.addNode('D');
        myGraph.addNode('E');
        myGraph.addNode('F');
        myGraph.addNode('G');
        myGraph.addNode('H');
        myGraph.addEdge('A', 'B', 5);
        myGraph.addEdge('A', 'D', 3);
        myGraph.addEdge('B', 'C', 2);
        myGraph.addEdge('B', 'D', 3);
        myGraph.addEdge('C', 'G', 3);
        myGraph.addEdge('D', 'E', 4);
        myGraph.addEdge('D', 'H', 8);
        myGraph.addEdge('D', 'F', 10);
        myGraph.addEdge('H', 'F', 1);
        expect(myGraph.DepthFirst('A')).toEqual(['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F']);
        let myGraph2 = new graph();
        expect(myGraph2.DepthFirst('')).toEqual('The Graph is empty');
        myGraph2.addNode();
        expect(myGraph2.DepthFirst('')).toEqual(null);

    })
})
