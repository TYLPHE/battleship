import './css/style.css';
import highlightSides from './DOM/highlighting/highlightSides'
import addShip from './DOM/ship/addShip'
import ship from './data/constructor'
import addMarkers from './DOM/markers/addMarkers'

// cell highlighting to eaily identify row and column
highlightSides();

// add ship to gameboard
addShip(ship);

// add markers to board
addMarkers(2*(100-17), 17*2);

// // comment-in to highlight ships on board check placement
// import cpuShipPlacement from './cpu/placement/cpuPlacement';
// cpuShipPlacement(ship)
// for (let key in ship.p2) {
//   for (let i = 0; i < ship.p2[key].position.length; i += 1) {
//     let coord = ship.p2[key].position[i];
//     const square = document.querySelector(`.${coord}`);
//     square.classList.add(`cpu-${key}`);
//   }
// }
