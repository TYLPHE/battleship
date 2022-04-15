/**
 * @jest-environment jsdom
 */
import savePos from '../data/savePos';
import findPos from '../data/findPos';
import alphaConvert from '../data/alphaConvert';
import numConvert from '../data/numConvert';
import cpuShipPlacement from '../cpu/02.cpuPlacement';
import constructor from '../data/constructor';
import randomSquare from '../cpu/03.randomSquare';
import randomDirection from '../cpu/03.randomDirection';
import whichShip from '../cpu/03.whichShip';
import doesItFit from '../cpu/03.doesItFit';
import addCpuPos from '../cpu/03.addCpuPos';



describe('Ship positioning', () => {
  const obj = {
    carrier: {
      position: [],
    }
  }
  const ship = 'carrier';
  describe('findPos.js', () => {
    it('Should find coordinates', () => {
      const div = document.createElement('div');
      div.classList.add('ocean');
      div.id = 'atwo';
      div.style.backgroundColor = 'green';
      document.body.appendChild(div);
    
      findPos(ship, obj)
      expect(obj[ship].position).toEqual( ['atwo'] );
    });
  })

  describe('savePos.js', () => {
    it('Should save coordinates', () => {
      obj['carrier'].position = [];
      const pos = 'aone';
      savePos(ship, pos, obj)
      expect(obj[ship].position).toEqual( ['aone'] )
    });
  })
});

describe('Conversion', () => {
  describe('alphaConvert.js', () => {
    it('Should convert letter \'j\' to 10', () => {
      expect(alphaConvert('j')).toBe(10);
    });
    it('Should convert 9 to \'i\'', () => {
      expect(alphaConvert(9)).toBe('i');
    });
  })

  describe('numConvert.js', () => {
    it('Should convert \'two\' to 2', () => {
      expect(numConvert('two')).toBe(2);
    });
    it('Should convert 7 to \'seven\'', () => {
     expect(numConvert(7)).toBe('seven');
   });
  });
});

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
        let square = randomSquare();
        let row = square.slice(0, 1);
        let col = square.substring(0, 1);

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

describe('CPU', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  describe('whichShip.js', () => {
    const obj = constructor;
    it('Should return \'carrier\' with no positioning', () => {
      expect(whichShip(obj)).toEqual('carrier');
      obj.p2['carrier'].position = [1,2,3,4,5];
    });

    it('Should return \'battleship\' with no positioning', () => {
      expect(whichShip(obj)).toEqual('battleship');
      obj.p2['battleship'].position = [1,2,3,4];
    });

    it('Should return \'cruiser\' with no positioning', () => {
      expect(whichShip(obj)).toEqual('cruiser');
      obj.p2['cruiser'].position = [1,2,3];
    });

    it('Should return \'submarine\' with no positioning', () => {
      expect(whichShip(obj)).toEqual('submarine');
      obj.p2['submarine'].position = [1,2,3];
    });

    it('Should return \'destroyer\' with no positioning', () => {
      expect(whichShip(obj)).toEqual('destroyer');
      obj.p2['destroyer'].position = [1,2];
    });

    it('Should return \'filled\'', () => {
      expect(whichShip(obj)).toEqual('filled');
    });
  });

  describe('doesItFit.js', () => {
    const obj = constructor;
    const dir = ['up', 'down', 'left', 'right'];
    const key = 'carrier';
    
    it('Should return \'false\' for \'up\' and \'left\'', () => {
      const square = 'aone';
      let result = ['fail', 'pass', 'fail', 'pass'];
      let test = [];
      for (let i = 0; i < dir.length; i += 1) {
        test.push(doesItFit(square, dir[i], key, obj))
      }
      expect(test).toEqual(result)
    });

    it('Should return \'false\' for \'right\' and \'down\'', () => {
      const square = 'jten';
      let result = ['pass', 'fail', 'pass', 'fail'];
      let test = [];
      for (let i = 0; i < dir.length; i += 1) {
        test.push(doesItFit(square, dir[i], key, obj))
      }

      expect(test).toEqual(result)
    });
  });

  describe('addCpuPos.js', () => {
    it('Should push array to ships object - 1', () => {
      const square = 'aone';
      const dir = 'right';
      const key = 'carrier';
      const obj = {
        p2: {
          carrier: {
            position: []
          },
        },
      };

      const compare = [ 'aone', 'atwo', 'athree', 'afour', 'afive' ];
      addCpuPos(square, dir, key, obj);
      expect(obj.p2['carrier'].position).toEqual(compare);
    });

    it('Should push array to ships object - 2', () => {
      const square = 'hfour';
      const dir = 'up';
      const key = 'carrier';
      const obj = {
        p2: {
          carrier: {
            position: []
          },
        },
      };

      const compare = [ 'hfour', 'gfour', 'ffour', 'efour', 'dfour' ];
      addCpuPos(square, dir, key, obj);
      expect(obj.p2['carrier'].position).toEqual(compare);
    });
  });
  
  describe('cpuShipPlacement.js', () => {
    const obj = {
      p1: {
        carrier: { 
          length: 5, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        },
        battleship: { 
          length: 4, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        },
        cruiser: { 
          length: 3, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        },
        submarine: { 
          length: 3, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        },
        destroyer: { 
          length: 2, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        }
      },
      p2: {
        carrier: { 
          length: 5, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        },
        battleship: { 
          length: 4, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        },
        cruiser: { 
          length: 3, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        },
        submarine: { 
          length: 3, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [] 
        },
        destroyer: { 
          length: 2, 
          hit: 0, 
          sunk: false, 
          orientation: 'v', 
          position: [],
        }
      }
    }
    it('Should place ships on board', () => {
      // const obj = constructor;
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
