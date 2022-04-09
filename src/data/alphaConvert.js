// alphabetical values
function alphaConvert(letter) {
  const alpha = [
    ['a', 1], 
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6], 
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10]
  ]
  for (const [key, value] of alpha) {
    if (typeof letter === 'string' && letter === key) {
      return value;
    }
    if (typeof letter === 'number' && letter === value) {
      return key;
    }
  }
}

export default alphaConvert
