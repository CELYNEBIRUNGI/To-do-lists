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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/display.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/operations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n// import './index.css';\nconst allList = JSON.parse(localStorage.getItem('todo')) || [];\nconst bkList = document.querySelector('.lists');\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/display.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(bkList, allList);\nconst edit = document.querySelector('.editTask');\nconst arrow = document.querySelector('.arrow');\narrow.addEventListener('click', () => {\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/operations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(allList, edit.value);\n  window.location.reload();\n});\nconst dots = document.querySelectorAll('.dots');\ndots.forEach(dot => {\n  dot.addEventListener('click', () => {\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/operations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(dot.parentNode.className, allList);\n    window.location.reload();\n  });\n});\nconst description = document.querySelectorAll('.list-desc');\ndescription.forEach((desc) => {\n  desc.addEventListener('input', () => {\n    const list = desc.parentNode.className;\n    const newDesc = desc.textContent;\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './modules/operations.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(list - 1, newDesc, allList);\n  });\n});\n\n//# sourceURL=webpack://to-do-lists/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;