import findPos  from "../../data/findPos";
import verifyPos from "../../data/verifyPos";
import checkDock from "../starter/checkDock";
import shipHighlight from "./shipHighlight";
import addHighlight from "../highlighting/addHighlight";
import rmHighlight from "../highlighting/rmHighlight";

function clickDrag(event, div, obj) {
  // bugfix for if mouse is faster than the dragging div
  let activeSquare;
  let activeShip;
  for (const key in obj) {
    let active = event.target.id;
    if (key === active.substring(0, active.length - 2)) {
      activeSquare = active;
      activeShip = active.substring(0, active.length - 2)
    }
  }
  // removes error window if bad ship placement
  const errorWindow = document.querySelector('.message-window');
  if (errorWindow) {
    errorWindow.remove();
  }

  // checks if mouse moved. If not, then rotate ship
  let movedMouse = false;

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
      obj[activeShip].position = [];
      for (const key in obj) {
        if (key === activeShip){
          // highlight under the ship
          shipHighlight(activeSquare, elemBelow, obj);
        }
      }

      findPos(activeShip, obj);
      verifyPos(activeShip, obj);
    }
    // maintain orientation while dragging
    for (const key in obj) {
      if (activeShip === key) {
        if (obj[activeShip].orientation === 'v') {
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
      obj[activeShip].position = []
      findPos(activeShip, obj);
      verifyPos(activeShip, obj);
      const shipClass = event.target.parentNode.classList[0]
      let ship = document.querySelector(`.${shipClass}`);
      ship.classList.toggle('horizontal');
      for (const key in obj) {
        if (key === shipClass) {
          if (obj[shipClass].orientation === 'v') {
            obj[shipClass].orientation = 'h';
            div.style.display = 'flex';
          } else {
            obj[shipClass].orientation = 'v';
            div.style.display = 'initial';
          }
        }
      }
    }
    // loads 2p or vs CPU option if all ships dragged out
    if (!document.querySelector('.start-cont')) {
      checkDock(obj)
    };

    rmHighlight();
    document.removeEventListener('mousemove', onMouseMove);
    movedMouse = false;
    div.onmouseup = null;
  };
  div.ondragstart = function() {
    return false;
  };
}

export default clickDrag;