import './style.css'
// ship constructor
function ship(length) {
  return {
    length: length,
    hit: 0,
    sunk: false,
    orientation: 'v', // 'v' = vertical, 'h' = horizontal for placement
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

// cell highlighting while dragging item
function addHighlight(elem) {
  const row = elem.id.substring(0,1);
  const rowEnd = document.querySelectorAll(`.ocean.${row}`);
  for (let i = 0; i < rowEnd.length; i += 1) {
    rowEnd[i].style.backgroundColor = '#90ee9050';
  }

  const col = elem.id.slice(1);
  const colEnd = document.querySelectorAll(`.ocean.${col}`);
  for (let i = 0; i < colEnd.length; i +=1 ) {
    colEnd[i].style.backgroundColor = '#90ee9050';
  }
}

// removes all highlighted side squares
function rmHighlight() {
  const sides = document.querySelectorAll('.ocean.square');
  for (let i = 0; i < sides.length; i += 1) {
    sides[i].style.backgroundColor = 'transparent';
  }
}

// highlight ships position on board.
function shipHighlight(shipSquare, div) {
  const shipName = shipSquare.substring(0, shipSquare.length - 2);
  const heldValue = shipSquare.slice(-1);
  const shipLength = ships.p1[shipName].length;
  const hoverCol = numConvert(div.id.substring(1));
  const hoverRow = div.id.substring(0, 1);

  const toHighlight = shipLength - heldValue;
  if(ships.p1[shipName].orientation === 'v') {
    for (let i = 0; i <= toHighlight; i += 1) {
      const letterValue = alphaConvert(hoverRow) + i;
      const newRow = alphaConvert(letterValue);
      const newCol = numConvert(hoverCol)
      const square = document.querySelector(`.${newRow}${newCol}.ocean`);
      square.style.backgroundColor = 'red';
    }
    for (let i = 0; i < heldValue; i += 1) {
      const letterValue = alphaConvert(hoverRow) - i;
      const newRow = alphaConvert(letterValue);
      const newCol = numConvert(hoverCol)
      const square = document.querySelector(`.${newRow}${newCol}.ocean`);
      square.style.backgroundColor = 'red';
    }
  }
}

// alphabetical values
function alphaConvert(letter) {
  const alpha = [
    ['a', 1], 
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6], 
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10]
  ]
  for (const [key, value] of alpha) {
    if (typeof letter === 'string' && letter === key) {
      return value;
    }
    if (typeof letter === 'number' && letter === value) {
      return key;
    }
  }
}

// convert number text to number
function numConvert(str) {
  const numPairs = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
  }
  for (let key in numPairs) {
    if (typeof str === 'string' && str === key) {
      return numPairs[key];
    }
    if (typeof str === 'number' && str === numPairs[key]) {
      return key;
    }
  }
}

// click and drag ships to place on board
placement(ships);
function placement({ p1: ship }) {
  for (const key in ship) {
    const div = document.querySelector(`.${key}`);
    div.onmousedown = function(event) {
      let shiftX = event.clientX - div.getBoundingClientRect().left;
      let shiftY = event.clientY - div.getBoundingClientRect().top;
      document.body.append(div);
      moveAt(event.pageX, event.pageY, div);

      // moves the div at (pageX, pageY) coordinates
      // taking initial shifts into account
      function moveAt(pageX, pageY) {
        div.style.left = pageX - shiftX + 'px';
        div.style.top = pageY - shiftY + 'px';
      }

      onMouseMove(event, div);

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        // checks for element below dragged boat.
        div.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
        let currentId = '';
        if (elemBelow.id && elemBelow.classList.contains('ocean')) {
          if (!currentId || elemBelow.id !== currentId) {
            currentId = elemBelow.id;
            rmHighlight();
            addHighlight(elemBelow);
            const activeShip = event.target.id;
            for (const key in ships.p1) {
              if (key === activeShip.substring(0, activeShip.length - 2)){
                shipHighlight(activeShip, elemBelow);
              }
            }
          }
        }
        div.hidden = false;
      }
    
      // move the div on mousemove
      document.addEventListener('mousemove', onMouseMove);
    
      // drop the div, remove unneeded handlers
      div.onmouseup = function() {
        rmHighlight();
        document.removeEventListener('mousemove', onMouseMove);
        div.onmouseup = null;
      };
    };
    
    div.ondragstart = function() {
      return false;
    };
  }
}
