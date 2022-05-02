import cpu from '../../cpu/cpu';
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
      // cpu already placed ships start the cpu game from here.
      cpu(obj);
      return true;
    }
  }
}

// snaps dragged ships into ocean
function shipInsert(obj) {
  console.log(obj)
  for (const key in obj.p1) {
    if (obj.p1[key].position.length) {
      for (let i = 0; i < obj.p1[key].position.length; i += 1) {
        const div = document.createElement('div');
        div.classList.add('on-water', `${key}-sailed`);
        const ocean = document.querySelector(`.ocean.${obj.p1[key].position[i]}`);
        if (ocean.childNodes.length === 0) {
          ocean.appendChild(div);
        }
      }
    }
  }
}

function removeShips(obj) {
  for (let key in obj.p1) {
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
