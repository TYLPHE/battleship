function verifyPos(activeShip, obj) {
  const shipObj = obj[activeShip];
  const ship = document.querySelector(`.${activeShip}`);
  if (shipObj.length === shipObj.position.length) {
    ship.style.backgroundColor = 'transparent';
  }
  if (shipObj.length !== shipObj.position.length) { 
    shipObj.position = [];
    ship.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
  }
}

export default verifyPos;
