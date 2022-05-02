// battle log tells player what square they picked

const shipLengths = {
  cpucarrier: 5,
  cpubattleship: 4,
  cpucruiser: 3,
  cpusubmarine: 3,
  cpudestroyer: 2,
}
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

  const cpuShipsTitle = document.createElement('div');
  cpuShipsTitle.classList.add('cpu-ships-title');
  cpuShipsTitle.textContent = 'CPU Ships';

  const storageCont = document.createElement('div');
  storageCont.classList.add('storage-container', 'cpu-grave-cont');


  const storageLeft = document.createElement('div');
  storageLeft.classList.add('ship-storage-left', 'cpu-graveyard');
  const storageRight = document.createElement('div');
  storageRight.classList.add('ship-storage-right', 'cpu-graveyard');
  
  storageCont.append(storageLeft, storageRight);
  cont[0].append(cpuShipsTitle, storageCont);

  for (let key in shipLengths) {
    const ship = document.createElement('div');
    ship.classList.add(key);
    for (let i = 0; i < shipLengths[key]; i += 1) {
      const square = document.createElement('div');
      square.classList.add('ship-square');
      ship.appendChild(square);
    }
    if (key === 'cpucarrier' || key === 'cpucruiser') {
      storageRight.appendChild(ship);
    } else {
      storageLeft.appendChild(ship);
    }
  }

}

export default battleLog;
