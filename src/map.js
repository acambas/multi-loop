import {
  extractAndValidateArrayArg,
  extractAndValidateFuncArg,
} from './validation'

import multiArrayForEach from './forEach'

export default (...args) => {
  const iterFunc = extractAndValidateFuncArg(args)
  const arrays = extractAndValidateArrayArg(args)
  const res = []

  multiArrayForEach(...arrays, (...itemArgs) => {
    res.push(iterFunc(...itemArgs))
  })
  return res
}
