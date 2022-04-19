// receive an object from hitStatus.js with ship and hit location
// then add to ships object

function registerHit(obj, ship, hit) {
  if (hit.status) {
    obj[ship].push(hit.show);
  }
}

export default registerHit;
