// checks if a ship sunk. if yes, return to 'search' mode in gameStates.js
import gameStates from '../data/gameStates';

function shipSunk(obj, ship) {
  if (obj.p1[ship].length === obj.p1[ship].hits.length) {
    console.log(`CPU sunk your ${ship}!`);
    obj.p1[ship].sunk = true;
    gameStates.cpuMode.pop();
    gameStates.cpuMode.push('search');
    console.log('searching...');
  }
}

export default shipSunk;
