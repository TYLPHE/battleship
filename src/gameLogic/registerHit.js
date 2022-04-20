// receive an object from hitStatus.js with ship and hit location
// then add to ships object

function registerHit(obj, hit, player) {
  let p = (player === 'player') ? 'p1' : 'p2';
  if (hit.status) {
    obj[p][hit.ship].hits.push(hit.shot);
  }
}

export default registerHit;
