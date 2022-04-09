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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  /* variables */\\n  --width: 450px;\\n  /* \\n   * --ship-square is also (450 / 12) but doesnt \\n   * calculate cleanly when using calc() \\n   */ \\n  --ship-square: 37.333px;\\n\\n  /* border: 1px solid yellow; */\\n}\\nbody{\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0;\\n  background-color: rgb(4, 18, 41);\\n  color: white;\\n  user-select: none;\\n  gap: 1rem;\\n}\\n/* title and avatar CSS */\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n}\\n.title {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.5rem;\\n  text-align: center;\\n  font-size: 1.3rem;\\n  text-decoration: none;\\n  color: inherit;\\n  margin: .5rem;\\n}\\n.title-text {\\n  font-size: 2rem;\\n}\\n.avatar {\\n  border-radius: 50%;\\n  height: 2rem;\\n  border: 1px solid;\\n}\\n\\n/* board css */\\n.half, .targetCont, .peg, .square {\\n  box-sizing: border-box;\\n  border: 1px solid rgba(255, 255, 255, 0.250);\\n}\\n.half {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 750px;\\n  position: relative;\\n  /* board width shared with targetCont height for 1:1 aspect ratio */\\n  height: var(--width);\\n}\\n.targetCont {\\n  width: var(--width);\\n  height: var(--width);\\n  display: flex;\\n  flex-flow: wrap;\\n  flex-shrink: 0;\\n}\\n.side {\\n  width: 100%;\\n  height: 100%;\\n}\\n.storage-container{\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n.ship-storage-left, .ship-storage-right {\\n  position: relative;\\n  width: var(--ship-square);\\n  height: 100%;\\n}\\n\\n.destroyer,\\n.carrier,\\n.battleship,\\n.cruiser,\\n.submarine {\\n  position: absolute;\\n}\\n\\n/* top found by using flex and using a ruler to find pixel postion */\\n.battleship {top: calc(27/448 * 100%)}\\n.cruiser {top: calc(207/448 * 100%)}\\n.destroyer {top: calc(346/448 * 100%)}\\n.carrier {top: calc(50/448 * 100%)}\\n.submarine {top: calc(287/448 * 100%)}\\n\\n\\n.blank {\\n  box-sizing: border-box;\\n  border: 1px solid rgba(255, 255, 255, 0.150);\\n}\\n.square {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: calc(100% / 12);\\n  width: calc(100% / 12);\\n  position: relative;\\n}\\n.ship-square {\\n  box-sizing: border-box;\\n  border: 1px solid;\\n  height: var(--ship-square);\\n  width: var(--ship-square);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgba(196, 255, 237, 0.233);\\n}\\n.horizontal {\\n  display: flex;\\n}\\n\\n/* pegs */\\n.peg-cont {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n}\\n\\n.white-cont {\\n  height: 75%;\\n}\\n.red-cont {\\n  height: 20%;\\n}\\n.white-peg-cont, .red-peg-cont {\\n  display: flex;\\n  flex-wrap: wrap;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 1rem;\\n}\\n.white-peg {\\n  border: 1px solid;\\n  width: 2rem;\\n  height: 2rem;\\n  border-radius: 50%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: black;\\n  margin: -.62rem -.62rem;\\n  background-color: rgb(218, 218, 218);\\n}\\n.red-peg {\\n  border: 1px solid;\\n  width: 2rem;\\n  height: 2rem;\\n  border-radius: 50%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  color: black;\\n  margin: -.62rem -.68rem;\\n  background-color: rgb(149, 22, 22);\\n}\\n.inserted {\\n  width: 2rem;\\n  height: 2rem;\\n  z-index: -1;\\n  background-color: lightgray;\\n  border-radius: 50%;\\n  border: 1px solid black;\\n}\\n.on-water {\\n  width: 2rem;\\n  height: 2rem;\\n  z-index: -2;\\n  background-color: #c4ffed3b;\\n  border: 1px solid;\\n  position: absolute;\\n  background-color: rgba(0, 255, 128, 0.233);\\n}\\n.start-cont {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  /* background-color: rgba(102, 51, 153, 0.158); */\\n  width: 100%;\\n  height: 90%;\\n  margin: 20px;\\n  gap: 20px;\\n}\\n.start-button {\\n  background-color: transparent;\\n  color: white;\\n  width: 90%;\\n  border: 1px solid;\\n  height: 6rem;\\n  transition: 550ms;\\n}\\n.start-button:hover {\\n  box-shadow: 1px 4px rgba(88, 88, 88, 0.712);\\n  transform: translateY(-4px);\\n}\\n.message-window {\\n  position: absolute;\\n  border: 1px solid;\\n  width: 250px;\\n  height: 250px;\\n  padding: 2rem;\\n  background-color: rgba(13, 22, 24, 0.726);\\n  text-align: center;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n}\\n.message {\\n  text-align: left;\\n  text-transform: capitalize;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/DOM/board/highlighting/addHighlight.js":
/*!****************************************************!*\
  !*** ./src/DOM/board/highlighting/addHighlight.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// cell highlighting while dragging item\nfunction addHighlight(elem, /*'ocean' or 'target'*/side) {\n  const row = elem.id.substring(0,1);\n  const rowEnd = document.querySelectorAll(`.${side}.${row}`);\n  for (let i = 0; i < rowEnd.length; i += 1) {\n    rowEnd[i].style.backgroundColor = '#90ee9050';\n  }\n\n  const col = elem.id.slice(1);\n  const colEnd = document.querySelectorAll(`.${side}.${col}`);\n  for (let i = 0; i < colEnd.length; i +=1 ) {\n    colEnd[i].style.backgroundColor = '#90ee9050';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHighlight);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/board/highlighting/addHighlight.js?");

/***/ }),

