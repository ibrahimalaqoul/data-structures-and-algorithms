'use strict';

class KArrayTree{
    constructor(root = null){
        this.root = root;
     }
        breadthiFrst(){
            let arr = [];
            let queue = [];
            queue.push(this.root);
            while(queue.length > 0){
                let current = queue.shift();
                arr.push(current.value);
                for(let i = 0; i < current.children.length; i++){
                    if(current.children[i] != null){
                        queue.push(current.children[i]);
                    }   
                }

            }
            return arr;
        }

        fizzBuzzTree(){
            let array = [];
            let Queue = [];   
            Queue.push(this.root);
            const recursiveFizzBuzz = (node) => {
                if(node.value % 3 === 0 && node.value % 5 === 0){
                    node.value = 'FizzBuzz';
                }
                else if(node.value % 3 === 0){
                    node.value = 'Fizz';
                }
                else if(node.value % 5 === 0){
                    node.value = 'Buzz';
                }
                else{
                    node.value = node.value.toString();
                }
                array.push(node.value);
                for(let i = 0; i < node.children.length; i++){
                    if(node.children[i]){
                        Queue.push(node.children[i]);
                    }
                    if (Queue.length > 0){
                        recursiveFizzBuzz(Queue.shift()); 
                    } 
                          
                }
            }
            recursiveFizzBuzz(Queue.shift()); 
            return array;
        }
        
}




module.exports = KArrayTree ;
