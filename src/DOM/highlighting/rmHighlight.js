// removes all highlighted side squares
function rmHighlight() {
  const sides = document.querySelectorAll('.square');
  for (let i = 0; i < sides.length; i += 1) {
    sides[i].style.backgroundColor = '';
  }
}

export default rmHighlight;
