// chooses a random square and returns a string coordinate
// ex. 'aone' or 'jten'
// cpuShotList ensures randomSquare doesnt select same square twice;
import alphaConvert from "../data/alphaConvert";
import numConvert from "../data/numConvert";
import cpuShotList from "../data/cpuShotList";

function randomSquare(mode = null) {
  let coordinates = '';
  let random1 = Number.parseInt(Math.random() * 10 + 1);
  let random2 = Number.parseInt(Math.random() * 10 + 1)
  coordinates += alphaConvert(random1);
  coordinates += numConvert(random2);
  if (mode === 'shot') {
    if (cpuShotList.length > 99) throw console.error('No more squares');
    let match = cpuShotList.filter((square) => square === coordinates);
    if (match.length === 0) {
      cpuShotList.push(coordinates);
      return coordinates;
    } else {
      return coordinates = randomSquare(mode)
    }
  }
  return coordinates;
}

export default randomSquare;
