import cpuShipPlacement from "./placement/cpuPlacement";
import targetingMode from "../DOM/cpuDOM/targetingMode";
import battleLog from "../DOM/cpuDOM/battleLog";
import fireBtn from "../DOM/cpuDOM/fireBtn";
import cpuLogic from './cpuLogic';

function cpu(ships) {
  targetingMode(ships);
  battleLog();
  fireBtn(ships);
  cpuShipPlacement(ships);

//   // display cpu position on board
//   for (let key in ships.p2) {
//     for (let i = 0; i < ships.p2[key].position.length; i += 1) {
//       let coord = ships.p2[key].position[i];
//       const square = document.querySelector(`.${coord}`);
//       square.classList.add(`cpu-${key}`);
//       console.log(square);
//     }
//   }
}

export default cpu;
