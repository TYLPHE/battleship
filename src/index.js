import './style.css'
// ship constructor
function ship(length) {
  return {
    length: length,
    hit: 0,
    sunk: false,
    orientation: 'v', // 'v' = vertical, 'h' = horizontal for placement
    position: [],
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
generateShip(ships.p1)
function generateShip(ship) {
  for (const key in ship) {
    const shipClass = document.createElement('div');
    shipClass.classList.add(key);
    shipClass.addEventListener('mousedown', (e) => placement(e, shipClass, ships));
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

function placement(event, div, obj) {
  // bugfix for if mouse is faster than the dragging div
  let activeSquare;
  let activeShip;
  for (const key in obj.p1) {
    let active = event.target.id;
    if (key === active.substring(0, active.length - 2)) {
      activeSquare = active;
      activeShip = active.substring(0, active.length - 2)
    }
  }

  // checks if mouse moved. If not, then rotate ship
  let movedMouse = false;

  let shiftX = event.clientX - div.getBoundingClientRect().left;
  let shiftY = event.clientY - div.getBoundingClientRect().top;
  document.body.append(div);
  if (!document.querySelector('.start-cont')) checkDock();
  moveAt(event.pageX, event.pageY, div);
  // moves the div at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    div.style.left = pageX - shiftX + 'px';
    div.style.top = pageY - shiftY + 'px';
  }
  let currentId = '';
  function onMouseMove(event) {
    movedMouse = true;
    moveAt(event.pageX, event.pageY);
    // checks for element below dragged boat.
    div.style.display = 'none';
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY)
    if (elemBelow.classList.contains('ocean') && 
        elemBelow.id &&
        elemBelow.id !== currentId
        ) {
      currentId = elemBelow.id;
      rmHighlight();
      // highlight the sides
      addHighlight(elemBelow, 'ocean');
      // clears previous position of ship
      obj.p1[activeShip].position = [];
      for (const key in obj.p1) {
        if (key === activeShip){
          // highlight under the ship
          shipHighlight(activeSquare, elemBelow, obj);
        }
      }

      findPos(activeShip, obj);
      verifyPos(activeShip, obj);
    }
    // maintain orientation while dragging
    for (const key in obj.p1) {
      if (activeShip === key) {
        if (obj.p1[activeShip].orientation === 'v') {
          return div.style.display = 'initial';
        } else {
          return div.style.display = 'flex';
        }
      }
    }
  }
  // move the div on mousemove
  document.addEventListener('mousemove', onMouseMove);
  
  // drop the div, remove unneeded handlers
  div.onmouseup = function() {
    // rotates ship if it was not dragged
    if (!movedMouse) {
      obj.p1[activeShip].position = []
      findPos(activeShip, obj);
      verifyPos(activeShip, obj);
      const shipClass = event.target.parentNode.classList[0]
      let ship = document.querySelector(`.${shipClass}`);
      ship.classList.toggle('horizontal');
      for (const key in obj.p1) {
        if (key === shipClass) {
          if (obj.p1[shipClass].orientation === 'v') {
            obj.p1[shipClass].orientation = 'h';
            div.style.display = 'flex';
          } else {
            obj.p1[shipClass].orientation = 'v';
            div.style.display = 'initial';
          }
        }
      }
    }

    rmHighlight();
    document.removeEventListener('mousemove', onMouseMove);
    movedMouse = false;
    div.onmouseup = null;
  };
  div.ondragstart = function() {
    return false;
  };
}

function verifyPos(activeShip, obj) {
  const shipObj = obj.p1[activeShip];
  const ship = document.querySelector(`.${activeShip}`);
  if (shipObj.length === shipObj.position.length) {
    ship.style.backgroundColor = 'transparent';
  }
  if (shipObj.length !== shipObj.position.length) { 
    shipObj.position = [];
    ship.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'
  }
}

function checkDock() {
  let leftDock =  document.querySelector(`.ship-storage-left`);
  let rightDock = document.querySelector('.ship-storage-right')
  if (leftDock.childNodes.length === 0 && rightDock.childNodes.length === 0) {
    const container = document.querySelector('.side.storage-container');
    console.log(container.childNodes)
    for (let i = 0; i < container.childNodes.length; i += 1) {
      container.childNodes[i].style.display = 'none';
    }
    createStart(container);
  }
}

function createStart(div) {
  const startCont = document.createElement('div');
  startCont.classList.add('start-cont');
  const pvp = document.createElement('button');
  pvp.textContent = '2 Players';
  pvp.addEventListener('click', () => {
    shipInsert(ships.p1);
    removeShips();
  });
  const pve = document.createElement('button');
  pve.textContent = 'Player vs CPU';
  pve.addEventListener('click', () => {
    shipInsert(ships.p1);
    removeShips();
  });
  startCont.append(pvp, pve);
  div.appendChild(startCont);
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

function removeShips() {
  for (let key in ships.p1) {
    console.log(ships.p1[key]);
    const markedDiv = document.querySelector(`.${key}-sailed`);
    if (markedDiv) {
      let drag = document.querySelector(`.${key}`);
      if (drag) {
        drag.remove();
      }
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
function addHighlight(elem, /*'ocean' or 'target'*/side) {
  const row = elem.id.substring(0,1);
  const rowEnd = document.querySelectorAll(`.${side}.${row}`);
  for (let i = 0; i < rowEnd.length; i += 1) {
    rowEnd[i].style.backgroundColor = '#90ee9050';
  }

  const col = elem.id.slice(1);
  const colEnd = document.querySelectorAll(`.${side}.${col}`);
  for (let i = 0; i < colEnd.length; i +=1 ) {
    colEnd[i].style.backgroundColor = '#90ee9050';
  }
}

// removes all highlighted side squares
function rmHighlight() {
  const sides = document.querySelectorAll('.square');
  for (let i = 0; i < sides.length; i += 1) {
    sides[i].style.backgroundColor = 'transparent';
  }
}

// highlight ships position on board.
function shipHighlight(shipSquare, div, obj) {
  const shipName = shipSquare.substring(0, shipSquare.length - 2);
  const heldValue = shipSquare.slice(-1);
  const shipLength = obj.p1[shipName].length;
  const hoverCol = numConvert(div.id.substring(1));
  const hoverRow = div.id.substring(0, 1);
  const toHighlight = shipLength - heldValue;

  if(obj.p1[shipName].orientation === 'v') {
    for (let i = 0; i <= toHighlight; i += 1) {
      const letterValue = alphaConvert(hoverRow) + i;
      const newRow = alphaConvert(letterValue);
      const newCol = numConvert(hoverCol);
      const square = document.querySelector(`.${newRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj.p1) {
          for (let i = 0; i < obj.p1[key].position.length; i += 1) {
            if (obj.p1[key].position[i] === `${newRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }    
    }
    for (let i = 0; i < heldValue; i += 1) {
      const letterValue = alphaConvert(hoverRow) - i;
      const newRow = alphaConvert(letterValue);
      const newCol = numConvert(hoverCol)
      const square = document.querySelector(`.${newRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj.p1) {
          for (let i = 0; i < obj.p1[key].position.length; i += 1) {
            if (obj.p1[key].position[i] === `${newRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }    
    }
  }
  if (obj.p1[shipName].orientation === 'h') {
    for (let i = 0; i <= toHighlight; i += 1) {
      const newCol = numConvert(hoverCol + i);
      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj.p1) {
          for (let i = 0; i < obj.p1[key].position.length; i += 1) {
            if (obj.p1[key].position[i] === `${hoverRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }    
    }
    for (let i = 0; i < heldValue; i += 1) {
      const newCol = numConvert(hoverCol - i);
      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj.p1) {
          for (let i = 0; i < obj.p1[key].position.length; i += 1) {
            if (obj.p1[key].position[i] === `${hoverRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }
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

// find position of placed ship insert into savePos();
function findPos(ship, obj){
  const ocean = document.querySelectorAll('.ocean');
  for (let i = 0; i < ocean.length; i += 1) {
    if (ocean[i].style.backgroundColor === 'green') {
      savePos(ship, ocean[i].id, obj);
    }
  }
}

// save position
function savePos(ship, pos, obj) {
  const position = obj.p1[ship].position;
  position.push(pos);
}

addMarkers(2*(100-17), 17*2);
function addMarkers(white, red) {
  const whiteElem = document.querySelector('.white-peg-cont');
  for (let i = 0; i < white; i += 1) {
    const peg = document.createElement('div');
    peg.classList.add('white-peg');
    peg.textContent = ' ';
    peg.addEventListener('mousedown', (e) => clickDragMarker(e, peg));
    whiteElem.appendChild(peg);
  }
  const redElem = document.querySelector('.red-peg-cont');
  for (let i = 0; i < red; i += 1) {
    const peg = document.createElement('div');
    peg.classList.add('red-peg');
    peg.textContent = ' ';
    peg.addEventListener('mousedown', (e) => clickDragMarker(e, peg));
    redElem.appendChild(peg);
  }
}

function clickDragMarker(event, elem) {
  elem.style.position = 'absolute';
  elem.style.margin = 0;
  document.body.append(elem);

  moveAt(event.pageX, event.pageY);
  function moveAt(pageX, pageY) {
    elem.style.left = pageX - elem.offsetWidth / 2 + 'px';
    elem.style.top = pageY - elem.offsetHeight / 2 + 'px';
  }

  let currentId = '';
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    elem.style.display = 'none';
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    if (elemBelow.id && elemBelow.id !== currentId) {
      currentId = elemBelow.id;
      rmHighlight();
      elemBelow.style.backgroundColor = 'green';
      if (elemBelow.classList.contains('ocean')) {
        addHighlight(elemBelow, 'ocean');
      }
      if (elemBelow.classList.contains('target')) {
        addHighlight(elemBelow, 'target');
      }
    }
    elem.style.display = 'initial';
  }

  document.addEventListener('mousemove', onMouseMove);

  const clickedElem = event.target
  elem.onmouseup = function () {
    // const elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    const marked = markerPos();
    let markedDiv = document.querySelector(marked);
    if (document.body.lastChild.style.position === 'absolute' &&
        markedDiv &&
        markedDiv.childNodes.length < 2) {
      insertMarker(marked, clickedElem);
      document.body.lastChild.remove();
    }
    rmHighlight();
    document.removeEventListener('mousemove', onMouseMove);
    elem.onmouseup = null;
  }
}

function markerPos() {
  let marked = document.querySelectorAll('.square');
  for (let i = 0; i < marked.length; i += 1) {
    if (marked[i].style.backgroundColor === 'green') {
      const square = marked[i].classList;
      const position = square[2];
      const half = square[0];
      return `.${half}.${position}`;
    }
  }
}

function insertMarker(pos, peg){
  const position = document.querySelector(pos);
  console.log(position);
  console.log(position.childNodes.length)
  if (position && position.childNodes.length < 2) {
    const div = document.createElement('div');
    div.classList.add('inserted');
    if (peg.className === 'white-peg') {
      div.style.backgroundColor = 'rgb(218, 218, 218)';
      div.id = 'white';
    } else {
      div.style.backgroundColor = 'rgb(149, 22, 22)';
      div.id = 'red';
    }
    position.appendChild(div);
    position.addEventListener('click', (e) => {
      const color = e.target.childNodes[0].id; 
      if (color === 'white') {
        addMarkers(1, 0)
      }
      if (color === 'red') {
        addMarkers(0, 1);
      }
      position.removeChild(div);
    }, {once : true});
  }
}