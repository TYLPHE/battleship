// receive an object from hitStatus.js with ship and hit location
// then add to ships object

function registerHit(obj, hit, onPlayer) {
  let p = (onPlayer === 'player') ? 'p2' : 'p1';
  if (hit.status && obj[p][hit.ship] !== undefined) {
    const hits = obj[p][hit.ship]['hits'];
    hits.push(hit.shot);
  }
  console.log(hit.ship, obj['p1'][hit.ship].hits)
}

export default registerHit;
