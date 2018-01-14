import { mlForEach, mlMap } from '../index'

test('run multi map', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [2, 3, 4]
  const res = mlMap(arr1, arr2, (item1, item2, index) => {
    return item1 + item2 + index
  })
  expect(res).toEqual([3, 6, 9])
})

test('run multi for each', () => {
  const arr1 = [1, 2, 3]
  const arr2 = [2, 3, 4]
  const res = []
  mlForEach(arr1, arr2, (item1, item2, index) => {
    res.push(item1 + item2 + index)
  })
  expect(res).toEqual([3, 6, 9])
})

test('fail validation when arrays are not the same size', () => {
  try {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3]
    const res = []
    mlForEach(arr1, arr2, (item1, item2, index) => {
      res.push(item1 + item2 + index)
    })
  } catch (error) {
    expect(error.toString()).toEqual('Error: The arrays are different lengths')
  }
})

test('fail validation when arrays are not the same size', () => {
  try {
    const arr1 = '123'
    const arr2 = [2, 3, 4]
    const res = []
    mlForEach(arr1, arr2, (item1, item2, index) => {
      res.push(item1 + item2 + index)
    })
  } catch (error) {
    expect(error.toString()).toEqual('Error: Argument number 0 is not an array')
  }
})

test('fail validation when last argument is not a function', () => {
  try {
    const arr1 = [1, 2, 3]
    const arr2 = [2, 3]
    mlForEach(arr1, arr2, 'test')
  } catch (error) {
    expect(error.toString()).toEqual(
      'Error: The last argument is not a function'
    )
  }
})
