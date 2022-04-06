(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(81),r=t.n(o),i=t(645),s=t.n(i)()(r());s.push([e.id,"* {\n  /* variables */\n  --width: 450px;\n  /* \n   * --ship-square is also (450 / 12) but doesnt \n   * calculate cleanly when using calc() \n   */ \n  --ship-square: 37.333px;\n\n  /* border: 1px solid yellow; */\n}\nbody{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  background-color: rgb(4, 18, 41);\n  color: white;\n  user-select: none;\n  gap: 1rem;\n}\n/* title and avatar CSS */\n.header {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  text-align: center;\n  font-size: 1.3rem;\n  text-decoration: none;\n  color: inherit;\n  margin: .5rem;\n}\n.title-text {\n  font-size: 2rem;\n}\n.avatar {\n  border-radius: 50%;\n  height: 2rem;\n  border: 1px solid;\n}\n\n/* board css */\n.half, .targetCont, .peg, .square {\n  box-sizing: border-box;\n  border: 1px solid rgba(255, 255, 255, 0.250);\n}\n.half {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 750px;\n\n  /* board width shared with targetCont height for 1:1 aspect ratio */\n  height: var(--width);\n}\n.targetCont {\n  width: var(--width);\n  height: var(--width);\n  display: flex;\n  flex-flow: wrap;\n  flex-shrink: 0;\n}\n.side {\n  width: 100%;\n  height: 100%;\n}\n.storage-container{\n  display: flex;\n  justify-content: space-evenly;\n}\n.ship-storage-left, .ship-storage-right {\n  position: relative;\n  width: var(--ship-square);\n  height: 100%;\n}\n\n.destroyer,\n.carrier,\n.battleship,\n.cruiser,\n.submarine {\n  position: absolute;\n}\n\n/* top found by using flex and using a ruler to find pixel postion */\n.battleship {top: calc(27/448 * 100%)}\n.cruiser {top: calc(207/448 * 100%)}\n.destroyer {top: calc(346/448 * 100%)}\n.carrier {top: calc(50/448 * 100%)}\n.submarine {top: calc(287/448 * 100%)}\n\n\n.blank {\n  box-sizing: border-box;\n  border: 1px solid rgba(255, 255, 255, 0.150);\n}\n.square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100% / 12);\n  width: calc(100% / 12);\n  position: relative;\n}\n.ship-square {\n  box-sizing: border-box;\n  border: 1px solid;\n  height: var(--ship-square);\n  width: var(--ship-square);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(196, 255, 237, 0.233);\n}\n.horizontal {\n  display: flex;\n}\n\n/* pegs */\n.peg-cont {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.white-cont {\n  height: 75%;\n}\n.red-cont {\n  height: 20%;\n}\n.white-peg-cont, .red-peg-cont {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n.white-peg {\n  border: 1px solid;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  margin: -.62rem -.62rem;\n  background-color: rgb(218, 218, 218);\n}\n.red-peg {\n  border: 1px solid;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: black;\n  margin: -.62rem -.68rem;\n  background-color: rgb(149, 22, 22);\n}\n.inserted {\n  width: 2rem;\n  height: 2rem;\n  z-index: -1;\n  background-color: lightgray;\n  border-radius: 50%;\n  border: 1px solid black;\n}\n.on-water {\n  width: 2rem;\n  height: 2rem;\n  z-index: -2;\n  background-color: #c4ffed3b;\n  border: 1px solid;\n  position: absolute;\n  background-color: rgba(255, 0, 0, 0.4);\n}\n.start-cont {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(102, 51, 153, 0.342);\n  width: 100%;\n  height: 90%;\n  margin: 20px;\n  gap: 20px;\n}\nbutton {\n  background-color: transparent;\n  color: white;\n  width: 90%;\n  border: 1px solid;\n  height: 3rem;\n  transition: 550ms;\n}\nbutton:hover {\n  box-shadow: -2px 4px rgba(88, 88, 88, 0.712);\n  transform: translateY(-3px);\n}",""]);const l=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(s[c]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},s=[],l=0;l<e.length;l++){var c=e[l],a=o.base?c[0]+o.base:c[0],d=i[a]||0,u="".concat(a," ").concat(d);i[a]=d+1;var p=t(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(g);else{var f=r(g,o);o.byIndex=l,n.splice(l,0,{identifier:u,updater:f,references:1})}s.push(u)}return s}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var l=t(i[s]);n[l].references--}for(var c=o(e,r),a=0;a<i.length;a++){var d=t(i[a]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),s=t.n(i),l=t(565),c=t.n(l),a=t(216),d=t.n(a),u=t(589),p=t.n(u),g=t(426),f={};function h(e){return{length:e,hit:0,sunk:!1,orientation:"v",position:[]}}f.styleTagTransform=p(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),n()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;const m={p1:{carrier:h(5),battleship:h(4),cruiser:h(3),submarine:h(3),destroyer:h(2)},p2:{carrier:h(5),battleship:h(4),cruiser:h(3),submarine:h(3),destroyer:h(2)}};function y(e,n,t){let o,r;for(const n in t.p1){let t=e.target.id;n===t.substring(0,t.length-2)&&(o=t,r=t.substring(0,t.length-2))}let i=!1,s=e.clientX-n.getBoundingClientRect().left,l=e.clientY-n.getBoundingClientRect().top;function c(e,t){n.style.left=e-s+"px",n.style.top=t-l+"px"}document.body.append(n),document.querySelector(".start-cont")||function(){let e=document.querySelector(".ship-storage-left"),n=document.querySelector(".ship-storage-right");if(0===e.childNodes.length&&0===n.childNodes.length){const e=document.querySelector(".side.storage-container");console.log(e.childNodes);for(let n=0;n<e.childNodes.length;n+=1)e.childNodes[n].style.display="none";!function(e){const n=document.createElement("div");n.classList.add("start-cont");const t=document.createElement("button");t.textContent="2 Players",t.addEventListener("click",(()=>{v(m.p1),x()}));const o=document.createElement("button");o.textContent="Player vs CPU",o.addEventListener("click",(()=>{v(m.p1),x()})),n.append(t,o),e.appendChild(n)}(e)}}(),c(e.pageX,e.pageY);let a="";function d(e){i=!0,c(e.pageX,e.pageY),n.style.display="none";let s=document.elementFromPoint(e.clientX,e.clientY);if(s.classList.contains("ocean")&&s.id&&s.id!==a){a=s.id,w(),C(s,"ocean"),t.p1[r].position=[];for(const e in t.p1)e===r&&q(o,s,t);$(r,t),b(r,t)}for(const e in t.p1)if(r===e)return"v"===t.p1[r].orientation?n.style.display="initial":n.style.display="flex"}document.addEventListener("mousemove",d),n.onmouseup=function(){if(!i){t.p1[r].position=[],$(r,t),b(r,t);const o=e.target.parentNode.classList[0];document.querySelector(`.${o}`).classList.toggle("horizontal");for(const e in t.p1)e===o&&("v"===t.p1[o].orientation?(t.p1[o].orientation="h",n.style.display="flex"):(t.p1[o].orientation="v",n.style.display="initial"))}w(),document.removeEventListener("mousemove",d),i=!1,n.onmouseup=null},n.ondragstart=function(){return!1}}function b(e,n){const t=n.p1[e],o=document.querySelector(`.${e}`);t.length===t.position.length&&(o.style.backgroundColor="transparent"),t.length!==t.position.length&&(t.position=[],o.style.backgroundColor="rgba(255, 0, 0, 0.7)")}function v(e){for(const n in e)if(e[n].position.length)for(let t=0;t<e[n].position.length;t+=1){const o=document.createElement("div");o.classList.add("on-water",`${n}-sailed`);const r=document.querySelector(`.ocean.${e[n].position[t]}`);0===r.childNodes.length&&r.appendChild(o)}}function x(){for(let e in m.p1)if(console.log(m.p1[e]),document.querySelector(`.${e}-sailed`)){let n=document.querySelector(`.${e}`);n&&n.remove()}}function C(e,n){const t=e.id.substring(0,1),o=document.querySelectorAll(`.${n}.${t}`);for(let e=0;e<o.length;e+=1)o[e].style.backgroundColor="#90ee9050";const r=e.id.slice(1),i=document.querySelectorAll(`.${n}.${r}`);for(let e=0;e<i.length;e+=1)i[e].style.backgroundColor="#90ee9050"}function w(){const e=document.querySelectorAll(".square");for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}function q(e,n,t){const o=e.substring(0,e.length-2),r=e.slice(-1),i=t.p1[o].length,s=S(n.id.substring(1)),l=n.id.substring(0,1),c=i-r;if("v"===t.p1[o].orientation){for(let e=0;e<=c;e+=1){const n=k(l)+e,o=k(n),r=S(s),i=document.querySelector(`.${o}${r}.ocean`);if(i){i.style.backgroundColor="green";for(let e in t.p1)for(let n=0;n<t.p1[e].position.length;n+=1)t.p1[e].position[n]===`${o}${r}`&&(i.style.backgroundColor="red")}}for(let e=0;e<r;e+=1){const n=k(l)-e,o=k(n),r=S(s),i=document.querySelector(`.${o}${r}.ocean`);if(i){i.style.backgroundColor="green";for(let e in t.p1)for(let n=0;n<t.p1[e].position.length;n+=1)t.p1[e].position[n]===`${o}${r}`&&(i.style.backgroundColor="red")}}}if("h"===t.p1[o].orientation){for(let e=0;e<=c;e+=1){const n=S(s+e),o=document.querySelector(`.${l}${n}.ocean`);if(o){o.style.backgroundColor="green";for(let e in t.p1)for(let r=0;r<t.p1[e].position.length;r+=1)t.p1[e].position[r]===`${l}${n}`&&(o.style.backgroundColor="red")}}for(let e=0;e<r;e+=1){const n=S(s-e),o=document.querySelector(`.${l}${n}.ocean`);if(o){o.style.backgroundColor="green";for(let e in t.p1)for(let r=0;r<t.p1[e].position.length;r+=1)t.p1[e].position[r]===`${l}${n}`&&(o.style.backgroundColor="red")}}}}function k(e){const n=[["a",1],["b",2],["c",3],["d",4],["e",5],["f",6],["g",7],["h",8],["i",9],["j",10]];for(const[t,o]of n){if("string"==typeof e&&e===t)return o;if("number"==typeof e&&e===o)return t}}function S(e){const n={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10};for(let t in n){if("string"==typeof e&&e===t)return n[t];if("number"==typeof e&&e===n[t])return t}}function $(e,n){const t=document.querySelectorAll(".ocean");for(let o=0;o<t.length;o+=1)"green"===t[o].style.backgroundColor&&L(e,t[o].id,n)}function L(e,n,t){t.p1[e].position.push(n)}function E(e,n){const t=document.querySelector(".white-peg-cont");for(let n=0;n<e;n+=1){const e=document.createElement("div");e.classList.add("white-peg"),e.textContent=" ",e.addEventListener("mousedown",(n=>A(n,e))),t.appendChild(e)}const o=document.querySelector(".red-peg-cont");for(let e=0;e<n;e+=1){const e=document.createElement("div");e.classList.add("red-peg"),e.textContent=" ",e.addEventListener("mousedown",(n=>A(n,e))),o.appendChild(e)}}function A(e,n){function t(e,t){n.style.left=e-n.offsetWidth/2+"px",n.style.top=t-n.offsetHeight/2+"px"}n.style.position="absolute",n.style.margin=0,document.body.append(n),t(e.pageX,e.pageY);let o="";function r(e){t(e.pageX,e.pageY),n.style.display="none";let r=document.elementFromPoint(e.clientX,e.clientY);r.id&&r.id!==o&&(o=r.id,w(),r.style.backgroundColor="green",r.classList.contains("ocean")&&C(r,"ocean"),r.classList.contains("target")&&C(r,"target")),n.style.display="initial"}document.addEventListener("mousemove",r);const i=e.target;n.onmouseup=function(){const e=function(){let e=document.querySelectorAll(".square");for(let n=0;n<e.length;n+=1)if("green"===e[n].style.backgroundColor){const t=e[n].classList,o=t[2];return`.${t[0]}.${o}`}}();let t=document.querySelector(e);"absolute"===document.body.lastChild.style.position&&t&&t.childNodes.length<2&&(function(e,n){const t=document.querySelector(e);if(console.log(t),console.log(t.childNodes.length),t&&t.childNodes.length<2){const e=document.createElement("div");e.classList.add("inserted"),"white-peg"===n.className?(e.style.backgroundColor="rgb(218, 218, 218)",e.id="white"):(e.style.backgroundColor="rgb(149, 22, 22)",e.id="red"),t.appendChild(e),t.addEventListener("click",(n=>{const o=n.target.childNodes[0].id;"white"===o&&E(1,0),"red"===o&&E(0,1),t.removeChild(e)}),{once:!0})}}(e,i),document.body.lastChild.remove()),w(),document.removeEventListener("mousemove",r),n.onmouseup=null}}!function(e){for(const n in e){const t=document.createElement("div");t.classList.add(n),t.addEventListener("mousedown",(e=>y(e,t,m)));for(let o=1;o<=e[n].length;o+=1){const e=document.createElement("div");e.classList.add("ship-square"),e.id=`${n}-${o}`,e.textContent=" ",t.appendChild(e)}const o=document.querySelector(".ship-storage-left"),r=document.querySelector(".ship-storage-right");"battleship"===t.className||"cruiser"===t.className||"destroyer"===t.className?o.appendChild(t):r.appendChild(t)}}(m.p1),function(){const e=document.querySelectorAll(".target.square");for(let n=0;n<e.length;n+=1)if(e[n].id){const t=e[n].id.slice(1);e[n].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.target.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),e[n].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.target.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}));const o=e[n].id.substring(0,1);e[n].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.target.${o}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),e[n].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.target.${o}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}))}const n=document.querySelectorAll(".ocean.square");for(let e=0;e<n.length;e+=1)if(n[e].id){const t=n[e].id.slice(1);n[e].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.ocean.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),n[e].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.ocean.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}));const o=n[e].id.substring(0,1);n[e].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.ocean.${o}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),n[e].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.ocean.${o}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}))}}(),E(166,34)})()})();