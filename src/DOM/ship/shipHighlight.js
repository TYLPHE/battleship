import numConvert from "../../data/numConvert";
import alphaConvert from "../../data/alphaConvert";

// highlight ships position on board.
function shipHighlight(shipSquare, div, obj) {
  const shipName = shipSquare.substring(0, shipSquare.length - 2);
  const heldValue = shipSquare.slice(-1);
  const shipLength = obj[shipName].length;
  const hoverCol = numConvert(div.id.substring(1));
  const hoverRow = div.id.substring(0, 1);
  const toHighlight = shipLength - heldValue;

  if(obj[shipName].orientation === 'v') {
    for (let i = 0; i <= toHighlight; i += 1) {
      const letterValue = alphaConvert(hoverRow) + i;
      const newRow = alphaConvert(letterValue);
      const newCol = numConvert(hoverCol);
      const square = document.querySelector(`.${newRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj) {
          for (let i = 0; i < obj[key].position.length; i += 1) {
            if (obj[key].position[i] === `${newRow}${newCol}`) {
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
        for (let key in obj) {
          for (let i = 0; i < obj[key].position.length; i += 1) {
            if (obj[key].position[i] === `${newRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }    
    }
  }
  if (obj[shipName].orientation === 'h') {
    for (let i = 0; i <= toHighlight; i += 1) {
      const newCol = numConvert(hoverCol + i);
      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);
      if (square) {
        square.style.backgroundColor = 'green';
        for (let key in obj) {
          for (let i = 0; i < obj[key].position.length; i += 1) {
            if (obj[key].position[i] === `${hoverRow}${newCol}`) {
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
        for (let key in obj) {
          for (let i = 0; i < obj[key].position.length; i += 1) {
            if (obj[key].position[i] === `${hoverRow}${newCol}`) {
              square.style.backgroundColor = 'red';
            }
          }
        }
      }
    }
  }
}

export default shipHighlight