/***/ "./src/DOM/board/highlighting/highlightSides.js":
/*!******************************************************!*\
  !*** ./src/DOM/board/highlighting/highlightSides.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction highlighter() {\n  const targetSquare = document.querySelectorAll('.target.square');\n  for (let i = 0; i < targetSquare.length; i += 1) {\n    if(targetSquare[i].id) {\n      // add and remove column background\n      const column = targetSquare[i].id.slice(1);\n      targetSquare[i].addEventListener('mouseover', () => {\n        const div = document.querySelectorAll(`.target.${column}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = '#90ee9050';\n        }\n      });\n      targetSquare[i].addEventListener('mouseout', () => {\n        const div = document.querySelectorAll(`.target.${column}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = 'transparent';\n        }\n      });\n  \n      // and and remove row background\n      const row = targetSquare[i].id.substring(0,1);\n      targetSquare[i].addEventListener('mouseover', () => {\n        const div = document.querySelectorAll(`.target.${row}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = '#90ee9050';\n        }\n      });\n      targetSquare[i].addEventListener('mouseout', () => {\n        const div = document.querySelectorAll(`.target.${row}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = 'transparent';\n        }\n      });\n    }\n  }\n\n  const oceanSquare = document.querySelectorAll('.ocean.square');\n  for (let i = 0; i < oceanSquare.length; i += 1) {\n    if(oceanSquare[i].id) {\n      // add and remove column background\n      const column = oceanSquare[i].id.slice(1);\n      oceanSquare[i].addEventListener('mouseover', () => {\n        const div = document.querySelectorAll(`.ocean.${column}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = '#90ee9050';\n        }\n      });\n      oceanSquare[i].addEventListener('mouseout', () => {\n        const div = document.querySelectorAll(`.ocean.${column}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = 'transparent';\n        }\n      });\n  \n      // and and remove row background\n      const row = oceanSquare[i].id.substring(0,1);\n      oceanSquare[i].addEventListener('mouseover', () => {\n        const div = document.querySelectorAll(`.ocean.${row}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = '#90ee9050';\n        }\n      });\n      oceanSquare[i].addEventListener('mouseout', () => {\n        const div = document.querySelectorAll(`.ocean.${row}`);\n        for (let i = 0; i < div.length; i += 1) {\n          div[i].style.backgroundColor = 'transparent';\n        }\n      });\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (highlighter);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/board/highlighting/highlightSides.js?");

/***/ }),

/***/ "./src/DOM/board/highlighting/rmHighlight.js":
/*!***************************************************!*\
  !*** ./src/DOM/board/highlighting/rmHighlight.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// removes all highlighted side squares\nfunction rmHighlight() {\n  const sides = document.querySelectorAll('.square');\n  for (let i = 0; i < sides.length; i += 1) {\n    sides[i].style.backgroundColor = 'transparent';\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rmHighlight);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/board/highlighting/rmHighlight.js?");

/***/ }),

