import './css/style.css';
import highlightSides from './DOM/highlighting/highlightSides'
import targetHighlight from './DOM/highlighting/targetHighlight';
import addShip from './DOM/ship/addShip'
import ship from './data/constructor'
import addMarkers from './DOM/markers/addMarkers'
import cpu from './cpu/01.cpu';
import sendLog from './cpu/03.sendLog';
import fireMissile from './cpu/03.fireMissile';

// cell highlighting to eaily identify row and column
highlightSides();

// target highlight
targetHighlight();

// add ships to gameboard
addShip(ship.p1);

// add markers to board
addMarkers(2*(100-17), 17*2);

// CPU places its ships on the board
cpu(ship);



// add battle log
const cont = document.querySelectorAll('.side.instructions');

const battleCont = document.createElement('div');
battleCont.classList.add('battle-cont');

const title = document.createElement('div');
title.classList.add('battle-title');

const log = document.createElement('div');
log.classList.add('battle-log');
const logtxt1 = document.createElement('div');
logtxt1.classList.add('log-txt');
const logtxt2 = document.createElement('div');
logtxt2.classList.add('log-txt');
log.append(logtxt1, logtxt2);
battleCont.append(title, log);

cont[1].appendChild(battleCont);

// add fire button
const fireCont = document.createElement('div');
fireCont.classList.add('fire-cont')
const fireBtn = document.createElement('button');
fireBtn.classList.add('fire-button');
fireBtn.addEventListener('mousedown', () => {
  let response = fireMissile(ship);
  sendLog(response);
});
const firetxt1 = document.createElement('div');
firetxt1.classList.add('fire-txt');
firetxt1.textContent = 'FIRE'
const firetxt2 = document.createElement('div');
firetxt2.classList.add('fire-txt');
// firetxt2.textContent = 'MISSILE';
fireBtn.append(firetxt1, firetxt2);
fireCont.appendChild(fireBtn);
cont[1].appendChild(fireCont);