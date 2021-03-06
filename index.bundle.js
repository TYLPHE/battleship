/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  /* variables */\\n  --width: 450px;\\n  /* \\n   * --ship-square is also (450 / 12) but doesnt \\n   * calculate cleanly when using calc() \\n   */ \\n  --ship-square: 37.333px;\\n\\n  /* border: 1px solid yellow; */\\n}\\nbody{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0;\\n  /* background-color: rgb(4, 18, 41); */\\n  background-color: black;\\n  color: white;\\n  user-select: none;\\n  gap: 1rem;\\n}\\n/* title and avatar CSS */\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n}\\n.title {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.5rem;\\n  text-align: center;\\n  font-size: 1.3rem;\\n  text-decoration: none;\\n  color: inherit;\\n  margin: .5rem;\\n}\\n.title-text {\\n  font-size: 2rem;\\n}\\n.avatar {\\n  border-radius: 50%;\\n  height: 2rem;\\n}\\n\\n/* board css */\\n.half, .targetCont, .peg, .square {\\n  box-sizing: border-box;\\n  border: 1px solid rgba(255, 255, 255, 0.250);\\n}\\n.half {\\n  z-index: 0;\\n  background-color: rgb(4, 18, 41);\\n  border-radius: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 750px;\\n  position: relative;\\n  /* board width shared with targetCont height for 1:1 aspect ratio */\\n  height: var(--width);\\n}\\n.targetCont {\\n  width: var(--width);\\n  height: var(--width);\\n  display: flex;\\n  flex-flow: wrap;\\n  flex-shrink: 0;\\n}\\n.side {\\n  width: 100%;\\n  height: 100%;\\n}\\n.storage-container{\\n  display: flex;\\n  justify-content: space-evenly;\\n\\n}\\n.ship-storage-left, .ship-storage-right {\\n  position: relative;\\n  width: var(--ship-square);\\n  height: 100%;\\n}\\n\\n.destroyer,\\n.carrier,\\n.battleship,\\n.cruiser,\\n.submarine {\\n  position: absolute;\\n}\\n\\n/* top found by using flex and using a ruler to find pixel postion */\\n.battleship {top: calc(27/448 * 100%)}\\n.cruiser {top: calc(207/448 * 100%)}\\n.destroyer {top: calc(346/448 * 100%)}\\n.carrier {top: calc(50/448 * 100%)}\\n.submarine {top: calc(287/448 * 100%)}\\n\\n\\n.blank {\\n  box-sizing: border-box;\\n  border: 1px solid rgba(255, 255, 255, 0.150);\\n}\\n.square {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: calc(100% / 12);\\n  width: calc(100% / 12);\\n  position: relative;\\n}\\n.ship-square {\\n  border: 1px solid rgba(255, 255, 255, 0.493);\\n  box-sizing: border-box;\\n  height: var(--ship-square);\\n  width: var(--ship-square);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgba(192, 255, 236, 0.335);\\n}\\n.horizontal {\\n  display: flex;\\n}\\n\\n/* pegs */\\n.peg-cont {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n}\\n\\n.white-cont {\\n  height: 75%;\\n}\\n.red-cont {\\n  height: 20%;\\n}\\n.white-peg-cont, .red-peg-cont {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 1rem;\\n}\\n.white-peg {\\n  border: 1px solid;\\n  width: 2rem;\\n  height: 2rem;\\n  border-radius: 50%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: black;\\n  margin: -.65rem -.65rem;\\n  background-color: rgb(218, 218, 218);\\n}\\n.red-peg {\\n  border: 1px solid;\\n  width: 2rem;\\n  height: 2rem;\\n  border-radius: 50%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: black;\\n  margin: -.7rem -.7rem;\\n  background-color: rgb(149, 22, 22);\\n}\\n.inserted {\\n  width: 2rem;\\n  height: 2rem;\\n  z-index: 1;\\n  background-color: lightgray;\\n  border-radius: 50%;\\n  border: 1px solid black;\\n}\\n.on-water {\\n  width: 2rem;\\n  height: 2rem;\\n  z-index: -2;\\n  background-color: #c4ffed3b;\\n  border: 1px solid;\\n  position: absolute;\\n  background-color: rgba(0, 255, 128, 0.233);\\n}\\n.start-cont {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  /* background-color: rgba(102, 51, 153, 0.158); */\\n  width: 100%;\\n  height: 90%;\\n  margin: 20px;\\n  gap: 20px;\\n}\\n.start-button {\\n  background-color: transparent;\\n  color: white;\\n  width: 90%;\\n  border: 1px solid;\\n  height: 6rem;\\n  transition: 550ms;\\n}\\n.start-button:hover {\\n  box-shadow: 1px 4px rgba(88, 88, 88, 0.712);\\n  transform: translateY(-4px);\\n}\\n.message-window {\\n  position: absolute;\\n  border: 1px solid;\\n  width: 250px;\\n  height: 250px;\\n  padding: 2rem;\\n  background-color: rgba(13, 22, 24, 0.726);\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n.message {\\n  text-align: left;\\n  text-transform: capitalize;\\n}\\n\\n.cpu-carrier {\\n  background-color: rgb(66, 0, 66);\\n}\\n.cpu-battleship {\\n  background-color: rgb(100, 0, 100);\\n}\\n.cpu-cruiser {\\n  background-color: rgb(138, 0, 138);\\n}\\n.cpu-submarine {\\n  background-color: rgb(182, 0, 182);\\n}\\n.cpu-destroyer {\\n  background-color: rgb(233, 0, 233);\\n}\\n.fire-cont {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.fire-button {\\n  height: 120px;\\n  width: 120px;\\n  border-radius: 25%;\\n  background-color: rgb(182, 0, 0);\\n}\\n.fire-txt {\\n  color: white;\\n  font-weight: bold;\\n  font-size: 2rem;\\n}\\n.battle-cont {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  border: 1px solid white;\\n  border-radius: 25%;\\n}\\n.battle-log {\\n  height: 120px;\\n  width: 120px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n.side.instructions.right-log {\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n.log-txt{\\n  font-size: 1.5rem;\\n  text-transform: uppercase;\\n}\\n.targeting {\\n  background-color: rgb(221, 130, 25);\\n  animation: blink 550ms infinite;\\n}\\n@keyframes blink {\\n  from {\\n    background-color: rgba(0, 255, 255, 0.80);\\n  } 50% {\\n    background-color: rgba(0, 255, 255, 0.171);\\n  } to {\\n    background-color: rgba(0, 255, 255, 0.80);\\n  }\\n}\\n.dotted {\\n  border-radius: 50%;\\n  border: 1px dashed;\\n}\\n.cpu-graveyard {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n}\\n.cpu-ships-title {\\n  text-align: center;\\n  padding: 10px;\\n}\\n.cpu-grave-cont {\\n  height: 90%;;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM/cpuDOM/battleLog.js":
/*!*************************************!*\
  !*** ./src/DOM/cpuDOM/battleLog.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// battle log tells player what square they picked\n\nconst shipLengths = {\n  cpucarrier: 5,\n  cpubattleship: 4,\n  cpucruiser: 3,\n  cpusubmarine: 3,\n  cpudestroyer: 2,\n}\nfunction battleLog() {\n  const cont = document.querySelectorAll('.side.instructions');\n  \n  const battleCont = document.createElement('div');\n  battleCont.classList.add('battle-cont');\n  \n  const title = document.createElement('div');\n  title.classList.add('battle-title');\n  \n  const log = document.createElement('div');\n  log.classList.add('battle-log');\n  const logtxt1 = document.createElement('div');\n  logtxt1.classList.add('log-txt');\n  const logtxt2 = document.createElement('div');\n  logtxt2.classList.add('log-txt');\n  log.append(logtxt1, logtxt2);\n  battleCont.append(title, log);\n  \n  cont[1].appendChild(battleCont);\n\n  const cpuShipsTitle = document.createElement('div');\n  cpuShipsTitle.classList.add('cpu-ships-title');\n  cpuShipsTitle.textContent = 'CPU Ships';\n\n  const storageCont = document.createElement('div');\n  storageCont.classList.add('storage-container', 'cpu-grave-cont');\n\n\n  const storageLeft = document.createElement('div');\n  storageLeft.classList.add('ship-storage-left', 'cpu-graveyard');\n  const storageRight = document.createElement('div');\n  storageRight.classList.add('ship-storage-right', 'cpu-graveyard');\n  \n  storageCont.append(storageLeft, storageRight);\n  cont[0].append(cpuShipsTitle, storageCont);\n\n  for (let key in shipLengths) {\n    const ship = document.createElement('div');\n    ship.classList.add(key);\n    for (let i = 0; i < shipLengths[key]; i += 1) {\n      const square = document.createElement('div');\n      square.classList.add('ship-square');\n      ship.appendChild(square);\n    }\n    if (key === 'cpucarrier' || key === 'cpucruiser') {\n      storageRight.appendChild(ship);\n    } else {\n      storageLeft.appendChild(ship);\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (battleLog);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/cpuDOM/battleLog.js?");

/***/ }),

