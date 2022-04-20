// search the object for ships that already have positions.
// return the value of the ship that has no position saved
// if all positions are filled, return 'placed'

function whichShip(obj) {
  for (let key in obj.p2) {
    if (obj.p2[key].length !== obj.p2[key].position.length) {
      return key;
    }
  }
  return 'filled';
}

export default whichShip;
