/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/global/Global.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/global/Footer/Footer.js":
/*!*************************************!*\
  !*** ./src/global/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst main = () => {\n  bodyEvent();\n};\n\nconst bodyEvent = () => {\n  document.querySelector('body').addEventListener('click', () => {\n    console.log('is body event');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./src/global/Footer/Footer.js?");

/***/ }),

/***/ "./src/global/Global.js":
/*!******************************!*\
  !*** ./src/global/Global.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_bootstrap_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/bootstrap/index */ \"./src/global/utils/bootstrap/index.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ \"./src/global/Header/Header.js\");\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ \"./src/global/Footer/Footer.js\");\n/* harmony import */ var _Global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Global.scss */ \"./src/global/Global.scss\");\n/* harmony import */ var _Global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Global_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst main = () => {\n  Object(_Header_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  Object(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\ndocument.addEventListener('DOMContendLoaded', main());\n\n//# sourceURL=webpack:///./src/global/Global.js?");

/***/ }),

/***/ "./src/global/Global.scss":
/*!********************************!*\
  !*** ./src/global/Global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/global/Global.scss?");

/***/ }),

/***/ "./src/global/Header/Header.js":
/*!*************************************!*\
  !*** ./src/global/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst main = () => {\n  bodyEvent();\n};\n\nconst bodyEvent = () => {\n  document.querySelector('body').addEventListener('click', () => {\n    console.log('is body event');\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (main);\n\n//# sourceURL=webpack:///./src/global/Header/Header.js?");

/***/ }),

/***/ "./src/global/utils/bootstrap/bootstrap.js":
/*!*************************************************!*\
  !*** ./src/global/utils/bootstrap/bootstrap.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selectors */ \"./src/global/utils/selectors.js\");\n\n\n(() => {\n  const removeBootstrap = () => {\n    [..._selectors__WEBPACK_IMPORTED_MODULE_0__[\"default\"].allLinks].map(link => {\n      if (link.href.match(/bootstrap/) || link.href.match(/style.css/) || link.href.match(/font-awesome/)) {\n        link.parentNode.removeChild(link);\n      }\n    });\n  };\n\n  return Promise.resolve(removeBootstrap()).then(() => console.log('Removed Bootstrap successfully')).catch(err => console.error(`Bootstrap successfully: ${err}`));\n})();\n\n//# sourceURL=webpack:///./src/global/utils/bootstrap/bootstrap.js?");

/***/ }),

/***/ "./src/global/utils/bootstrap/index.js":
/*!*********************************************!*\
  !*** ./src/global/utils/bootstrap/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ \"./src/global/utils/bootstrap/bootstrap.js\");\n\n\n//# sourceURL=webpack:///./src/global/utils/bootstrap/index.js?");

/***/ }),

/***/ "./src/global/utils/selectors.js":
/*!***************************************!*\
  !*** ./src/global/utils/selectors.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst allLinks = document.querySelectorAll('link');\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  allLinks\n});\n\n//# sourceURL=webpack:///./src/global/utils/selectors.js?");

/***/ })

/******/ });