const reversStr = require ('../reverseString.js')
const sumDigit = require('../sum.js')

describe('reversStr',()=>{
    test('returns the same letter ',()=>{
     expect(reversStr("r")).toBe("r")
     expect(reversStr("hello")).toBe("olleh")
     expect(reversStr("ra")).toBe("ar")
     expect(reversStr("katherine rules")).toBe("selur enirehtak")
    })
})

    describe('sumDigits',()=>{
        test('return that digit',()=>{
         expect(sumDigit(1)).toBe(1)
        })
        test('return sum of two digits',()=>{
            expect(sumDigit(11)).toBe(2)
           })
           test.only('return sum of digits',()=>{
            expect(sumDigit(99)).toBe(9)
           })

})