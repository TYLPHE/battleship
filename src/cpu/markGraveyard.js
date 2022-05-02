// check to see if the player sunk the cpu's boat
// mark the sunk ship in the graveyard maybe dark red
function markGraveyard(ships) {
  for (let ship in ships.p2) {
    if (ships.p2[ship].length === ships.p2[ship].hits.length) {
      ships.p2[ship].sunk = true;
      
      // mark ship red
      let sunk = document.querySelector(`.cpu${ship}`);
      sunk.style.backgroundColor = 'red';
    }
  }
}

export default markGraveyard;
