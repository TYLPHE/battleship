// check the ships object for all hit locations
function checkWin(obj) {
  for (let p in obj) {
    let counter = 0;
    for (let ship in obj[p]) {
      for (let key in obj[p][ship]) {
        if (key === 'sunk' && obj[p][ship][key] === true) {
          counter += 1;
          if (counter === 5) {
            const loser = p;
            return loser;
          } else {
          }
        }
      }
    }
  }
  return false;
}

export default checkWin;
