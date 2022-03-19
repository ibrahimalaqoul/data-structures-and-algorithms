'use strict';

const stackQueue = require('../stack-queue-pseudo/stack-queue-pseudo');

describe('testing the pseudoQueue class',()=>{
    const psuedoQueueStack = new stackQueue();
    it('testing the new instace of stackQueue',()=>{
        expect(psuedoQueueStack).toBeInstanceOf(stackQueue);

    })
    it('testing queue method',()=>{
        psuedoQueueStack.enqueue('1');
        psuedoQueueStack.enqueue('2');
        psuedoQueueStack.enqueue('3');
        psuedoQueueStack.enqueue('4');
        console.log(psuedoQueueStack.stackOne);
        expect(psuedoQueueStack.stackOne.top.value).toBe('4'); 
        expect(psuedoQueueStack.stackTwo.top).toBeNull();
        
    })
    it('testing queue method',()=>{
            psuedoQueueStack.dequeue();
            psuedoQueueStack.dequeue();
            psuedoQueueStack.dequeue();
            psuedoQueueStack.dequeue();
            console.log(psuedoQueueStack.stackTwo);
            expect(psuedoQueueStack.stackTwo.top.value).toBe('1'); 
            expect(psuedoQueueStack.stackOne.isEmpty).toBeTruthy; 
            
        })
})
