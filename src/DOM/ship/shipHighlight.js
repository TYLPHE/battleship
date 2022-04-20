import numConvert from "../../data/numConvert";
import alphaConvert from "../../data/alphaConvert";

// highlight ships position on board.
function shipHighlight(shipSquare, div, obj) {
  const shipName = shipSquare.substring(0, shipSquare.length - 2);
  const heldValue = shipSquare.slice(-1);
  const shipLength = obj.p1[shipName].length;
  const hoverCol = numConvert(div.id.substring(1));
  const hoverRow = div.id.substring(0, 1);
  const toHighlight = shipLength - heldValue;

  if(obj.p1[shipName].orientation === 'v') {
    for (let i = 0; i <= toHighlight; i += 1) {
      const letterValue = alphaConvert(hoverRow) + i;
      const newRow = alphaConvert(letterValue);
      const newCol = numConvert(hoverCol);
      const square = document.querySelector(`.${newRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj.p1) {
          for (let i = 0; i < obj.p1[key].position.length; i += 1) {
            if (obj.p1[key].position[i] === `${newRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }    
    }
    for (let i = 0; i < heldValue; i += 1) {
      const letterValue = alphaConvert(hoverRow) - i;
      const newRow = alphaConvert(letterValue);
      const newCol = numConvert(hoverCol)
      const square = document.querySelector(`.${newRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj.p1) {
          for (let i = 0; i < obj.p1[key].position.length; i += 1) {
            if (obj.p1[key].position[i] === `${newRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }    
    }
  }
  if (obj.p1[shipName].orientation === 'h') {
    for (let i = 0; i <= toHighlight; i += 1) {
      const newCol = numConvert(hoverCol + i);
      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj.p1) {
          for (let i = 0; i < obj.p1[key].position.length; i += 1) {
            if (obj.p1[key].position[i] === `${hoverRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }    
    }
    for (let i = 0; i < heldValue; i += 1) {
      const newCol = numConvert(hoverCol - i);
      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj.p1) {
          for (let i = 0; i < obj.p1[key].position.length; i += 1) {
            if (obj.p1[key].position[i] === `${hoverRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }
    }
  }
}

export default shipHighlight