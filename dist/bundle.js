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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _shark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shark */ \"./src/shark.js\");\n\n\n\nclass Game {\n    constructor() {\n        this.game_board = document.getElementById(\"game\");\n        this.ctx = this.game_board.getContext(\"2d\");\n        this.pieces = [];\n        this.winner = this.winner.bind(this);\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.winner);\n        this.shark = new _shark__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx);\n        this.recognizeMovement = this.recognizeMovement.bind(this);\n        this.initialize();\n    }\n\n    initialize() {\n        this.pieces.push(this.player);\n        this.pieces.push(this.shark);\n        this.player.drawBall();\n        this.shark.drawBall();\n        this.beginMovement();\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, 500, 500);\n        for (let i = 0; i < this.pieces.length; i++) {\n            this.pieces[i].drawBall();\n        }\n        this.gameOver();\n    }\n\n    recognizeMovement(e) {\n        switch (e.key) {\n            case \"ArrowUp\":\n                this.player.up();\n                return this.draw();\n            case \"ArrowDown\":\n                this.player.down();\n                return this.draw();\n            case \"ArrowLeft\":\n                this.player.left();\n                return this.draw();\n            case \"ArrowRight\":\n                this.player.right();\n                return this.draw();\n            default:\n                break;\n        }\n    }\n\n    beginMovement() {\n        document.addEventListener(\"keydown\", this.recognizeMovement);\n    }\n\n    endMovement() {\n        document.removeEventListener(\"keydown\", this.recognizeMovement);\n    }\n\n    gameOver() {\n        if ((Math.abs(this.player.y - this.shark.y) <= 10) && (Math.abs(this.player.x - this.shark.x) <= 10)) {\n            this.endMovement();\n            alert('You Lost.')\n        }\n    }\n\n    winner() {\n        this.endMovement();\n        alert('You Win!');\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(ctx, winLogic) {\n        // this.game_board = game_board;\n        this.winLogic = winLogic;\n        this.ctx = ctx;\n        this.x = 250;\n        this.y = 450;\n        this.up = this.up.bind(this);\n        this.down = this.down.bind(this);\n        this.left = this.left.bind(this);\n        this.right = this.right.bind(this);\n        this.drawBall = this.drawBall.bind(this);\n    }\n\n    initialize() {\n        this.drawBall();\n        // this.listenUp()\n    }\n\n    draw() {\n        // this.ctx.clearRect(0, 0, this.game_board.width, this.game_board.height);\n        // ctx.clearRect(0, 0, game_board.width, game_board.height);\n        this.drawBall();\n    }\n\n    drawBall() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);\n        this.ctx.fillStyle = \"green\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    listenUp() {\n        document.addEventListener(\"keydown\", e => {\n            switch (e.key) {\n                case \"ArrowUp\":\n                    return this.up();\n                case \"ArrowDown\":\n                    return this.down();\n                case \"ArrowLeft\":\n                    return this.left();\n                case \"ArrowRight\":\n                    return this.right();\n                default:\n                    break;\n            }\n        })\n    }\n\n    up() {\n        this.y -= 10;\n        if (this.y === -10) {\n            this.winLogic();\n        }\n    }\n\n    down() {\n        if (this.y <= 485) {\n            this.y += 10;\n        }\n    }\n\n    left() {\n        if (this.x >= 15) {\n            this.x -= 10;\n        }\n    }\n\n    right() {\n        if (this.x <= 485) {\n            this.x += 10;\n        }\n    }\n\n    clear() {\n        this.ctx.clearRect(0, 0, this.game_board.width, this.game_board.height);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/shark.js":
/*!**********************!*\
  !*** ./src/shark.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Shark {\n    constructor(ctx) {\n        // this.game_board = game_board;\n        this.ctx = ctx;\n        this.x = 250;\n        this.y = 50;\n    }\n\n    drawBall() {\n        // ctx.beginPath();\n        // ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);\n        // ctx.fillStyle = \"red\";\n        // ctx.fill();\n        // ctx.closePath();\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);\n        this.ctx.fillStyle = \"red\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    movement() {\n\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shark);\n\n//# sourceURL=webpack:///./src/shark.js?");

/***/ })

/******/ });