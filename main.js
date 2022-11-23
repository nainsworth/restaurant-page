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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ \"./src/img/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --red050: #fef2f2;\\r\\n  --red100: #fee2e2;\\r\\n  --red200: #fecaca;\\r\\n  --red300: #fca5a5;\\r\\n  --red400: #f87171;\\r\\n  --red500: #ef4444;\\r\\n  --red600: #dc2626;\\r\\n  --red700: #b91c1c;\\r\\n  --red800: #991b1b;\\r\\n  --red900: #7f1d1d;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: Helvetica, sans-serif;\\r\\n  /* border: 1px solid red; */\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover;\\r\\n  background-position: top;\\r\\n  background-repeat: no-repeat;\\r\\n  background-attachment: fixed;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n/* ---------- Header ---------- */\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 8px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 100px;\\r\\n  border-radius: 50px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.nav {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.nav li {\\r\\n  list-style-type: none;\\r\\n  color: var(--red050);\\r\\n  font-weight: bold;\\r\\n  text-shadow: 2px 2px 3px black;\\r\\n  width: 100px;\\r\\n  height: 35px;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n  border-bottom: 3px solid var(--red800);\\r\\n  filter: drop-shadow(2px 2px 5px black);\\r\\n}\\r\\n\\r\\n.nav li:hover {\\r\\n  background-color: rgba(0, 0, 0, 0.7);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav li a {\\r\\n  text-decoration: none;\\r\\n  color: var(--red050);\\r\\n  height: 100%;\\r\\n  widows: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n/* ---------- Main ---------- */\\r\\n\\r\\n.main {\\r\\n  flex: 1;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  margin: 8px;\\r\\n}\\r\\n\\r\\n/* ---------- Hero ---------- */\\r\\n\\r\\n.hero {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  background-color: rgba(0, 0, 0, 0.7);\\r\\n  padding: 24px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.hero h3 {\\r\\n  color: var(--red050);\\r\\n  font-size: 42px;\\r\\n  white-space: nowrap;\\r\\n}\\r\\n\\r\\n.slogan {\\r\\n  color: var(--red050);\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n/* ---------- Menu ---------- */\\r\\n\\r\\n.card-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  border-radius: 16px;\\r\\n  border: 2px solid var(--red900);\\r\\n  width: 100%;\\r\\n  justify-items: center;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  border-radius: 16px;\\r\\n  margin: 16px;\\r\\n  width: 310px;\\r\\n  height: 380px;\\r\\n  background-color: rgba(0, 0, 0, 0.75);\\r\\n}\\r\\n\\r\\n.title {\\r\\n  color: var(--red050);\\r\\n  text-align: center;\\r\\n  font-weight: bold;\\r\\n  font-size: 1.5rem;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 8px;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n  width: 225px;\\r\\n  height: 225px;\\r\\n  object-fit: cover;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.description ul {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.description ul li {\\r\\n  color: var(--red050);\\r\\n  list-style: none;\\r\\n  text-align: center;\\r\\n  height: 18px;\\r\\n}\\r\\n\\r\\n.price {\\r\\n  margin-top: auto;\\r\\n  align-self: flex-end;\\r\\n  padding: 8px;\\r\\n  font-weight: bold;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n/* ---------- Location ---------- */\\r\\n\\r\\n.location {\\r\\n  background-color: rgba(0, 0, 0, 0.75);\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 36px;\\r\\n  margin: auto;\\r\\n  width: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.5);\\r\\n  border-radius: 16px;\\r\\n  border: 2px solid var(--red900);\\r\\n  gap: 18px;\\r\\n}\\r\\n\\r\\n.locationInfo {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 24px;\\r\\n}\\r\\n\\r\\n.locationImg {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.locationDesc {\\r\\n  color: var(--red050);\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n\\r\\n.map {\\r\\n  width: 82%;\\r\\n  border-top: 3px solid var(--red900);\\r\\n  padding-top: 16px;\\r\\n}\\r\\n\\r\\n/* ---------- Footer ---------- */\\r\\n\\r\\n.footer {\\r\\n  padding: 8px;\\r\\n  width: 100%;\\r\\n  margin-top: auto;\\r\\n}\\r\\n\\r\\n.footer a {\\r\\n  text-decoration: none;\\r\\n  color: var(--red050);\\r\\n  font-weight: bold;\\r\\n  display: flex;\\r\\n  flex-direction: row-reverse;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 14px;\\r\\n  text-shadow: 2px 2px 5px black;\\r\\n}\\r\\n\\r\\n.footer a img {\\r\\n  width: 30px;\\r\\n  filter: drop-shadow(2px 2px 5px black);\\r\\n}\\r\\n\\r\\n/* ---------- Mobile Devices ---------- */\\r\\n\\r\\n@media (max-width: 625px) {\\r\\n  .header {\\r\\n    flex-direction: column;\\r\\n    width: 100%;\\r\\n    gap: 8px;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    width: 15%;\\r\\n    left: 10%x;\\r\\n  }\\r\\n\\r\\n  .hero {\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .card-container {\\r\\n    max-width: 400px;\\r\\n  }\\r\\n\\r\\n  .locationInfo {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .locationImg {\\r\\n    width: 90%;\\r\\n  }\\r\\n\\r\\n  .locationDesc {\\r\\n    width: 90%;\\r\\n    font-size: 1rem;\\r\\n  }\\r\\n\\r\\n  .map {\\r\\n    width: 90%;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* ---------- Larger Devices ---------- */\\r\\n\\r\\n@media screen and (min-width: 800px) {\\r\\n  .header {\\r\\n    max-width: 1680px;\\r\\n    background-color: rgba(0, 0, 0, 0);\\r\\n    padding: 25px;\\r\\n  }\\r\\n\\r\\n  .nav li a {\\r\\n    font-size: 20px;\\r\\n  }\\r\\n\\r\\n  .logo {\\r\\n    width: 125px;\\r\\n  }\\r\\n\\r\\n  .hero h3 {\\r\\n    font-size: 72px;\\r\\n  }\\r\\n\\r\\n  .slogan {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n\\r\\n  .card-container {\\r\\n    max-width: 1200px;\\r\\n  }\\r\\n\\r\\n  .location {\\r\\n    max-width: 1200px;\\r\\n    padding: 5% 0;\\r\\n  }\\r\\n\\r\\n  .locationDesc {\\r\\n    width: 30%;\\r\\n    font-size: 1.5rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script/home.js":
/*!****************************!*\
  !*** ./src/script/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Hero\r\nconst createHero = () => {\r\n  const hero = document.createElement(\"div\");\r\n  hero.classList.add(\"hero\");\r\n\r\n  const header = document.createElement(\"h3\");\r\n  header.textContent = \"ICHIRAKU RAMEN\";\r\n\r\n  const slogan = document.createElement(\"div\");\r\n  slogan.classList.add(\"slogan\");\r\n  slogan.textContent = \"THE WORLD'S BEST RAMEN\";\r\n\r\n  hero.appendChild(header);\r\n  hero.appendChild(slogan);\r\n\r\n  return hero;\r\n};\r\n\r\nconst loadHome = () => {\r\n  const main = document.querySelector(\".main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createHero());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/script/home.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/script/webpage.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n(0,_webpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/index.js?");

/***/ }),

