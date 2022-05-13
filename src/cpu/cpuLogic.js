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
import huntMode from '../cpu/huntMode';
import shipSunk from "./shipSunk";
import cpuShotList from "../data/cpuShotList";
import endGame from '../gameLogic/endGame';
import gameStates from '../data/gameStates';

function cpuLogic(obj) {
  let winStatus = checkWin(obj);
  if (!winStatus) {
    let square;
    if (gameStates.cpuMode[0] === 'search') {
      square = randomSquare('shot');
    }
    if (gameStates.cpuMode[0] === 'hunt') {
      square = huntMode(obj);
      cpuShotList.push(square);
    }
    const cpuStatus = hitStatus(obj, 'cpu', square);
    markBoard(cpuStatus);

    if (cpuStatus.status === 'hit!') {
      registerHit(obj, cpuStatus, 'player');
      gameStates.cpuMode.pop();
      gameStates.cpuMode.push('hunt');
      // console.log('hunting...');
      shipSunk(obj, cpuStatus.ship, 'player');
      winStatus = checkWin(obj);
      // console.log('checkwin: ', winStatus)
      if (winStatus) {
        // console.log('CPU wins!');
        endGame(obj);
        return;
      }
    }
  }
  if (winStatus) {
    // console.log('player wins!');
    endGame(obj)
  }
}

export default cpuLogic;
