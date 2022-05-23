
function leftJoin(hashmap1, hashmap2) {
    if(hashmap1.isEmpty() || hashmap2.isEmpty()){
        return "One of the hash tables is empty";

    }
  var result = [];
    const keys1=hashmap1.keys();
    const keys2=hashmap2.keys();  
    // console.log(keys1);
    // console.log(keys2);
    for(let i=0;i<keys1.length;i++){
        if(hashmap2.contains(keys1[i])){
            result.push([keys1[i], hashmap1.get(keys1[i]), hashmap2.get(keys1[i])]);
            // console.log(hashmap1.get(keys1[i]));
        }
        else{
            result.push([keys1[i], hashmap1.get(keys1[i]), null]);
        }
    }
    // console.log(result);

    return result;
}


module.exports = leftJoin;

