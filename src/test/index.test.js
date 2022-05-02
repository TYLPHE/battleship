/**
 * @jest-environment jsdom
 */

import savePos from '../data/savePos';
import findPos from '../data/findPos';
import alphaConvert from '../data/alphaConvert';
import numConvert from '../data/numConvert';
import cpuShipPlacement from '../cpu/placement/cpuPlacement';
import randomSquare from '../gameLogic/randomSquare';
import randomDirection from '../cpu/placement/randomDirection';
import whichShip from '../cpu/placement/whichShip';
import doesItFit from '../cpu/placement/doesItFit';
import addCpuPos from '../cpu/placement/addCpuPos';
import checkWin from '../gameLogic/checkWin';
import hitStatus from '../gameLogic/hitStatus';
import registerHit from '../gameLogic/registerHit';
import cpuLogic from '../cpu/cpuLogic';
import huntMode from '../cpu/huntMode';
import cpuShotList from '../data/cpuShotList';
import gameStates from '../data/gameStates';

// obj is constantly resused in this file. 
// I reset the values before each test
let obj;
beforeEach(() => {
  obj = {
    p1: {
      carrier: { 
        length: 5, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [ ],
        hits: [ ],
      },
      battleship: { 
        length: 4, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
      hits: [ ],
      },
      cruiser: { 
        length: 3, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
        hits: [ ],
      },
      submarine: { 
        length: 3, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
        hits: [ ],
      },
      destroyer: { 
        length: 2, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
        hits: [ ],
      }
    },
    p2: {
      carrier: { 
        length: 5, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
        hits: [ ],
      },
      battleship: { 
        length: 4, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
        hits: [ ],
      },
      cruiser: { 
        length: 3, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
        hits: [ ],
      },
      submarine: { 
        length: 3, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
        hits: [ ],
      },
      destroyer: { 
        length: 2, 
        hit: 0, 
        sunk: false, 
        orientation: 'v', 
        position: [],
        hits: [ ],
      }
    }
  }
});

// ship positioning tests
describe('Ship positioning', () => {
  const ship = 'carrier';
  describe('findPos.js', () => {
    it('Should find coordinates', () => {
      const div = document.createElement('div');
      div.classList.add('ocean');
      div.id = 'atwo';
      div.style.backgroundColor = 'green';
      document.body.appendChild(div);
    
      findPos(ship, obj);
      expect(obj.p1[ship].position).toEqual( ['atwo'] );
    });
  })

  describe('savePos.js', () => {
    it('Should save coordinates', () => {
      const pos = 'aone';
      savePos(ship, pos, obj)
      expect(obj.p1[ship].position).toEqual( ['aone'] )
    });
  })
});

// conversion tests
describe('Conversion', () => {
  describe('alphaConvert.js', () => {
    it('Should convert letter \'j\' to 10', () => {
      expect(alphaConvert('j')).toBe(10);
    });
    it('Should convert 9 to \'i\'', () => {
      expect(alphaConvert(9)).toBe('i');
    })    
  });
  describe('numConvert.js', () => {
    it('Should convert \'two\' to 2', () => {
      expect(numConvert('two')).toBe(2);
    });
    it('Should convert 7 to \'seven\'', () => {
      expect(numConvert(7)).toBe('seven');
    });
  });
});

// randomizer tests
describe('Randomizer', () => {
  describe('randomSquare.js', () => {
    it('Should return a string', () => {
      expect(typeof randomSquare()).toBe('string');
    });

    it('Should return a valid coordinate', () => {
      let numRef = [
        'a','b','c','d','e',
        'f','g','h','i','j'
      ];
      let alphaRef = [
        'one','two','three','four','five',
        'six','seven','eight','nine','ten'
      ];

      let test;
      for (let i = 0; i < 1000; i += 1) {
        let shot = randomSquare();
        let row = shot.slice(0, 1);
        let col = shot.substring(0, 1);

        for (let i = 0; i < numRef.length; i += 1) {
          if (numRef[i] === row) {
            test = 'pass';
          }
        }
        for (let i = 0; i < alphaRef.length; i += 1) {
          if (alphaRef[i] === col) {
            test = 'pass';
          }
        }

        if (test !== 'pass') {
          pass = 'fail';
          break;
        }
      }

      expect(test).toBe('pass');
    });
  });

  describe('randomDirection.js', () => {
    it('Should select a random direction', () => {
      let test;
      const ref = ['up', 'down', 'left', 'right'];
      for (let i = 0; i < 1000; i += 1) {
        let dir = randomDirection();
        for (let i = 0; i < ref.length; i += 1) {
          if (ref[i] === dir) {
            test = 'pass';
          }
        }
        if (test !== 'pass') {
          test = `fail: ${dir}`;
          break;
        }
      }
      expect(test).toEqual('pass');
    })
  });
});

