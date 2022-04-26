// checks if a ship sunk. if yes, return to 'search' mode in cpuMode.js
import cpuMode from '../cpu/cpuMode';

function shipSunk(obj, ship) {
  console.log(obj.p1[ship].length, obj.p1[ship].hits.length)
  if (obj.p1[ship].length === obj.p1[ship].hits.length) {
    console.log(`CPU sunk your ${ship}!`);
    obj.p1[ship].sunk = true;
    cpuMode.pop();
    cpuMode.push('search');
    console.log('searching...');
  }
}

export default shipSunk;