/***/ "./src/DOM/cpuDOM/fireBtn.js":
/*!***********************************!*\
  !*** ./src/DOM/cpuDOM/fireBtn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cpu_cpuLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cpu/cpuLogic */ \"./src/cpu/cpuLogic.js\");\n/* harmony import */ var _gameLogic_hitStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gameLogic/hitStatus */ \"./src/gameLogic/hitStatus.js\");\n/* harmony import */ var _gameLogic_registerHit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../gameLogic/registerHit */ \"./src/gameLogic/registerHit.js\");\n/* harmony import */ var _gameLogic_sendLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gameLogic/sendLog */ \"./src/gameLogic/sendLog.js\");\n// add fire button\n\n\n\n\n\nfunction fireBtn(obj) {\n  const cont = document.querySelectorAll('.side.instructions');\n\n  const fireCont = document.createElement('div');\n  fireCont.classList.add('fire-cont')\n  const fireBtn = document.createElement('button');\n  fireBtn.classList.add('fire-button');\n  const firetxt1 = document.createElement('div');\n  firetxt1.classList.add('fire-txt');\n  firetxt1.textContent = 'FIRE'\n  const firetxt2 = document.createElement('div');\n  firetxt2.classList.add('fire-txt');\n  fireBtn.append(firetxt1, firetxt2);\n  fireCont.appendChild(fireBtn);\n  cont[1].appendChild(fireCont);\n  \n  fireBtn.addEventListener('mousedown', () => {\n    let response = (0,_gameLogic_hitStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj, 'player');\n    if (response) {\n      (0,_gameLogic_sendLog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(response);\n      if (response.status === 'hit!') {\n        (0,_gameLogic_registerHit__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj, response, 'cpu');\n      }\n      // add indicator to show where to place marker\n      // 'dotted' is removed in addMarkers.js\n      let markSquare = document.querySelector(`#${response.shot}`);\n      markSquare.classList.add('dotted');\n    }\n\n\n    // test cpu logic when pressing fire btn\n    // cpuLogic(obj);\n\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fireBtn);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/cpuDOM/fireBtn.js?");

/***/ }),

/***/ "./src/DOM/cpuDOM/markBoard.js":
/*!*************************************!*\
  !*** ./src/DOM/cpuDOM/markBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _markers_insertMarker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../markers/insertMarker */ \"./src/DOM/markers/insertMarker.js\");\n// cpu shot at player. this function pulls out a marker from board\n// and places it on the player's bottom half of the board\n\n\n\nfunction markBoard(cpuStatus) {\n  const redMarker = document.querySelector('.red-peg');\n  const whitemarker = document.querySelector('.white-peg');\n  if (cpuStatus.status === 'miss!') {\n    if (whitemarker) whitemarker.remove();\n    (0,_markers_insertMarker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`.${cpuStatus.shot}.ocean`, 'white-peg');\n  }\n  if (cpuStatus.status === 'hit!') {\n    if (redMarker) redMarker.remove();\n    (0,_markers_insertMarker__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`.${cpuStatus.shot}.ocean`, 'red-peg');\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markBoard);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/cpuDOM/markBoard.js?");

/***/ }),

/***/ "./src/DOM/cpuDOM/targetingMode.js":
/*!*****************************************!*\
  !*** ./src/DOM/cpuDOM/targetingMode.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// DOM that adds blinking light to clicked square.\n// player then should click 'FIRE' button to check if they hit\n\nfunction targetingMode() {\n  let c = document.getElementsByClassName('target square');\n  for (let i = 0; i < c.length; i += 1) {\n    if (c[i].id) {\n      c[i].addEventListener('click', (e) => {\n        const wipe = document.querySelectorAll(`.targeting`);\n        if (wipe) {\n          for (let i = 0; i < wipe.length; i += 1) {\n            wipe[i].classList.remove('targeting');\n          }\n        }\n        c[i].classList.add('targeting');\n      });\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (targetingMode);\n\n//# sourceURL=webpack://battleship/./src/DOM/cpuDOM/targetingMode.js?");

/***/ }),

/***/ "./src/DOM/highlighting/addHighlight.js":
/*!**********************************************!*\
  !*** ./src/DOM/highlighting/addHighlight.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// cell highlighting while dragging item\nfunction addHighlight(elem, /*'ocean' or 'target'*/side) {\n  const row = elem.id.substring(0,1);\n  const rowEnd = document.querySelectorAll(`.${side}.${row}`);\n  for (let i = 0; i < rowEnd.length; i += 1) {\n    rowEnd[i].style.backgroundColor = '#90ee9050';\n  }\n\n  const col = elem.id.slice(1);\n  const colEnd = document.querySelectorAll(`.${side}.${col}`);\n  for (let i = 0; i < colEnd.length; i +=1 ) {\n    colEnd[i].style.backgroundColor = '#90ee9050';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHighlight);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/highlighting/addHighlight.js?");

/***/ }),

/***/ "./src/DOM/highlighting/highlightSides.js":
/*!************************************************!*\
  !*** ./src/DOM/highlighting/highlightSides.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction highlightSides() {\n  const targetSquare = document.querySelectorAll('.target.square');\n  for (let i = 0; i < targetSquare.length; i += 1) {\n    if(targetSquare[i].id) {\n      // add and remove column background\n      const column = targetSquare[i].id.slice(1);\n      targetSquare[i].addEventListener('mouseover', () => {\n        const div = document.querySelectorAll(`.target.${column}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = '#90ee9050';\n        }\n      });\n      targetSquare[i].addEventListener('mouseout', () => {\n        const div = document.querySelectorAll(`.target.${column}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = 'transparent';\n        }\n      });\n  \n      // and and remove row background\n      const row = targetSquare[i].id.substring(0,1);\n      targetSquare[i].addEventListener('mouseover', () => {\n        const div = document.querySelectorAll(`.target.${row}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = '#90ee9050';\n        }\n      });\n      targetSquare[i].addEventListener('mouseout', () => {\n        const div = document.querySelectorAll(`.target.${row}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = 'transparent';\n        }\n      });\n    }\n  }\n\n  const oceanSquare = document.querySelectorAll('.ocean.square');\n  for (let i = 0; i < oceanSquare.length; i += 1) {\n    if(oceanSquare[i].id) {\n      // add and remove column background\n      const column = oceanSquare[i].id.slice(1);\n      oceanSquare[i].addEventListener('mouseover', () => {\n        const div = document.querySelectorAll(`.ocean.${column}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = '#90ee9050';\n        }\n      });\n      oceanSquare[i].addEventListener('mouseout', () => {\n        const div = document.querySelectorAll(`.ocean.${column}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = 'transparent';\n        }\n      });\n  \n      // and and remove row background\n      const row = oceanSquare[i].id.substring(0,1);\n      oceanSquare[i].addEventListener('mouseover', () => {\n        const div = document.querySelectorAll(`.ocean.${row}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = '#90ee9050';\n        }\n      });\n      oceanSquare[i].addEventListener('mouseout', () => {\n        const div = document.querySelectorAll(`.ocean.${row}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = 'transparent';\n        }\n      });\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (highlightSides);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/highlighting/highlightSides.js?");

/***/ }),

/***/ "./src/DOM/highlighting/rmHighlight.js":
/*!*********************************************!*\
  !*** ./src/DOM/highlighting/rmHighlight.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// removes all highlighted side squares\nfunction rmHighlight() {\n  const sides = document.querySelectorAll('.square');\n  for (let i = 0; i < sides.length; i += 1) {\n    sides[i].style.backgroundColor = '';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rmHighlight);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/highlighting/rmHighlight.js?");

/***/ }),