/***/ "./src/script/location.js":
/*!********************************!*\
  !*** ./src/script/location.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_location_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/location.jpeg */ \"./src/img/location.jpeg\");\n/* harmony import */ var _img_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/map.png */ \"./src/img/map.png\");\n\r\n\r\n\r\nconst createLocation = () => {\r\n  const location = document.createElement(\"div\");\r\n  location.classList.add(\"location\");\r\n\r\n  const locationInfo = document.createElement(\"div\");\r\n  locationInfo.classList.add(\"locationInfo\");\r\n\r\n  const locationImg = document.createElement(\"img\");\r\n  locationImg.classList.add(\"locationImg\");\r\n  locationImg.src = _img_location_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n  locationImg.alt = \"Location Image\";\r\n\r\n  const locationDesc = document.createElement(\"p\");\r\n  locationDesc.classList.add(\"locationDesc\");\r\n  locationDesc.textContent =\r\n    \"Popular with Konoha's villagers, Ichiraku Ramen is the world's best ramen because of Teuchi's commitment to taste and artistic quality. Ichiraku Ramen offers various toppings, such as char siu, seaweed, and boiled eggs. Stop by and get you a bowl.\";\r\n\r\n  const map = document.createElement(\"img\");\r\n  map.classList.add(\"map\");\r\n  map.src = _img_map_png__WEBPACK_IMPORTED_MODULE_1__;\r\n  map.alt = \"Map Image\";\r\n\r\n  location.appendChild(locationInfo);\r\n  locationInfo.appendChild(locationImg);\r\n  locationInfo.appendChild(locationDesc);\r\n  location.appendChild(map);\r\n\r\n  return location;\r\n};\r\n\r\nconst loadLocation = () => {\r\n  const main = document.querySelector(\".main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createLocation());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLocation);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/location.js?");

