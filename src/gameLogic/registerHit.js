// receive an object from hitStatus.js with ship and hit location
// then add to ships object

function registerHit(obj, hit, onPlayer) {
  let p = (onPlayer === 'player') ? 'p1' : 'p2';
  if (hit.status && obj[p][hit.ship] !== undefined) {
    const hits = obj[p][hit.ship]['hits'];
    hits.push(hit.shot);
  }
}

export default registerHit;
