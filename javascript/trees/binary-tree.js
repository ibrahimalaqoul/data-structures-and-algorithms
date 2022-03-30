'use strict'
const node = require('./node')
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }

    preOrder() {
        let arr = [];
        const recTraverse = (Node) => {
            arr.push(Node.value);
            if (Node.left != null) {
                recTraverse(Node.left);
            }
            if (Node.right != null) {
                recTraverse(Node.right);
            }
        }
        recTraverse(this.root)
        return arr;
    }
    inOrder() {
        let arr = [];
        const recTraverse = (Node) => {
            if (Node.left != null) {
                recTraverse(Node.left);
            }
            arr.push(Node.value);
            if (Node.right != null) {
                recTraverse(Node.right);
            }
        }
        recTraverse(this.root)
        return arr;
    }
    postOrder() {
        let arr = [];
        const recTraverse = (Node) => {
            if (Node.left != null) {
                recTraverse(Node.left);
            }
            if (Node.right != null) {
                recTraverse(Node.right);
            }
            arr.push(Node.value);

        }
        recTraverse(this.root)
        return arr;
    }
    Max(){
        let arr = this.preOrder();
        let max = 0;
     for (let i = 0; i < arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
     }
     return max;
    }
}

class BST extends BinaryTree {
    constructor(root = null) {
        super();
    }

    add(value) {
        const Node = new node(value);
        if (this.root === null) {
            this.root = Node;
            return this;
        }
        let current = this.root;
            while (current) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = Node;
                    return this;
                }
                current = current.left;

            }
            else {
                if (current.right === null) {
                    current.right = Node;
                    return this;
                }
                current = current.right;
            }
        }

    }
    contains(value) {
        if (this.root === null) {
            return "exception the tree is empty";
        }
        let current = this.root;
        while(current){
            if (current.value === value) {
                return true;
            } 
            if (value < current.value) {
                current = current.left;
            }
            
            if (value > current.value) {
                    current = current.right;
            }
           
        }
        return false
    }
    
}
module.exports = {
    BT: BinaryTree,
    BST : BST,
};