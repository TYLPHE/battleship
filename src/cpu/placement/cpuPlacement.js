import randomDirection from "./randomDirection";
import randomSquare from "../../gameLogic/randomSquare";
import doesItFit from './doesItFit';
import addCpuPos from "./addCpuPos";
import whichShip from './whichShip';

function cpuShipPlacement(obj, counter = 0, dir, square) {
  counter += 1;
  //check which ships already placed
  let ship = whichShip(obj);
  
  if (ship === 'filled') {
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

      if (fit !== 'pass') {
        const ref = ['up', 'down', 'left', 'right', 'up'];
        for (let i = 0; i < ref.length; i += 1) {
          if (ref[i] === dir) {
            const newDir = ref[i + 1];
            cpuShipPlacement(obj, counter, newDir, square);
            return;
          }
        }
      } else {
        addCpuPos(square, dir, ship, obj);
      }
    }
  }
  cpuShipPlacement(obj);
}

export default cpuShipPlacement;
