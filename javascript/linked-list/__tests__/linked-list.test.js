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
  it('testing append method',()=>{
    const LL = new LinkedLilst() ;
    LL.append('A');
    LL.append('B');
    LL.append('C');
    expect(LL.head.value).toBe('A');
    expect(LL.head.next.value).toBe('B');
    expect(LL.head.next.next.value).toBe('C');
    expect(LL.head.next.next.next).toBeNull();
  })


  it('testing insertbefore  method',()=>{
    const LL = new LinkedLilst() ;
    LL.insert('D')
    LL.insert('C')
    LL.insert('B')
    LL.insert('A')
    LL.insertBefore('C','F');// A,B,F,C,D
    expect(LL.head.value).toBe('A');
    expect(LL.head.next.value).toBe('B');
    expect(LL.head.next.next.value).toBe('F');
    expect(LL.head.next.next.next.value).toBe('C');
    expect(LL.head.next.next.next.next.value).toBe('D');
    expect(LL.head.next.next.next.next.next).toBeNull();
  })
  it('testing insertAfter  method',()=>{
    const LL = new LinkedLilst() ;
    LL.insert('D')
    LL.insert('C')
    LL.insert('B')
    LL.insert('A')
    LL.insertAfter('C','F');// A,B,C,F,D
    expect(LL.head.value).toBe('A');
    expect(LL.head.next.value).toBe('B');
    expect(LL.head.next.next.value).toBe('C');
    expect(LL.head.next.next.next.value).toBe('F');
    expect(LL.head.next.next.next.next.value).toBe('D');
    expect(LL.head.next.next.next.next.next).toBeNull();
  })
  it('testing  the position of vaule',()=>{
    const LL = new LinkedLilst() ;
    LL.append(1);
    LL.append(2);
    LL.append(3);
    expect(LL.Kth(0)).toBe(3);
    expect(LL.Kth(1)).toBe(2);
    expect(LL.Kth(3)).toBe(1);  
    expect(LL.Kth(7)).toEqual('exception')
    expect(LL.Kth(-1)).toEqual('exception')

  })
  it("zipLists method ", () => {
    const ll1 = new LinkedLilst();
    const ll2 = new LinkedLilst();
    ll1.insert(1);
    ll1.insert(5);
    ll1.insert(3);
    ll2.insert(4);
    ll2.insert(5);
    ll2.insert(6);


  expect(ll1.zipLists(ll1,ll2)).toBe("{ 3 } -> { 6 } -> { 5 } -> { 5 } -> { 1 } -> { 4 } -> NULL")
})



});