/***/ }),

/***/ "./src/script/menu.js":
/*!****************************!*\
  !*** ./src/script/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_chashu_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/chashu.jpeg */ \"./src/img/chashu.jpeg\");\n/* harmony import */ var _img_tantanmen_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/tantanmen.jpg */ \"./src/img/tantanmen.jpg\");\n/* harmony import */ var _img_miso_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/miso.jpg */ \"./src/img/miso.jpg\");\n/* harmony import */ var _img_tonkostsu_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/tonkostsu.jpg */ \"./src/img/tonkostsu.jpg\");\n/* harmony import */ var _img_shoyu_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/shoyu.jpg */ \"./src/img/shoyu.jpg\");\n/* harmony import */ var _img_torigara_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/torigara.jpg */ \"./src/img/torigara.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst Menu = [\r\n  {\r\n    title: \"Chashu Ramen\",\r\n    imgFile: _img_chashu_jpeg__WEBPACK_IMPORTED_MODULE_0__,\r\n    desc1: \"Sharing Size\",\r\n    desc2: \"House Special\",\r\n    desc3: \"Black Soup Base\",\r\n    price: \"¥300\",\r\n  },\r\n  {\r\n    title: \"Spicy Tantanmen Ramen\",\r\n    imgFile: _img_tantanmen_jpg__WEBPACK_IMPORTED_MODULE_1__,\r\n    desc1: \"Spicy Rayu Ramen\",\r\n    desc2: \"Nutty Soy Milk\",\r\n    desc3: \"Seasame Paste\",\r\n    price: \"¥230\",\r\n  },\r\n  {\r\n    title: \"Miso Ramen\",\r\n    imgFile: _img_miso_jpg__WEBPACK_IMPORTED_MODULE_2__,\r\n    desc1: \"Savory Spicy Miso\",\r\n    desc2: \"Paste Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥230\",\r\n  },\r\n  {\r\n    title: \"Tonkostsu Ramen\",\r\n    imgFile: _img_tonkostsu_jpg__WEBPACK_IMPORTED_MODULE_3__,\r\n    desc1: \"Creamy Garlic Pork\",\r\n    desc2: \"Broth Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥220\",\r\n  },\r\n  {\r\n    title: \"Wafu Shoyu Ramen\",\r\n    imgFile: _img_shoyu_jpg__WEBPACK_IMPORTED_MODULE_4__,\r\n    desc1: \"Flavorful Pork\",\r\n    desc2: \"Veggie Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥210\",\r\n  },\r\n  {\r\n    title: \"Torigara Ramen\",\r\n    imgFile: _img_torigara_jpg__WEBPACK_IMPORTED_MODULE_5__,\r\n    desc1: \"Rich Chicken Broth\",\r\n    desc2: \"Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥200\",\r\n  },\r\n];\r\n\r\nconst createMenu = () => {\r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.classList.add(\"card-container\");\r\n\r\n  const createItemCard = (item) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const title = document.createElement(\"header\");\r\n    title.classList.add(\"title\");\r\n    title.textContent = item.title;\r\n\r\n    const description = document.createElement(\"div\");\r\n    description.classList.add(\"description\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.src = item.imgFile;\r\n    image.alt = item.title;\r\n\r\n    const list = document.createElement(\"ul\");\r\n\r\n    const desc1 = document.createElement(\"li\");\r\n    desc1.textContent = item.desc1;\r\n\r\n    const desc2 = document.createElement(\"li\");\r\n    desc2.textContent = item.desc2;\r\n\r\n    const desc3 = document.createElement(\"li\");\r\n    desc3.textContent = item.desc3;\r\n\r\n    const price = document.createElement(\"li\");\r\n    price.classList.add(\"price\");\r\n    price.textContent = item.price;\r\n\r\n    cardContainer.appendChild(card);\r\n    card.appendChild(title);\r\n    card.appendChild(description);\r\n    description.appendChild(image);\r\n    description.appendChild(list);\r\n    list.appendChild(desc1);\r\n    list.appendChild(desc2);\r\n    list.appendChild(desc3);\r\n    list.appendChild(price);\r\n  };\r\n\r\n  for (let item of Menu) createItemCard(item);\r\n\r\n  return cardContainer;\r\n};\r\n\r\nconst loadMenu = () => {\r\n  const main = document.querySelector(\".main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createMenu());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/menu.js?");

