import rmHighlight from "../highlighting/rmHighlight";
import addHighlight from "../highlighting/addHighlight";
import insertMarker from "./insertMarker";
import cpuLogic from "../../cpu/cpuLogic";
import ships from '../../data/constructor';
import shipSunk from "../../cpu/shipSunk";
import markGraveyard from "../../cpu/markGraveyard";

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
    if (
      elemBelow.id && 
      elemBelow.id !== currentId && 
      elemBelow.id !== 'white' && 
      elemBelow.id !== 'red'
      ) {
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
    // places marker on the board and removes dragged marker
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
    
    // cpu turn logic
    if (markedDiv && markedDiv.classList.contains('dotted')) {
      markedDiv.classList.remove('dotted');
      // clear the player's log to prevent confusion
      const log = document.querySelectorAll('.log-txt');
      log[0].textContent = '';
      log[1].textContent = '';

      // check to see if cpu sunk a boat. if yes, mark ship red
      markGraveyard(ships);

      setTimeout(() => {
        cpuLogic(ships);
      }, 750);
    }

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

export default addMarkers;
