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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Hero\r\nconst createHero = () => {\r\n  const hero = document.createElement(\"div\");\r\n  hero.classList.add(\"hero\");\r\n\r\n  const header = document.createElement(\"h3\");\r\n  header.textContent = \"ICHIRAKU RAMEN\";\r\n\r\n  const slogan = document.createElement(\"div\");\r\n  slogan.classList.add(\"slogan\");\r\n  slogan.textContent = \"THE WORLD'S BEST RAMEN\";\r\n\r\n  hero.appendChild(header);\r\n  hero.appendChild(slogan);\r\n\r\n  return hero;\r\n};\r\n\r\nconst loadHome = () => {\r\n  const main = document.querySelector(\".main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createHero());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/script/home.js?");

/***/ }),

/***/ "./src/script/index.js":
/*!*****************************!*\
  !*** ./src/script/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/script/webpage.js\");\n\r\n\r\n(0,_webpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/index.js?");

/***/ }),

/***/ "./src/script/location.js":
/*!********************************!*\
  !*** ./src/script/location.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createLocation = () => {\r\n\r\n    return location;\r\n}\r\n\r\nconst loadLocation = () => {\r\n    const main = document.querySelector(\".main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createLocation());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLocation);\n\n//# sourceURL=webpack://restaurant-page/./src/script/location.js?");

/***/ }),

/***/ "./src/script/menu.js":
/*!****************************!*\
  !*** ./src/script/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Menu = [\r\n  {\r\n    title: \"Chashu Ramen\",\r\n    imgFile: \"/src/img/chashu.jpeg\",\r\n    desc1: \"Sharing Size\",\r\n    desc2: \"House Special\",\r\n    desc3: \"Black Soup Base\",\r\n    price: \"¥300\",\r\n  },\r\n  {\r\n    title: \"Spicy Tantanmen Ramen\",\r\n    imgFile: \"/src/img/tantanmen.jpg\",\r\n    desc1: \"Spicy Rayu Ramen\",\r\n    desc2: \"Nutty Soy Milk\",\r\n    desc3: \"Seasame Paste\",\r\n    price: \"¥230\",\r\n  },\r\n  {\r\n    title: \"Miso Ramen\",\r\n    imgFile: \"/src/img/miso.jpg\",\r\n    desc1: \"Savory Spicy Miso\",\r\n    desc2: \"Paste Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥230\",\r\n  },\r\n  {\r\n    title: \"Tonkostsu Ramen\",\r\n    imgFile: \"/src/img/tonkostsu.jpg\",\r\n    desc1: \"Creamy Garlic Pork\",\r\n    desc2: \"Broth Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥220\",\r\n  },\r\n  {\r\n    title: \"Wafu Shoyu Ramen\",\r\n    imgFile: \"/src/img/shoyu.jpg\",\r\n    desc1: \"Flavorful Pork\",\r\n    desc2: \"Veggie Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥210\",\r\n  },\r\n  {\r\n    title: \"Torigara Ramen\",\r\n    imgFile: \"/src/img/torigara.jpg\",\r\n    desc1: \"Rich Chicken Broth\",\r\n    desc2: \"Soup Base\",\r\n    desc3: \"\",\r\n    price: \"¥200\",\r\n  },\r\n];\r\n\r\nconst createMenu = () => {\r\n  const cardContainer = document.createElement(\"div\");\r\n  cardContainer.classList.add(\"card-container\");\r\n\r\n  const createItemCard = (item) => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const title = document.createElement(\"header\");\r\n    title.classList.add(\"title\");\r\n    title.textContent = item.title;\r\n\r\n    const description = document.createElement(\"div\");\r\n    description.classList.add(\"description\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.src = item.imgFile;\r\n    image.alt = item.title;\r\n\r\n    const list = document.createElement(\"ul\");\r\n\r\n    const desc1 = document.createElement(\"li\");\r\n    desc1.textContent = item.desc1;\r\n\r\n    const desc2 = document.createElement(\"li\");\r\n    desc2.textContent = item.desc2;\r\n\r\n    const desc3 = document.createElement(\"li\");\r\n    desc3.textContent = item.desc3;\r\n\r\n    const price = document.createElement(\"li\");\r\n    price.classList.add(\"price\");\r\n    price.textContent = item.price;\r\n\r\n    cardContainer.appendChild(card);\r\n    card.appendChild(title);\r\n    card.appendChild(description);\r\n    description.appendChild(image);\r\n    description.appendChild(list);\r\n    list.appendChild(desc1);\r\n    list.appendChild(desc2);\r\n    list.appendChild(desc3);\r\n    list.appendChild(price);\r\n  };\r\n\r\n  for (let item of Menu) createItemCard(item);\r\n\r\n  return cardContainer;\r\n};\r\n\r\nconst loadMenu = () => {\r\n  const main = document.querySelector(\".main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createMenu());\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/menu.js?");

/***/ }),

