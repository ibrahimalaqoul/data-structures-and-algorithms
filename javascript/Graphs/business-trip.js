const graph = require('./graph');
let g = new graph();

g.addNode('A');
g.addNode('B');
// g.addNode('C');
// g.addNode('D');
// g.addNode('E');
// g.addNode('F');

g.addEdge('A', 'B', 5);
// g.addEdge('A', 'D', 3);
// g.addEdge('A', 'E', 2);
// g.addEdge('B', 'C', 4);
// g.addEdge('C', 'D', 8);
// g.addEdge('C', 'E', 2);




 function businessTrip(graph,noCities){
     let arr = [];
     let arr1=[];
    let weightOfEachone = [];
    for(let i = 0; i < noCities.length; i++){
        arr.push(noCities[i]);
        // arr1.push(i)
    } 
    // arr.forEach(ele => {
        
    // arr1.push(graph.getWeight(ele,ele1))

    //     weightOfEachone.push(arr1);
    // })
    for(let i=0 ;i<arr.length; i++){
        arr1.push(graph.getWeight(arr[i],arr[i+1]))
    }
    console.log(arr1)


}
// console.log(businessTrip(g,5));
businessTrip(g,['A','B']);


 

 module.exports = businessTrip;
