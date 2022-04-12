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

describe('Ship positioning', () => {
  const obj = {
    carrier: {
      position: [],
    }
  }
  const ship = 'carrier';
  describe('findPos()', () => {
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

  describe('savePos()', () => {
    it('Should save coordinates', () => {
      obj['carrier'].position = [];
      const pos = 'aone';
      savePos(ship, pos, obj)
      expect(obj[ship].position).toEqual( ['aone'] )
    });
  })
});

describe('Conversion', () => {
  describe('alphaConvert()', () => {
    it('Should convert letter \'j\' to 10', () => {
      expect(alphaConvert('j')).toBe(10);
    });
    it('Should convert 9 to \'i\'', () => {
      expect(alphaConvert(9)).toBe('i');
    });
  })

  describe('numConvert()', () => {
    it('Should convert \'two\' to 2', () => {
      expect(numConvert('two')).toBe(2);
    });
    it('Should convert 7 to \'seven\'', () => {
     expect(numConvert(7)).toBe('seven');
   })
  })
});

describe('Randomizer', () => {
  describe('randomSquare()', () => {
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

      expect(test).toBe('pass')
    })
  });

  describe('randomDirection()', () => {
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
          test = 'fail';
          break;
        }
      }
      expect(test).toEqual('pass');
    })
  });
});

describe('CPU', () => {
  const obj = constructor;
  describe('cpuShipPlacement()', () => {
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

  describe('whichShip()', () => {
    const obj = constructor;
    it('Should return \'carrier\' with no positioning', () => {
      expect(whichShip(obj)).toEqual('carrier');
    })
  });
});
