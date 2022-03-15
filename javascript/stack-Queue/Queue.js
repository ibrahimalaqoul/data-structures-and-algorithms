'use strict';
const Node = require('./node');
class Queue{
    constructor(){
        this.front = null;
        this.tail = null;
        this.length=0;
    }
    enqueue(value){
        const node= new Node(value);
        if (this.front == null) {
            this.front = node;
            this.tail = node;
        }
        this.tail.next = node;
        this.tail = node;
    }

    dequeue(){
        if (this.front == null) {
            return "exception";
        }
        let current = this.front;
        this.front = current.next;
        current.next=null;
        return current.value;
    }
    
    peek() {
        if (this.front == null) {
          return "exception"  
        } return this.front;        
    }

    isEmpty(){
        if (this.front == null) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports=Queue;