/***/ "./src/DOM/board/markers/addMarkers.js":
/*!*********************************************!*\
  !*** ./src/DOM/board/markers/addMarkers.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ..//highlighting/rmHighlight */ \"./src/DOM/board/highlighting/rmHighlight.js\");\n/* harmony import */ var _highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../highlighting/addHighlight */ \"./src/DOM/board/highlighting/addHighlight.js\");\n\n\n\nfunction addMarkers(white, red) {\n  const whiteElem = document.querySelector('.white-peg-cont');\n  for (let i = 0; i < white; i += 1) {\n    const peg = document.createElement('div');\n    peg.classList.add('white-peg');\n    peg.textContent = ' ';\n    peg.addEventListener('mousedown', (e) => clickDragMarker(e, peg));\n    whiteElem.appendChild(peg);\n  }\n  const redElem = document.querySelector('.red-peg-cont');\n  for (let i = 0; i < red; i += 1) {\n    const peg = document.createElement('div');\n    peg.classList.add('red-peg');\n    peg.textContent = ' ';\n    peg.addEventListener('mousedown', (e) => clickDragMarker(e, peg));\n    redElem.appendChild(peg);\n  }\n}\n\nfunction clickDragMarker(event, elem) {\n  elem.style.position = 'absolute';\n  elem.style.margin = 0;\n  document.body.append(elem);\n\n  moveAt(event.pageX, event.pageY);\n  function moveAt(pageX, pageY) {\n    elem.style.left = pageX - elem.offsetWidth / 2 + 'px';\n    elem.style.top = pageY - elem.offsetHeight / 2 + 'px';\n  }\n\n  let currentId = '';\n  function onMouseMove(event) {\n    moveAt(event.pageX, event.pageY);\n\n    elem.style.display = 'none';\n    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);\n    if (elemBelow.id && elemBelow.id !== currentId) {\n      currentId = elemBelow.id;\n      (0,_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      elemBelow.style.backgroundColor = 'green';\n      if (elemBelow.classList.contains('ocean')) {\n        (0,_highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elemBelow, 'ocean');\n      }\n      if (elemBelow.classList.contains('target')) {\n        (0,_highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elemBelow, 'target');\n      }\n    }\n    elem.style.display = 'initial';\n  }\n\n  document.addEventListener('mousemove', onMouseMove);\n\n  const clickedElem = event.target\n  elem.onmouseup = function () {\n    // const elemBelow = document.elementFromPoint(event.clientX, event.clientY);\n    const marked = markerPos();\n    let markedDiv = document.querySelector(marked);\n    if (document.body.lastChild.style.position === 'absolute' &&\n        markedDiv &&\n        markedDiv.childNodes.length < 2) {\n      insertMarker(marked, clickedElem);\n      document.body.lastChild.remove();\n    }\n    (0,_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    document.removeEventListener('mousemove', onMouseMove);\n    elem.onmouseup = null;\n  }\n}\n\nfunction markerPos() {\n  let marked = document.querySelectorAll('.square');\n  for (let i = 0; i < marked.length; i += 1) {\n    if (marked[i].style.backgroundColor === 'green') {\n      const square = marked[i].classList;\n      const position = square[2];\n      const half = square[0];\n      return `.${half}.${position}`;\n    }\n  }\n}\n\nfunction insertMarker(pos, peg){\n  const position = document.querySelector(pos);\n  if (position && position.childNodes.length < 2) {\n    const div = document.createElement('div');\n    div.classList.add('inserted');\n    if (peg.className === 'white-peg') {\n      div.style.backgroundColor = 'rgb(218, 218, 218)';\n      div.id = 'white';\n    } else {\n      div.style.backgroundColor = 'rgb(149, 22, 22)';\n      div.id = 'red';\n    }\n    position.appendChild(div);\n    position.addEventListener('click', (e) => {\n      const color = e.target.childNodes[0].id; \n      if (color === 'white') {\n        addMarkers(1, 0)\n      }\n      if (color === 'red') {\n        addMarkers(0, 1);\n      }\n      position.removeChild(div);\n    }, {once : true});\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMarkers);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/board/markers/addMarkers.js?");

/***/ }),

