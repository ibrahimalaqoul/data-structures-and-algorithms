'use strict';
const Node = require('./node');

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    append(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
        return this;
    }
}
module.exports = LinkedList;
