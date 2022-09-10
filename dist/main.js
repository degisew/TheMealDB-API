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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SCSS/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SCSS/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Lobster:regular);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\n.card img {\\n  width: 100%;\\n}\\n\\n.name-like img {\\n  width: 30px;\\n}\\n\\n.main-container #header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding-left: 10px;\\n  padding-right: 10px;\\n  box-shadow: 1px 2px 5px 5px rgb(185, 183, 183);\\n  min-height: 60px;\\n}\\n.main-container #header .nav-links {\\n  font-size: 20px;\\n  display: flex;\\n  column-gap: 20px;\\n}\\n.main-container #header .nav-links a {\\n  text-decoration-line: none;\\n}\\n.main-container #header .logo {\\n  font-family: \\\"Lobster\\\", cursive;\\n  color: orangered;\\n  font-size: 100px;\\n  font-style: italic;\\n}\\n.main-container #header .logo img {\\n  width: 100px;\\n}\\n.main-container footer {\\n  padding: 10px;\\n  border: 5px solid black;\\n}\\n.main-container .comment-backdrop {\\n  width: 100%;\\n  height: 100%;\\n  display: none;\\n  position: fixed;\\n  pointer-events: all;\\n  top: 0;\\n  left: 0;\\n  z-index: 1;\\n}\\n.main-container .comment-backdrop.visible {\\n  display: block;\\n  padding-left: 15px;\\n  background-color: rgba(27, 27, 40, 0.95);\\n  pointer-events: all;\\n}\\n.main-container .comment-popup {\\n  display: none;\\n  overflow: auto;\\n  padding: 10px;\\n  width: 35%;\\n  height: 95%;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n  margin: auto;\\n  position: fixed;\\n  z-index: 1;\\n}\\n.main-container .comment-popup::-webkit-scrollbar {\\n  display: none;\\n}\\n.main-container .visible {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  border-radius: 15px;\\n  background-color: #fff;\\n}\\n.main-container .close-btn {\\n  align-self: flex-end;\\n  font-size: 50px;\\n  font-weight: bolder;\\n  cursor: pointer;\\n}\\n.main-container .header-div {\\n  display: flex;\\n  width: 100%;\\n}\\n.main-container .header-div .header-image {\\n  width: 100%;\\n  height: 200px;\\n}\\n.main-container #title {\\n  font-weight: 700;\\n  font-size: 30px;\\n}\\n.main-container .about-div {\\n  display: flex;\\n  width: 100%;\\n  flex-direction: column;\\n  padding-top: 20px;\\n}\\n.main-container #form {\\n  display: flex;\\n  flex-direction: column;\\n  row-gap: 20px;\\n}\\n.main-container #form #add-comment-btn {\\n  width: 80px;\\n  align-self: center;\\n}\\n.main-container #form .comment-input {\\n  padding: 10px;\\n}\\n\\n.counter {\\n  margin: 2rem;\\n  padding: 1rem;\\n  border: 1px solid black;\\n  box-shadow: 1px 2px 5px 5px rgb(185, 183, 183);\\n}\\n.counter h1 {\\n  font-family: \\\"Lobster\\\", cursive;\\n}\\n\\n.container {\\n  padding: 1rem;\\n  display: flex;\\n  flex-wrap: wrap;\\n  row-gap: 1rem;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.card {\\n  width: 32%;\\n  display: flex;\\n  box-sizing: border-box;\\n  flex-direction: column;\\n  padding: 2rem;\\n  background-color: lightblue;\\n  border-radius: 2rem;\\n}\\n\\n.name-like {\\n  margin: 1rem;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.name-like span {\\n  font-size: 1.5rem;\\n  font-family: \\\"Lobster\\\", cursive;\\n  font-weight: 700;\\n}\\n\\n.like p {\\n  font-weight: 700;\\n}\\n\\n.comment-button {\\n  padding: 0.5rem;\\n  font-size: 1rem;\\n  margin: 0.5rem;\\n}\\n\\n.reservation-button {\\n  padding: 0.5rem;\\n  font-size: 1rem;\\n  margin: 0.5rem;\\n}\\n\\n@media only screen and (max-width: 768px) {\\n  .card {\\n    width: 100%;\\n  }\\n}\\n.list {\\n  overflow: scroll;\\n  height: 150px;\\n}\\n\\n.pmodal {\\n  height: 90vh;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/SCSS/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/SCSS/style.scss":
/*!*****************************!*\
  !*** ./src/SCSS/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SCSS/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/SCSS/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SCSS_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SCSS/style.scss */ \"./src/SCSS/style.scss\");\n/* harmony import */ var _modules_loaDeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loaDeals.js */ \"./src/modules/loaDeals.js\");\n/* harmony import */ var _modules_db_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/db.js */ \"./src/modules/db.js\");\n/* harmony import */ var _modules_commentPopupUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/commentPopupUI.js */ \"./src/modules/commentPopupUI.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_loaDeals_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_modules_db_js__WEBPACK_IMPORTED_MODULE_2__.idList);\r\n\r\nconst allCommentBtns = document.querySelectorAll('.comment-button');\r\nallCommentBtns.forEach((eachCommentBtn) => {\r\n  eachCommentBtn.addEventListener('click', () => {\r\n    (0,_modules_commentPopupUI_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(eachCommentBtn.id);\r\n  });\r\n});\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLike = async (idMeal) => {\r\n  const responce = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/likes/', {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: idMeal,\r\n    }),\r\n  });\r\n  return responce;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/addLike.js?");