/***/ "./src/DOM/markers/addMarkers.js":
/*!***************************************!*\
  !*** ./src/DOM/markers/addMarkers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../highlighting/rmHighlight */ \"./src/DOM/highlighting/rmHighlight.js\");\n/* harmony import */ var _highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../highlighting/addHighlight */ \"./src/DOM/highlighting/addHighlight.js\");\n/* harmony import */ var _insertMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertMarker */ \"./src/DOM/markers/insertMarker.js\");\n/* harmony import */ var _cpu_cpuLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cpu/cpuLogic */ \"./src/cpu/cpuLogic.js\");\n/* harmony import */ var _data_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/constructor */ \"./src/data/constructor.js\");\n/* harmony import */ var _cpu_shipSunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cpu/shipSunk */ \"./src/cpu/shipSunk.js\");\n/* harmony import */ var _cpu_markGraveyard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cpu/markGraveyard */ \"./src/cpu/markGraveyard.js\");\n\n\n\n\n\n\n\n\nfunction addMarkers(white, red) {\n  const whiteElem = document.querySelector('.white-peg-cont');\n  for (let i = 0; i < white; i += 1) {\n    const peg = document.createElement('div');\n    peg.classList.add('white-peg');\n    peg.textContent = ' ';\n    peg.addEventListener('mousedown', (e) => clickDragMarker(e, peg));\n    whiteElem.appendChild(peg);\n  }\n  const redElem = document.querySelector('.red-peg-cont');\n  for (let i = 0; i < red; i += 1) {\n    const peg = document.createElement('div');\n    peg.classList.add('red-peg');\n    peg.textContent = ' ';\n    peg.addEventListener('mousedown', (e) => clickDragMarker(e, peg));\n    redElem.appendChild(peg);\n  }\n}\n\nfunction clickDragMarker(event, elem) {\n  elem.style.position = 'absolute';\n  elem.style.margin = 0;\n  document.body.append(elem);\n\n  moveAt(event.pageX, event.pageY);\n  function moveAt(pageX, pageY) {\n    elem.style.left = pageX - elem.offsetWidth / 2 + 'px';\n    elem.style.top = pageY - elem.offsetHeight / 2 + 'px';\n  }\n\n  let currentId = '';\n  function onMouseMove(event) {\n    moveAt(event.pageX, event.pageY);\n\n    elem.style.display = 'none';\n    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);\n    if (\n      elemBelow.id && \n      elemBelow.id !== currentId && \n      elemBelow.id !== 'white' && \n      elemBelow.id !== 'red'\n      ) {\n      currentId = elemBelow.id;\n      (0,_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      elemBelow.style.backgroundColor = 'green';\n      if (elemBelow.classList.contains('ocean')) {\n        (0,_highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elemBelow, 'ocean');\n      }\n      if (elemBelow.classList.contains('target')) {\n        (0,_highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elemBelow, 'target');\n      }\n    }\n    elem.style.display = 'initial';\n  }\n\n  document.addEventListener('mousemove', onMouseMove);\n\n  const clickedElem = event.target\n  elem.onmouseup = function () {\n    // places marker on the board and removes dragged marker\n    const marked = markerPos();\n    let markedDiv = document.querySelector(marked);\n    if (document.body.lastChild.style.position === 'absolute' &&\n        markedDiv &&\n        markedDiv.childNodes.length < 2) {\n      (0,_insertMarker__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(marked, clickedElem);\n      document.body.lastChild.remove();\n    }\n    (0,_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    document.removeEventListener('mousemove', onMouseMove);\n    \n    // cpu turn logic\n    if (markedDiv && markedDiv.classList.contains('dotted')) {\n      markedDiv.classList.remove('dotted');\n      // clear the player's log to prevent confusion\n      const log = document.querySelectorAll('.log-txt');\n      log[0].textContent = '';\n      log[1].textContent = '';\n\n      // check to see if cpu sunk a boat. if yes, mark ship red\n      (0,_cpu_markGraveyard__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_data_constructor__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n      setTimeout(() => {\n        (0,_cpu_cpuLogic__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_data_constructor__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n      }, 750);\n    }\n\n    elem.onmouseup = null;\n  }\n}\n\nfunction markerPos() {\n  let marked = document.querySelectorAll('.square');\n  for (let i = 0; i < marked.length; i += 1) {\n    if (marked[i].style.backgroundColor === 'green') {\n      const square = marked[i].classList;\n      const position = square[2];\n      const half = square[0];\n      return `.${half}.${position}`;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMarkers);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/markers/addMarkers.js?");

/***/ }),

/***/ "./src/DOM/markers/insertMarker.js":
/*!*****************************************!*\
  !*** ./src/DOM/markers/insertMarker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addMarkers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMarkers */ \"./src/DOM/markers/addMarkers.js\");\n// inserts marker on the board\n\n\nfunction insertMarker(pos, peg){\n  const position = document.querySelector(pos);\n  if (position && position.childNodes.length < 2) {\n    const div = document.createElement('div');\n    div.classList.add('inserted');\n    if (peg.className === 'white-peg' || peg === 'white-peg') {\n      div.style.backgroundColor = 'rgb(218, 218, 218)';\n      div.id = 'white';\n    } else {\n      div.style.backgroundColor = 'rgb(149, 22, 22)';\n      div.id = 'red';\n    }\n\n    function rmPeg(e) {\n      const color = e.target.id; \n      if (color === 'white') {\n        (0,_addMarkers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 0)\n      }\n      if (color === 'red') {\n        (0,_addMarkers__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, 1);\n      }\n      div.remove();\n    }\n\n    div.addEventListener('click', rmPeg, {once : true});    \n    position.appendChild(div);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (insertMarker);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/markers/insertMarker.js?");

/***/ }),

/***/ "./src/DOM/ship/addShip.js":
/*!*********************************!*\
  !*** ./src/DOM/ship/addShip.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clickDrag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickDrag */ \"./src/DOM/ship/clickDrag.js\");\n\n\nfunction addShip(ship) {\n  for (const key in ship.p1) {\n    const shipClass = document.createElement('div');\n    shipClass.classList.add(key);\n    shipClass.addEventListener('mousedown', (e) => (0,_clickDrag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, shipClass, ship));\n    for (let i = 1; i <= ship.p1[key].length; i += 1) {\n      const square = document.createElement('div');\n      square.classList.add('ship-square')\n      square.id = `${key}-${i}`;\n      square.textContent = ' ';\n\n      shipClass.appendChild(square);\n    }\n    const shipStorageL = document.querySelector('.ship-storage-left');\n    const shipStorageR = document.querySelector('.ship-storage-right');\n    if (shipClass.className === 'battleship' ||\n        shipClass.className === 'cruiser' ||\n        shipClass.className === 'destroyer') {\n      shipStorageL.appendChild(shipClass);\n    } else {\n      shipStorageR.appendChild(shipClass);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addShip);\n\n//# sourceURL=webpack://battleship/./src/DOM/ship/addShip.js?");

/***/ }),

