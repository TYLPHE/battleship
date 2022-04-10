/**
 * @jest-environment jsdom
 */
import savePos from '../data/savePos';
import findPos from '../data/findPos';


describe('ship positioning', () => {
  const obj = {
    carrier: {
      position: [],
    }
  }
  const ship = 'carrier';

  it('should find coordinates', () => {
    const div = document.createElement('div');
    div.classList.add('ocean');
    div.id = 'atwo';
    div.style.backgroundColor = 'green';
    document.body.appendChild(div);
  
    findPos(ship, obj)
    expect(obj[ship].position).toEqual( ['atwo'] );
  });

  it('should save coordinates', () => {
    obj['carrier'].position = [];
    const pos = 'aone';
    savePos(ship, pos, obj)
    expect(obj[ship].position).toEqual( ['aone'] )
  });
});