/***/ }),

/***/ "./src/modules/addReservation.js":
/*!***************************************!*\
  !*** ./src/modules/addReservation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchReservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchReservation.js */ \"./src/modules/fetchReservation.js\");\n/* eslint-disable */\r\n\r\n\r\nconst reserve = async (url, data) => {\r\n  const post = {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(data),\r\n  };\r\n  await fetch(url, post);\r\n  (0,_fetchReservation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, data.item_id);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reserve);\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/addReservation.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchComment\": () => (/* binding */ fetchComment),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/comments/';\r\nconst postComment = async (formData = {}) => {\r\n  await fetch(url, {\r\n    method: 'post',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(formData),\r\n  });\r\n};\r\n\r\nconst fetchComment = async (itemId) => {\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/comments?item_id=${itemId}`;\r\n  const res = await fetch(url, {\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n  });\r\n  const data = await res.json();\r\n  return data;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/commentPopupUI.js":
/*!***************************************!*\
  !*** ./src/modules/commentPopupUI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db.js */ \"./src/modules/db.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\nconst mainDiv = document.querySelector(\".comment-popup\");\r\nconst backdrop = document.querySelector(\".comment-backdrop\");\r\nconst commentPopup = async (Id) => {\r\n  const fetchedComments = await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.fetchComment)(Id);\r\n  const response = await fetch(_db_js__WEBPACK_IMPORTED_MODULE_1__.apiBaseUrl + Id, {});\r\n  const meal = await response.json();\r\n  mainDiv.innerHTML = \"\";\r\n  const headerDiv = document.createElement(\"div\");\r\n  headerDiv.className = \"header-div\";\r\n  const headerImage = document.createElement(\"img\");\r\n  headerImage.className = \"header-image\";\r\n  headerImage.src = `${meal.meals[0].strMealThumb}`;\r\n  const closeBtn = document.createElement(\"span\");\r\n  closeBtn.id = Id;\r\n  closeBtn.className = \"close-btn\";\r\n  closeBtn.textContent = \"X\";\r\n  const title = document.createElement(\"p\");\r\n  title.id = \"title\";\r\n  title.textContent = `${meal.meals[0].strMeal}`;\r\n  // append header div items\r\n  headerDiv.append(headerImage);\r\n  //\r\n  const aboutDiv = document.createElement(\"div\");\r\n  aboutDiv.className = \"about-div\";\r\n  const mealCategory = document.createElement(\"b\");\r\n  mealCategory.textContent = `Category: ${meal.meals[0].strCategory}`;\r\n  const mealArea = document.createElement(\"b\");\r\n  mealArea.textContent = `Area: ${meal.meals[0].strArea}`;\r\n  aboutDiv.append(mealCategory, mealArea);\r\n  // comments list\r\n  const commentDiv = document.createElement(\"div\");\r\n  commentDiv.className = \"comment-container\";\r\n  const commentTitle = document.createElement(\"h2\");\r\n  commentTitle.className = \"comment-title\";\r\n  commentTitle.textContent = `Comments(${\r\n    fetchedComments.length > 0 ? fetchedComments.length : 0\r\n  })`;\r\n  // fetch comments and itterate throght them and display\r\n  commentDiv.append(commentTitle);\r\n  if (fetchedComments.length > 0) {\r\n    for (const comment of fetchedComments) {\r\n      const commentParagraph = document.createElement(\"p\");\r\n      commentParagraph.innerHTML += `<b>${comment.username}:</b> ${comment.comment}<br>`;\r\n      commentDiv.append(commentParagraph);\r\n    }\r\n  } else {\r\n    commentDiv.appendChild = \"No comments yet.\";\r\n  }\r\n  // comment\r\n  const addCommentDiv = document.createElement(\"div\");\r\n\r\n  const addCommentTitle = document.createElement(\"h2\");\r\n  addCommentTitle.textContent = \"Add a comment\";\r\n  // form\r\n  const commentForm = document.createElement(\"form\");\r\n  commentForm.id = \"form\";\r\n  const textInput = document.createElement(\"input\");\r\n  textInput.type = \"text\";\r\n  textInput.id = \"name-input\";\r\n  textInput.className = \"comment-input\";\r\n  textInput.placeholder = \"Your name\";\r\n  const textArea = document.createElement(\"textarea\");\r\n  textArea.placeholder = \"Your insights\";\r\n  textArea.className = \"comment-input\";\r\n  const error = document.createElement(\"span\");\r\n  error.id = \"error\";\r\n  error.style.color = \"red\";\r\n  const commentBn = document.createElement(\"button\");\r\n  commentBn.id = `${meal.meals[0].idMeal}`;\r\n  commentBn.className = \"add-comment-btn\";\r\n  commentBn.type = \"submit\";\r\n  commentBn.textContent = \"Comment\";\r\n  // add everything to form\r\n  commentForm.append(textInput, textArea, error, commentBn);\r\n  // append form to formDiv\r\n  addCommentDiv.append(addCommentTitle, commentForm);\r\n\r\n  mainDiv.append(\r\n    closeBtn,\r\n    headerDiv,\r\n    title,\r\n    aboutDiv,\r\n    commentDiv,\r\n    addCommentDiv\r\n  );\r\n  backdrop.classList.add(\"visible\");\r\n  mainDiv.classList.add(\"visible\");\r\n  document.body.style.overflow = \"hidden\";\r\n  return meal;\r\n};\r\n\r\nbackdrop.addEventListener(\"click\", () => {\r\n  backdrop.classList.remove(\"visible\");\r\n  mainDiv.classList.remove(\"visible\");\r\n  mainDiv.innerHTML = \"\";\r\n  document.body.style.overflow = \"scroll\";\r\n});\r\n\r\nmainDiv.addEventListener(\"click\", (e) => {\r\n  if (e.target.classList.contains(\"close-btn\")) {\r\n    mainDiv.classList.remove(\"visible\");\r\n    backdrop.classList.remove(\"visible\");\r\n    mainDiv.innerHTML = \"\";\r\n    document.body.style.overflow = \"scroll\";\r\n  } else if (e.target.classList.contains(\"add-comment-btn\")) {\r\n    e.preventDefault();\r\n\r\n    if (\r\n      document.getElementById(\"name-input\").value !== \"\" &&\r\n      document.querySelector(\"textarea\").value !== \"\"\r\n    ) {\r\n      document.getElementById(\"error\").innerHTML = \"\";\r\n      (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.postComment)({\r\n        item_id: e.target.id,\r\n        username: document.getElementById(\"name-input\").value,\r\n        comment: document.querySelector(\"textarea\").value,\r\n      });\r\n      const name = document.getElementById(\"name-input\").value;\r\n      const comment = document.querySelector(\"textarea\").value;\r\n      const p = document.createElement(\"p\");\r\n      p.innerHTML = `<b>${name}:</b>  ${comment}`;\r\n      document.querySelector(\".comment-container\").appendChild(p);\r\n      const commentCounter = document.querySelectorAll(\r\n        \".comment-container p\"\r\n      ).length;\r\n      document.querySelector(\r\n        \".comment-title\"\r\n      ).innerHTML = `Comments(${commentCounter})`;\r\n      document.getElementById(\"name-input\").value = \"\";\r\n      document.querySelector(\"textarea\").value = \"\";\r\n    } else {\r\n      document.getElementById(\"error\").innerHTML = \"Fields can't be empty\";\r\n    }\r\n  }\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopup);\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/commentPopupUI.js?");

