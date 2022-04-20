import cpuShipPlacement from "./placement/cpuPlacement";
import targetingMode from "../DOM/cpuDOM/targetingMode";
import battleLog from "../DOM/cpuDOM/battleLog";
import fireBtn from "../DOM/cpuDOM/fireBtn";

function cpu(ships) {
  cpuShipPlacement(ships);
  targetingMode(ships);
  battleLog();
  fireBtn(ships);
  
  // display cpu position on board
  for (let key in ships.p2) {
    for (let i = 0; i < ships.p2[key].position.length; i += 1) {
      const square = document.querySelector(`.${ships.p2[key].position[i]}`);
      square.classList.add(`cpu-${key}`);
    }
  }

  /* Logic
   * user selects a square and presses fire button
   * hitstatus() checks if hit, returns hit or miss
   * if the user hits, then registerHit()
   * checkWin() if no win, cpu's turn
   * cpu choose random square
   * hitStatus()
   * if cpu hits, then registerHit()
   * checkWin() if not win, player's turn
   * --- below is uncoded ---
   */
}

export default cpu;
