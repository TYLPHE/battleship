import './style.css'
// ship
function createShip(player, name, length, ) {
  return {
    player: player,
    name: name,
    length: length,
    hit: 0,
    sunk: false,
  }
}

const p1Carrier = createShip('p1', 'carrier', 5);
const p1Battleship = createShip('p1', 'battleship', 4);
const p1Cruiser = createShip('p1', 'battleship', 3);
const p1Submarine = createShip('p1', 'battleship', 3);
const p1Destroyer = createShip('p1', 'battleship', 2);

// cell highlighting to eaily identify row and column
const targetSquare = document.querySelectorAll('.target.square');
for(let i = 0; i < targetSquare.length; i += 1) {
  if(targetSquare[i].id) {
    // add and remove column background
    const column = targetSquare[i].id.slice(1);
    targetSquare[i].addEventListener('mouseover', () => {
      const div = document.querySelectorAll(`.target.${column}`);
      for(let i = 0; i < div.length; i += 1) {
        div[i].style.backgroundColor = '#90ee9050';
      }
    });
    targetSquare[i].addEventListener('mouseout', () => {
      const div = document.querySelectorAll(`.target.${column}`);
      for(let i = 0; i < div.length; i += 1) {
        div[i].style.backgroundColor = 'transparent';
      }
    });

    // and and remove row background
    const row = targetSquare[i].id.substring(0,1);
    targetSquare[i].addEventListener('mouseover', () => {
      const div = document.querySelectorAll(`.target.${row}`);
      for(let i = 0; i < div.length; i += 1) {
        div[i].style.backgroundColor = '#90ee9050';
      }
    });
    targetSquare[i].addEventListener('mouseout', () => {
      const div = document.querySelectorAll(`.target.${row}`);
      for(let i = 0; i < div.length; i += 1) {
        div[i].style.backgroundColor = 'transparent';
      }
    });
  }
}

const oceanSquare = document.querySelectorAll('.ocean.square');
for(let i = 0; i < oceanSquare.length; i += 1) {
  if(oceanSquare[i].id) {
    // add and remove column background
    const column = oceanSquare[i].id.slice(1);
    oceanSquare[i].addEventListener('mouseover', () => {
      const div = document.querySelectorAll(`.ocean.${column}`);
      for(let i = 0; i < div.length; i += 1) {
        div[i].style.backgroundColor = '#90ee9050';
      }
    });
    oceanSquare[i].addEventListener('mouseout', () => {
      const div = document.querySelectorAll(`.ocean.${column}`);
      for(let i = 0; i < div.length; i += 1) {
        div[i].style.backgroundColor = 'transparent';
      }
    });

    // and and remove row background
    const row = oceanSquare[i].id.substring(0,1);
    oceanSquare[i].addEventListener('mouseover', () => {
      const div = document.querySelectorAll(`.ocean.${row}`);
      for(let i = 0; i < div.length; i += 1) {
        div[i].style.backgroundColor = '#90ee9050';
      }
    });
    oceanSquare[i].addEventListener('mouseout', () => {
      const div = document.querySelectorAll(`.ocean.${row}`);
      for(let i = 0; i < div.length; i += 1) {
        div[i].style.backgroundColor = 'transparent';
      }
    });
  }
}

//testing dragging
// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
