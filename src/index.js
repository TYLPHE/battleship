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


// grid

console.log(p1Battleship);