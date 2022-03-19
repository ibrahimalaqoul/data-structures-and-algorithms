'use strict';
const stack = require('../Stack');


class pseudoQueue{
    constructor(){
        this.stackOne = new stack();
        this.stackTwo = new stack();
    }

    enqueue(value){
        this.stackOne.push(value);
    }
    dequeue(){
        if(this.stackOne.top == null){
            return "exception(The stack is Empty)";
        }
        else{
            this.stackTwo.push(this.stackOne.top.value);
            this.stackOne.pop();
        }
    }


}
module.exports = pseudoQueue;