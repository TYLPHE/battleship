// check positions of object and see if there's a matching position
// if matching/overlap, return true

const ref = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
}

function doesItOverlap(obj, key, square, dir) {
  const row = square.slice(0, 1);
  const col = square.substring(1);
  let vr = alphaConvert(row)
  let vc = numConvert(col);
  const temp = [];
  if (dir === 'up') {

  }
  if (dir === 'down') {
    
  }
  if (dir === 'left') {
    
  }
  if (dir === 'right') {
    
  }

}

export default doesItOverlap;
