'use strict';
const Stack = require('../Stack');


describe('STACK TEST',()=>{
    it('testing if the stack is created',()=>{
        const newStack = new Stack();
        expect(newStack).toBeDefined();
        expect(newStack.top).toBeNull();
    })
    it('testing push method',()=>{
        const newStack = new Stack();
        newStack.push(1)
        newStack.push(2)
        newStack.push(3)
        expect(newStack.top.value).toEqual(3);
        expect(newStack.top.next.value).toBe(2);
    })
    it('testing pop method',()=>{
        const newStack = new Stack();
        newStack.push(3)
        newStack.push(4)
        newStack.push(5)
        expect(newStack.pop()).toEqual(5);
        expect(newStack.top.value).toBe(4);
    })

    it('testing peak method',()=>{
        const newStack = new Stack();
        const newStack2 = new Stack();
        newStack.push(3)
        newStack.push(4)
        expect(newStack.peek().value).toBe(4)
        expect(newStack2.peek()).toBe("exception")

    })

    it('testing isEmpty method',()=>{
        const newStack = new Stack();
        const newStack2 = new Stack();
        newStack.push(3)
        newStack.push(4)

        expect(newStack.isEmpty()).toBeFalsy();
        expect(newStack2.isEmpty()).toBeTruthy();

    })
})