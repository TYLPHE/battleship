(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"/* *{border: 1px solid;} */\nbody{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  background-color: rgb(4, 18, 41);\n  color: white;\n  user-select: none;\n  gap: 1rem;\n}\n/* title and avatar CSS */\n.header {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  text-align: center;\n  font-size: 1.3rem;\n  text-decoration: none;\n  color: inherit;\n  margin: .5rem;\n}\n.title-text {\n  font-size: 2rem;\n}\n.avatar {\n  border-radius: 50%;\n  height: 2rem;\n  border: 1px solid;\n}\n\n/* board css */\n.half, .targetCont, .peg, .square {\n  box-sizing: border-box;\n  border: 1px solid;\n}\n.half {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 800px;\n\n  /* board width shared with targetCont height for 1:1 aspect ratio */\n  --width: 450px;\n  height: var(--width);\n}\n.targetCont {\n  width: var(--width);\n  height: var(--width);\n  display: flex;\n  flex-flow: wrap;\n  flex-shrink: 0;\n}\n.side {\n  width: 100%;\n  height: 100%;\n}\n.pegCont {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.redCont, .whiteCont {\n  height: 40%;\n  text-align: center;\n}\n\n.blank {\n  box-sizing: border-box;\n  border: 1px solid rgba(255, 255, 255, 0.192);\n}\n.square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100% / 12);\n  width: calc(100% / 12);\n}\n.ship-storage{\n  display: flex;\n  flex-direction: column;\n}\n\n.carrier {\n  position: absolute;\n}\n.ship-square {\n  box-sizing: border-box;\n  border: 1px solid;\n  height: 37.333px;\n  width: 37.333px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",""]);const s=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var p=t(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var u=t(a[c]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),l=t.n(s),c=t(216),u=t.n(c),d=t(589),p=t.n(d),f=t(426),h={};function m(e,n,t){return{player:e,name:n,length:t,hit:0,sunk:!1}}h.styleTagTransform=p(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,m("p1","carrier",5),m("p1","battleship",4),m("p1","battleship",3),m("p1","battleship",3),m("p1","battleship",2);const g=document.querySelectorAll(".target.square");for(let e=0;e<g.length;e+=1)if(g[e].id){const n=g[e].id.slice(1);g[e].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.target.${n}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),g[e].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.target.${n}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}));const t=g[e].id.substring(0,1);g[e].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.target.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),g[e].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.target.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}))}const v=document.querySelectorAll(".ocean.square");for(let e=0;e<v.length;e+=1)if(v[e].id){const n=v[e].id.slice(1);v[e].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.ocean.${n}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),v[e].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.ocean.${n}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}));const t=v[e].id.substring(0,1);v[e].addEventListener("mouseover",(()=>{const e=document.querySelectorAll(`.ocean.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="#90ee9050"})),v[e].addEventListener("mouseout",(()=>{const e=document.querySelectorAll(`.ocean.${t}`);for(let n=0;n<e.length;n+=1)e[n].style.backgroundColor="transparent"}))}!function(e){var n=0,t=0,r=0,o=0;function a(e){(e=e||window.event).preventDefault(),r=e.clientX,o=e.clientY,document.onmouseup=s,document.onmousemove=i}function i(a){(a=a||window.event).preventDefault(),n=r-a.clientX,t=o-a.clientY,r=a.clientX,o=a.clientY,e.style.top=e.offsetTop-t+"px",e.style.left=e.offsetLeft-n+"px"}function s(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=a:e.onmousedown=a}(document.getElementById("mydiv"))})()})();