/***/ "./src/DOM/ship/clickDrag.js":
/*!***********************************!*\
  !*** ./src/DOM/ship/clickDrag.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_findPos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/findPos */ \"./src/data/findPos.js\");\n/* harmony import */ var _data_verifyPos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/verifyPos */ \"./src/data/verifyPos.js\");\n/* harmony import */ var _starter_checkDock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../starter/checkDock */ \"./src/DOM/starter/checkDock.js\");\n/* harmony import */ var _shipHighlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipHighlight */ \"./src/DOM/ship/shipHighlight.js\");\n/* harmony import */ var _highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../highlighting/addHighlight */ \"./src/DOM/highlighting/addHighlight.js\");\n/* harmony import */ var _highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../highlighting/rmHighlight */ \"./src/DOM/highlighting/rmHighlight.js\");\n\n\n\n\n\n\n\nfunction clickDrag(event, div, obj) {\n  // bugfix for if mouse is faster than the dragging div\n  let activeSquare;\n  let activeShip;\n  for (const key in obj.p1) {\n    let active = event.target.id;\n    if (key === active.substring(0, active.length - 2)) {\n      activeSquare = active;\n      activeShip = active.substring(0, active.length - 2)\n    }\n  }\n  // removes error window if bad ship placement\n  const errorWindow = document.querySelector('.message-window');\n  if (errorWindow) {\n    errorWindow.remove();\n  }\n\n  // checks if mouse moved. If not, then rotate ship\n  let movedMouse = false;\n\n  let shiftX = event.clientX - div.getBoundingClientRect().left;\n  let shiftY = event.clientY - div.getBoundingClientRect().top;\n  document.body.append(div);\n  moveAt(event.pageX, event.pageY, div);\n  // moves the div at (pageX, pageY) coordinates\n  // taking initial shifts into account\n  function moveAt(pageX, pageY) {\n    div.style.left = pageX - shiftX + 'px';\n    div.style.top = pageY - shiftY + 'px';\n  }\n  let currentId = '';\n  function onMouseMove(event) {\n    movedMouse = true;\n    moveAt(event.pageX, event.pageY);\n    // checks for element below dragged boat.\n    div.style.display = 'none';\n    let elemBelow = document.elementFromPoint(event.clientX, event.clientY)\n    if (elemBelow.classList.contains('ocean') && \n        elemBelow.id &&\n        elemBelow.id !== currentId\n        ) {\n      currentId = elemBelow.id;\n      (0,_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n      // highlight the sides\n      (0,_highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(elemBelow, 'ocean');\n      // clears previous position of ship\n      obj.p1[activeShip].position = [];\n      for (const key in obj.p1) {\n        if (key === activeShip){\n          // highlight under the ship\n          (0,_shipHighlight__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(activeSquare, elemBelow, obj);\n        }\n      }\n\n      (0,_data_findPos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(activeShip, obj);\n      (0,_data_verifyPos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(activeShip, obj);\n    }\n    // maintain orientation while dragging\n    for (const key in obj.p1) {\n      if (activeShip === key) {\n        if (obj.p1[activeShip].orientation === 'v') {\n          return div.style.display = 'initial';\n        } else {\n          return div.style.display = 'flex';\n        }\n      }\n    }\n  }\n  // move the div on mousemove\n  document.addEventListener('mousemove', onMouseMove);\n  \n  // drop the div, remove unneeded handlers\n  div.onmouseup = function() {\n    // rotates ship if it was not dragged\n    if (!movedMouse) {\n      obj.p1[activeShip].position = []\n      ;(0,_data_findPos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(activeShip, obj);\n      (0,_data_verifyPos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(activeShip, obj);\n      const shipClass = event.target.parentNode.classList[0]\n      let ship = document.querySelector(`.${shipClass}`);\n      ship.classList.toggle('horizontal');\n      for (const key in obj.p1) {\n        if (key === shipClass) {\n          if (obj.p1[shipClass].orientation === 'v') {\n            obj.p1[shipClass].orientation = 'h';\n            div.style.display = 'flex';\n          } else {\n            obj.p1[shipClass].orientation = 'v';\n            div.style.display = 'initial';\n          }\n        }\n      }\n    }\n    // loads 2p or vs CPU option if all ships dragged out\n    if (!document.querySelector('.start-cont')) {\n      (0,_starter_checkDock__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj)\n    };\n\n    (0,_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    document.removeEventListener('mousemove', onMouseMove);\n    movedMouse = false;\n    div.onmouseup = null;\n  };\n  div.ondragstart = function() {\n    return false;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickDrag);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/ship/clickDrag.js?");

/***/ }),

/***/ "./src/DOM/ship/errorMessage.js":
/*!**************************************!*\
  !*** ./src/DOM/ship/errorMessage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction errorMessage(/* array */ msg) {\n  if (msg.length === 0) {\n  } else {\n    const previousErr = document.querySelector('.message-window');\n    if (previousErr) {\n      previousErr.remove();\n    }\n    const window = document.createElement('div');\n    window.classList.add('message-window');\n    const title = document.createElement('div');\n    title.textContent = 'Error Log';\n    window.appendChild(title);\n    const msgCont = document.createElement('div');\n    window.appendChild(msgCont)\n    for (let i = 0; i < msg.length; i += 1) {\n      let line = document.createElement('div');\n      line.textContent = msg[i];\n      line.classList.add('message')\n      msgCont.appendChild(line);\n    }\n    const half = document.querySelector('.half');\n    half.appendChild(window);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorMessage);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/ship/errorMessage.js?");

/***/ }),

/***/ "./src/DOM/ship/shipHighlight.js":
/*!***************************************!*\
  !*** ./src/DOM/ship/shipHighlight.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_numConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/numConvert */ \"./src/data/numConvert.js\");\n/* harmony import */ var _data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/alphaConvert */ \"./src/data/alphaConvert.js\");\n\n\n\n// highlight ships position on board.\nfunction shipHighlight(shipSquare, div, obj) {\n  const shipName = shipSquare.substring(0, shipSquare.length - 2);\n  const heldValue = shipSquare.slice(-1);\n  const shipLength = obj.p1[shipName].length;\n  const hoverCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(div.id.substring(1));\n  const hoverRow = div.id.substring(0, 1);\n  const toHighlight = shipLength - heldValue;\n\n  if(obj.p1[shipName].orientation === 'v') {\n    for (let i = 0; i <= toHighlight; i += 1) {\n      const letterValue = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(hoverRow) + i;\n      const newRow = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(letterValue);\n      const newCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverCol);\n      const square = document.querySelector(`.${newRow}${newCol}.ocean`);\n      if (square) {\n        square.style.backgroundColor = 'green';\n        for (let key in obj.p1) {\n          for (let i = 0; i < obj.p1[key].position.length; i += 1) {\n            if (obj.p1[key].position[i] === `${newRow}${newCol}`) {\n              square.style.backgroundColor = 'red';\n            }\n          }\n        }\n      }    \n    }\n    for (let i = 0; i < heldValue; i += 1) {\n      const letterValue = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(hoverRow) - i;\n      const newRow = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(letterValue);\n      const newCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverCol)\n      const square = document.querySelector(`.${newRow}${newCol}.ocean`);\n      if (square) {\n        square.style.backgroundColor = 'green';\n        for (let key in obj.p1) {\n          for (let i = 0; i < obj.p1[key].position.length; i += 1) {\n            if (obj.p1[key].position[i] === `${newRow}${newCol}`) {\n              square.style.backgroundColor = 'red';\n            }\n          }\n        }\n      }    \n    }\n  }\n  if (obj.p1[shipName].orientation === 'h') {\n    for (let i = 0; i <= toHighlight; i += 1) {\n      const newCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverCol + i);\n      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);\n      if (square) {\n        square.style.backgroundColor = 'green';\n        for (let key in obj.p1) {\n          for (let i = 0; i < obj.p1[key].position.length; i += 1) {\n            if (obj.p1[key].position[i] === `${hoverRow}${newCol}`) {\n              square.style.backgroundColor = 'red';\n            }\n          }\n        }\n      }    \n    }\n    for (let i = 0; i < heldValue; i += 1) {\n      const newCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverCol - i);\n      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);\n      if (square) {\n        square.style.backgroundColor = 'green';\n        for (let key in obj.p1) {\n          for (let i = 0; i < obj.p1[key].position.length; i += 1) {\n            if (obj.p1[key].position[i] === `${hoverRow}${newCol}`) {\n              square.style.backgroundColor = 'red';\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipHighlight);\n\n//# sourceURL=webpack://battleship/./src/DOM/ship/shipHighlight.js?");

/***/ }),

/***/ "./src/DOM/starter/checkDock.js":
/*!**************************************!*\
  !*** ./src/DOM/starter/checkDock.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStart */ \"./src/DOM/starter/createStart.js\");\n\n\nfunction checkDock(obj) {\n  let leftDock =  document.querySelector(`.ship-storage-left`);\n  let rightDock = document.querySelector('.ship-storage-right')\n  if (leftDock.childNodes.length === 0 && rightDock.childNodes.length === 0) {\n    leftDock.remove();\n    rightDock.remove();\n    const container = document.querySelector('.side.storage-container');\n    (0,_createStart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container, obj);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkDock);\n\n//# sourceURL=webpack://battleship/./src/DOM/starter/checkDock.js?");

/***/ }),

/***/ "./src/DOM/starter/createStart.js":
/*!****************************************!*\
  !*** ./src/DOM/starter/createStart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _startBtnLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startBtnLogic */ \"./src/DOM/starter/startBtnLogic.js\");\n\n\nfunction createStart(div, obj) {\n  const startCont = document.createElement('div');\n  startCont.classList.add('start-cont');\n  const pvp = document.createElement('button');\n  pvp.classList.add('start-button');\n  pvp.textContent = '2 Players';\n  pvp.addEventListener('click', () =>  (0,_startBtnLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj));\n  const pve = document.createElement('button');\n  pve.classList.add('start-button');\n  pve.textContent = 'Player vs CPU';\n  pve.addEventListener('click', () =>  (0,_startBtnLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, 'cpu'));\n  startCont.append(pvp, pve);\n  div.appendChild(startCont);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStart);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/starter/createStart.js?");

/***/ }),

