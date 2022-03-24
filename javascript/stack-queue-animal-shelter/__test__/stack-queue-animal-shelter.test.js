'use strict';
const {AnimalShelter} = require('../stack-queue-animal-shelter');
const {Cat} = require('../stack-queue-animal-shelter')
const {Dog} = require('../stack-queue-animal-shelter')

describe('Testing the stack-queue-animal-shelter classes',()=>{
    const newAnimal = new AnimalShelter();
    it('testing AnimalShelter class',()=>{
        expect(newAnimal).toBeInstanceOf(AnimalShelter);
        })

      it('testing enqueue method for Cat class',()=>{
        const newAnimal = new AnimalShelter();
         const newCat = new Cat("cat"); 
         newAnimal.enqueue(newCat);
        expect(newAnimal.queue.front.value.Name).toBe("cat") 
        expect(typeof newAnimal.dequeue("cat")).toEqual("object")
      })  
      it('testing enqueue method for dog class',()=>{
        const newAnimal = new AnimalShelter();
         const newDog = new Dog("Dog");
         newAnimal.enqueue(newDog);
         console.log(newAnimal.dequeue());
         expect(newAnimal.queue.front.value.Name).toBe("Dog")        
         expect(typeof newAnimal.dequeue("Dog")).toEqual("object")

      })
      it('testing null returning',()=>{
        const x = new AnimalShelter();
        const newOne = {Name : "donkey"};
        x.enqueue(newOne);
        expect( x.dequeue("donkey")).toEqual(null);
      })
      
})