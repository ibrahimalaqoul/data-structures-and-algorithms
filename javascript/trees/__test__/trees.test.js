'use strict'
const { BT } = require('../binary-tree');
const node = require('../node');
const { BST } = require('../binary-tree');
const  KArrayTree  = require('../k-Ary-tree/K-Ary-tree');
const KNode = require('../k-Ary-tree/node');
let tree = null;
let binarySearchTree = null;
let kTree = null;
describe('testing BinaryTree', () => {
    beforeAll(() => {
        let first = new node(1);
        let second = new node(2);
        let third = new node(3);
        let fourth = new node(4);
        let fifth = new node(5);
        let sixth = new node(6);
        let seventh = new node(7);

        first.left = second;
        first.right = third;
        second.left = fourth;
        second.right = fifth;
        third.left = sixth;
        third.right = seventh

        tree = new BT(first);
    }

    )
    it('testing the root value', () => {
        expect(tree.root.value).toEqual(1)
    })
    it('testing the preOrder method', () => {
        let output = [1, 2, 4, 5, 3, 6, 7];
        expect(tree.preOrder()).toEqual(output)

    })
    it('testing the inOrder method', () => {
        let output = [4, 2, 5, 1, 6, 3, 7];
        expect(tree.inOrder()).toEqual(output)
    })
    it('testing the postOrder method', () => {
        let output = [4, 5, 2, 6, 7, 3, 1];
        expect(tree.postOrder()).toEqual(output)
    })
    it('testing the getMax method', () => {
        expect(tree.Max()).toEqual(7)
    })
    it('testing the BreadthiFrst method', () => {
        let output = [1, 2, 3, 4, 5, 6, 7];
        expect(tree.BreadthiFrst()).toEqual(output)
    })
})

describe('testing Binary search tree', () => {
    beforeAll(() => {

        binarySearchTree = new BST();
        binarySearchTree.add(100);
        binarySearchTree.add(60);
        binarySearchTree.add(150);
        binarySearchTree.add(50);
        binarySearchTree.add(80);
        binarySearchTree.add(140);
        binarySearchTree.add(160);


    }
    )
    it('testing the root value', () => {
        expect(binarySearchTree.root.value).toEqual(100)
    })
    it('testing the preOrder method', () => {
        let output = [100, 60, 50, 80, 150, 140, 160];
        expect(binarySearchTree.preOrder()).toEqual(output)

    })
    it('testing the inOrder method', () => {
        let output = [50, 60, 80, 100, 140, 150, 160];
        expect(binarySearchTree.inOrder()).toEqual(output)
    })
    it('testing the postOrder method', () => {
        let output = [50, 80, 60, 140, 160, 150, 100];
        expect(binarySearchTree.postOrder()).toEqual(output)
    })
    it('testing the contains method', () => {
        expect(binarySearchTree.contains(160)).toBe(true);
        expect(binarySearchTree.contains(90)).toBe(false);

    })

})

describe('testing K-Ary-tree ', () => {
    beforeAll(() => {
        let first = new KNode(1,4);
        let second = new KNode(2);
        let third = new KNode(3);
        let fourth = new KNode(4);
        let fifth = new KNode(5,2);
        let sixth = new KNode(6);
        let seventh = new KNode(7);
       first.children[0] = second;
       first.children[1] = third;
       first.children[2] = fourth;
       first.children[3] = fifth;
        fifth.children[0] = sixth;
        fifth.children[1] = seventh;
        kTree = new KArrayTree(first);
    }

    )
    it('testing the root value', () => {
        expect(kTree.root.value).toEqual(1)
    })



    it('testing the breadthiFrst method', () => {
        let output = [1,2,3,4,5,6,7];
        expect(kTree.breadthiFrst()).toEqual(output)
    })
    it('testing the fizzBuzzTree method', () => {
        let output = ['1','2','Fizz','4','Buzz','Fizz','7'];
        expect(kTree.fizzBuzzTree()).toEqual(output)
    } )
})
