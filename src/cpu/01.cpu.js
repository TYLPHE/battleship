import cpuShipPlacement from "./02.cpuPlacement";
import targetingMode from './02.targetingMode';

function cpu(ships) {
  cpuShipPlacement(ships);
  targetingMode(ships);

  // display cpu position on board
  for (let key in ships.p2) {
    for (let i = 0; i < ships.p2[key].position.length; i += 1) {
      const square = document.querySelector(`.${ships.p2[key].position[i]}`);
      square.classList.add(`cpu-${key}`);
    }
  }

}

export default cpu;
