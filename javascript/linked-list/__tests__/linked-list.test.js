'use strict';
// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Linked List', () => {

  it('testing creating LL', () => {
    const LL = new LinkedLilst() ;
    expect(LL).toBeDefined ();
    expect(LL.head).toBeNull();
  });
  it('testing node insertion to an empty LL',()=>{
    const LL = new LinkedLilst() ;
    LL.insert('A');
    expect(LL.head.value).toBe('A')
    expect(LL.head.next).toBeNull();
  })
  it('testing node insertion to not empty LL',()=>{
    const LL = new LinkedLilst() ;
    LL.insert('A');
    LL.insert('B');
    expect(LL.head.value).toBe('B')
    expect(LL.head.next.value).toBe('A')
    expect(LL.head.next.next).toBeNull();
  })
  it('include method test',()=>{
    const LL = new LinkedLilst() ;
    LL.insert('B')
    LL.insert('A');
    LL.include('A');
    LL.include('B');
    LL.include('c');//not exist.
    expect(LL.include('A')).toBeTruthy();
    expect(LL.include('B')).toBeTruthy();
    expect(LL.include('c')).toBeFalsy();
  })
  it ('testintg  toString method',()=>{
    const LL = new LinkedLilst() ;
    LL.insert('c');
    LL.insert('b');
    LL.insert('a');
    expect(LL.toString()).toBe("{ a } -> { b } -> { c } -> NULL");
  })
});