/***/ "./src/DOM/board/starter/checkDock.js":
/*!********************************************!*\
  !*** ./src/DOM/board/starter/checkDock.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStart */ \"./src/DOM/board/starter/createStart.js\");\n\n\nfunction checkDock(obj) {\n  let leftDock =  document.querySelector(`.ship-storage-left`);\n  let rightDock = document.querySelector('.ship-storage-right')\n  if (leftDock.childNodes.length === 0 && rightDock.childNodes.length === 0) {\n    leftDock.remove();\n    rightDock.remove();\n    const container = document.querySelector('.side.storage-container');\n    (0,_createStart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container, obj);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkDock);\n\n//# sourceURL=webpack://battleship/./src/DOM/board/starter/checkDock.js?");

/***/ }),

/***/ "./src/DOM/board/starter/createStart.js":
/*!**********************************************!*\
  !*** ./src/DOM/board/starter/createStart.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _startBtnLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startBtnLogic */ \"./src/DOM/board/starter/startBtnLogic.js\");\n\n\nfunction createStart(div, obj) {\n  console.log(obj)\n  const startCont = document.createElement('div');\n  startCont.classList.add('start-cont');\n  const pvp = document.createElement('button');\n  pvp.classList.add('start-button');\n  pvp.textContent = '2 Players';\n  pvp.addEventListener('click', () =>  (0,_startBtnLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj));\n  const pve = document.createElement('button');\n  pve.classList.add('start-button');\n  pve.textContent = 'Player vs CPU';\n  pve.addEventListener('click', () =>  (0,_startBtnLogic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj));\n  startCont.append(pvp, pve);\n  div.appendChild(startCont);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStart);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/board/starter/createStart.js?");

/***/ }),

/***/ "./src/DOM/board/starter/startBtnLogic.js":
/*!************************************************!*\
  !*** ./src/DOM/board/starter/startBtnLogic.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_validationMsg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/validationMsg */ \"./src/data/validationMsg.js\");\n/* harmony import */ var _ship_errorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ship/errorMessage */ \"./src/DOM/ship/errorMessage.js\");\n// import shipInsert from './shipinsert';\n\n\n\nfunction startBtnLogic(obj) {\n  shipInsert(obj);\n  removeShips(obj);\n  (0,_ship_errorMessage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_data_validationMsg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(obj));\n  const errorWindow = document.querySelector('.message-window');\n  if (!errorWindow) {\n    const startCont = document.querySelector('.start-cont');\n    startCont.remove();\n    console.table(obj)\n  }\n}\n\n// snaps dragged ships into ocean\nfunction shipInsert(obj) {\n  for (const key in obj) {\n    if (obj[key].position.length) {\n      for (let i = 0; i < obj[key].position.length; i += 1) {\n        const div = document.createElement('div');\n        div.classList.add('on-water', `${key}-sailed`);\n        const ocean = document.querySelector(`.ocean.${obj[key].position[i]}`);\n        if (ocean.childNodes.length === 0) {\n          ocean.appendChild(div);\n        }\n      }\n    }\n  }\n}\n\nfunction removeShips(obj) {\n  for (let key in obj) {\n    const markedDiv = document.querySelector(`.${key}-sailed`);\n    if (markedDiv) {\n      let drag = document.querySelector(`.${key}`);\n      if (drag) {\n        drag.remove();\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startBtnLogic);\n\n\n//# sourceURL=webpack://battleship/./src/DOM/board/starter/startBtnLogic.js?");

/***/ }),

/***/ "./src/DOM/ship/addShip.js":
/*!*********************************!*\
  !*** ./src/DOM/ship/addShip.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clickDrag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickDrag */ \"./src/DOM/ship/clickDrag.js\");\n\n\nfunction addShip(ship) {\n  for (const key in ship) {\n    const shipClass = document.createElement('div');\n    shipClass.classList.add(key);\n    shipClass.addEventListener('mousedown', (e) => (0,_clickDrag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e, shipClass, ship));\n    for (let i = 1; i <= ship[key].length; i += 1) {\n      const square = document.createElement('div');\n      square.classList.add('ship-square')\n      square.id = `${key}-${i}`;\n      square.textContent = ' ';\n\n      shipClass.appendChild(square);\n    }\n    const shipStorageL = document.querySelector('.ship-storage-left');\n    const shipStorageR = document.querySelector('.ship-storage-right');\n    if (shipClass.className === 'battleship' ||\n        shipClass.className === 'cruiser' ||\n        shipClass.className === 'destroyer') {\n      shipStorageL.appendChild(shipClass);\n    } else {\n      shipStorageR.appendChild(shipClass);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addShip);\n\n//# sourceURL=webpack://battleship/./src/DOM/ship/addShip.js?");

