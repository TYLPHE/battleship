/* Logic
  * user selects a square and presses fire button > run cpuLogic()
  * hitstatus(obj, fromPlayer, cpuShot) checks if hit, returns hit or miss
  * if the user hits, then registerHit()
  *   hitStatus feeds registerHit(obj, hitStatus(), fromPlayer)
  * checkWin(obj) if no win, cpu's turn
  * cpu chooses randomSquare()
  * hitStatus()
  * if cpu hits, then registerHit()
  * checkWin() if not win, fromPlayer's turn
  */

import hitStatus from "../gameLogic/hitStatus";
import registerHit from '../gameLogic/registerHit';
import checkWin from '../gameLogic/checkWin';
import randomSquare from "../gameLogic/randomSquare";
import markBoard from "../DOM/cpuDOM/markBoard";
import cpuMode from '../cpu/cpuMode';
import huntMode from '../cpu/huntMode';
import shipSunk from "./shipSunk";
import cpuShotList from "../data/cpuShotList";
import endGame from '../gameLogic/endGame';

function cpuLogic(obj, fromPlayer) {
  const pStatus = hitStatus(obj, fromPlayer);
  if (pStatus) {
    registerHit(obj, pStatus, 'cpu');
  }

  let winStatus = checkWin(obj);
  if (!winStatus) {
    let square;
    if (cpuMode[0] === 'search') {
      square = randomSquare('shot');
    }
    if (cpuMode[0] === 'hunt') {
      square = huntMode(obj);
      cpuShotList.push(square);
    }
    const cpuStatus = hitStatus(obj, 'cpu', square);
    markBoard(cpuStatus);
    // TODO: mark board after cpu shoots
    if (cpuStatus.status === 'hit!') {
      registerHit(obj, cpuStatus, 'cpu');
      cpuMode.pop()
      cpuMode.push('hunt');
      console.log('hunting...');
      shipSunk(obj, cpuStatus.ship);
      winStatus = checkWin(obj);
      console.log('checkwin: ', winStatus)
      if (winStatus) {
        console.log('CPU wins!');
        endGame(obj);
      }
    }
  }
}
    // console.log('player turn');

export default cpuLogic;