/***/ "./src/DOM/starter/startBtnLogic.js":
/*!******************************************!*\
  !*** ./src/DOM/starter/startBtnLogic.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cpu_cpu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cpu/cpu */ \"./src/cpu/cpu.js\");\n/* harmony import */ var _data_validationMsg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/validationMsg */ \"./src/data/validationMsg.js\");\n/* harmony import */ var _ship_errorMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ship/errorMessage */ \"./src/DOM/ship/errorMessage.js\");\n\n\n\n\nfunction startBtnLogic(obj, mode) {\n  shipInsert(obj);\n  removeShips(obj);\n  (0,_ship_errorMessage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_data_validationMsg__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj));\n  const errorWindow = document.querySelector('.message-window');\n  if (!errorWindow) {\n    const startCont = document.querySelector('.start-cont');\n    startCont.remove();\n    if (mode === 'cpu') {\n      // cpu already placed ships start the cpu game from here.\n      (0,_cpu_cpu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj);\n      return true;\n    }\n  }\n}\n\n// snaps dragged ships into ocean\nfunction shipInsert(obj) {\n  // console.log(obj)\n  for (const key in obj.p1) {\n    if (obj.p1[key].position.length) {\n      for (let i = 0; i < obj.p1[key].position.length; i += 1) {\n        const div = document.createElement('div');\n        div.classList.add('on-water', `${key}-sailed`);\n        const ocean = document.querySelector(`.ocean.${obj.p1[key].position[i]}`);\n        if (ocean.childNodes.length === 0) {\n          ocean.appendChild(div);\n        }\n      }\n    }\n  }\n}\n\nfunction removeShips(obj) {\n  for (let key in obj.p1) {\n    const markedDiv = document.querySelector(`.${key}-sailed`);\n    if (markedDiv) {\n      let drag = document.querySelector(`.${key}`);\n      if (drag) {\n        drag.remove();\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startBtnLogic);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/starter/startBtnLogic.js?");

/***/ }),

/***/ "./src/cpu/cpu.js":
/*!************************!*\
  !*** ./src/cpu/cpu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _placement_cpuPlacement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placement/cpuPlacement */ \"./src/cpu/placement/cpuPlacement.js\");\n/* harmony import */ var _DOM_cpuDOM_targetingMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/cpuDOM/targetingMode */ \"./src/DOM/cpuDOM/targetingMode.js\");\n/* harmony import */ var _DOM_cpuDOM_battleLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DOM/cpuDOM/battleLog */ \"./src/DOM/cpuDOM/battleLog.js\");\n/* harmony import */ var _DOM_cpuDOM_fireBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DOM/cpuDOM/fireBtn */ \"./src/DOM/cpuDOM/fireBtn.js\");\n/* harmony import */ var _cpuLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cpuLogic */ \"./src/cpu/cpuLogic.js\");\n\n\n\n\n\n\nfunction cpu(ships) {\n  (0,_DOM_cpuDOM_targetingMode__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ships);\n  (0,_DOM_cpuDOM_battleLog__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_DOM_cpuDOM_fireBtn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ships);\n  (0,_placement_cpuPlacement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ships);\n\n//   // display cpu position on board\n//   for (let key in ships.p2) {\n//     for (let i = 0; i < ships.p2[key].position.length; i += 1) {\n//       let coord = ships.p2[key].position[i];\n//       const square = document.querySelector(`.${coord}`);\n//       square.classList.add(`cpu-${key}`);\n//       console.log(square);\n//     }\n//   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cpu);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/cpu.js?");

/***/ }),

/***/ "./src/cpu/cpuLogic.js":
/*!*****************************!*\
  !*** ./src/cpu/cpuLogic.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameLogic_hitStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameLogic/hitStatus */ \"./src/gameLogic/hitStatus.js\");\n/* harmony import */ var _gameLogic_registerHit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameLogic/registerHit */ \"./src/gameLogic/registerHit.js\");\n/* harmony import */ var _gameLogic_checkWin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameLogic/checkWin */ \"./src/gameLogic/checkWin.js\");\n/* harmony import */ var _gameLogic_randomSquare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gameLogic/randomSquare */ \"./src/gameLogic/randomSquare.js\");\n/* harmony import */ var _DOM_cpuDOM_markBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DOM/cpuDOM/markBoard */ \"./src/DOM/cpuDOM/markBoard.js\");\n/* harmony import */ var _cpu_huntMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cpu/huntMode */ \"./src/cpu/huntMode.js\");\n/* harmony import */ var _shipSunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shipSunk */ \"./src/cpu/shipSunk.js\");\n/* harmony import */ var _data_cpuShotList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/cpuShotList */ \"./src/data/cpuShotList.js\");\n/* harmony import */ var _gameLogic_endGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gameLogic/endGame */ \"./src/gameLogic/endGame.js\");\n/* harmony import */ var _data_gameStates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/gameStates */ \"./src/data/gameStates.js\");\n/* Logic\n  * user selects a square and presses fire button > run cpuLogic()\n  * hitstatus(obj, fromPlayer, cpuShot) checks if hit, returns hit or miss\n  * if the user hits, then registerHit()\n  *   hitStatus feeds registerHit(obj, hitStatus(), fromPlayer)\n  * checkWin(obj) if no win, cpu's turn\n  * cpu chooses randomSquare()\n  * hitStatus()\n  * if cpu hits, then registerHit()\n  * checkWin() if not win, fromPlayer's turn\n  */\n\n\n\n\n\n\n\n\n\n\n\nfunction cpuLogic(obj) {\n  let winStatus = (0,_gameLogic_checkWin__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj);\n  if (!winStatus) {\n    let square;\n    if (_data_gameStates__WEBPACK_IMPORTED_MODULE_9__[\"default\"].cpuMode[0] === 'search') {\n      square = (0,_gameLogic_randomSquare__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('shot');\n    }\n    if (_data_gameStates__WEBPACK_IMPORTED_MODULE_9__[\"default\"].cpuMode[0] === 'hunt') {\n      square = (0,_cpu_huntMode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(obj);\n      _data_cpuShotList__WEBPACK_IMPORTED_MODULE_7__[\"default\"].push(square);\n    }\n    const cpuStatus = (0,_gameLogic_hitStatus__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj, 'cpu', square);\n    (0,_DOM_cpuDOM_markBoard__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(cpuStatus);\n\n    if (cpuStatus.status === 'hit!') {\n      (0,_gameLogic_registerHit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj, cpuStatus, 'player');\n      _data_gameStates__WEBPACK_IMPORTED_MODULE_9__[\"default\"].cpuMode.pop();\n      _data_gameStates__WEBPACK_IMPORTED_MODULE_9__[\"default\"].cpuMode.push('hunt');\n      // console.log('hunting...');\n      (0,_shipSunk__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(obj, cpuStatus.ship, 'player');\n      winStatus = (0,_gameLogic_checkWin__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj);\n      // console.log('checkwin: ', winStatus)\n      if (winStatus) {\n        // console.log('CPU wins!');\n        (0,_gameLogic_endGame__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(obj);\n        return;\n      }\n    }\n  }\n  if (winStatus) {\n    // console.log('player wins!');\n    (0,_gameLogic_endGame__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(obj)\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cpuLogic);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/cpuLogic.js?");

/***/ }),

