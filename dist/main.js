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

/***/ "./src/script/home.js":
/*!****************************!*\
  !*** ./src/script/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/script/index.js\");\n\r\n\r\n// Hero\r\nconst createHero = () => {\r\n  const hero = document.createElement(\"div\");\r\n  const header = document.createElement(\"h3\");\r\n  const slogan = document.createElement(\"div\");\r\n\r\n  hero.classList.add(\"hero\");\r\n  slogan.classList.add(\"slogan\");\r\n\r\n  header.textContent = \"ICHIRAKU RAMEN\";\r\n  slogan.textContent = \"THE WORLD'S BEST RAMEN\";\r\n\r\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(hero);\r\n  hero.appendChild(header);\r\n  hero.appendChild(slogan);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHero);\n\n//# sourceURL=webpack://restaurant-page/./src/script/home.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/script/webpage.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/script/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/script/menu.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\".content\");\r\n\r\n// Load Webpage\r\nconst loadWebpage = () => {\r\n    (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\r\n    //createHero();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_webpage__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);\r\n\r\nloadWebpage();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/index.js?");

/***/ }),

/***/ "./src/script/menu.js":
/*!****************************!*\
  !*** ./src/script/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/script/index.js\");\n\r\n\r\nconst Menu = [\r\n  {\r\n    title: \"Chashu Ramen\",\r\n    imgFile: \"/src/img/chashu.jpeg\",\r\n    desc1: \"Sharing Size\",\r\n    desc2: \"House Special\",\r\n    desc3: \"Black Soup Base\",\r\n    price: \"¥300\",\r\n  },\r\n  {\r\n    title: \"Spicy Tantanmen Ramen\",\r\n    imgFile: \"/src/img/tantanmen.jpg\",\r\n    desc1: \"Spicy Rayu Ramen\",\r\n    desc2: \"Nutty Soy Milk\",\r\n    desc3: \"Seasame Paste\",\r\n    price: \"¥230\",\r\n  },\r\n  {\r\n    title: \"Miso Ramen\",\r\n    imgFile: \"/src/img/miso.jpg\",\r\n    desc1: \"Savory Spicy Miso\",\r\n    desc2: \"Paste Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥230\",\r\n  },\r\n  {\r\n    title: \"Tonkostsu Ramen\",\r\n    imgFile: \"/src/img/tonkostsu.jpg\",\r\n    desc1: \"Creamy Garlic Pork\",\r\n    desc2: \"Broth Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥220\",\r\n  },\r\n  {\r\n    title: \"Wafu Shoyu Ramen\",\r\n    imgFile: \"/src/img/shoyu.jpg\",\r\n    desc1: \"Flavorful Pork\",\r\n    desc2: \"Veggie Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥210\",\r\n  },\r\n  {\r\n    title: \"Torigara Ramen\",\r\n    imgFile: \"/src/img/torigara.jpg\",\r\n    desc1: \"Rich Chicken Broth\",\r\n    desc2: \"Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥200\",\r\n  },\r\n];\r\n\r\nconst createMenu = () => {\r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.classList.add(\"card-container\");\r\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(cardContainer);\r\n\r\n  const createItemCard = (item) => {\r\n    const card = document.createElement(\"div\");\r\n    const title = document.createElement(\"header\");\r\n    const description = document.createElement(\"div\");\r\n    const image = document.createElement(\"img\");\r\n    const list = document.createElement(\"ul\");\r\n    const desc1 = document.createElement(\"li\");\r\n    const desc2 = document.createElement(\"li\");\r\n    const desc3 = document.createElement(\"li\");\r\n    const price = document.createElement(\"li\");\r\n\r\n    card.classList.add(\"card\");\r\n    title.classList.add(\"title\");\r\n    description.classList.add(\"description\");\r\n    description.classList.add(\"description\");\r\n    price.classList.add(\"price\");\r\n\r\n    title.textContent = item.title;\r\n    image.src = item.imgFile;\r\n    image.alt = item.title;\r\n    desc1.textContent = item.desc1;\r\n    desc2.textContent = item.desc2;\r\n    desc3.textContent = item.desc3;\r\n    price.textContent = item.price;\r\n\r\n    cardContainer.appendChild(card);\r\n    card.appendChild(title);\r\n    card.appendChild(description);\r\n    description.appendChild(image);\r\n    description.appendChild(list);\r\n    list.appendChild(desc1);\r\n    list.appendChild(desc2);\r\n    list.appendChild(desc3);\r\n    list.appendChild(price);\r\n  };\r\n\r\n  for (let item of Menu) createItemCard(item);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/menu.js?");

/***/ }),

