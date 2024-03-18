const reversStr = require ('../reverseString.js')
const sumDigit = require('../sum.js')
const fibonacci = require('../fibonacci.js')

describe('reversStr',()=>{
    test('returns the same letter ',()=>{
     expect(reversStr("r")).toBe("r")
     expect(reversStr("hello")).toBe("olleh")
     expect(reversStr("ra")).toBe("ar")
     expect(reversStr("katherine rules")).toBe("selur enirehtak")
    })
})

describe('sumDigits',()=>{
        test('If its only one digit, return that digit',()=>{
         expect(sumDigit(1)).toBe(1)
        })
        test('return sum of two digits',()=>{
            expect(sumDigit(11)).toBe(2)
        })
        test('return sum of more than one digit',()=>{
            expect(sumDigit(99)).toBe(9)
        })
        test('return sum of more than two digit',()=>{
            expect(sumDigit(555)).toBe(6)
        })
})

describe('fibonacci()',()=>{
    test('If passed 1 should return 0',()=>{
     expect(fibonacci(1)).toBe(0)
    })
    test('If passed 2 should return 1',()=>{
        expect(fibonacci(2)).toBe(1)
    })
    test('If passed 3 should return 1',()=>{
        expect(fibonacci(3)).toBe(1)
    })
    test('If passed a number greater than 3 should return the fibonacci number of the argument',()=>{
        expect(fibonacci(7)).toBe(8)
    })
    test.only('If passed a number greater than 3 should return the fibonacci number of the argument',()=>{
        expect(fibonacci(9)).toBe(21)
    })
    test.only('If passed a number greater than 3 should return the fibonacci number of the argument',()=>{
        expect(fibonacci(10)).toBe(34)
    })

})