// checks if the ship with random square and random direction
// fits on the board. If yes, return true.

import numConvert from "../data/numConvert";
import alphaConvert from "../data/alphaConvert";

const ref = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
}

function doesItFit(square, dir, key, obj) {
  const row = square.slice(0, 1);
  const col = square.substring(1);
  let vr = alphaConvert(row);
  let vc = numConvert(col);
  
  if (dir === 'up') {
    vr = vr - ref[key];
    if (vr > 0 && vr < 11) {
      let coord = [];
      for (let i = 0; i < vr; i += 1) {
        coord.push(`${alphaConvert(alphaConvert(row) - i)}${col}`);
      }
      const overlap = doesItOverlap(coord, key);
      if (!overlap) {
        return 'pass';
      } else {
        return 'fail';
      }
    } else {
      return 'fail';
    }
  }
  if (dir === 'down') {
    vr = vr + ref[key];
    if (vr > 0 && vr < 11) {
      let coord = [];
      for (let i = 0; i < vr; i += 1) {
        coord.push(`${alphaConvert(alphaConvert(row) + i)}${col}`);
      }
      const overlap = doesItOverlap(coord, key);
      if (!overlap) {
        return 'pass';
      } else {
        return 'fail';
      }
    } else {
      return 'fail';
    }
  }
  if (dir === 'left') {
    vc = vc - ref[key];
    if (vc > 0 && vc < 11) {
      let coord = [];
      for (let i = 0; i < vc; i += 1) {
        coord.push(`${row}${numConvert( numConvert(col) - i)}`);
      }
      const overlap = doesItOverlap(coord, key);
      if (!overlap) {
        return 'pass';
      } else {
        return 'fail';
      }
    } else {
      return 'fail';
    }
  }
  if (dir === 'right') {
    vc = vc + ref[key];
    if (vc > 0 && vc < 11) {
      let coord = [];
      for (let i = 0; i < vc; i += 1) {
        coord.push(`${row}${numConvert( numConvert(col) + i)}`);
      }
      const overlap = doesItOverlap(coord);
      if (!overlap) {
        return 'pass';
      } else {
        return 'fail';
      }
    } else {
      return 'fail';
    }
  }

  function doesItOverlap(arr) {
    let overlap = '';
    for (let i = 0; i < arr.length; i += 1) {
      for (let key in obj.p2) {
        for (let j = 0; j < obj.p2[key].position.length; j += 1) {
          if (arr[i] === obj.p2[key].position[j]) {
            overlap = 'true';
            return overlap;
          }
        }
      }
    }
    return overlap;
  }
}


export default doesItFit;
