'use strict';
const HashTable = require('./hashTables');

describe('HashTable', () => {
    it('should create a hash table', () => {
        const hashTable = new HashTable(10);
        expect(hashTable).toBeInstanceOf(HashTable);
    })
    it ('should hash a key', () => {
        const hashTable = new HashTable(10);
        expect(hashTable.hash('ibrahim')).toEqual(8);
    })
    it ('Retrieving based on a key returns the value stored', () => {
        const hashTable = new HashTable(10);
        hashTable.set('ibrahim', 'good learner');
        expect(hashTable.get('ibrahim')).toBe('good learner')
    })
    it ('Successfully returns null for a key that does not exist in the hashtable', () => {
        const hashTable = new HashTable(10);
        expect(hashTable.get('ibrahim')).toBe(null)
    })
    it('Successfully returns a list of all unique keys that exist in the hashtable',()=>{
        const hashTable = new HashTable(10);
        hashTable.set('cat', 'sherry');
        hashTable.set('ibrahim', 'good learner');
        expect(hashTable.keys()).toEqual(['cat','ibrahim']);

    })
    it('testing contains ',()=>{
        const hashTable = new HashTable(10);
        hashTable.set('cat', 'sherry');
        expect(hashTable.get('cat','sherry')).toBe('sherry')
        expect(hashTable.contains('cat')).toBe(true);
    })
    it('Successfully handle a collision within the hashtable',()=>{
        const hashTable = new HashTable(10);
        hashTable.set('cat', 'sherry');
        hashTable.set('ibrahim', 'good learner');
        expect(hashTable.collisions('ibrahim')).toBe('ibrahim is in the hash table at index 8');
        expect(hashTable.collisions('cat')).toBe('cat is in the hash table at index 8');

    })
    it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
        const hashTable = new HashTable(10);
        hashTable.set('cat', 'sherry');
        hashTable.set('ibrahim', 'good learner');
        expect(hashTable.get('ibrahim')).toBe('good learner')
        expect(hashTable.get('cat','sherry')).toBe('sherry')


    })




});