/***/ }),

/***/ "./src/script/webpage.js":
/*!*******************************!*\
  !*** ./src/script/webpage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_fav_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/fav.png */ \"./src/img/fav.png\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _img_github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/github.svg */ \"./src/img/github.svg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/script/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ \"./src/script/menu.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location.js */ \"./src/script/location.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Favicon\r\nconst setFavicon = () => {\r\n  const head = document.querySelector(\"head\");\r\n  const setFavicon = document.createElement(\"link\");\r\n  setFavicon.rel = \"shortcut icon\";\r\n  setFavicon.href = _img_fav_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n  head.appendChild(setFavicon);\r\n};\r\n\r\n// Header\r\nconst createHeader = () => {\r\n  const header = document.createElement(\"div\");\r\n  header.classList.add(\"header\");\r\n\r\n  // Favicon\r\n  const setFavicon = () => {\r\n    const head = document.querySelector(\"head\");\r\n    const setFavicon = document.createElement(\"link\");\r\n    setFavicon.rel = \"shortcut icon\";\r\n    setFavicon.href = _img_fav_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    head.appendChild(setFavicon);\r\n  };\r\n\r\n  // Logo\r\n  const renderLogo = () => {\r\n    const logo = document.createElement(\"img\");\r\n    logo.classList.add(\"logo\");\r\n    logo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    logo.alt = \"logo\";\r\n\r\n    header.appendChild(logo);\r\n  };\r\n\r\n  // Nav\r\n  const renderNav = () => {\r\n    const nav = document.createElement(\"ul\");\r\n    nav.classList.add(\"nav\");\r\n\r\n    const home = document.createElement(\"li\");\r\n    const homeLink = document.createElement(\"a\");\r\n    home.classList.add(\"selected\");\r\n    homeLink.textContent = \"Home\";\r\n    home.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"selected\")) return;\r\n      removeSelectedClass();\r\n      home.classList.add(\"selected\");\r\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    });\r\n\r\n    const menu = document.createElement(\"li\");\r\n    const menuLink = document.createElement(\"a\");\r\n    menuLink.textContent = \"Menu\";\r\n    menu.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"selected\")) return;\r\n      removeSelectedClass();\r\n      menu.classList.add(\"selected\");\r\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    });\r\n\r\n    const location = document.createElement(\"li\");\r\n    const locationLink = document.createElement(\"a\");\r\n    locationLink.textContent = \"Location\";\r\n    location.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"selected\")) return;\r\n      removeSelectedClass();\r\n      location.classList.add(\"selected\");\r\n      (0,_location_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    });\r\n\r\n    header.appendChild(nav);\r\n    nav.appendChild(home);\r\n    nav.appendChild(menu);\r\n    nav.appendChild(location);\r\n    home.appendChild(homeLink);\r\n    menu.appendChild(menuLink);\r\n    location.appendChild(locationLink);\r\n\r\n    const removeSelectedClass = () => {\r\n      home.classList.remove(\"selected\");\r\n      menu.classList.remove(\"selected\");\r\n      location.classList.remove(\"selected\");\r\n    };\r\n  };\r\n\r\n  setFavicon();\r\n  renderLogo();\r\n  renderNav();\r\n\r\n  return header;\r\n};\r\n\r\n// Main\r\nconst createMain = () => {\r\n  const main = document.createElement(\"div\");\r\n  main.classList.add(\"main\");\r\n\r\n  return main;\r\n};\r\n\r\n// Footer\r\nconst createFooter = () => {\r\n  const footer = document.createElement(\"div\");\r\n  footer.classList.add(\"footer\");\r\n\r\n  const githubLink = document.createElement(\"a\");\r\n  githubLink.href = \"https://www.github.com/nainsworth\";\r\n  githubLink.target = \"_blank\";\r\n  githubLink.textContent = \"NAINSWORTH\";\r\n\r\n  const githubImg = document.createElement(\"img\");\r\n  githubImg.src = _img_github_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n  githubImg.alt = \"github logo\";\r\n\r\n  footer.appendChild(githubLink);\r\n  githubLink.appendChild(githubImg);\r\n\r\n  return footer;\r\n};\r\n\r\nconst loadWebpage = () => {\r\n  const content = document.querySelector(\".content\");\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebpage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/webpage.js?");

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aed14267a67539f7b20b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/background.jpg?");

