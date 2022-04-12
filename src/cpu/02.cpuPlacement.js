import randomDirection from "./03.randomDirection";
import randomSquare from "./03.randomSquare";
import doesItFit from './03.doesItFit';
import doesItOverlap from './03.doesItOverlap';
import addCpuPos from './03.addCpuPos';

function cpuShipPlacement(obj) {
  for (let key in obj.p1) {
    const square = randomSquare();
    const dir = randomDirection();

    obj.p1[key].position.push(square);
    const fit = doesItFit(square, dir);
    const clearance = doesItOverlap(square, dir);
    if (fit && clearance) {
      addCpuPos(square, dir);
    }
    // push direction to object
    // 
    // console.log(obj.p1[key]);
  }
}

export default cpuShipPlacement;
