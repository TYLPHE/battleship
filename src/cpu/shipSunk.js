// checks if a ship sunk. if yes, return to 'search' mode in gameStates.js
// runs after hitStatus.js

// TODO: expand this to include shipsunk from the player too
import gameStates from '../data/gameStates';

function shipSunk(obj, ship, shipOwner) {
  if(shipOwner === 'player' && obj.p1[ship].length === obj.p1[ship].hits.length) {
    console.log(`CPU sunk your ${ship}!`);
    obj.p1[ship].sunk = true;
    gameStates.cpuMode.pop();
    gameStates.cpuMode.push('search');
    console.log('searching...');
  }

  if (shipOwner === 'cpu' && obj.p2[ship].length === obj.p2[ship].hits.length) {
    const cpuShip = document.querySelector(`.cpu${ship}`);
    cpuShip.style.backgroundColor = 'black';
  }
  // if (obj.p1[ship].length === obj.p1[ship].hits.length) {
  //   console.log(`CPU sunk your ${ship}!`);
  //   obj.p1[ship].sunk = true;
  //   // 
  //   gameStates.cpuMode.pop();
  //   gameStates.cpuMode.push('search');
  //   console.log('searching...');
  // }
}

export default shipSunk;
