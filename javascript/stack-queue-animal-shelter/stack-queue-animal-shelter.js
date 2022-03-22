'use strict';
const Queue = require('../stack-Queue/Queue')



class AnimalShelter{
    constructor(){
        this.queue=new Queue();
    }
    enqueue(AnimalObj){
        this.queue.enqueue(AnimalObj)
    }

    dequeue(value){
        if (this.queue.front.Name == value) {
        let removedAnimal =   this.queue.front.value;
            this.queue.dequeue();
        return removedAnimal;
        }
        else{
            return null;
        }
    }
    
}
class Cat extends AnimalShelter{
    constructor(name){
        super();
        this.Name = name;
    }
}
class Dog extends AnimalShelter{
    constructor(name){
        super();
        this.Name = name;
    }
}
module.exports ={
    AnimalShelter : AnimalShelter,
    Cat : Cat,
    Dog : Dog,
}