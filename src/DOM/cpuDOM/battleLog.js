// battle log tells player what square they picked
function battleLog() {
  const cont = document.querySelectorAll('.side.instructions');
  
  const battleCont = document.createElement('div');
  battleCont.classList.add('battle-cont');
  
  const title = document.createElement('div');
  title.classList.add('battle-title');
  
  const log = document.createElement('div');
  log.classList.add('battle-log');
  const logtxt1 = document.createElement('div');
  logtxt1.classList.add('log-txt');
  const logtxt2 = document.createElement('div');
  logtxt2.classList.add('log-txt');
  log.append(logtxt1, logtxt2);
  battleCont.append(title, log);
  
  cont[1].appendChild(battleCont);
}

export default battleLog;
