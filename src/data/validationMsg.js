function validationMsg(ship) {
  let message = [];
  for (let key in ship) {
    if (ship[key].length !== ship[key].position.length) {
      message.push(`${key} placement`);
    }
  }
  return message;
}

export default validationMsg;
