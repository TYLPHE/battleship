import './css/style.css';
import highlighter from './DOM/highlighting/highlightSides'
import addShip from './DOM/ship/addShip'
import ship from './data/constructor'
import addMarkers from './DOM/markers/addMarkers'
import cpu from './cpu/01.cpu';

// cell highlighting to eaily identify row and column
highlighter();

// add ships to gameboard
addShip(ship.p1);

// add markers to board
addMarkers(2*(100-17), 17*2);

// CPU places its ships on the board
cpu(ship);

// display cpu position on board
for (let key in ship.p2) {
  for (let i = 0; i < ship.p2[key].position.length; i += 1) {
    const square = document.querySelector(`.${ship.p2[key].position[i]}`);
    square.classList.add(`cpu-${key}`);
  }
}