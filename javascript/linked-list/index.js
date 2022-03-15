'use strict';
const Node = require('./Node')
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.length++;

        } else {
            node.next = this.head;
            this.head = node;
            this.length++;

        }
    }

    include(value) {
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
    toString() {
        let nodeString = "";
        if (this.head != null) {
            let current = this.head;
            while (current != null) {
                nodeString = nodeString + `{ ${current.value} } -> `;
                current = current.next;
            } nodeString = nodeString + "NULL";
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
            this.length;

        } else {
            while (current.next != null) {
                current = current.next;
            } current.next = node;
            this.length;

        }

    }

    insertBefore(previousValue, insertedValue) {
        const node = new Node(insertedValue);
        let current = this.head;
        while (current.next != null) {
            current = current.next;
            if (current.next.value == previousValue) {
                this.length++;
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
                this.length++;
                node.next = current.next;
                current.next = node;
                return null;
            }
        }


    }

    Kth(k) {
        let current = this.head;
        let LLlength = 0;
        while (current != null) {
            current = current.next;
            LLlength++;
        }
        if (k < 0 || k > LLlength) {
            return 'exception';
        } else {
            LLlength = LLlength - 1 - k;
            current = this.head;
            while (LLlength > 0) {
                current = current.next;
                LLlength--;
            }
            return current.value;
        }

    }

    zipLists(list1, list2) {
        let current1 = list1.head;
        let current2 = list2.head;
        while (list2.head != null && current1 != null) {
            list2.head = list2.head.next;
            current2.next = current1.next;
            current1.next = current2;
            current2 = list2.head;
            current1 = current1.next.next;
            this.length++;
        }
        while (list2.head != null) { list1.append(list2.head.value); list2.head = list2.head.next; }
        this.length++;
        return list1.toString();
    }


       
}
// head->[t]->[a]->[c]->[o]->[c]->[a]->[t]

module.exports = LinkedList;