/***/ }),

/***/ "./src/modules/countReservation.js":
/*!*****************************************!*\
  !*** ./src/modules/countReservation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countReservations=()=>{\r\n const counter=document.querySelectorAll('.list li').length||0;\r\n return counter\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countReservations);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/countReservation.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = () => {\r\n  const itemNumber = document.querySelectorAll('.card').length;\r\n  return itemNumber;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/counter.js?");

/***/ }),

/***/ "./src/modules/db.js":
/*!***************************!*\
  !*** ./src/modules/db.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiBaseUrl\": () => (/* binding */ apiBaseUrl),\n/* harmony export */   \"idList\": () => (/* binding */ idList)\n/* harmony export */ });\nconst idList = ['52982', '52854', '52861', '52806', '52881', '52883', '52846', '52927', '52928', '52912'];\r\nconst apiBaseUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\r\n\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/db.js?");

/***/ }),

/***/ "./src/modules/displayReservation.js":
/*!*******************************************!*\
  !*** ./src/modules/displayReservation.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchReservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchReservation.js */ \"./src/modules/fetchReservation.js\");\n/* harmony import */ var _grabber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grabber.js */ \"./src/modules/grabber.js\");\n\r\n\r\n\r\nconst apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/reservations';\r\nconst displayReservation = (e) => {\r\n  const { id } = e.target.parentNode.querySelector('.comment-button');\r\n  (0,_fetchReservation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(apiUrl, id);\r\n  (0,_grabber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('resButton').click();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayReservation);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/displayReservation.js?");

