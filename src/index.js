import './css/style.css';
import highlightSides from './DOM/highlighting/highlightSides'
import targetHighlight from './DOM/highlighting/targetHighlight';
import addShip from './DOM/ship/addShip'
import ship from './data/constructor'
import addMarkers from './DOM/markers/addMarkers'
import cpu from './cpu/cpu';
import sendLog from './gameLogic/sendLog';
import hitStatus from './gameLogic/hitStatus'
import cpuShipPlacement from './cpu/placement/cpuPlacement';
import startBtnLogic from './DOM/starter/startBtnLogic';

// cell highlighting to eaily identify row and column
highlightSides();

// target highlight
// targetHighlight();

// add ship to gameboard
addShip(ship);

// add markers to board
addMarkers(2*(100-17), 17*2);


// CPU places its ship on the board
// cpu(ship);

// highlight ships on board check placement
// cpuShipPlacement(ship)
// for (let key in ship.p2) {
//   for (let i = 0; i < ship.p2[key].position.length; i += 1) {
//     let coord = ship.p2[key].position[i];
//     const square = document.querySelector(`.${coord}`);
//     square.classList.add(`cpu-${key}`);
//     console.log(square);
//   }
// }

// check cpu-graveyard
// startBtnLogic(ship, 'cpu');
// import battleLog from './DOM/cpuDOM/battleLog';

// battleLog();