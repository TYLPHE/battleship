// a list of game states that tell the game what to do next

const state = {
  // false if player vs player
  // true will start cpu moves in addMarker.js
  vsCpu: false,

  // 'search' to randomly select squares
  // 'hunt' to force computer to select squares to sink the hit ship
  // found in cpuLogic.js
  cpuMode: [ 'search' ],
};

export default state;
