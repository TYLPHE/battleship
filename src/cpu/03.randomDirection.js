// choose a random direction for the ship to be placed.
// this function occurs after a random square is defined

function randomDirection() {
  const ref = ['up', 'down', 'left', 'right'];
  const direction = Number.parseInt(Math.random() * 4);
  return ref[direction];
}

export default randomDirection;
