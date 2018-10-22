# Recursion

Recursion crops up repeatedly both in web development and in computer
science in general. It's used to traverse more complex data structures
such as trees. The DOM, for example, is a classic tree structure.

Often times, a recursive solution to a problem is more elegant than
an iterative solution, and you may very well be asked to solve a 
problem in a tech interview that requires a recursive approach. 

## Objectives

1. Get used to recursion! And it takes a bit of getting used to but once  you understand the basic patterns and you start to develop a mindset for looking for the recursive solution, it becomes more and more natural.
2. Use the built-in debugging tools that are available to you in VS Code (breakpoints, debugger statement) to step through your code and see where it goes wrong.
3. Continue to use TDD to make sure we are writing quality code

## Core Tasks (AKA contrived uses of recursion!)
#### (always use recursion even if the problem lends itself to a good iterative solution)

1. Implement the factorial function
2. Implement a function that sums the integers 1 through n;
3. Implement a function that counts the number of white spaces in a string
4. Implement a function that works out whether a string is a palindrome
5. Implement a function that sums the digits of a number until only one digit remains. 
 E.g.
 ```javascript
 sumDigits(11) --> 2
 // 1 + 1 = 2
 sumDigits(99) --> 9 
 // 9 + 9 = 18, 1 + 8 = 9
 ```
6. Implement a function that reverses a string
7. Count the number of zeros in an array of integers
Eg.
```javascript
countZeros([1]) --> 0
countZeros([0,100]) --> 3
```

8. Find the maximum element in an array of integers
9. Implement the fibonacci function (n.b. You are not expected to come up with the fibonnaci formula yourself, just to implement it in JavaScript).  
In this problem the fibonacci sequence is as follows: 0, 1, 1, 2, 3, 5, 8,...

E.g
```javascript
fib(1) --> 0
fib(2) --> 1
fib(7) --> 8
```


## Advanced (AKA proper uses of recursion)

10. Implement your own version of the [deep-freeze function](https://www.npmjs.com/package/deep-freeze), which takes an object (or an array) and freezes it and all of its child array/objects, meaning none of them can be mutated. 

11. Implement a [JSON.stringify function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

12. Write a function `analyzeArray` that takes a string and an arbitrarily 
complex nested array and console.logs the value of each array element on 
a separate line. The value of each line should be preceded by the string 
and numbers indicating the index path to each element. You 
can assume that the array contains only strings and other nested array.

e.g. 

```javascript
const arr = ['carrot', ['car','boat','plane'], 'turtle', ['house']]; 
analyzeArray('jimbo', arr);
```

should console.log:

```javascript
jimbo.0:  carrot
jimbo.1.0: car
jimbo.1.1 : boat
jimbo.1.2: plane
jimbo.2: turtle
jimbo.3.0: house
```

13. Re-implement javascript's reduce using recursion. It should take 3 arguments, with first being the array you are calling your version of reduce on. 

### *Very* Advanced

14. Find the most nested object or array in a nested object or array. It should return the result in an array. If there are multiple objects/arrays nested at the same depth, it should return an array of all of them.
HINT: you may want to give your function more than one parameter.

```js

findMostNested([]) // []
findMostNested([]) // [{}];
findMostNested({a: 'hello'}) // [{a: 'hello}]
findMostNested({a: {b: 'hi'}, c: {d: 'bye'}, e: 1}) // [{b:'hi'}, {d: 'bye'}]
const hell = {
  1: {
    2: {
      3: {
        4: {
          a: 'found me!'
        }
      }
    }
  }
}
findMostNested(hell) // [{a: 'found me!'}]
```

16. Re-implement the browser function [getElementsByClassName](https://developer.mozilla.org/en/docs/Web/API/Document/getElementsByClassName) (rename it so it doesn't clash)



## Tips

### Exercise 10

You may wish to read up more on [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to understand how it works shallowly on objects and arrays.

### Exercise 11

Just do it step by step, using TDD. Look into what constitutes acceptable [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
and start off testing the simplest JSON object you can think of and build from there.

### Exercise 14

Look into [Document.body](https://developer.mozilla.org/en-US/docs/Web/API/Document/body),
[Node.childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) (which
returns a list of type [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList))
& [Element.classList](https://developer.mozilla.org/en/docs/Web/API/Element/classList). You will need to find a library such as [JSDom](https://github.com/tmpvar/jsdom) that will allow you to load HTML into Node in order to work with it.
