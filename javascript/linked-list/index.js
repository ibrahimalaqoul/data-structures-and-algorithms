'use strict';
const Node = require('./Node')
class LinkedList {
    constructor(){
        this.head = null;
    }

    insert(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
                                                                       
    }
    include(value){
        if (this.head != null) {
            let currentValue = this.head;
        while (currentValue != null) {
            if (currentValue.value == value) {
                return true;
            } else {
             currentValue = currentValue.next;
            } 
        } return false;
        } else {
            return false;
        }
        
  
    } 
    toString(){
      let  nodeString = "";
      if (this.head != null) {
         let current = this.head;
          while (current != null) {
            nodeString  = nodeString + `{ ${current.value} } -> `;
            current = current.next;
          } nodeString = nodeString +"NULL";
            return nodeString;
      } else {
          return "empty Linked List";
      } 
    }
    append(value) {
        const node = new Node(value);
        let current = this.head;
        if (this.head == null) {
            this.head = node;
        } else {
            while (current.next != null) {
                current = current.next;
            } current.next = node;
        }
    }
    insertBefore(previousValue, insertedValue) {
        const node = new Node(insertedValue);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
            if (current.next.value == previousValue) {
                node.next = current.next;
                current.next = node;
                return null;
            }
        }
    }
    insertAfter(previousValue, insertedValue) {
        const node = new Node(insertedValue);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
            if (current.value == previousValue) {
                node.next = current.next;
                current.next = node;
                return null;
            }
        }

    }
    Kth(k){
        let current = this.head;
        let LLlength =0;
        while (current!=null) {
            current=current.next;
            LLlength++;
        }
        if (k < 0 ||k > LLlength) {
            return'exception';
        } else {
            LLlength = LLlength-1-k;
            current = this.head;
        while (LLlength > 0) {
            current = current.next;
            LLlength--;
        }
        return current.value;
        }
 
    }
}

module.exports = LinkedList;
