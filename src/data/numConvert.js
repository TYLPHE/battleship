// inputing a string will return a number value.
// inputing a number as a string will return the number equivalent
// this is to pinpoint specific squares on the board 

function numConvert(/* string or number */str) {
  const numPairs = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
  }
  for (let key in numPairs) {
    if (typeof str === 'string' && str === key) {
      return numPairs[key];
    }
    if (typeof str === 'number' && str === numPairs[key]) {
      return key;
    }
  }
}

export default numConvert;