/***/ }),

/***/ "./src/modules/fetchReservation.js":
/*!*****************************************!*\
  !*** ./src/modules/fetchReservation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addReservation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addReservation.js */ \"./src/modules/addReservation.js\");\n/* harmony import */ var _countReservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countReservation.js */ \"./src/modules/countReservation.js\");\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db.js */ \"./src/modules/db.js\");\n/* harmony import */ var _grabber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grabber.js */ \"./src/modules/grabber.js\");\n/* eslint-disable */\r\n\r\n\r\n\r\n\r\n\r\nconst form = document.forms.reservationForm;\r\n\r\nconst fetchReservations = async (url, id) => {\r\n  (0,_grabber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"reserve\").addEventListener(\"click\", () => {\r\n    if (form.username.value === \"\") {\r\n      alert(\"Please add text\");\r\n    } else {\r\n      const data = {\r\n        item_id: id,\r\n        username: form.username.value,\r\n        date_start: form.reservationSDate.value,\r\n        date_end: form.reservationEDate.value,\r\n      };\r\n      (0,_addReservation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, data);\r\n    }\r\n  });\r\n\r\n  const response1 = await fetch(_db_js__WEBPACK_IMPORTED_MODULE_2__.apiBaseUrl + id);\r\n  const { meals } = await response1.json();\r\n  const info = meals[0];\r\n  (0,_grabber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"m-image\").src = info.strMealThumb;\r\n  (0,_grabber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"mealTitle\").innerText = info.strMeal;\r\n  const apiArr = [url, id];\r\n  const apiUrl = apiArr.join(\"?item_id=\");\r\n  const response = await fetch(apiUrl);\r\n  const data = await response.json();\r\n\r\n  \r\n  (0,_grabber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"list-contents\").innerHTML = \"\";\r\n  const container = document.createElement(\"ul\");\r\n  container.classList = \"border border-dark p-0 m-0 list \";\r\n  data.forEach((item) => {\r\n    const resArr = [item.date_start, \"to\", item.date_end, \"by\", item.username];\r\n    const element = document.createElement(\"li\");\r\n    element.classList = \"d-flex justify-content-around\";\r\n\r\n    const resHolder = document.createElement(\"p\");\r\n    resHolder.innerText = resArr.join(\" \");\r\n\r\n    element.appendChild(resHolder);\r\n    container.appendChild(element);\r\n  });\r\n  (0,_grabber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"list-contents\").appendChild(container);\r\n  const reservationNumber=(0,_countReservation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const resCount2 = [reservationNumber, \"Reservations\"];\r\n  (0,_grabber_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"reservationModalLongTitle\").innerText = resCount2.join(\" \");\r\n };\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchReservations);\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/fetchReservation.js?");

/***/ }),