/***/ "./src/cpu/huntMode.js":
/*!*****************************!*\
  !*** ./src/cpu/huntMode.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_cpuShotList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/cpuShotList */ \"./src/data/cpuShotList.js\");\n/* harmony import */ var _placement_randomDirection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placement/randomDirection */ \"./src/cpu/placement/randomDirection.js\");\n/* harmony import */ var _data_numConvert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/numConvert */ \"./src/data/numConvert.js\");\n/* harmony import */ var _data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/alphaConvert */ \"./src/data/alphaConvert.js\");\n// logic to test hunt mode\n\n\n\n\n\nfunction huntMode(obj) {\n  let square;\n  let direction  = (0,_placement_randomDirection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  for (let ship in obj.p1) {\n    const hitsOnPlayer = obj.p1[ship].hits;\n    const shipSunk = obj.p1[ship].sunk;\n    \n    // single hit, find random square near the hit\n    if (hitsOnPlayer.length === 1 && shipSunk === false) {\n      const hitSquare = hitsOnPlayer[0];\n      const row = hitSquare.slice(0, 1);\n      const col = hitSquare.substring(1);\n      square = rotation(direction, row, col);\n    }\n    \n    // double hit, aim in a line both ends for a hit\n    if (hitsOnPlayer.length > 1 && shipSunk === false) {\n      const rowCol = dupeRowOrCol(hitsOnPlayer);\n      // columns are spelled out while rows are a single letter\n      if (rowCol.dupe.length > 1) {\n        if (direction === 'left') {\n          direction = 'up';\n        }\n        if (direction === 'right') {\n          direction = 'down'\n        }\n      } else {\n        if (direction === 'up') {\n          direction = 'left';\n        }\n        if (direction === 'down') {\n          direction = 'right';\n        }\n      }\n\n      let end;\n      if (direction === 'up') {\n        end = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rowCol.arr[0] - 1);\n        if (!end) end = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rowCol.arr[rowCol.arr.length - 1] + 1);\n        square = `${end}${rowCol.dupe}`;\n      }\n      if (direction === 'down') {\n        end = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rowCol.arr[rowCol.arr.length - 1] + 1);\n        if (!end) end = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(rowCol.arr[0] - 1);\n        square = `${end}${rowCol.dupe}`;\n      }\n      if (direction === 'left') {\n        end = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(rowCol.arr[0] - 1);\n        if (!end) end = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(rowCol.arr[rowCol.arr.length - 1] + 1);\n        square = `${rowCol.dupe}${end}`;\n      }\n      if (direction === 'right') {\n        end = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(rowCol.arr[rowCol.arr.length - 1] + 1);\n        if (!end) end = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(rowCol.arr[0] - 1);\n        square = `${rowCol.dupe}${end}`;\n      }\n    }\n  }\n\n  for (let i = 0; i < _data_cpuShotList__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    if (_data_cpuShotList__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i] === square) {\n      square = huntMode(obj, direction);\n    }\n  }\n  return square;\n}\n\nfunction rotation(dir, row, col) {\n  let checkSquare;\n  if (dir === 'up') {\n    let up = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(row) - 1);\n    if (up) {\n      checkSquare = `${up}${col}`;\n    }\n  }\n  if (dir === 'down') {\n    let down = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(row) + 1);\n    if (down) {\n      checkSquare = `${down}${col}`;\n    }\n  }\n  if (dir === 'left') {\n    let left = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(col) - 1);\n    if (left) {\n      checkSquare = `${row}${left}`;\n    }\n  }\n  if (dir === 'right') {\n    let right = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(col) + 1);\n    if (right) {\n      checkSquare = `${row}${right}`;\n    }\n  }\n\n  if (checkSquare) {\n    return checkSquare;\n  } else {\n    let ref = ['up', 'down', 'left', 'right', 'up'];\n    for (let i = 0; i < ref.length; i += 1) {\n      if (ref[i] === dir) {\n        return rotation(ref[i + 1], row, col)\n      }\n    }\n  }\n}\n\n\n// look for duplicate row or col\nfunction dupeRowOrCol(hitsOnPlayer) {\n  let arr = [];\n  for (let i = 0; i < hitsOnPlayer.length; i += 1) {\n    let row = hitsOnPlayer[i].slice(0, 1);\n    let col = hitsOnPlayer[i].substring(1);\n    arr.push(row, col);\n  }\n  for (let i = 0; i < arr.length; i += 1) {\n    let dupeArr = [];\n    const dupe = arr[i];\n    for (let i = 0; i < arr.length; i += 1) {\n      if (arr[i] === dupe) {\n        dupeArr.push(arr[i]);\n      }\n    }\n    if (dupeArr.length > 1) {\n      let newArr = arr.filter(element => element !== dupeArr[0]);\n      let outputArr = [];\n      newArr.forEach(element => {\n        if (element.length > 1) {\n          outputArr.push((0,_data_numConvert__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element));\n        } else {\n          outputArr.push((0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(element));\n        }\n      });\n      outputArr.sort();\n      if (outputArr[0] === 10) {\n        outputArr.shift();\n        outputArr.push(10);\n      }\n      return {\n        arr: outputArr,\n        dupe: dupeArr[0]\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (huntMode);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/huntMode.js?");

/***/ }),

/***/ "./src/cpu/markGraveyard.js":
/*!**********************************!*\
  !*** ./src/cpu/markGraveyard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// check to see if the player sunk the cpu's boat\n// mark the sunk ship in the graveyard maybe dark red\nfunction markGraveyard(ships) {\n  for (let ship in ships.p2) {\n    if (ships.p2[ship].length === ships.p2[ship].hits.length) {\n      ships.p2[ship].sunk = true;\n      \n      // mark ship red\n      let sunk = document.querySelector(`.cpu${ship}`);\n      sunk.style.backgroundColor = 'red';\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (markGraveyard);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/markGraveyard.js?");

/***/ }),

/***/ "./src/cpu/placement/addCpuPos.js":
/*!****************************************!*\
  !*** ./src/cpu/placement/addCpuPos.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_alphaConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/alphaConvert */ \"./src/data/alphaConvert.js\");\n/* harmony import */ var _data_numConvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/numConvert */ \"./src/data/numConvert.js\");\n// positions validated, so push to object\n\n\n\nconst ref = {\n  carrier: 5,\n  battleship: 4,\n  cruiser: 3,\n  submarine: 3,\n  destroyer: 2,\n}\n\nfunction addCpuPos(square, dir, key, obj) {\n  const row = square.substring(1, 0);\n  const col = square.slice(1);\n  if (dir === 'up') {\n    for (let i = 0; i < ref[key]; i += 1) {\n      obj.p2[key].position.push(`${(0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(row) - i)}${col}`);\n    }\n  }\n  if (dir === 'down') {\n    for (let i = 0; i < ref[key]; i += 1) {\n      obj.p2[key].position.push(`${(0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(row) + i)}${col}`);\n    }\n  }\n  if (dir === 'left') {\n    for (let i = 0; i < ref[key]; i += 1) {\n      obj.p2[key].position.push(`${row}${(0,_data_numConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(col) - i)}`);\n    }\n  }\n  if (dir === 'right') {\n    for (let i = 0; i < ref[key]; i += 1) {\n      obj.p2[key].position.push(`${row}${(0,_data_numConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(col) + i)}`);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCpuPos);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/placement/addCpuPos.js?");

/***/ }),

/***/ "./src/cpu/placement/cpuPlacement.js":
/*!*******************************************!*\
  !*** ./src/cpu/placement/cpuPlacement.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _randomDirection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randomDirection */ \"./src/cpu/placement/randomDirection.js\");\n/* harmony import */ var _gameLogic_randomSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gameLogic/randomSquare */ \"./src/gameLogic/randomSquare.js\");\n/* harmony import */ var _doesItFit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doesItFit */ \"./src/cpu/placement/doesItFit.js\");\n/* harmony import */ var _addCpuPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addCpuPos */ \"./src/cpu/placement/addCpuPos.js\");\n/* harmony import */ var _whichShip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./whichShip */ \"./src/cpu/placement/whichShip.js\");\n\n\n\n\n\n\nfunction cpuShipPlacement(obj, counter = 0, dir, square) {\n  counter += 1;\n  //check which ships already placed\n  let ship = (0,_whichShip__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(obj);\n  \n  if (ship === 'filled') {\n    return;\n  }\n  for (let key in obj.p2) {\n    if (key === ship) {\n      if(!square) {\n        square = (0,_gameLogic_randomSquare__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      }\n      if (!dir || counter > 3) {\n        square = (0,_gameLogic_randomSquare__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        dir = (0,_randomDirection__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      }\n      let fit = (0,_doesItFit__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(square, dir, ship, obj);\n\n      if (fit !== 'pass') {\n        const ref = ['up', 'down', 'left', 'right', 'up'];\n        for (let i = 0; i < ref.length; i += 1) {\n          if (ref[i] === dir) {\n            const newDir = ref[i + 1];\n            cpuShipPlacement(obj, counter, newDir, square);\n            return;\n          }\n        }\n      } else {\n        (0,_addCpuPos__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(square, dir, ship, obj);\n      }\n    }\n  }\n  cpuShipPlacement(obj);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cpuShipPlacement);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/placement/cpuPlacement.js?");

/***/ }),