/***/ }),

/***/ "./src/DOM/ship/clickDrag.js":
/*!***********************************!*\
  !*** ./src/DOM/ship/clickDrag.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_findPos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/findPos */ \"./src/data/findPos.js\");\n/* harmony import */ var _data_verifyPos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/verifyPos */ \"./src/data/verifyPos.js\");\n/* harmony import */ var _board_starter_checkDock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../board/starter/checkDock */ \"./src/DOM/board/starter/checkDock.js\");\n/* harmony import */ var _shipHighlight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shipHighlight */ \"./src/DOM/ship/shipHighlight.js\");\n/* harmony import */ var _board_highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../board/highlighting/addHighlight */ \"./src/DOM/board/highlighting/addHighlight.js\");\n/* harmony import */ var _board_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../board/highlighting/rmHighlight */ \"./src/DOM/board/highlighting/rmHighlight.js\");\n\n\n\n\n\n\n\nfunction clickDrag(event, div, obj) {\n  // bugfix for if mouse is faster than the dragging div\n  let activeSquare;\n  let activeShip;\n  for (const key in obj) {\n    let active = event.target.id;\n    if (key === active.substring(0, active.length - 2)) {\n      activeSquare = active;\n      activeShip = active.substring(0, active.length - 2)\n    }\n  }\n  // removes error window if bad ship placement\n  const errorWindow = document.querySelector('.message-window');\n  if (errorWindow) {\n    errorWindow.remove();\n  }\n\n  // checks if mouse moved. If not, then rotate ship\n  let movedMouse = false;\n\n  let shiftX = event.clientX - div.getBoundingClientRect().left;\n  let shiftY = event.clientY - div.getBoundingClientRect().top;\n  document.body.append(div);\n  moveAt(event.pageX, event.pageY, div);\n  // moves the div at (pageX, pageY) coordinates\n  // taking initial shifts into account\n  function moveAt(pageX, pageY) {\n    div.style.left = pageX - shiftX + 'px';\n    div.style.top = pageY - shiftY + 'px';\n  }\n  let currentId = '';\n  function onMouseMove(event) {\n    movedMouse = true;\n    moveAt(event.pageX, event.pageY);\n    // checks for element below dragged boat.\n    div.style.display = 'none';\n    let elemBelow = document.elementFromPoint(event.clientX, event.clientY)\n    if (elemBelow.classList.contains('ocean') && \n        elemBelow.id &&\n        elemBelow.id !== currentId\n        ) {\n      currentId = elemBelow.id;\n      (0,_board_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n      // highlight the sides\n      (0,_board_highlighting_addHighlight__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(elemBelow, 'ocean');\n      // clears previous position of ship\n      obj[activeShip].position = [];\n      for (const key in obj) {\n        if (key === activeShip){\n          // highlight under the ship\n          (0,_shipHighlight__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(activeSquare, elemBelow, obj);\n        }\n      }\n\n      (0,_data_findPos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(activeShip, obj);\n      (0,_data_verifyPos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(activeShip, obj);\n    }\n    // maintain orientation while dragging\n    for (const key in obj) {\n      if (activeShip === key) {\n        if (obj[activeShip].orientation === 'v') {\n          return div.style.display = 'initial';\n        } else {\n          return div.style.display = 'flex';\n        }\n      }\n    }\n  }\n  // move the div on mousemove\n  document.addEventListener('mousemove', onMouseMove);\n  \n  // drop the div, remove unneeded handlers\n  div.onmouseup = function() {\n    // rotates ship if it was not dragged\n    if (!movedMouse) {\n      obj[activeShip].position = []\n      ;(0,_data_findPos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(activeShip, obj);\n      (0,_data_verifyPos__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(activeShip, obj);\n      const shipClass = event.target.parentNode.classList[0]\n      let ship = document.querySelector(`.${shipClass}`);\n      ship.classList.toggle('horizontal');\n      for (const key in obj) {\n        if (key === shipClass) {\n          if (obj[shipClass].orientation === 'v') {\n            obj[shipClass].orientation = 'h';\n            div.style.display = 'flex';\n          } else {\n            obj[shipClass].orientation = 'v';\n            div.style.display = 'initial';\n          }\n        }\n      }\n    }\n    // loads 2p or vs CPU option if all ships dragged out\n    if (!document.querySelector('.start-cont')) {\n      (0,_board_starter_checkDock__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(obj)\n    };\n\n    (0,_board_highlighting_rmHighlight__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    document.removeEventListener('mousemove', onMouseMove);\n    movedMouse = false;\n    div.onmouseup = null;\n  };\n  div.ondragstart = function() {\n    return false;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickDrag);\n\n//# sourceURL=webpack://battleship/./src/DOM/ship/clickDrag.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_numConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/numConvert */ \"./src/data/numConvert.js\");\n/* harmony import */ var _data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/alphaConvert */ \"./src/data/alphaConvert.js\");\n\n\n\n// highlight ships position on board.\nfunction shipHighlight(shipSquare, div, obj) {\n  const shipName = shipSquare.substring(0, shipSquare.length - 2);\n  const heldValue = shipSquare.slice(-1);\n  const shipLength = obj[shipName].length;\n  const hoverCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(div.id.substring(1));\n  const hoverRow = div.id.substring(0, 1);\n  const toHighlight = shipLength - heldValue;\n\n  if(obj[shipName].orientation === 'v') {\n    for (let i = 0; i <= toHighlight; i += 1) {\n      const letterValue = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(hoverRow) + i;\n      const newRow = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(letterValue);\n      const newCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverCol);\n      const square = document.querySelector(`.${newRow}${newCol}.ocean`);\n      if (square) {\n        square.style.backgroundColor = 'green';\n        for (let key in obj) {\n          for (let i = 0; i < obj[key].position.length; i += 1) {\n            if (obj[key].position[i] === `${newRow}${newCol}`) {\n              square.style.backgroundColor = 'red';\n            }\n          }\n        }\n      }    \n    }\n    for (let i = 0; i < heldValue; i += 1) {\n      const letterValue = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(hoverRow) - i;\n      const newRow = (0,_data_alphaConvert__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(letterValue);\n      const newCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverCol)\n      const square = document.querySelector(`.${newRow}${newCol}.ocean`);\n      if (square) {\n        square.style.backgroundColor = 'green';\n        for (let key in obj) {\n          for (let i = 0; i < obj[key].position.length; i += 1) {\n            if (obj[key].position[i] === `${newRow}${newCol}`) {\n              square.style.backgroundColor = 'red';\n            }\n          }\n        }\n      }    \n    }\n  }\n  if (obj[shipName].orientation === 'h') {\n    for (let i = 0; i <= toHighlight; i += 1) {\n      const newCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverCol + i);\n      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);\n      if (square) {\n        square.style.backgroundColor = 'green';\n        for (let key in obj) {\n          for (let i = 0; i < obj[key].position.length; i += 1) {\n            if (obj[key].position[i] === `${hoverRow}${newCol}`) {\n              square.style.backgroundColor = 'red';\n            }\n          }\n        }\n      }    \n    }\n    for (let i = 0; i < heldValue; i += 1) {\n      const newCol = (0,_data_numConvert__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverCol - i);\n      const square = document.querySelector(`.${hoverRow}${newCol}.ocean`);\n      if (square) {\n        square.style.backgroundColor = 'green';\n        for (let key in obj) {\n          for (let i = 0; i < obj[key].position.length; i += 1) {\n            if (obj[key].position[i] === `${hoverRow}${newCol}`) {\n              square.style.backgroundColor = 'red';\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipHighlight);\n\n//# sourceURL=webpack://battleship/./src/DOM/ship/shipHighlight.js?");