// cpu related tests
describe('CPU', () => {
  describe('whichShip.js', () => {
    it('Should return \'carrier\' with no positioning', () => {
      expect(whichShip(obj)).toEqual('carrier');
    });

    it('Should return \'battleship\' with no positioning', () => {
      obj.p2['carrier'].position = [1,2,3,4,5];
      expect(whichShip(obj)).toEqual('battleship');
    });

    it('Should return \'cruiser\' with no positioning', () => {
      obj.p2['carrier'].position = [1,2,3,4,5];
      obj.p2['battleship'].position = [1,2,3,4];
      expect(whichShip(obj)).toEqual('cruiser');
    });

    it('Should return \'submarine\' with no positioning', () => {
      obj.p2['carrier'].position = [1,2,3,4,5];
      obj.p2['battleship'].position = [1,2,3,4];
      obj.p2['cruiser'].position = [1,2,3];
      expect(whichShip(obj)).toEqual('submarine');
    });

    it('Should return \'destroyer\' with no positioning', () => {
      obj.p2['carrier'].position = [1,2,3,4,5];
      obj.p2['battleship'].position = [1,2,3,4];
      obj.p2['cruiser'].position = [1,2,3];
      obj.p2['submarine'].position = [1,2,3];
      expect(whichShip(obj)).toEqual('destroyer');
    });

    it('Should return \'filled\'', () => {
      obj.p2['carrier'].position = [1,2,3,4,5];
      obj.p2['battleship'].position = [1,2,3,4];
      obj.p2['cruiser'].position = [1,2,3];
      obj.p2['submarine'].position = [1,2,3];
      obj.p2['destroyer'].position = [1,2];
      expect(whichShip(obj)).toEqual('filled');
    });
  });

  describe('doesItFit.js', () => {
    const dir = ['up', 'down', 'left', 'right'];
    const key = 'carrier';
    
    it('Should return \'false\' for \'up\' and \'left\'', () => {
      const shot = 'aone';
      let result = ['fail', 'pass', 'fail', 'pass'];
      let test = [];
      for (let i = 0; i < dir.length; i += 1) {
        test.push(doesItFit(shot, dir[i], key, obj))
      }
      expect(test).toEqual(result)
    });

    it('Should return \'false\' for \'right\' and \'down\'', () => {
      const shot = 'jten';
      let result = ['pass', 'fail', 'pass', 'fail'];
      let test = [];
      for (let i = 0; i < dir.length; i += 1) {
        test.push(doesItFit(shot, dir[i], key, obj))
      }

      expect(test).toEqual(result)
    });
  });

  describe('addCpuPos.js', () => {
    it('Should push array to ships object - 1', () => {
      const shot = 'aone';
      const dir = 'right';
      const key = 'carrier';
      const compare = [ 'aone', 'atwo', 'athree', 'afour', 'afive' ];
      addCpuPos(shot, dir, key, obj);
      expect(obj.p2['carrier'].position).toEqual(compare);
    });

    it('Should push array to ships object - 2', () => {
      const shot = 'hfour';
      const dir = 'up';
      const key = 'carrier';
      const compare = [ 'hfour', 'gfour', 'ffour', 'efour', 'dfour' ];
      addCpuPos(shot, dir, key, obj);
      expect(obj.p2['carrier'].position).toEqual(compare);
    });
  });
  
  describe('cpuShipPlacement.js', () => {
    it('Should place ships on board', () => {
      let test;
      cpuShipPlacement(obj);
      for (let key in obj.p2) {
        if (obj.p2[key].length === obj.p2[key].position.length) {
          test = 'pass';
        } else {
          return test = 'fail';
        }
      }
      expect(test).toEqual('pass');
    });
  });
});

