(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),s=t.n(i)()(o());s.push([e.id,"* {\n  /* variables */\n  --width: 450px;\n  /* \n   * --ship-square is also (450 / 12) but doesnt \n   * calculate cleanly when using calc() \n   */ \n  --ship-square: 37.333px;\n\n  /* border: 1px solid yellow; */\n}\nbody{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  background-color: rgb(4, 18, 41);\n  color: white;\n  user-select: none;\n  gap: 1rem;\n}\n/* title and avatar CSS */\n.header {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  text-align: center;\n  font-size: 1.3rem;\n  text-decoration: none;\n  color: inherit;\n  margin: .5rem;\n}\n.title-text {\n  font-size: 2rem;\n}\n.avatar {\n  border-radius: 50%;\n  height: 2rem;\n  border: 1px solid;\n}\n\n/* board css */\n.half, .targetCont, .peg, .square {\n  box-sizing: border-box;\n  border: 1px solid rgba(255, 255, 255, 0.250);\n}\n.half {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 750px;\n\n  /* board width shared with targetCont height for 1:1 aspect ratio */\n  height: var(--width);\n}\n.targetCont {\n  width: var(--width);\n  height: var(--width);\n  display: flex;\n  flex-flow: wrap;\n  flex-shrink: 0;\n}\n.side {\n  width: 100%;\n  height: 100%;\n}\n.storage-container{\n  display: flex;\n  justify-content: space-evenly;\n}\n.ship-storage-left, .ship-storage-right {\n  /* display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center; */\n  \n  position: relative;\n  width: var(--ship-square);\n  height: 100%;\n}\n\n.destroyer,\n.carrier,\n.battleship,\n.cruiser,\n.submarine {\n  position: absolute;\n}\n\n/* top found by using flex and using a ruler to find pixel postion */\n.battleship {top: calc(27/448 * 100%)}\n.cruiser {top: calc(207/448 * 100%)}\n.destroyer {top: calc(346/448 * 100%)}\n.carrier {top: calc(50/448 * 100%)}\n.submarine {top: calc(287/448 * 100%)}\n\n.pegCont {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.redCont, .whiteCont {\n  height: 40%;\n  text-align: center;\n}\n\n.blank {\n  box-sizing: border-box;\n  border: 1px solid rgba(255, 255, 255, 0.150);\n}\n.square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100% / 12);\n  width: calc(100% / 12);\n}\n.ship-square {\n  box-sizing: border-box;\n  border: 1px solid;\n  height: var(--ship-square);\n  width: var(--ship-square);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(196, 255, 237, 0.233);\n}\n",""]);const a=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var g=o(f,r);r.byIndex=a,n.splice(a,0,{identifier:d,updater:g,references:1})}s.push(d)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=t(i[s]);n[a].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),s=t.n(i),a=t(565),c=t.n(a),l=t(216),u=t.n(l),d=t(589),p=t.n(d),f=t(426),g={};function h(e){return{length:e,hit:0,sunk:!1,orientation:"v"}}g.styleTagTransform=p(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;const m={p1:{carrier:h(5),battleship:h(4),cruiser:h(3),submarine:h(3),destroyer:h(2)},p2:{carrier:h(5),battleship:h(4),cruiser:h(3),submarine:h(3),destroyer:h(2)}};function y(e){const n=e.id.substring(0,1),t=document.querySelectorAll(`.ocean.${n}`);for(let e=0;e<t.length;e+=1)t[e].style.backgroundColor="#90ee9050";const r=e.id.slice(1),o=document.querySelectorAll(`.ocean.${r}`);for(let e=0;e<o.length;e+=1)o[e].style.backgroundColor="#90ee9050"}function v(){const e=document.querySelectorAll(".ocean.square");for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}function b(e,n){const t=e.substring(0,e.length-2),r=e.slice(-1),o=m.p1[t].length,i=C(n.id.substring(1)),s=n.id.substring(0,1),a=o-r;if("v"===m.p1[t].orientation){for(let e=0;e<=a;e+=1){const n=x(s)+e,t=x(n),r=C(i);document.querySelector(`.${t}${r}.ocean`).style.backgroundColor="red"}for(let e=0;e<r;e+=1){const n=x(s)-e,t=x(n),r=C(i);document.querySelector(`.${t}${r}.ocean`).style.backgroundColor="red"}}}function x(e){const n=[["a",1],["b",2],["c",3],["d",4],["e",5],["f",6],["g",7],["h",8],["i",9],["j",10]];for(const[t,r]of n){if("string"==typeof e&&e===t)return r;if("number"==typeof e&&e===r)return t}}function C(e){const n={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10};for(let t in n){if("string"==typeof e&&e===t)return n[t];if("number"==typeof e&&e===n[t])return t}}!function({p1:e}){for(const n in e){const t=document.createElement("div");t.classList.add(n);for(let r=1;r<=e[n].length;r+=1){const e=document.createElement("div");e.classList.add("ship-square"),e.id=`${n}-${r}`,e.textContent=r,t.appendChild(e)}const r=document.querySelector(".ship-storage-left"),o=document.querySelector(".ship-storage-right");"battleship"===t.className||"cruiser"===t.className||"destroyer"===t.className?r.appendChild(t):o.appendChild(t)}}(m),function(){const e=document.querySelectorAll(".target.square");for(let n=0;n<e.length;n+=1)if(e[n].id){const t=e[n].id.slice(1);e[n].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.target.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),e[n].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.target.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}));const r=e[n].id.substring(0,1);e[n].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.target.${r}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),e[n].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.target.${r}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}))}const n=document.querySelectorAll(".ocean.square");for(let e=0;e<n.length;e+=1)if(n[e].id){const t=n[e].id.slice(1);n[e].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.ocean.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),n[e].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.ocean.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}));const r=n[e].id.substring(0,1);n[e].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.ocean.${r}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),n[e].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.ocean.${r}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}))}}(),function({p1:e}){for(const n in e){const e=document.querySelector(`.${n}`);e.onmousedown=function(n){let t=n.clientX-e.getBoundingClientRect().left,r=n.clientY-e.getBoundingClientRect().top;function o(n,o){e.style.left=n-t+"px",e.style.top=o-r+"px"}function i(n){o(n.pageX,n.pageY),e.hidden=!0;let t=document.elementFromPoint(n.clientX,n.clientY),r="";if(t.id&&t.classList.contains("ocean")&&(!r||t.id!==r)){r=t.id,v(),y(t);const e=n.target.id;for(const n in m.p1)n===e.substring(0,e.length-2)&&b(e,t)}e.hidden=!1}document.body.append(e),o(n.pageX,n.pageY),i(n),document.addEventListener("mousemove",i),e.onmouseup=function(){v(),document.removeEventListener("mousemove",i),e.onmouseup=null}},e.ondragstart=function(){return!1}}}(m)})()})();