/***/ "./src/cpu/placement/doesItFit.js":
/*!****************************************!*\
  !*** ./src/cpu/placement/doesItFit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_numConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/numConvert */ \"./src/data/numConvert.js\");\n/* harmony import */ var _data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/alphaConvert */ \"./src/data/alphaConvert.js\");\n// checks if the ship with random square and random direction\n// fits on the board. If yes, return true.\n\n\n\n\nconst ref = {\n  carrier: 5,\n  battleship: 4,\n  cruiser: 3,\n  submarine: 3,\n  destroyer: 2,\n}\n\nfunction doesItFit(square, dir, key, obj) {\n  const row = square.slice(0, 1);\n  const col = square.substring(1);\n  let vr = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(row);\n  let vc = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(col);\n  \n  if (dir === 'up') {\n    vr = vr - ref[key];\n    if (vr > 0 && vr < 11) {\n      let coord = [];\n      for (let i = 0; i < vr; i += 1) {\n        coord.push(`${(0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(row) - i)}${col}`);\n      }\n      const overlap = doesItOverlap(coord, key);\n      if (!overlap) {\n        return 'pass';\n      } else {\n        return 'fail';\n      }\n    } else {\n      return 'fail';\n    }\n  }\n  if (dir === 'down') {\n    vr = vr + ref[key];\n    if (vr > 0 && vr < 11) {\n      let coord = [];\n      for (let i = 0; i < vr; i += 1) {\n        coord.push(`${(0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(row) + i)}${col}`);\n      }\n      const overlap = doesItOverlap(coord, key);\n      if (!overlap) {\n        return 'pass';\n      } else {\n        return 'fail';\n      }\n    } else {\n      return 'fail';\n    }\n  }\n  if (dir === 'left') {\n    vc = vc - ref[key];\n    if (vc > 0 && vc < 11) {\n      let coord = [];\n      for (let i = 0; i < vc; i += 1) {\n        coord.push(`${row}${(0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(col) - i)}`);\n      }\n      const overlap = doesItOverlap(coord, key);\n      if (!overlap) {\n        return 'pass';\n      } else {\n        return 'fail';\n      }\n    } else {\n      return 'fail';\n    }\n  }\n  if (dir === 'right') {\n    vc = vc + ref[key];\n    if (vc > 0 && vc < 11) {\n      let coord = [];\n      for (let i = 0; i < vc; i += 1) {\n        coord.push(`${row}${(0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(col) + i)}`);\n      }\n      const overlap = doesItOverlap(coord);\n      if (!overlap) {\n        return 'pass';\n      } else {\n        return 'fail';\n      }\n    } else {\n      return 'fail';\n    }\n  }\n\n  function doesItOverlap(arr) {\n    let overlap = '';\n    for (let i = 0; i < arr.length; i += 1) {\n      for (let key in obj.p2) {\n        for (let j = 0; j < obj.p2[key].position.length; j += 1) {\n          if (arr[i] === obj.p2[key].position[j]) {\n            overlap = 'true';\n            return overlap;\n          }\n        }\n      }\n    }\n    return overlap;\n  }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (doesItFit);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/placement/doesItFit.js?");

/***/ }),

/***/ "./src/cpu/placement/randomDirection.js":
/*!**********************************************!*\
  !*** ./src/cpu/placement/randomDirection.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// choose a random direction for the ship to be placed.\n// this function occurs after a random square is defined\n\nfunction randomDirection() {\n  const ref = ['up', 'down', 'left', 'right'];\n  const direction = Number.parseInt(Math.random() * 4);\n  return ref[direction];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomDirection);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/placement/randomDirection.js?");

/***/ }),

/***/ "./src/cpu/placement/whichShip.js":
/*!****************************************!*\
  !*** ./src/cpu/placement/whichShip.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// search the object for ships that already have positions.\n// return the value of the ship that has no position saved\n// if all positions are filled, return 'placed'\n\nfunction whichShip(obj) {\n  for (let key in obj.p2) {\n    if (obj.p2[key].length !== obj.p2[key].position.length) {\n      return key;\n    }\n  }\n  return 'filled';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (whichShip);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/placement/whichShip.js?");

/***/ }),

/***/ "./src/cpu/shipSunk.js":
/*!*****************************!*\
  !*** ./src/cpu/shipSunk.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_gameStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/gameStates */ \"./src/data/gameStates.js\");\n// checks if a ship sunk. if yes, return to 'search' mode in gameStates.js\n// runs after hitStatus.js\n\n// TODO: expand this to include shipsunk from the player too\n\n\nfunction shipSunk(obj, ship, shipOwner) {\n  if(shipOwner === 'player' && obj.p1[ship].length === obj.p1[ship].hits.length) {\n    console.log(`CPU sunk your ${ship}!`);\n    obj.p1[ship].sunk = true;\n    _data_gameStates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cpuMode.pop();\n    _data_gameStates__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cpuMode.push('search');\n    console.log('searching...');\n  }\n\n  if (shipOwner === 'cpu' && obj.p2[ship].length === obj.p2[ship].hits.length) {\n    const cpuShip = document.querySelector(`.cpu${ship}`);\n    cpuShip.style.backgroundColor = 'black';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipSunk);\n\n\n//# sourceURL=webpack://battleship/./src/cpu/shipSunk.js?");

/***/ }),

/***/ "./src/data/alphaConvert.js":
/*!**********************************!*\
  !*** ./src/data/alphaConvert.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// inputing a letter will return a number value.\n// inputing a number will return the letter equivalent\n// this is to pinpoint specific squares on the board \n\nfunction alphaConvert(/* string or number */letter) {\n  const alpha = [\n    ['a', 1], \n    ['b', 2],\n    ['c', 3],\n    ['d', 4],\n    ['e', 5],\n    ['f', 6], \n    ['g', 7],\n    ['h', 8],\n    ['i', 9],\n    ['j', 10]\n  ]\n  for (const [key, value] of alpha) {\n    if (typeof letter === 'string' && letter === key) {\n      return value;\n    }\n    if (typeof letter === 'number' && letter === value) {\n      return key;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alphaConvert);\n\n\n//# sourceURL=webpack://battleship/./src/data/alphaConvert.js?");

/***/ }),

/***/ "./src/data/constructor.js":
/*!*********************************!*\
  !*** ./src/data/constructor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ship constructor\nfunction ship(length) {\n  return {\n    length: length,\n    hit: 0,\n    sunk: false,\n    orientation: 'v', // 'v' = vertical, 'h' = horizontal for placement\n    position: [],\n    hits: [],\n  }\n}\n\nconst ships = {\n  p1: {\n    carrier: ship(5),\n    battleship: ship(4),\n    cruiser: ship(3),\n    submarine: ship(3),\n    destroyer: ship(2),\n  },\n  \n  p2: {\n    carrier: ship(5),\n    battleship: ship(4),\n    cruiser: ship(3),\n    submarine: ship(3),\n    destroyer: ship(2),\n  },\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ships);\n\n\n//# sourceURL=webpack://battleship/./src/data/constructor.js?");

/***/ }),

/***/ "./src/data/cpuShotList.js":
/*!*********************************!*\
  !*** ./src/data/cpuShotList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// to prevent cpu from shooting the same square\nconst cpuShotList = [];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cpuShotList);\n\n\n//# sourceURL=webpack://battleship/./src/data/cpuShotList.js?");

/***/ }),

/***/ "./src/data/findPos.js":
/*!*****************************!*\
  !*** ./src/data/findPos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _savePos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savePos */ \"./src/data/savePos.js\");\n\n\n// find position of placed ship insert into savePos();\nfunction findPos(ship, obj){\n  const ocean = document.querySelectorAll('.ocean');\n  for (let i = 0; i < ocean.length; i += 1) {\n    if (ocean[i].style.backgroundColor === 'green') {\n      (0,_savePos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ship, ocean[i].id, obj);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findPos);\n\n//# sourceURL=webpack://battleship/./src/data/findPos.js?");

/***/ }),

/***/ "./src/data/gameStates.js":
/*!********************************!*\
  !*** ./src/data/gameStates.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// a list of game states that tell the game what to do next\n\nconst state = {\n  // false if player vs player\n  // true will start cpu moves in addMarker.js\n  vsCpu: false,\n\n  // 'search' to randomly select squares\n  // 'hunt' to force computer to select squares to sink the hit ship\n  // found in cpuLogic.js\n  cpuMode: [ 'search' ],\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);\n\n\n//# sourceURL=webpack://battleship/./src/data/gameStates.js?");

/***/ }),

/***/ "./src/data/numConvert.js":
/*!********************************!*\
  !*** ./src/data/numConvert.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// inputing a string will return a number value.\n// inputing a number as a string will return the number equivalent\n// this is to pinpoint specific squares on the board \n\nfunction numConvert(/* string or number */str) {\n  const numPairs = {\n    'one': 1,\n    'two': 2,\n    'three': 3,\n    'four': 4,\n    'five': 5,\n    'six': 6,\n    'seven': 7,\n    'eight': 8,\n    'nine': 9,\n    'ten': 10,\n  }\n  for (let key in numPairs) {\n    if (typeof str === 'string' && str === key) {\n      return numPairs[key];\n    }\n    if (typeof str === 'number' && str === numPairs[key]) {\n      return key;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (numConvert);\n\n\n//# sourceURL=webpack://battleship/./src/data/numConvert.js?");

/***/ }),

/***/ "./src/data/savePos.js":
/*!*****************************!*\
  !*** ./src/data/savePos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction savePos(ship, pos, obj) {\n  const position = obj.p1[ship].position;\n  position.push(pos);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (savePos);\n\n\n//# sourceURL=webpack://battleship/./src/data/savePos.js?");

/***/ }),

