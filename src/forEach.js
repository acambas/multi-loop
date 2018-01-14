import {
  extractAndValidateArrayArg,
  extractAndValidateFuncArg,
} from './validation'

export default (...args) => {
  const iterFunc = extractAndValidateFuncArg(args)
  const arrays = extractAndValidateArrayArg(args)

  const iterationLength = arrays[0].length
  const numberOfArrays = arrays.length
  for (let i = 0; i < iterationLength; i += 1) {
    const items = []
    for (let j = 0; j < numberOfArrays; j += 1) {
      items.push(arrays[j][i])
    }
    iterFunc(...items, i)
  }
}
