import createStart from "./createStart";

function checkDock(obj) {
  let leftDock =  document.querySelector(`.ship-storage-left`);
  let rightDock = document.querySelector('.ship-storage-right')
  if (leftDock.childNodes.length === 0 && rightDock.childNodes.length === 0) {
    leftDock.remove();
    rightDock.remove();
    const container = document.querySelector('.side.storage-container');
    createStart(container, obj);
  }
}

export default checkDock;