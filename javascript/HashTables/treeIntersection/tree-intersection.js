const Hash = require('../hashTables')

function tree_intersection(tree1,tree2){
    if(tree1.root === null || tree2.root === null){
        return "No intersection";
    }
const hashTable = new Hash(13)
    let result = []
    let preOrderOne = tree1.preOrder()
    let preOrderTwo = tree2.preOrder()
    console.log(preOrderOne);
    console.log(preOrderTwo);
    for(let i = 0; i < preOrderTwo.length; i++){
        hashTable.set(preOrderTwo[i],[i])
    }    
    console.log(hashTable.buckets);
    for(let i = 0; i < preOrderOne.length; i++){
        if(hashTable.contains(preOrderOne[i])){
            result.push(preOrderOne[i])
        }
    }
    return result
}
module.exports=tree_intersection