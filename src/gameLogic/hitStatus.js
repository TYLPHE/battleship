// check ship object for a match. if yes, then send a hit message
// if missed, then send a miss message. player is expected to 
// manage their own pieces.

function hitStatus(obj, /* 'cpu' or 'player' */ fromPlayer, cpuShot) {
  let ship = 'miss!';
  let status = 'miss!';

  if (fromPlayer === 'player') {
    let shot = document.querySelector('.targeting');
    if (shot) {
      for (let key in obj.p2) {
        for (let i = 0; i < obj.p2[key].position.length; i += 1) {
          if (shot.id === obj.p2[key].position[i]) {
            status = 'hit!';
            ship = key;
          }
        }
      }
      shot.classList.remove('targeting');
      return {
        shot: shot.id,
        status: status,
        ship: ship,
      }
    }
  }
  if (fromPlayer === 'cpu') {
    for (let key in obj.p1) {
      for (let i = 0; i < obj.p1[key].position.length; i += 1) {
        if (cpuShot === obj.p1[key].position[i]) {
          status = 'hit!';
          ship = key;
        }
      }
    }
    return {
      shot: cpuShot,
      status: status,
      ship: ship,
    }
  }

}

export default hitStatus;