/***/ "./src/script/webpage.js":
/*!*******************************!*\
  !*** ./src/script/webpage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/script/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/script/menu.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.js */ \"./src/script/location.js\");\n\r\n\r\n\r\n\r\n// Header\r\nconst createHeader = () => {\r\n  const header = document.createElement(\"div\");\r\n  header.classList.add(\"header\");\r\n\r\n  const nav = document.createElement(\"ul\");\r\n  nav.classList.add(\"nav\");\r\n\r\n  const logo = document.createElement(\"img\");\r\n\r\n  const navToggle = document.createElement(\"a\");\r\n  navToggle.classList.add(\"toggle-btn\");\r\n\r\n  // Logo\r\n  const renderLogo = () => {\r\n    logo.classList.add(\"logo\");\r\n    logo.src = \"/src/img/logo.png\";\r\n    logo.alt = \"logo\";\r\n\r\n    header.appendChild(logo);\r\n  };\r\n\r\n  // Nav\r\n  const renderNav = () => {\r\n    const home = document.createElement(\"li\");\r\n    const homeLink = document.createElement(\"a\");\r\n    home.classList.add(\"selected\");\r\n    homeLink.textContent = \"Home\";\r\n    home.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"selected\")) return;\r\n      removeSelectedClass();\r\n      home.classList.add(\"selected\");\r\n      (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n\r\n    const menu = document.createElement(\"li\");\r\n    const menuLink = document.createElement(\"a\");\r\n    menuLink.textContent = \"Menu\";\r\n    menu.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"selected\")) return;\r\n      removeSelectedClass();\r\n      menu.classList.add(\"selected\");\r\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    const location = document.createElement(\"li\");\r\n    const locationLink = document.createElement(\"a\");\r\n    locationLink.textContent = \"Location\";\r\n    location.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"selected\")) return;\r\n      removeSelectedClass();\r\n      location.classList.add(\"selected\");\r\n      (0,_location_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\n    header.appendChild(nav);\r\n    nav.appendChild(home);\r\n    nav.appendChild(menu);\r\n    nav.appendChild(location);\r\n    home.appendChild(homeLink);\r\n    menu.appendChild(menuLink);\r\n    location.appendChild(locationLink);\r\n\r\n    const removeSelectedClass = () => {\r\n      home.classList.remove(\"selected\");\r\n      menu.classList.remove(\"selected\");\r\n      location.classList.remove(\"selected\");\r\n    };\r\n  };\r\n\r\n  // Mobile Nav\r\n  const renderMobileNav = () => {\r\n    const topBar = document.createElement(\"span\");\r\n    topBar.classList.add(\"bar\");\r\n\r\n    const midBar = document.createElement(\"span\");\r\n    midBar.classList.add(\"bar\");\r\n\r\n    const lowBar = document.createElement(\"span\");\r\n    lowBar.classList.add(\"bar\");\r\n\r\n    header.appendChild(navToggle);\r\n    navToggle.appendChild(topBar);\r\n    navToggle.appendChild(midBar);\r\n    navToggle.appendChild(lowBar);\r\n  };\r\n\r\n  renderLogo();\r\n  renderNav();\r\n  renderMobileNav();\r\n\r\n  return header;\r\n};\r\n\r\n// Main\r\nconst createMain = () => {\r\n  const main = document.createElement(\"div\");\r\n  main.classList.add(\"main\");\r\n\r\n  return main;\r\n};\r\n\r\n// Footer\r\nconst createFooter = () => {\r\n  const footer = document.createElement(\"div\");\r\n  footer.classList.add(\"footer\");\r\n\r\n  const githubLink = document.createElement(\"a\");\r\n  githubLink.href = \"https://www.github.com/nainsworth\";\r\n  githubLink.target = \"_blank\";\r\n  githubLink.textContent = \"NAINSWORTH\";\r\n\r\n  const githubImg = document.createElement(\"img\");\r\n  githubImg.src = \"/src/img/github.svg\";\r\n  githubImg.alt = \"github logo\";\r\n\r\n  footer.appendChild(githubLink);\r\n  githubLink.appendChild(githubImg);\r\n\r\n  return footer;\r\n};\r\n\r\nconst loadWebpage = () => {\r\n  const content = document.querySelector(\".content\");\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebpage);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/script/webpage.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script/index.js");
/******/ 	
/******/ })()
;