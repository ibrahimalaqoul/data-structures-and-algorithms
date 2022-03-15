'use strict';

const Queue = require('../Queue');



describe('STACK TEST',()=>{
    it('testing if the Queue is created',()=>{
        const queue = new Queue();
        expect(queue).toBeDefined();
        expect(queue.front).toBeNull();
    })
    it('testing enqueue method',()=>{
        const queue = new Queue();
        queue.enqueue(1)//1,2,3,4,5
        queue.enqueue(2)
        queue.enqueue(3)
        expect(queue.front.value).toEqual(1);
        expect(queue.front.next.value).toBe(2);
    })

    it('testing dequeue method',()=>{
        const queue = new Queue();
        queue.enqueue(3)//3,4,5
        queue.enqueue(4)
        queue.enqueue(5)
        expect(queue.dequeue()).toEqual(3);
        expect(queue.front.value).toEqual(4)
    })

    it('testing peak method',()=>{
        const queue = new Queue();
        const queue2 = new Queue();
        queue.enqueue(3)
        queue.enqueue(4)//3,4
        expect(queue.peek().value).toBe(3)
        expect(queue2.peek()).toBe("exception")
    })

    it('testing isEmpty method',()=>{
        const queue = new Queue();
        const queue2 = new Queue();
        queue.enqueue(3)
        queue.enqueue(4)//3,4
        expect(queue.isEmpty()).toBeFalsy();
        expect(queue2.isEmpty()).toBeTruthy();

    })
})