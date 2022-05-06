'user strict';
const insertionSort=require('../insertion-sort');
describe('insertionSort',()=>{
    it('should not sorted  array',()=>{
        expect(insertionSort([3,1,2,5,4,6,8,7,10,9])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    })
    it('testing nearly sorted array',()=>{
        expect(insertionSort([1,2,3,4,5,6,7,8,10,9])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    })
    it('testing reverssed array',()=>{
        expect(insertionSort([10,9,8,7,6,5,4,3,2,1])).toEqual([1,2,3,4,5,6,7,8,9,10]);
    })
    it('testing few uniques array',()=>{
        expect(insertionSort([1,2,2,4,4,3,3,5,5,1])).toEqual([1,1,2,2,3,3,4,4,5,5]);
    })
})