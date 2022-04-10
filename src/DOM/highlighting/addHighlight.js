// cell highlighting while dragging item
function addHighlight(elem, /*'ocean' or 'target'*/side) {
  const row = elem.id.substring(0,1);
  const rowEnd = document.querySelectorAll(`.${side}.${row}`);
  for (let i = 0; i < rowEnd.length; i += 1) {
    rowEnd[i].style.backgroundColor = '#90ee9050';
  }

  const col = elem.id.slice(1);
  const colEnd = document.querySelectorAll(`.${side}.${col}`);
  for (let i = 0; i < colEnd.length; i +=1 ) {
    colEnd[i].style.backgroundColor = '#90ee9050';
  }
}

export default addHighlight;