// game logic tests
describe('Game Logic', () => {
  describe('checkWin.js', () => {
    it('Should return \'false\' with ships still remaining', () => {
      obj.p1.carrier.sunk = true;
      obj.p1.battleship.sunk = true;
      obj.p1.destroyer.sunk = true;

      const test = checkWin(obj);
      expect(test).toBe(false);
    });

    it('Should return \'p1\' as the loser with all ships sunk', () => {
      obj.p1.carrier.sunk = true;
      obj.p1.battleship.sunk = true;
      obj.p1.submarine.sunk = true;
      obj.p1.cruiser.sunk = true;
      obj.p1.destroyer.sunk = true;

      const loser = checkWin(obj);
      expect(loser).toEqual('p1');
    });

    it('Should return \'p2\' as the loser with all ships sunk', () => {
      obj.p2.carrier.sunk = true;
      obj.p2.battleship.sunk = true;
      obj.p2.submarine.sunk = true;
      obj.p2.cruiser.sunk = true;
      obj.p2.destroyer.sunk = true;

      const loser = checkWin(obj);
      expect(loser).toEqual('p2');
    });
  });

  describe('hitStatus.js', () => {
    it('Should return object keys: \'shot\', \'status\', and \'ship\'', () => {
      obj.p2.destroyer.position = ['aone', 'atwo']
      const shot = document.createElement('div');
      shot.classList.add('targeting');
      shot.id = 'aone';
      document.body.appendChild(shot);
      let test = hitStatus(obj, 'player');
      expect(test).toEqual({
        shot: 'aone',
        status: 'hit!' ,
        ship: 'destroyer',
      });
    });

    it('Should return a object with misses', () => {
      obj.p2.destroyer.position = ['aone', 'atwo']
      const shot = document.createElement('div');
      shot.classList.add('targeting');
      shot.id = 'athree';
      document.body.appendChild(shot);
      const test = hitStatus(obj, 'player');
      expect(test).toEqual({
        shot: 'athree',
        status: 'miss!',
        ship: 'miss!',
      });
    });

    it('Should return a hit from CPU to player', () => {
      obj.p1.destroyer.position = ['aone', 'atwo']
      const shot = 'aone';
      const test = hitStatus(obj, 'cpu', shot);
      expect(test).toEqual({
        shot: shot,
        status: 'hit!',
        ship: 'destroyer',
      });
    });


  });
  describe('registerHit.js', () => {
    it('Should push a location to obj.hits', () => {
      const shot = document.createElement('div');
      shot.classList.add('targeting');
      shot.id = 'aone';
      document.body.appendChild(shot);

      obj.p2.destroyer.position = ['aone', 'atwo']

      let status = hitStatus(obj, 'player');
      registerHit(obj, status, 'cpu');
      expect(obj.p2.destroyer.hits).toEqual(['aone']);
    });
  });

  describe('cpuLogic.js', () => {
    it('Should receive hit from player', () => {
      gameStates.cpuMode.pop();
      gameStates.cpuMode.push( 'search' );

      const square1 = document.createElement('div');
      square1.classList.add('target', 'atwo');

      const square2 = document.createElement('div');
      square2.classList.add('target', 'bone');

      const shot = document.createElement('div');
      shot.classList.add('targeting');
      shot.id = 'aone';
      document.body.appendChild(shot, square1, square2);

      obj.p2.carrier.position = [
        'aone',
        'atwo',
        'athree',
        'afour',
        'afive',
      ];
      
      const fromPlayer = 'player';
      cpuLogic(obj, fromPlayer);

      expect(obj.p2.carrier.hits).toEqual(['aone']);
    });
  });

  describe('huntMode.js', () => {
    it('Should target near the hit ship', () => {
      obj.p1.carrier.position = ['aone', 'bone', 'cone', 'done', 'eone'];
      obj.p1.carrier.hits = ['btwo'];
      let square = huntMode(obj);
      expect(
        square === 'atwo'   || 
        square === 'bthree' || 
        square === 'bone'   ||
        square === 'ctwo'
        ).toBeTruthy();
    });

    it('Should target along the ship with 2 hits vertically', () => {
      obj.p1.carrier.position = ['aone', 'bone', 'cone', 'done', 'eone']
      obj.p1.carrier.hits = ['dtwo', 'ctwo'];
      let square = huntMode(obj);
      expect(
        square === 'btwo'   || 
        square === 'etwo'
        ).toBeTruthy();
    });

    it('Should target along the ship with 2 hits horizontally', () => {
      obj.p1.carrier.position = ['btwo', 'bthree', 'bfour', 'bfive', 'bsix']
      obj.p1.carrier.hits = ['bfive', 'bfour'];
      let square = huntMode(obj);
      expect(
        square === 'bthree'   || 
        square === 'bsix'
        ).toBeTruthy();
    });

    it('Should target along the ship with 4 hits horizontally', () => {
      obj.p1.carrier.position = ['btwo', 'bthree', 'bfour', 'bfive', 'bsix']
      obj.p1.carrier.hits = ['bfive', 'bfour', 'bthree', 'btwo'];
      cpuShotList.push('bsix');
      let square = huntMode(obj);
      expect(square).toEqual('bone');
    });

    it('Should finish boat sitting in bottom-right corner', () => {
      obj.p1.carrier.position = ['jten', 'jnine', 'jeight', 'jseven', 'jsix'];
      obj.p1.carrier.hits = ['jten', 'jnine', 'jeight', 'jseven'];
      cpuShotList.push('jten', 'jnine', 'jeight', 'jseven')
      let square = huntMode(obj);
      expect(square).toEqual('jsix');
    });
  });

});
