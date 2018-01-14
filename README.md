# multi-loop


[![CircleCI](https://circleci.com/gh/acambas/multi-loop.svg?style=svg)](https://circleci.com/gh/acambas/multi-loop)

multi-loop is a small library with helper functions for looping over several arrays of same size

ES6 brought us great tool for iterating over an array, like 

- For Each array function

```javascript
  const foo = ['a', 'b', 'c']
  foo.forEach((item, index) => {
    console.log(item, index)
  });
  /* 
    This will print
    a 0
    b 1
    c 2
  */
```

- Map array function
```javascript
  const foo = [1, 2, 3]
  const res = foo.map(item => {
    return item + 1
  })
  console.log(res)
  /* 
    This will print
    [ 2, 3, 4 ]
  */
```
Great thing about them is that you don't have to rely on the for or while loops, you don't need to check for the length of the array and they fit lot better if you prefer functional style of programing.

But in some cases if you want to iterate over multiple arrays of same size you can't do it with previous method without relaying on iterators

This library brings helper functions that keep abstract that logic and provide cleaner API for handling these scenarios

Currently implemented functions are
- Map

```javascript
import ml from 'multi-loop'

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const res = ml.mlMap(arr1, arr2, (item1, item2, index) => {
  return item1 + item2 + index
})

console.log(res)
  /* 
    This will print
    [ 5, 8, 11]
  */
```

- For Each

```javascript
import ml from 'multi-loop'

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

ml.mlForEach(arr1, arr2, (item1, item2, index) => {
  console.log(item1, item2, index)
})

console.log(res)
  /* 
    This will print
    1 4 0
    2 5 1
    3 6 2
  */
```

