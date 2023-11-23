const { mysolution } = require('./unDuplicateStringUtility');

describe('check first unduplicate charactor in string',()=> {
    it('should return d for string abacabadabacaba',()=> {
        const res = mysolution('abacabadabacaba')
        expect(res).toBe('d')
    })

    it('should return p for string programming',()=> {
        const res = mysolution('programming')
        expect(res).toBe('p')
    })

    it('should return _ for string aabbccdd',()=> {
        const res = mysolution('aabbccdd')
        expect(res).toBe('_')
    })
})