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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _shark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shark */ \"./src/shark.js\");\n\n\n\nclass Game {\n    constructor() {\n        this.game_board = document.getElementById(\"game\");\n        this.ctx = this.game_board.getContext(\"2d\");\n        this.pieces = [];\n        this.winner = this.winner.bind(this);\n        this.draw = this.draw.bind(this);\n        this.recognizeMovement = this.recognizeMovement.bind(this);\n        this.level = 0;\n        this.initialize();\n    }\n\n    initialize() {\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.winner);\n        this.pieces.push(this.player);\n        this.player.drawBall();\n        this.levelOne();\n        this.beginMovement();\n    }\n\n    reset() {\n        this.pieces = [];\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.winner);\n        this.pieces.push(this.player);\n        this.player.drawBall();\n        this.levelOne();\n        this.beginMovement();\n    }\n\n    levelOne() {\n        this.shark1 = this.createShark(350, 150, 'hor');\n        this.shark2 = this.createShark(100, 150, 'hor');\n        this.shark3 = this.createShark(350, 350, 'hor');\n        this.shark4 = this.createShark(100, 350, 'hor');\n        this.shark0 = this.createShark(250, 250);\n        this.level = 1;\n    }\n\n    levelTwo() {\n        this.pieces = [];\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.winner);\n        this.pieces.push(this.player);\n        this.player.drawBall();\n        this.shark1 = this.createShark(350, 150, 'hor');\n        this.shark2 = this.createShark(100, 150, 'hor');\n        this.shark3 = this.createShark(350, 350, 'hor');\n        this.shark4 = this.createShark(100, 350, 'hor');\n        this.shark0 = this.createShark(100, 250);\n        this.shark00 = this.createShark(400, 250);\n        this.beginMovement();\n        this.level = 2;\n    }\n\n    levelThree() {\n        this.pieces = [];\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.winner);\n        this.pieces.push(this.player);\n        this.player.drawBall();\n        this.shark1 = this.createShark(350, 150, 'hor');\n        this.shark2 = this.createShark(100, 150, 'hor');\n        this.shark3 = this.createShark(350, 350, 'hor');\n        this.shark4 = this.createShark(100, 350, 'hor');\n        this.shark1 = this.createShark(50, 150, 'hor');\n        this.shark2 = this.createShark(50, 250, 'hor');\n        this.shark3 = this.createShark(50, 350, 'hor');\n        this.shark4 = this.createShark(50, 450, 'hor');\n        this.shark1 = this.createShark(150, 250, 'vert');\n        this.shark2 = this.createShark(350, 150, 'vert');\n        this.shark3 = this.createShark(350, 350, 'vert');\n        this.shark4 = this.createShark(100, 350, 'vert');\n        this.shark0 = this.createShark(100, 250);\n        this.shark00 = this.createShark(400, 250);\n        this.beginMovement();\n        this.level = 3;\n    }\n\n    createShark(x, y, direction) {\n        let shark = new _shark__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.draw, x, y, this.player);\n        this.pieces.push(shark);\n        shark.drawBall();\n        shark.getMoving(direction);\n        return shark;\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, 500, 500);\n        for (let i = 0; i < this.pieces.length; i++) {\n            this.pieces[i].drawBall();\n        }\n        this.gameOver();\n    }\n\n    recognizeMovement(e) {\n        switch (e.key) {\n            case \"ArrowUp\":\n                this.player.up();\n                return this.draw();\n            case \"ArrowDown\":\n                this.player.down();\n                return this.draw();\n            case \"ArrowLeft\":\n                this.player.left();\n                return this.draw();\n            case \"ArrowRight\":\n                this.player.right();\n                return this.draw();\n            default:\n                break;\n        }\n    }\n\n    beginMovement() {\n        document.addEventListener(\"keydown\", this.recognizeMovement);\n\n    }\n\n    endMovement() {\n        document.removeEventListener(\"keydown\", this.recognizeMovement);\n        let sharks = this.pieces.slice(1);\n        for (let i = 0; i < sharks.length; i++) {\n            sharks[i].stopMoving();\n        }\n    }\n\n    gameOver() {\n        let sharks = this.pieces.slice(1);\n        for (let i = 0; i < sharks.length; i++) {\n            if ((Math.abs(this.player.y - sharks[i].y) <= 10) && (Math.abs(this.player.x - sharks[i].x) <= 10)) {\n                this.endMovement();\n                alert('You Lost.')\n                this.reset()\n            }\n        }\n    }\n\n    winner() {\n        this.endMovement();\n        this.nextLevel();\n    }\n\n    nextLevel() {\n        switch (this.level) {\n            case 1:\n                return this.levelTwo();\n            case 2:\n                return this.levelThree();\n            default:\n                break;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n    constructor(ctx, winLogic) {\n        this.winLogic = winLogic;\n        this.ctx = ctx;\n        this.x = 250;\n        this.y = 450;\n        this.up = this.up.bind(this);\n        this.down = this.down.bind(this);\n        this.left = this.left.bind(this);\n        this.right = this.right.bind(this);\n        this.drawBall = this.drawBall.bind(this);\n    }\n\n    drawBall() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);\n        this.ctx.fillStyle = \"green\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    up() {\n        this.y -= 12.5;\n        if (this.y <= -10) {\n            this.winLogic();\n        }\n    }\n\n    down() {\n        if (this.y <= 485) {\n            this.y += 12.5;\n        }\n    }\n\n    left() {\n        if (this.x >= 15) {\n            this.x -= 12.5;\n        }\n    }\n\n    right() {\n        if (this.x <= 485) {\n            this.x += 12.5;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/shark.js":
/*!**********************!*\
  !*** ./src/shark.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Shark {\n    constructor(ctx, draw, x = 250, y = 150, player) {\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.count = 0;\n        this.draw = draw;\n        this.player = player;\n    }\n\n    drawBall() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);\n        this.ctx.fillStyle = \"red\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    getMoving(direction) {\n        this.interval = setInterval(() => {\n            if (direction === 'hor') {\n                this.movementLogicHorizontal();\n            } else if (direction === 'diagRight') {\n                this.movementLogicDiagonalRight();\n            } else if (direction === 'diagLeft') {\n                this.movementLogicDiagonalLeft();\n            } else if (direction === 'vert') {\n                this.movementLogicVertical();\n            } else {\n                this.moveToPlayer();\n            }\n            this.draw();\n        }, 50);\n    }\n\n    stopMoving() {\n        clearInterval(this.interval);\n    }\n\n    movementLogicHorizontal() {\n        this.count += 1;\n        if (this.count % 100 < 50) {\n            this.movementRight();\n        } else {\n            this.movementLeft();\n        }\n    }\n\n    movementLogicVertical() {\n        this.count += 1;\n        if (this.count % 100 < 50) {\n            this.movementDown();\n        } else {\n            this.movementUp();\n        }\n    }\n\n    movementLogicDiagonalRight() {\n        this.count += 1;\n        if (this.count % 100 < 50) {\n            this.movementUpRight();\n        } else {\n            this.movementDownLeft();\n        }\n    }\n\n    movementLogicDiagonalLeft() {\n        this.count += 1;\n        if (this.count % 100 < 50) {\n            this.movementUpLeft();\n        } else {\n            this.movementDownRight();\n        }\n    }\n\n    movementRight() {\n        this.x += 2;\n    }\n\n    movementLeft() {\n        this.x -= 2;\n    }\n\n    movementUp() {\n        this.y += 2;\n    }\n\n    movementDown() {\n        this.y -= 2;\n    }\n\n    movementUpRight() {\n        this.y += 2;\n        this.x += 2;\n    }\n\n    movementUpLeft() {\n        this.y += 2;\n        this.x -= 2;\n    }\n\n    movementDownRight() {\n        this.y -= 2;\n        this.x += 2;\n    }\n\n    movementDownLeft() {\n        this.y -= 2;\n        this.x -= 2;\n    }\n\n    moveToPlayer() {\n        if (this.x < this.player.x && this.y < this.player.y) {\n            this.movementUpRight();\n        } else if (this.x > this.player.x && this.y < this.player.y) {\n            this.movementUpLeft();\n        } else if (this.x < this.player.x && this.y > this.player.y) {\n            this.movementDownRight();\n        } else if (this.x > this.player.x && this.y > this.player.y) {\n            this.movementDownLeft();\n        } else if (this.x > this.player.x) {\n            this.movementLeft();\n        } else if (this.x < this.player.x) {\n            this.movementRight();\n        } else if (this.y > this.player.y) {\n            this.movementDown();\n        } else {\n            this.movementUp();\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shark);\n\n//# sourceURL=webpack:///./src/shark.js?");

/***/ })

/******/ });