(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bahubaliNames"] = factory();
	else
		root["bahubaliNames"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _uniqueRandomArray = __webpack_require__(1);
	
	var _uniqueRandomArray2 = _interopRequireDefault(_uniqueRandomArray);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var bahubaliNames = __webpack_require__(3);
	
	var mainExport = {
	  all: bahubaliNames,
	  random: (0, _uniqueRandomArray2.default)(bahubaliNames)
	};
	
	exports.default = mainExport;
	
	module.exports = mainExport; // for CommonJS compatibility

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var uniqueRandom = __webpack_require__(2);
	
	module.exports = function (arr) {
		var rand = uniqueRandom(0, arr.length - 1);
	
		return function () {
			return arr[rand()];
		};
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (min, max) {
		var prev;
		return function rand() {
			var num = Math.floor(Math.random() * (max - min + 1) + min);
			return prev = num === prev && min !== max ? rand() : num;
		};
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = [
		"Shivudu",
		"Bhallaladeva",
		"Shivagami",
		"Kattappa",
		"Devasena",
		"Amendra Bahubali",
		"Deependra Singh",
		"Avanthika",
		"Bijjaladeva",
		"Aslaam Khan",
		"Kalakeya War Lord Inkoshi",
		"Bhalladeva Samantha Raju",
		"Swamiji",
		"Kalki Brothers",
		"Sanga",
		"Bhadra",
		"Hero friend",
		"Tapsi Awhan",
		"Kumara Varma",
		"Dancer in Green Blouse",
		"Dancer in Blue Blouse",
		"Dancer in Orange Blouse",
		"Bhallaladeva's Soldier",
		"Alcohol Seller"
	];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.umd.js.map