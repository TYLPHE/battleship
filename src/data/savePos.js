function savePos(ship, pos, obj) {
  const position = obj[ship].position;
  position.push(pos);
}

export default savePos;
