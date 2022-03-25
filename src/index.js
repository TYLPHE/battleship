import './style.css'
// ship constructor
function ship(length) {
  return {
    length: length,
    hit: 0,
    sunk: false,
  }
}

const ships = {
  p1: {
    carrier: ship(5),
    battleship: ship(4),
    cruiser: ship(3),
    submarine: ship(3),
    destroyer: ship(2),
  },
  p2:{
    carrier: ship(5),
    battleship: ship(4),
    cruiser: ship(3),
    submarine: ship(3),
    destroyer: ship(2),
  },
}
// pickUp(ships);
// function pickUp({ p1: { carrier } }){
//   console.log(carrier);
// }

// place ships on gameboard
placeShip(ships)
function placeShip({ p1: ship }) {
  for (const key in ship) {
    console.log(ship[key]);
    const shipClass = document.createElement('div');
    shipClass.classList.add(key);
    for (let i = 1; i <= ship[key].length; i += 1) {
      const square = document.createElement('div');
      square.classList.add('ship-square')
      square.id = `${key}-${i}`;
      square.textContent = i;

      shipClass.appendChild(square);
    }
    const shipStorage = document.querySelector('.ship-storage');
    shipStorage.appendChild(shipClass);
  }
}


// cell highlighting to eaily identify row and column
highlighter();
function highlighter() {
  const targetSquare = document.querySelectorAll('.target.square');
  for (let i = 0; i < targetSquare.length; i += 1) {
    if(targetSquare[i].id) {
      // add and remove column background
      const column = targetSquare[i].id.slice(1);
      targetSquare[i].addEventListener('mouseover', () => {
        const div = document.querySelectorAll(`.target.${column}`);
        for (let i = 0; i < div.length; i += 1) {
          div[i].style.backgroundColor = '#90ee9050';
        }
      });
      targetSquare[i].addEventListener('mouseout', () => {
        const div = document.querySelectorAll(`.target.${column}`);
        for (let i = 0; i < div.length; i += 1) {
          div[i].style.backgroundColor = 'transparent';
        }
      });
  
      // and and remove row background
      const row = targetSquare[i].id.substring(0,1);
      targetSquare[i].addEventListener('mouseover', () => {
        const div = document.querySelectorAll(`.target.${row}`);
        for (let i = 0; i < div.length; i += 1) {
          div[i].style.backgroundColor = '#90ee9050';
        }
      });
      targetSquare[i].addEventListener('mouseout', () => {
        const div = document.querySelectorAll(`.target.${row}`);
        for (let i = 0; i < div.length; i += 1) {
          div[i].style.backgroundColor = 'transparent';
        }
      });
    }
  }
  
  const oceanSquare = document.querySelectorAll('.ocean.square');
  for (let i = 0; i < oceanSquare.length; i += 1) {
    if(oceanSquare[i].id) {
      // add and remove column background
      const column = oceanSquare[i].id.slice(1);
      oceanSquare[i].addEventListener('mouseover', () => {
        const div = document.querySelectorAll(`.ocean.${column}`);
        for (let i = 0; i < div.length; i += 1) {
          div[i].style.backgroundColor = '#90ee9050';
        }
      });
      oceanSquare[i].addEventListener('mouseout', () => {
        const div = document.querySelectorAll(`.ocean.${column}`);
        for (let i = 0; i < div.length; i += 1) {
          div[i].style.backgroundColor = 'transparent';
        }
      });
  
      // and and remove row background
      const row = oceanSquare[i].id.substring(0,1);
      oceanSquare[i].addEventListener('mouseover', () => {
        const div = document.querySelectorAll(`.ocean.${row}`);
        for (let i = 0; i < div.length; i += 1) {
          div[i].style.backgroundColor = '#90ee9050';
        }
      });
      oceanSquare[i].addEventListener('mouseout', () => {
        const div = document.querySelectorAll(`.ocean.${row}`);
        for (let i = 0; i < div.length; i += 1) {
          div[i].style.backgroundColor = 'transparent';
        }
      });
    }
  }
}

// click and dragable div
placement();
function placement() {
  const carrierDiv = document.querySelector('.carrier');
  carrierDiv.onmousedown = function(event) {
    let shiftX = event.clientX - carrierDiv.getBoundingClientRect().left;
    let shiftY = event.clientY - carrierDiv.getBoundingClientRect().top;
  
    carrierDiv.style.position = 'absolute';
    carrierDiv.style.zIndex = 1000;
    document.body.append(carrierDiv);
  
    moveAt(event.pageX, event.pageY);
  
    // moves the carrierDiv at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      carrierDiv.style.left = pageX - shiftX + 'px';
      carrierDiv.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
  
      // checks for element below dragged boat.
      carrierDiv.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
      if(elemBelow.id){
        console.log(elemBelow.id)
      }
      carrierDiv.hidden = false;
    }
  
    // move the carrierDiv on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the carrierDiv, remove unneeded handlers
    carrierDiv.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      carrierDiv.onmouseup = null;
    };
  };
  
  carrierDiv.ondragstart = function() {
    return false;
  };
}
