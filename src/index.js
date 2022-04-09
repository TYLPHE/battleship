import './css/style.css';
import highlighter from './DOM/board/highlighting/highlightSides'
import addShip from './DOM/ship/addShip'
import ship from './data/constructor'
import addMarkers from './DOM/board/markers/addMarkers'

// cell highlighting to eaily identify row and column
highlighter();

// add ships to gameboard
addShip(ship.p1);

// add markers to board
addMarkers(2*(100-17), 17*2);
