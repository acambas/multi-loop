export const extractAndValidateArrayArg = args => {
  const arrays = args.slice(0, args.length - 1)

  arrays.forEach((item, index) => {
    if (!Array.isArray(item)) {
      throw new Error(`Argument number ${index} is not an array`)
    }
  })
  arrays.reduce((acc, next) => {
    if (next.length !== acc) {
      throw new Error('The arrays are different lengths')
    }
    return next.length
  }, arrays[0].length)
  return arrays
}

export const extractAndValidateFuncArg = args => {
  const forEachFunc = args[args.length - 1]
  if (typeof forEachFunc !== 'function') {
    throw new Error('The last argument is not a function')
  }
  return forEachFunc
}
