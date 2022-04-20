// chooses a random square and returns a string coordinate
// ex. 'aone' or 'jten'

import alphaConvert from "../data/alphaConvert";
import numConvert from "../data/numConvert";

function randomSquare() {
  let coordinates = '';
  const random1 = Number.parseInt(Math.random() * 10 + 1);
  const random2 = Number.parseInt(Math.random() * 10 + 1)
  coordinates += alphaConvert(random1);
  coordinates += numConvert(random2)
  return coordinates;
}

export default randomSquare;
