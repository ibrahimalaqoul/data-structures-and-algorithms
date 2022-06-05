const graph = require('./graph');
let g = new graph();
const businessTrip = require('./business-trip');

g.addNode('A');
g.addNode('B');
g.addNode('C');
g.addNode('D');
g.addNode('E');
g.addNode('F');

g.addEdge('A', 'B', 5);
g.addEdge('B', 'C', 3);
g.addEdge('C', 'D', 2);
g.addEdge('D', 'E', 3);
g.addEdge('E', 'F', 4);


describe('Graph', () => {
    let g2 = new graph();
    it('should return the Graph is empty', () => {
        expect(businessTrip(g,[])).toBe('There are no  weigth of the asked cities'); 
    })
    it('should return the weight of the graph', () => {
        expect(businessTrip(g, ['A', 'B','C'])).toBe(8);
    })
    it('should return the weight of the graph', () => {
        expect(businessTrip(g, ['A', 'B','C','D'])).toBe(10);
    })
    it('should return the weight of the graph', () => {
        expect(businessTrip(g, ['A', 'B'])).toBe(5);
    })
})