// cpu shot at player. this function pulls out a marker from board
// and places it on the player's bottom half of the board

import insertMarker from "../markers/insertMarker";

function markBoard(cpuStatus) {
  const redMarker = document.querySelector('.red-peg');
  const whitemarker = document.querySelector('.white-peg');
  if (cpuStatus.status === 'miss!') {
    if (whitemarker) whitemarker.remove();
    insertMarker(`.${cpuStatus.shot}.ocean`, 'white-peg');
  }
  if (cpuStatus.status === 'hit!') {
    if (redMarker) redMarker.remove();
    insertMarker(`.${cpuStatus.shot}.ocean`, 'red-peg');
  }

}

export default markBoard;
