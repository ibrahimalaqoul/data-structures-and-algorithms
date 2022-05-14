'use strict';
const LinkedList = require('./linkedList');

class HashTable{
    constructor(size){
        this.size = size;
        this.buckets = new Array(size);
        this.length = 0;
    }
    hash(key){
    const result =  key.split('').reduce((hash, letter) => {
        return hash + letter.charCodeAt();
    },0)*599 % this.size;
    return result;
    }
    set(key, value){
        const index = this.hash(key);
        if(!this.buckets[index]){
            this.buckets[index] = new LinkedList();
        }
        let entry = {
            [key]:value
        }
        this.buckets[index].append(entry);
        this.length++;

    }
    get(key){
        const index = this.hash(key);
        if(!this.buckets[index]){
            return null;
        }
        let current = this.buckets[index].head;
        console.log(current);
        while(current){
                console.log(current.value[key]);
                console.log(index);

            if(current.value[key]){
                return current.value[key];
            }
            current = current.next;
        }
        return null;
    }
    contains(key){
        const index = this.hash(key);
        if(!this.buckets[index]){
            return false;
        }
        let current = this.buckets[index].head;
        while(current){
            if(current.value[key]){
                return true;
            }
            current = current.next;
        }
        return false;
    }
    keys(){
        const keys = [];
        this.buckets.forEach(element => {
            if(element){
                let current = element.head;
                while(current){
                    keys.push(Object.keys(current.value)[0]);
                    console.log('2222',(Object.keys(current.value)[0]));

                    current = current.next;
                }

            }
        });
        return keys;
    }
    collisions(key){
        if (this.contains(key)){
            return `${key} is in the hash table at index ${this.hash(key)}`;
        }
        return `${key} is not in the hash table`;
    }
    

}
const hashTable = new HashTable(10);
hashTable.set('cat', 'sherry');
hashTable.set('ibrahim', 'good learner');
hashTable.keys();



module.exports = HashTable;