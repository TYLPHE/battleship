// check ship object for a match. if yes, then send a hit message
// if missed, then send a miss message. player is expected to 
// manage their own pieces.

function hitStatus(obj) {
  let shot = document.querySelector('.targeting');
  console.log(obj)
  let status = 'miss!'
  for (let key in obj.p2) {
    for (let i = 0; i < obj.p2[key].position.length; i += 1) {
      if (shot.id === obj.p2[key].position[i]) {
        status = 'hit!';
      }
    }
  }
  shot.classList.remove('targeting');
  return {
    shot: shot.id,
    status: status,
  }
}

export default hitStatus;