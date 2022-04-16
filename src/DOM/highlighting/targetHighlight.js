// highlights the target board. helpful for vs cpu

function targetHighlight() {
  const c = document.getElementsByClassName(`target square`);
  for (let i = 0; i < c.length; i += 1) {
    if(c[i].id) {
      c[i].addEventListener('mouseover', (e) => highlightSquare(e));
      c[i].removeEventListener('mouseout', (e) => highlightSquare(e))
    }
  }
}


function highlightSquare(e) {
  let reserve = e.target.style.backgroundColor;
  e.target.style.backgroundColor = 'rgba(0, 255, 255, 0.80)';
  e.target.addEventListener('mouseout', () => {
    e.target.style.backgroundColor = reserve;
  });
}

export default targetHighlight;
