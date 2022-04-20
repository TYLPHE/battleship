// add fire button
import hitStatus from '../../gameLogic/hitStatus';
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
  // firetxt2.textContent = 'MISSILE';
  fireBtn.append(firetxt1, firetxt2);
  fireCont.appendChild(fireBtn);
  cont[1].appendChild(fireCont);
  fireBtn.addEventListener('mousedown', () => {
    let response = hitStatus(obj, 'player');
    sendLog(response);
    return response;
  });
}

export default fireBtn;
