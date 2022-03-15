'use strict';
const Node = require('./node');

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (this.top == null) {
            this.top = node;
            this.length++;
        } else {
            node.next = this.top;
            this.top = node
        }

    }

    pop() {
        if (this.top == null) {
            return "exception";
        } else {
            let current = this.top;
            this.top = current.next;
            current.next = null;
            this.length--;
            return current.value;
        }
    }

    peek() {
        if (this.top == null) {
          return "exception"  
        } return this.top;        
    }

    isEmpty(){
        if (this.top == null) {
            return true;
        } else {
            return false;
        }
    }
}


module.exports = Stack; 
