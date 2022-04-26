// end the game. maybe reveal cpu's boats
// send message via sendLog.js

function endGame(obj) {
  const window = document.querySelectorAll('.log-txt');
  window[0].textContent = 'GAME';
  window[1].textContent = 'OVER!';

  // display cpu position on board
  for (let key in obj.p2) {
    for (let i = 0; i < obj.p2[key].position.length; i += 1) {
      const square = document.querySelector(`.${obj.p2[key].position[i]}`);
      square.classList.add(`cpu-${key}`);
    }
  }
}

export default endGame;
