// add fire button
import cpuLogic from '../../cpu/cpuLogic';
import hitStatus from '../../gameLogic/hitStatus';
import registerHit from '../../gameLogic/registerHit';
import sendLog from '../../gameLogic/sendLog';

function fireBtn(obj) {
  const cont = document.querySelectorAll('.side.instructions');

  const fireCont = document.createElement('div');
  fireCont.classList.add('fire-cont')
  const fireBtn = document.createElement('button');
  fireBtn.classList.add('fire-button');
  const firetxt1 = document.createElement('div');
  firetxt1.classList.add('fire-txt');
  firetxt1.textContent = 'FIRE'
  const firetxt2 = document.createElement('div');
  firetxt2.classList.add('fire-txt');
  fireBtn.append(firetxt1, firetxt2);
  fireCont.appendChild(fireBtn);
  cont[1].appendChild(fireCont);
  
  fireBtn.addEventListener('mousedown', () => {
    let response = hitStatus(obj, 'player');
    if (response) {
      sendLog(response);
      if (response.status === 'hit!') {
        registerHit(obj, response, 'cpu');
      }
      // add indicator to show where to place marker
      // 'dotted' is removed in addMarkers.js
      let markSquare = document.querySelector(`#${response.shot}`);
      markSquare.classList.add('dotted');
    }


    // test cpu logic when pressing fire btn
    // cpuLogic(obj);

  });
}

export default fireBtn;