/***/ "./src/modules/getMealInfoArray.js":
/*!*****************************************!*\
  !*** ./src/modules/getMealInfoArray.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db.js */ \"./src/modules/db.js\");\n\r\n\r\nconst getMealInfoArray = async () => {\r\n  const mealInfo = [];\r\n  _db_js__WEBPACK_IMPORTED_MODULE_0__.idList.forEach(async (ele) => {\r\n    const response = await fetch(_db_js__WEBPACK_IMPORTED_MODULE_0__.apiBaseUrl + ele);\r\n    const { meals } = await response.json();\r\n    const info = meals[0];\r\n    mealInfo.push(info);\r\n  });\r\n\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tGV16CMoj3AJeC9Xh2Mu/likes/');\r\n  const likes = await response.json();\r\n\r\n  return { likes, mealInfo };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMealInfoArray);\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/getMealInfoArray.js?");

/***/ }),

/***/ "./src/modules/grabber.js":
/*!********************************!*\
  !*** ./src/modules/grabber.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst grabber = (e) => document.getElementById(e);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grabber);\r\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/grabber.js?");

/***/ }),

/***/ "./src/modules/loaDeals.js":
/*!*********************************!*\
  !*** ./src/modules/loaDeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getMealInfoArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMealInfoArray.js */ \"./src/modules/getMealInfoArray.js\");\n/* harmony import */ var _asset_images_heart_regular_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/images/heart-regular.svg */ \"./src/asset/images/heart-regular.svg\");\n/* harmony import */ var _addLike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addLike.js */ \"./src/modules/addLike.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter.js */ \"./src/modules/counter.js\");\n/* harmony import */ var _displayReservation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayReservation.js */ \"./src/modules/displayReservation.js\");\n/* harmony import */ var _commentPopupUI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commentPopupUI.js */ \"./src/modules/commentPopupUI.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst loadMeals = () => {\r\n  const myPromise = new Promise((myResolve) => {\r\n    myResolve((0,_getMealInfoArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n  });\r\n  myPromise.then((result) => {\r\n    result.mealInfo.sort((a, b) => parseInt(a.idMeal, 10) - parseInt(b.idMeal, 10));\r\n    result.likes.sort((a, b) => parseInt(a.item_id, 10) - parseInt(b.item_id, 10));\r\n\r\n    let cards = '';\r\n\r\n    result.mealInfo.forEach((el, index) => {\r\n      const card = `<div class=\"card\">\r\n        <img class=\"meal-image\" src=${el.strMealThumb} alt=\"img\">\r\n        <div class=\"name-like\">\r\n           \r\n       \r\n           <span>${el.strMeal}</span>\r\n           \r\n         <div class='like'>\r\n       \r\n       <img src=${_asset_images_heart_regular_svg__WEBPACK_IMPORTED_MODULE_1__} class=\"heart\" alt=\"\"> \r\n       <p>${result.likes[index].likes}</p>\r\n       <p>Likes</p>\r\n       </div> \r\n\r\n       </div>\r\n       <button id=${el.idMeal} class=\"comment-button\">comment</button>\r\n       <button class=\"reservation-button\">Reservation</button>\r\n   </div>`;\r\n      cards += card;\r\n    });\r\n\r\n    document.querySelector('.container').innerHTML = cards;\r\n    const itemNumber = (0,_counter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    document.querySelector('.counter h1').innerHTML = `Total number of items : ${itemNumber} `;\r\n    const commentButtons = Array.from(document.querySelectorAll('.comment-button'));\r\n    commentButtons.forEach((el) => {\r\n      el.addEventListener('click', () => {\r\n        (0,_commentPopupUI_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(el.id);\r\n      });\r\n    });\r\n    const reservationButtons = Array.from(document.querySelectorAll('.reservation-button'));\r\n    reservationButtons.forEach((el) => {\r\n      el.onclick = _displayReservation_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\n    });\r\n    const element = Array.from(document.querySelectorAll('.heart'));\r\n    element.forEach((el) => {\r\n      el.addEventListener('click', (e) => {\r\n        (0,_addLike_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target.parentNode.parentNode.parentNode.querySelector('.comment-button').getAttribute('id'));\r\n        const numOfLikes = e.target.parentNode.querySelector('p').innerHTML;\r\n        const parsevValue = parseInt(numOfLikes, 10);\r\n        e.target.parentNode.querySelector('p').innerHTML = `${parsevValue + 1}`;\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMeals);\n\n//# sourceURL=webpack://javascript-group-capstone/./src/modules/loaDeals.js?");

/***/ }),

/***/ "./src/asset/images/heart-regular.svg":
/*!********************************************!*\
  !*** ./src/asset/images/heart-regular.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"heart-regular.svg\";\n\n//# sourceURL=webpack://javascript-group-capstone/./src/asset/images/heart-regular.svg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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