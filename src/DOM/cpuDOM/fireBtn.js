// add fire button

function fireBtn() {
  const cont = document.querySelectorAll('.side.instructions');

  const fireCont = document.createElement('div');
  fireCont.classList.add('fire-cont')
  const fireBtn = document.createElement('button');
  fireBtn.classList.add('fire-button');
  fireBtn.addEventListener('mousedown', () => {
    let response = hitStatus(ship);
    sendLog(response);
  });
  const firetxt1 = document.createElement('div');
  firetxt1.classList.add('fire-txt');
  firetxt1.textContent = 'FIRE'
  const firetxt2 = document.createElement('div');
  firetxt2.classList.add('fire-txt');
  // firetxt2.textContent = 'MISSILE';
  fireBtn.append(firetxt1, firetxt2);
  fireCont.appendChild(fireBtn);
  cont[1].appendChild(fireCont);
}

export default fireBtn;
