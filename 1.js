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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//import Raven = require(\"raven-js\");\n/*import Raven from 'raven-js';\n//初始化Raven\nRaven\n    //.config('https://0f53f54e6df311e7a144000c2977e7c4@sentry.io//db-actives')\n    .config('https://a6164e130092498f9ab734be1fb6929c@sentry.io/194555')\n    .install();\n    \n    try{\n        throw new Error('test');\n    }catch(e){\n        throw e;\n        //Raven.captureException(e);\n    }*/\n/*\nwindow.onerror = function error (msg, url, lineNo, columnNo, error) {\n    console.log(msg);\n};*/\nfunction foo() {\n    bar();\n}\n\nthrow new Error(\"this is index error\");\n//foo();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZXZlbG9wL3NyYy9pbmRleC5qcz8xMzhmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IFJhdmVuID0gcmVxdWlyZShcInJhdmVuLWpzXCIpO1xuLyppbXBvcnQgUmF2ZW4gZnJvbSAncmF2ZW4tanMnO1xuLy/liJ3lp4vljJZSYXZlblxuUmF2ZW5cbiAgICAvLy5jb25maWcoJ2h0dHBzOi8vMGY1M2Y1NGU2ZGYzMTFlN2ExNDQwMDBjMjk3N2U3YzRAc2VudHJ5LmlvLy9kYi1hY3RpdmVzJylcbiAgICAuY29uZmlnKCdodHRwczovL2E2MTY0ZTEzMDA5MjQ5OGY5YWI3MzRiZTFmYjY5MjljQHNlbnRyeS5pby8xOTQ1NTUnKVxuICAgIC5pbnN0YWxsKCk7XG4gICAgXG4gICAgdHJ5e1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Rlc3QnKTtcbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHRocm93IGU7XG4gICAgICAgIC8vUmF2ZW4uY2FwdHVyZUV4Y2VwdGlvbihlKTtcbiAgICB9Ki9cbi8qXG53aW5kb3cub25lcnJvciA9IGZ1bmN0aW9uIGVycm9yIChtc2csIHVybCwgbGluZU5vLCBjb2x1bW5ObywgZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xufTsqL1xuZnVuY3Rpb24gZm9vKCkge1xuICAgIGJhcigpO1xufVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0aGlzIGlzIGluZGV4IGVycm9yXCIpO1xuLy9mb28oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2ZWxvcC9zcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQWFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
