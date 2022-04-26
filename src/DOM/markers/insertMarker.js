// inserts marker on the board
import addMarkers from "./addMarkers";

function insertMarker(pos, peg){
  const position = document.querySelector(pos);
  if (position && position.childNodes.length < 2) {
    const div = document.createElement('div');
    div.classList.add('inserted');
    if (peg.className === 'white-peg' || peg === 'white-peg') {
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

export default insertMarker;