/***/ }),

/***/ "./src/img/chashu.jpeg":
/*!*****************************!*\
  !*** ./src/img/chashu.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7aae7a30e095af4eea3a.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/chashu.jpeg?");

/***/ }),

/***/ "./src/img/fav.png":
/*!*************************!*\
  !*** ./src/img/fav.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d3953fa67881818d507f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/fav.png?");

/***/ }),

/***/ "./src/img/github.svg":
/*!****************************!*\
  !*** ./src/img/github.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5761a8fc271668246583.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/github.svg?");

/***/ }),

/***/ "./src/img/location.jpeg":
/*!*******************************!*\
  !*** ./src/img/location.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c214284906ca01a3f13f.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/location.jpeg?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6fc82240db53a56f18f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/logo.png?");

/***/ }),

/***/ "./src/img/map.png":
/*!*************************!*\
  !*** ./src/img/map.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e19623fa6390d47565f0.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/map.png?");

/***/ }),

/***/ "./src/img/miso.jpg":
/*!**************************!*\
  !*** ./src/img/miso.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8d42a9bda5a7197ea4c.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/miso.jpg?");

/***/ }),

/***/ "./src/img/shoyu.jpg":
/*!***************************!*\
  !*** ./src/img/shoyu.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc4b1ff2a85d0de5f041.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/shoyu.jpg?");

/***/ }),

/***/ "./src/img/tantanmen.jpg":
/*!*******************************!*\
  !*** ./src/img/tantanmen.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e516471f53425e298724.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tantanmen.jpg?");

/***/ }),

/***/ "./src/img/tonkostsu.jpg":
/*!*******************************!*\
  !*** ./src/img/tonkostsu.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a46aff02089fa18448ee.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tonkostsu.jpg?");

/***/ }),

/***/ "./src/img/torigara.jpg":
/*!******************************!*\
  !*** ./src/img/torigara.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9326b10274a62f40c329.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/torigara.jpg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/index.js");
/******/ 	
/******/ })()
;