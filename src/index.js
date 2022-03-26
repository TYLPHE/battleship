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

// generate ships on page
generateShip(ships)
function generateShip({ p1: ship }) {
  for (const key in ship) {
    const shipClass = document.createElement('div');
    shipClass.classList.add(key);
    for (let i = 1; i <= ship[key].length; i += 1) {
      const square = document.createElement('div');
      square.classList.add('ship-square')
      square.id = `${key}-${i}`;
      square.textContent = i;

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

// click and drag ships to place on board
placement(ships);
function placement({ p1: ship }) {
  for (const key in ship) {
    const div = document.querySelector(`.${key}`)
    div.onmousedown = function(event) {
      let shiftX = event.clientX - div.getBoundingClientRect().left;
      let shiftY = event.clientY - div.getBoundingClientRect().top;
      
      document.body.append(div);
    
      moveAt(event.pageX, event.pageY);
    
      // moves the div at (pageX, pageY) coordinates
      // taking initial shifts into account
      function moveAt(pageX, pageY) {
        div.style.left = pageX - shiftX + 'px';
        div.style.top = pageY - shiftY + 'px';
      }
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    
        // checks for element below dragged boat.
        div.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
        if(elemBelow.id){
          console.log(elemBelow.id)
        }
        div.hidden = false;
      }
    
      // move the div on mousemove
      document.addEventListener('mousemove', onMouseMove);
    
      // drop the div, remove unneeded handlers
      div.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        div.onmouseup = null;
      };
    };
    
    div.ondragstart = function() {
      return false;
    };
  }
}
