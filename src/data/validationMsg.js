function validationMsg(obj) {
  let message = [];
  for (let key in obj.p1) {
    if (obj.p1[key].length !== obj.p1[key].position.length) {
      message.push(`${key} placement`);
    }
  }
  return message;
}

export default validationMsg;
