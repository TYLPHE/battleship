import cpuShipPlacement from "./placement/cpuPlacement";
import targetingMode from "../DOM/cpuDOM/targetingMode";
import battleLog from "../DOM/cpuDOM/battleLog";
import fireBtn from "../DOM/cpuDOM/fireBtn";
import cpuLogic from './cpuLogic';

function cpu(ships) {
  cpuShipPlacement(ships);
  targetingMode(ships);
  battleLog();
  fireBtn(ships);
  // cpuLogic(playerMove);
  // display cpu position on board
  for (let key in ships.p2) {
    for (let i = 0; i < ships.p2[key].position.length; i += 1) {
      const square = document.querySelector(`.${ships.p2[key].position[i]}`);
      square.classList.add(`cpu-${key}`);
    }
  }
}

export default cpu;
