const ships = {
  p1: {
    carrier: ship(5),
    battleship: ship(4),
    cruiser: ship(3),
    submarine: ship(3),
    destroyer: ship(2),
  },
  p2:{
    carrier: ship(5),
    battleship: ship(4),
    cruiser: ship(3),
    submarine: ship(3),
    destroyer: ship(2),
  },
}

export default generateShip(ships.p1)