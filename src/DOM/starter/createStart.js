import startBtnLogic from "./startBtnLogic";

function createStart(div, obj) {
  console.log(obj)
  const startCont = document.createElement('div');
  startCont.classList.add('start-cont');
  const pvp = document.createElement('button');
  pvp.classList.add('start-button');
  pvp.textContent = '2 Players';
  pvp.addEventListener('click', () =>  startBtnLogic(obj));
  const pve = document.createElement('button');
  pve.classList.add('start-button');
  pve.textContent = 'Player vs CPU';
  pve.addEventListener('click', () =>  startBtnLogic(obj, 'cpu'));
  startCont.append(pvp, pve);
  div.appendChild(startCont);
}

export default createStart;
