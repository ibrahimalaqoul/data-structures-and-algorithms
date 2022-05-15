const HashTable = require('./hashTables');

function firstRepeated(str) {
    const hashTable = new HashTable(10);
    let  strArr = str.split(' ');
    console.log(strArr);
    let repeated='';
    for(let i = 0; i < strArr.length; i++){
        if(hashTable.contains(strArr[i])){
           repeated =  strArr[i];
              break;
        }else{
            hashTable.set(strArr[i], i);
           
    
        }
    }
    return repeated;

}
module.exports = firstRepeated;