import rmHighlight from "../highlighting/rmHighlight";
import addHighlight from "../highlighting/addHighlight";

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

export default addMarkers;
