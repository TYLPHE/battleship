// positions validated, so push to object
import alphaConvert from "../../data/alphaConvert";
import numConvert from "../../data/numConvert";

const ref = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroyer: 2,
}

function addCpuPos(square, dir, key, obj) {
  const row = square.substring(1, 0);
  const vr = alphaConvert(row);
  const col = square.slice(1);
  const vc = numConvert(col);
  if (dir === 'up') {
    // const end = vr - ref[key];
    // console.log('vr:', vr, ' - ref[key]:', ref[key], ' = end: ' ,end);
    for (let i = 0; i < ref[key]; i += 1) {
      obj.p2[key].position.push(`${alphaConvert(alphaConvert(row) - i)}${col}`);
    }
  }
  if (dir === 'down') {
    // const end = vr + ref[key];
    for (let i = 0; i < ref[key]; i += 1) {
      obj.p2[key].position.push(`${alphaConvert(alphaConvert(row) + i)}${col}`);
    }
  }
  if (dir === 'left') {
    // const end = vc - ref[key];
    for (let i = 0; i < ref[key]; i += 1) {
      obj.p2[key].position.push(`${row}${numConvert( numConvert(col) - i)}`);
    }
  }
  if (dir === 'right') {
    // const end = vc + ref[key];
    for (let i = 0; i < ref[key]; i += 1) {
      obj.p2[key].position.push(`${row}${numConvert( numConvert(col) + i)}`);
    }
  }
}

export default addCpuPos;
