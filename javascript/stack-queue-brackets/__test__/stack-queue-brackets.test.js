const stackQueueBracketsfun = require('../stack-queue-brackets')

describe('testing',()=>{
    let str = "(fasnaf()kjf)"
    it('testing create method',()=>{
        expect(stackQueueBracketsfun(str)).toBeTruthy();
    })
    it('testing create method',()=>{
        let str1 = ""
        expect(stackQueueBracketsfun(str1)).toBeNull();
    })

    it('testing create method',()=>{
        let str1 = "{"
        expect(stackQueueBracketsfun(str1)).toBeFalsy();
    })
})