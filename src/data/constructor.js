// ship constructor
function ship(length) {
  return {
    length: length,
    hit: 0,
    sunk: false,
    orientation: 'v', // 'v' = vertical, 'h' = horizontal for placement
    position: [],
    hits: [],
  }
}

const ships = {
  p1: {
    carrier: ship(5),
    battleship: ship(4),
    cruiser: ship(3),
    submarine: ship(3),
    destroyer: ship(2),
  },
  
  p2: {
    carrier: ship(5),
    battleship: ship(4),
    cruiser: ship(3),
    submarine: ship(3),
    destroyer: ship(2),
  },
}

export default ships;
