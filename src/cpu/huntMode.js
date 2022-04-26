// logic to test hunt mode
import cpuShotList from "../data/cpuShotList";
import randomDirection from "./placement/randomDirection";
import numConvert from "../data/numConvert";
import alphaConvert from "../data/alphaConvert";
import cpuMode from '../cpu/cpuMode';

function huntMode(obj) {
  let square;
  let direction  = randomDirection();
  for (let ship in obj.p1) {
    const hitsOnPlayer = obj.p1[ship].hits;
    const shipSunk = obj.p1[ship].sunk;
    // single hit, find random square near the hit
    if (hitsOnPlayer.length === 1 && shipSunk === false) {
      const hitSquare = hitsOnPlayer[0];
      const row = hitSquare.slice(0, 1);
      const col = hitSquare.substring(1);
      square = rotation(direction, row, col);
    }
    
    // double hit, aim in a line both ends for a hit
    if (hitsOnPlayer.length > 1 && shipSunk === false) {
      const rowCol = dupeRowOrCol(hitsOnPlayer);
      // columns are spelled out while rows are a single letter
      if (rowCol.dupe.length > 1) {
        if (direction === 'left') {
          direction = 'up';
        }
        if (direction === 'right') {
          direction = 'down'
        }
      } else {
        if (direction === 'up') {
          direction = 'left';
        }
        if (direction === 'down') {
          direction = 'right';
        }
      }

      let end;
      if (direction === 'up') {
        end = alphaConvert(rowCol.arr[0] - 1);
        if (!end) end = alphaConvert(rowCol.arr[rowCol.arr.length - 1] + 1);
        square = `${end}${rowCol.dupe}`;
      }
      if (direction === 'down') {
        end = alphaConvert(rowCol.arr[rowCol.arr.length - 1] + 1);
        if (!end) end = alphaConvert(rowCol.arr[0] - 1);
        square = `${end}${rowCol.dupe}`;
      }
      if (direction === 'left') {
        end = numConvert(rowCol.arr[0] - 1);
        if (!end) end = numConvert(rowCol.arr[rowCol.arr.length - 1] + 1);
        square = `${rowCol.dupe}${end}`;
      }
      if (direction === 'right') {
        end = numConvert(rowCol.arr[rowCol.arr.length - 1] + 1);
        if (!end) end = numConvert(rowCol.arr[0] - 1);
        square = `${rowCol.dupe}${end}`;
      }
    }
  }
  for (let i = 0; i < cpuShotList.length; i += 1) {
    if (cpuShotList[i] === square) {
      square = huntMode(obj, direction)
    }
  }
  return square;
}










function rotation(dir, row, col) {
  let checkSquare;
  if (dir === 'up') {
    let up = alphaConvert(alphaConvert(row) - 1);
    if (up) {
      checkSquare = `${up}${col}`;
    }
  }
  if (dir === 'down') {
    let down = alphaConvert(alphaConvert(row) + 1);
    if (down) {
      checkSquare = `${down}${col}`;
    }
  }
  if (dir === 'left') {
    let left = numConvert(numConvert(col) - 1);
    if (left) {
      checkSquare = `${row}${left}`;
    }
  }
  if (dir === 'right') {
    let right = numConvert(numConvert(col) + 1);
    if (right) {
      checkSquare = `${row}${right}`;
    }
  }

  if (checkSquare) {
    return checkSquare;
  } else {
    let ref = ['up', 'down', 'left', 'right', 'up'];
    for (let i = 0; i < ref.length; i += 1) {
      if (ref[i] === dir) {
        return rotation(ref[i + 1], row, col)
      }
    }
  }
}


// look for duplicate row or col
function dupeRowOrCol(hitsOnPlayer) {
  let arr = [];
  for (let i = 0; i < hitsOnPlayer.length; i += 1) {
    let row = hitsOnPlayer[i].slice(0, 1);
    let col = hitsOnPlayer[i].substring(1);
    arr.push(row, col);
  }
  for (let i = 0; i < arr.length; i += 1) {
    let dupeArr = [];
    const dupe = arr[i];
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === dupe) {
        dupeArr.push(arr[i]);
      }
    }
    if (dupeArr.length > 1) {
      let newArr = arr.filter(element => element !== dupeArr[0]);
      let outputArr = [];
      newArr.forEach(element => {
        if (element.length > 1) {
          outputArr.push(numConvert(element));
        } else {
          outputArr.push(alphaConvert(element));
        }
      });
      outputArr.sort();
      return {
        arr: outputArr,
        dupe: dupeArr[0]
      }
    }
  }
}

export default huntMode;
