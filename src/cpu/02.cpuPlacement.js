import randomDirection from "./03.randomDirection";
import randomSquare from "./03.randomSquare";
import doesItFit from './03.doesItFit';
import doesItOverlap from './03.doesItOverlap';
import addCpuPos from './03.addCpuPos';
import whichShip from './03.whichShip';

function cpuShipPlacement(obj, counter = 0, dir, square) {
  counter += 1;
  //check which ships already placed
  const ship = whichShip(obj);
  if (ship === 'placed') {
    return;
  } else {
    const ref = ['up', 'down', 'left', 'right', 'up'];
    for (let key in obj.p1) {
      if (key === ship) {
        if (counter <= 4) {
          let newSquare = randomSquare();
          cpuShipPlacement(obj, counter, dir, newSquare);
        }
        square = randomSquare();
        dir = randomDirection();
        const fit = doesItFit(square, dir, key);
        // const overlap = doesItOverlap(obj, key, square, dir);
        if (fit === 'pass') {
          addCpuPos(square, dir);
        } else {
          // choose next direction, then assess positions
          let newDir;
          for (let i = 0; i < ref.length; i += 1) {
            if (ref[i] === dir) {
              newDir = ref[i + 1];
              cpuShipPlacement(obj, counter, newDir);
            }
          }
        }
      }
    }
  }
}

export default cpuShipPlacement;