/***/ "./src/script/webpage.js":
/*!*******************************!*\
  !*** ./src/script/webpage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter),\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/script/index.js\");\n\r\n\r\n// Header\r\nconst createHeader = () => {\r\n  const header = document.createElement(\"div\");\r\n\r\n  header.classList.add(\"header\");\r\n\r\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(header);\r\n\r\n  // Logo\r\n  const renderLogo = () => {\r\n    const logo = document.createElement(\"img\");\r\n\r\n    logo.classList.add(\"logo\");\r\n    logo.src = \"/src/img/logo.png\";\r\n    logo.alt = \"logo\";\r\n\r\n    header.appendChild(logo);\r\n  };\r\n\r\n  // Nav\r\n  const renderNav = () => {\r\n    const nav = document.createElement(\"ul\");\r\n    const home = document.createElement(\"li\");\r\n    const menu = document.createElement(\"li\");\r\n    const location = document.createElement(\"li\");\r\n    const online = document.createElement(\"li\");\r\n    const homeLink = document.createElement(\"a\");\r\n    const menuLink = document.createElement(\"a\");\r\n    const locationLink = document.createElement(\"a\");\r\n    const onlineLink = document.createElement(\"a\");\r\n\r\n    nav.classList.add(\"nav\");\r\n\r\n    homeLink.textContent = \"Home\";\r\n    menuLink.textContent = \"Menu\";\r\n    locationLink.textContent = \"Location\";\r\n    onlineLink.textContent = \"Order Online\";\r\n\r\n    header.appendChild(nav);\r\n    nav.appendChild(home);\r\n    nav.appendChild(menu);\r\n    nav.appendChild(location);\r\n    nav.appendChild(online);\r\n    home.appendChild(homeLink);\r\n    menu.appendChild(menuLink);\r\n    location.appendChild(locationLink);\r\n    online.appendChild(onlineLink);\r\n  };\r\n\r\n  // Mobile Nav\r\n  const renderMobileNav = () => {\r\n    const navToggle = document.createElement(\"a\");\r\n    const topBar = document.createElement(\"span\");\r\n    const midBar = document.createElement(\"span\");\r\n    const lowBar = document.createElement(\"span\");\r\n\r\n    navToggle.classList.add(\"toggle-btn\");\r\n    topBar.classList.add(\"bar\");\r\n    midBar.classList.add(\"bar\");\r\n    lowBar.classList.add(\"bar\");\r\n\r\n    header.appendChild(navToggle);\r\n    navToggle.appendChild(topBar);\r\n    navToggle.appendChild(midBar);\r\n    navToggle.appendChild(lowBar);\r\n  };\r\n\r\n  renderLogo();\r\n  renderNav();\r\n  renderMobileNav();\r\n};\r\n\r\n// Footer\r\nconst createFooter = () => {\r\n  const footer = document.createElement(\"div\");\r\n  const githubLink = document.createElement(\"a\");\r\n  const githubImg = document.createElement(\"img\");\r\n\r\n  footer.classList.add(\"footer\");\r\n\r\n  githubLink.href = \"https://www.github.com/nainsworth\";\r\n  githubLink.target = \"_blank\";\r\n  githubLink.textContent = \"NAINSWORTH\";\r\n\r\n  githubImg.src = \"/src/img/github.svg\";\r\n  githubImg.alt = \"github logo\";\r\n\r\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendChild(footer);\r\n  footer.appendChild(githubLink);\r\n  githubLink.appendChild(githubImg);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/webpage.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/index.js");
/******/ 	
/******/ })()
;