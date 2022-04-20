function savePos(ship, pos, obj) {
  const position = obj.p1[ship].position;
  position.push(pos);
}

export default savePos;
