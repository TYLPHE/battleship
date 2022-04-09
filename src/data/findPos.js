import savePos from "./savePos";

// find position of placed ship insert into savePos();
function findPos(ship, obj){
  const ocean = document.querySelectorAll('.ocean');
  for (let i = 0; i < ocean.length; i += 1) {
    if (ocean[i].style.backgroundColor === 'green') {
      savePos(ship, ocean[i].id, obj);
    }
  }
}

export default findPos;