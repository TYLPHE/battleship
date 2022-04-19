import randomDirection from "./03.randomDirection";
import randomSquare from "../03.randomSquare";
import doesItFit from './03.doesItFit';
import addCpuPos from "./03.addCpuPos";
import whichShip from './03.whichShip';

function cpuShipPlacement(obj, counter = 0, dir, square) {
  counter += 1;
  //check which ships already placed
  let ship = whichShip(obj);
  
  if (ship === 'filled') {
    // console.log(obj.p2);
    return;
  }
  for (let key in obj.p2) {
    if (key === ship) {
      if(!square) {
        square = randomSquare();
      }
      if (!dir || counter > 3) {
        square = randomSquare();
        dir = randomDirection();
      }
      let fit = doesItFit(square, dir, ship, obj);
      // console.log('square:', square, '| dir:', dir, '| fit: ', fit);

      if (fit !== 'pass') {
        // choose next direction, then assess positions
        const ref = ['up', 'down', 'left', 'right', 'up'];
        for (let i = 0; i < ref.length; i += 1) {
          if (ref[i] === dir) {
            const newDir = ref[i + 1];
            // console.log('newDir: ', newDir);
            cpuShipPlacement(obj, counter, newDir, square);
            return;
          }
        }
      } else {
        // console.log('addCpuPos(): ',square, dir, ship)
        addCpuPos(square, dir, ship, obj);
      }
    }
  }
  cpuShipPlacement(obj);
}

export default cpuShipPlacement;