/***/ "./src/data/validationMsg.js":
/*!***********************************!*\
  !*** ./src/data/validationMsg.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction validationMsg(obj) {\n  let message = [];\n  for (let key in obj.p1) {\n    if (obj.p1[key].length !== obj.p1[key].position.length) {\n      message.push(`${key} placement`);\n    }\n  }\n  return message;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationMsg);\n\n\n//# sourceURL=webpack://battleship/./src/data/validationMsg.js?");

/***/ }),

/***/ "./src/data/verifyPos.js":
/*!*******************************!*\
  !*** ./src/data/verifyPos.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ship changes color to red if dragged over invalid space\n \nfunction verifyPos(activeShip, obj) {\n  // console.log(obj['p1'][activeShip]);\n  const shipObj = obj['p1'][activeShip];\n  const ship = document.querySelector(`.${activeShip}`);\n  if (shipObj.length === shipObj.position.length) {\n    ship.style.backgroundColor = 'transparent';\n  }\n  if (shipObj.length !== shipObj.position.length) { \n    shipObj.position = [];\n    ship.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyPos);\n\n\n//# sourceURL=webpack://battleship/./src/data/verifyPos.js?");

/***/ }),

/***/ "./src/gameLogic/checkWin.js":
/*!***********************************!*\
  !*** ./src/gameLogic/checkWin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// check the ships object for all hit locations\nfunction checkWin(obj) {\n  for (let p in obj) {\n    let counter = 0;\n    for (let ship in obj[p]) {\n      for (let key in obj[p][ship]) {\n        if (key === 'sunk' && obj[p][ship][key] === true) {\n          counter += 1;\n          if (counter === 5) {\n            const loser = p;\n            return loser;\n          } else {\n          }\n        }\n      }\n    }\n  }\n  return false;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkWin);\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic/checkWin.js?");

/***/ }),

/***/ "./src/gameLogic/endGame.js":
/*!**********************************!*\
  !*** ./src/gameLogic/endGame.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// end the game. maybe reveal cpu's boats\n// send message via sendLog.js\n\nfunction endGame(obj) {\n  const window = document.querySelectorAll('.log-txt');\n  window[0].textContent = 'GAME';\n  window[1].textContent = 'OVER!';\n\n  // display cpu position on board\n  for (let key in obj.p2) {\n    for (let i = 0; i < obj.p2[key].position.length; i += 1) {\n      const square = document.querySelector(`.${obj.p2[key].position[i]}`);\n      square.classList.add(`cpu-${key}`);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endGame);\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic/endGame.js?");

/***/ }),

/***/ "./src/gameLogic/hitStatus.js":
/*!************************************!*\
  !*** ./src/gameLogic/hitStatus.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// check ship object for a match. if yes, then send a hit message\n// if missed, then send a miss message. player is expected to \n// manage their own pieces.\n\nfunction hitStatus(obj, /* 'cpu' or 'player' */ fromPlayer, cpuShot) {\n  let ship = 'miss!';\n  let status = 'miss!';\n\n  if (fromPlayer === 'player') {\n    let shot = document.querySelector('.targeting');\n    if (shot) {\n      for (let key in obj.p2) {\n        for (let i = 0; i < obj.p2[key].position.length; i += 1) {\n          if (shot.id === obj.p2[key].position[i]) {\n            status = 'hit!';\n            ship = key;\n          }\n        }\n      }\n      shot.classList.remove('targeting');\n      return {\n        shot: shot.id,\n        status: status,\n        ship: ship,\n      }\n    }\n  }\n  if (fromPlayer === 'cpu') {\n    for (let key in obj.p1) {\n      for (let i = 0; i < obj.p1[key].position.length; i += 1) {\n        if (cpuShot === obj.p1[key].position[i]) {\n          status = 'hit!';\n          ship = key;\n        }\n      }\n    }\n    return {\n      shot: cpuShot,\n      status: status,\n      ship: ship,\n    }\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hitStatus);\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic/hitStatus.js?");

/***/ }),

/***/ "./src/gameLogic/randomSquare.js":
/*!***************************************!*\
  !*** ./src/gameLogic/randomSquare.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_alphaConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/alphaConvert */ \"./src/data/alphaConvert.js\");\n/* harmony import */ var _data_numConvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/numConvert */ \"./src/data/numConvert.js\");\n/* harmony import */ var _data_cpuShotList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/cpuShotList */ \"./src/data/cpuShotList.js\");\n// chooses a random square and returns a string coordinate\n// ex. 'aone' or 'jten'\n// cpuShotList ensures randomSquare doesnt select same square twice;\n\n\n\n\nfunction randomSquare(mode = null) {\n  let coordinates = '';\n  let random1 = Number.parseInt(Math.random() * 10 + 1);\n  let random2 = Number.parseInt(Math.random() * 10 + 1)\n  coordinates += (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(random1);\n  coordinates += (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(random2);\n  if (mode === 'shot') {\n    if (_data_cpuShotList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].length > 99) throw console.error('No more squares');\n    let match = _data_cpuShotList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].filter((square) => square === coordinates);\n    if (match.length === 0) {\n      _data_cpuShotList__WEBPACK_IMPORTED_MODULE_2__[\"default\"].push(coordinates);\n      return coordinates;\n    } else {\n      return coordinates = randomSquare(mode)\n    }\n  }\n  return coordinates;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (randomSquare);\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic/randomSquare.js?");

/***/ }),

/***/ "./src/gameLogic/registerHit.js":
/*!**************************************!*\
  !*** ./src/gameLogic/registerHit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// receive an object from hitStatus.js with ship and hit location\n// then add to ships object\n\nfunction registerHit(obj, hit, onPlayer) {\n  let p = (onPlayer === 'player') ? 'p1' : 'p2';\n  if (hit.status && obj[p][hit.ship] !== undefined) {\n    const hits = obj[p][hit.ship]['hits'];\n    hits.push(hit.shot);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (registerHit);\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic/registerHit.js?");

/***/ }),

/***/ "./src/gameLogic/sendLog.js":
/*!**********************************!*\
  !*** ./src/gameLogic/sendLog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_numConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/numConvert */ \"./src/data/numConvert.js\");\n// send selected position with 'hit' or 'miss'\n// for the message window above the fire button\n\n\n\nfunction sendLog(/* object with 'shot' and 'status' keys */ obj) {\n  if (obj) {\n    const shot = obj.shot;\n    const row = shot.substring(0, 1);\n    const col = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(shot.substring(1))\n    const status = obj.status;\n  \n    const log = document.querySelectorAll(`.log-txt`);\n    log[0].textContent = `${row}-${col}`;\n    log[1].textContent = status;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendLog);\n\n\n//# sourceURL=webpack://battleship/./src/gameLogic/sendLog.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _DOM_highlighting_highlightSides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/highlighting/highlightSides */ \"./src/DOM/highlighting/highlightSides.js\");\n/* harmony import */ var _DOM_ship_addShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/ship/addShip */ \"./src/DOM/ship/addShip.js\");\n/* harmony import */ var _data_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/constructor */ \"./src/data/constructor.js\");\n/* harmony import */ var _DOM_markers_addMarkers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/markers/addMarkers */ \"./src/DOM/markers/addMarkers.js\");\n\n\n\n\n\n\n// cell highlighting to eaily identify row and column\n(0,_DOM_highlighting_highlightSides__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// add ship to gameboard\n(0,_DOM_ship_addShip__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_data_constructor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n// add markers to board\n(0,_DOM_markers_addMarkers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2*(100-17), 17*2);\n\n// // comment-in to highlight ships on board check placement\n// import cpuShipPlacement from './cpu/placement/cpuPlacement';\n// cpuShipPlacement(ship)\n// for (let key in ship.p2) {\n//   for (let i = 0; i < ship.p2[key].position.length; i += 1) {\n//     let coord = ship.p2[key].position[i];\n//     const square = document.querySelector(`.${coord}`);\n//     square.classList.add(`cpu-${key}`);\n//   }\n// }\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;