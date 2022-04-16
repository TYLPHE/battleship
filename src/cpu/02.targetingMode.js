
function targetingMode() {
  let c = document.getElementsByClassName('target square');
  // let response = {};
  for (let i = 0; i < c.length; i += 1) {
    if (c[i].id) {
      c[i].addEventListener('click', (e) => {
        const wipe = document.querySelectorAll(`.targeting`);
        if (wipe) {
          for (let i = 0; i < wipe.length; i += 1) {
            wipe[i].classList.remove('targeting');
          }
        }
        c[i].classList.add('targeting');
      });
    }
  }
}

export default targetingMode;