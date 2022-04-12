import cpu from '../../cpu/01.cpu';
import validationMsg from '../../data/validationMsg';
import errorMessage from '../ship/errorMessage';

function startBtnLogic(obj, mode) {
  shipInsert(obj);
  removeShips(obj);
  errorMessage(validationMsg(obj));
  const errorWindow = document.querySelector('.message-window');
  if (!errorWindow) {
    const startCont = document.querySelector('.start-cont');
    startCont.remove();
    if (mode === 'cpu') {
      cpu();
      return true;
    }
  }
}

// snaps dragged ships into ocean
function shipInsert(obj) {
  for (const key in obj) {
    if (obj[key].position.length) {
      for (let i = 0; i < obj[key].position.length; i += 1) {
        const div = document.createElement('div');
        div.classList.add('on-water', `${key}-sailed`);
        const ocean = document.querySelector(`.ocean.${obj[key].position[i]}`);
        if (ocean.childNodes.length === 0) {
          ocean.appendChild(div);
        }
      }
    }
  }
}

function removeShips(obj) {
  for (let key in obj) {
    const markedDiv = document.querySelector(`.${key}-sailed`);
    if (markedDiv) {
      let drag = document.querySelector(`.${key}`);
      if (drag) {
        drag.remove();
      }
    }
  }
}

export default startBtnLogic;