/***/ }),

/***/ "./src/data/alphaConvert.js":
/*!**********************************!*\
  !*** ./src/data/alphaConvert.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// alphabetical values\nfunction alphaConvert(letter) {\n  const alpha = [\n    ['a', 1], \n    ['b', 2],\n    ['c', 3],\n    ['d', 4],\n    ['e', 5],\n    ['f', 6], \n    ['g', 7],\n    ['h', 8],\n    ['i', 9],\n    ['j', 10]\n  ]\n  for (const [key, value] of alpha) {\n    if (typeof letter === 'string' && letter === key) {\n      return value;\n    }\n    if (typeof letter === 'number' && letter === value) {\n      return key;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alphaConvert);\n\n\n//# sourceURL=webpack://battleship/./src/data/alphaConvert.js?");

/***/ }),

/***/ "./src/data/constructor.js":
/*!*********************************!*\
  !*** ./src/data/constructor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ship constructor\nfunction ship(length) {\n  return {\n    length: length,\n    hit: 0,\n    sunk: false,\n    orientation: 'v', // 'v' = vertical, 'h' = horizontal for placement\n    position: [],\n  }\n}\n\nconst ships = {\n  p1: {\n    carrier: ship(5),\n    battleship: ship(4),\n    cruiser: ship(3),\n    submarine: ship(3),\n    destroyer: ship(2),\n  },\n  p2:{\n    carrier: ship(5),\n    battleship: ship(4),\n    cruiser: ship(3),\n    submarine: ship(3),\n    destroyer: ship(2),\n  },\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ships);\n\n//# sourceURL=webpack://battleship/./src/data/constructor.js?");

/***/ }),

