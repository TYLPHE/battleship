/* Logic
  * user selects a square and presses fire button > run cpuLogic()
  * hitstatus() checks if hit, returns hit or miss
  * if the user hits, then registerHit()
  * checkWin() if no win, cpu's turn
  * cpu chooses randomSquare()
  * hitStatus()
  * if cpu hits, then registerHit()
  * checkWin() if not win, player's turn
  */

import hitStatus from "../gameLogic/hitStatus";
import registerHit from '../gameLogic/registerHit';
import checkWin from '../gameLogic/checkWin';
import randomSquare from "../gameLogic/randomSquare";

function cpuLogic(obj) {
  console.log(obj)
}

export default cpuLogic;
