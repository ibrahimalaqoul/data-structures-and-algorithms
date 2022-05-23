const leftJoin = require('./hashmap-left-join.js');
const hash = require('../hashTables.js');
describe('leftJoin', () => {
    const hashmap1 = new hash();
    const hashmap2 = new hash();
it('should return an array', () => {
expect(leftJoin(hashmap1,hashmap2)).toEqual("One of the hash tables is empty");
});
it('should return a new  Left joined hash map', () => {
    let hashmap1 = new hash(10);
hashmap1.set('fond', 'enamored');
hashmap1.set('wrath', 'anger');
hashmap1.set('diligent', 'employed');
hashmap1.set('outfit', 'garb');
hashmap1.set('guide', 'usher');
let hashmap2 = new hash(10);
hashmap2.set('fond', 'averse');
hashmap2.set('wrath', 'delight');
hashmap2.set('guide', 'follow');
hashmap2.set('flow', 'jam');
hashmap2.set('kind', 'merciful');
expect(leftJoin(hashmap1,hashmap2)).toEqual(
    [
    [ 'wrath', 'anger', 'delight' ],
    [ 'diligent', 'employed', null ],
    [ 'outfit', 'garb', null ],
    [ 'guide', 'usher', 'follow' ],
    [ 'fond', 'enamored', 'averse' ]
    ]
  );
})
})