/***/ "./src/data/findPos.js":
/*!*****************************!*\
  !*** ./src/data/findPos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _savePos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savePos */ \"./src/data/savePos.js\");\n\n\n// find position of placed ship insert into savePos();\nfunction findPos(ship, obj){\n  const ocean = document.querySelectorAll('.ocean');\n  for (let i = 0; i < ocean.length; i += 1) {\n    if (ocean[i].style.backgroundColor === 'green') {\n      (0,_savePos__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ship, ocean[i].id, obj);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findPos);\n\n//# sourceURL=webpack://battleship/./src/data/findPos.js?");

/***/ }),

/***/ "./src/data/numConvert.js":
/*!********************************!*\
  !*** ./src/data/numConvert.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// convert number text to number\nfunction numConvert(str) {\n  const numPairs = {\n    'one': 1,\n    'two': 2,\n    'three': 3,\n    'four': 4,\n    'five': 5,\n    'six': 6,\n    'seven': 7,\n    'eight': 8,\n    'nine': 9,\n    'ten': 10,\n  }\n  for (let key in numPairs) {\n    if (typeof str === 'string' && str === key) {\n      return numPairs[key];\n    }\n    if (typeof str === 'number' && str === numPairs[key]) {\n      return key;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (numConvert);\n\n\n//# sourceURL=webpack://battleship/./src/data/numConvert.js?");

/***/ }),

/***/ "./src/data/savePos.js":
/*!*****************************!*\
  !*** ./src/data/savePos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction savePos(ship, pos, obj) {\n  const position = obj[ship].position;\n  position.push(pos);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (savePos);\n\n\n//# sourceURL=webpack://battleship/./src/data/savePos.js?");

/***/ }),

/***/ "./src/data/validationMsg.js":
/*!***********************************!*\
  !*** ./src/data/validationMsg.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction validationMsg(ship) {\n  let message = [];\n  for (let key in ship) {\n    if (ship[key].length !== ship[key].position.length) {\n      message.push(`${key} placement`);\n    }\n  }\n  return message;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationMsg);\n\n\n//# sourceURL=webpack://battleship/./src/data/validationMsg.js?");

/***/ }),

/***/ "./src/data/verifyPos.js":
/*!*******************************!*\
  !*** ./src/data/verifyPos.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction verifyPos(activeShip, obj) {\n  const shipObj = obj[activeShip];\n  const ship = document.querySelector(`.${activeShip}`);\n  if (shipObj.length === shipObj.position.length) {\n    ship.style.backgroundColor = 'transparent';\n  }\n  if (shipObj.length !== shipObj.position.length) { \n    shipObj.position = [];\n    ship.style.backgroundColor = 'rgba(255, 0, 0, 0.7)'\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyPos);\n\n\n//# sourceURL=webpack://battleship/./src/data/verifyPos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _DOM_board_highlighting_highlightSides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/board/highlighting/highlightSides */ \"./src/DOM/board/highlighting/highlightSides.js\");\n/* harmony import */ var _DOM_ship_addShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/ship/addShip */ \"./src/DOM/ship/addShip.js\");\n/* harmony import */ var _data_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/constructor */ \"./src/data/constructor.js\");\n/* harmony import */ var _DOM_board_markers_addMarkers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM/board/markers/addMarkers */ \"./src/DOM/board/markers/addMarkers.js\");\n\n\n\n\n\n\n// cell highlighting to eaily identify row and column\n(0,_DOM_board_highlighting_highlightSides__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// add ships to gameboard\n(0,_DOM_ship_addShip__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_data_constructor__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p1);\n\n// add markers to board\n(0,_DOM_board_markers_addMarkers__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2*(100-17), 17*2);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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