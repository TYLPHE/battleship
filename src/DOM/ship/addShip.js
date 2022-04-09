import clickDrag from './clickDrag'

function addShip(ship) {
  for (const key in ship) {
    const shipClass = document.createElement('div');
    shipClass.classList.add(key);
    shipClass.addEventListener('mousedown', (e) => clickDrag(e, shipClass, ship));
    for (let i = 1; i <= ship[key].length; i += 1) {
      const square = document.createElement('div');
      square.classList.add('ship-square')
      square.id = `${key}-${i}`;
      square.textContent = ' ';

      shipClass.appendChild(square);
    }
    const shipStorageL = document.querySelector('.ship-storage-left');
    const shipStorageR = document.querySelector('.ship-storage-right');
    if (shipClass.className === 'battleship' ||
        shipClass.className === 'cruiser' ||
        shipClass.className === 'destroyer') {
      shipStorageL.appendChild(shipClass);
    } else {
      shipStorageR.appendChild(shipClass);
    }
  }
}

export default addShip;