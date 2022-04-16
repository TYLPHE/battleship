// send selected position with 'hit' or 'miss'

import numConvert from "../data/numConvert";

function sendLog(/* object with 'shot' and 'status' keys */ obj) {
  const shot = obj.shot;
  const row = shot.substring(0, 1);
  const col = numConvert(shot.substring(1))
  const status = obj.status;

  const log = document.querySelectorAll(`.log-txt`);
  log[0].textContent = `${row}-${col}`;
  log[1].textContent = status;
}

export default sendLog;
