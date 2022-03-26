const stackQueueBracketsfun = require('../stack-queue-brackets')

describe('testing',()=>{
    let str = "(fasnaf()kjf)"
    it('testing a right string',()=>{
        expect(stackQueueBracketsfun(str)).toBeTruthy();
    })
    it('testing if the sting is empty to return null',()=>{
        let str1 = ""
        expect(stackQueueBracketsfun(str1)).toBeNull();
    })

    it('testing wrong string',()=>{
        let str1 = "}{][)("
        expect(stackQueueBracketsfun(str1)).toBeFalsy();
    })
    it('testing closing brackets only',()=>{
        let str1 = "}])"
        expect(stackQueueBracketsfun(str1)).toBeFalsy();
    })
    it('testing openning brackets only ',()=>{
        let str1 = "([{"
        expect(stackQueueBracketsfun(str1)).toBeFalsy();
    })
})