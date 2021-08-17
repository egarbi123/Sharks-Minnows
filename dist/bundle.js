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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _shark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shark */ \"./src/shark.js\");\n/* harmony import */ var _minnow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minnow */ \"./src/minnow.js\");\n\n\n\n\nclass Game {\n    constructor() {\n        this.game_board = document.getElementById(\"game\");\n        this.ctx = this.game_board.getContext(\"2d\");\n        this.sharks = [];\n        this.minnows = [];\n        this.winner = this.winner.bind(this);\n        this.draw = this.draw.bind(this);\n        this.recognizeMovement = this.recognizeMovement.bind(this);\n        this.level = 0;\n        this.initialize();\n    }\n\n    initialize() {\n        this.setPlayer();\n        this.levelOne();\n        this.beginMovement();\n    }\n\n    clickToRestart() {\n        this.initialize();\n    }\n\n    informAssets() {\n        for (let i = 0; i < this.sharks.length; i++) {\n            this.sharks[i].allMinnows = this.minnows;\n        }\n        for (let i = 0; i < this.minnows.length; i++) {\n            this.minnows[i].sharks = this.sharks;\n        }\n    }\n\n    moveAssets() {\n        for (let i = 0; i < this.sharks.length; i++) {\n            this.sharks[i].getMoving();\n        }\n        for (let i = 1; i < this.minnows.length; i++) {\n            this.minnows[i].getMoving();\n        }\n    }\n\n    reset() {\n        this.minnows = [];\n        this.setPlayer();\n        this.levelOne();\n        this.beginMovement();\n    }\n\n    levelOne() {\n        this.setSharks(1);\n        this.setMinnows(8);\n        this.informAssets();\n        this.moveAssets();\n        this.level = 1;\n    }\n\n\n    createMinnow(x, y = 450) {\n        let minnow = new _minnow__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.ctx, this.draw, x, y);\n        this.minnows.push(minnow);\n        minnow.drawBall();\n        return minnow;\n    }\n\n    createShark(x, y = 50, direction) {\n        let shark = new _shark__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.ctx, this.draw, x, y);\n        this.sharks.push(shark);\n        shark.drawBall();\n        return shark;\n    }\n\n    setSharks(n) {\n        this.sharks = [];\n        let sharkSpace = 450 / n - 1;\n        let sharkX = 50;\n        for (let i = 0; i < n; i++) {\n            this.createShark(sharkX);\n            sharkX += sharkSpace;\n        }\n    }\n\n    setMinnows(n) {\n        let minnowSpace = 450 / n - 1;\n        let minnowX = 50;\n        for (let i = 0; i < n; i++) {\n            this.createMinnow(minnowX);\n            minnowX += minnowSpace;\n        }\n    }\n\n    setPlayer() {\n        this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.winner);\n        this.minnows.push(this.player)\n        this.player.drawBall();\n    }\n\n    draw() {\n        this.ctx.clearRect(0, 0, 500, 500);\n        for (let i = 0; i < this.sharks.length; i++) {\n            this.sharks[i].drawBall();\n        }\n        for (let i = 0; i < this.minnows.length; i++) {\n            this.minnows[i].drawBall();\n        }\n        this.gameOver();\n    }\n\n    recognizeMovement(e) {\n        switch (e.key) {\n            case \"ArrowUp\":\n                e.preventDefault();\n                this.player.up();\n                return this.draw();\n            case \"ArrowDown\":\n                e.preventDefault();\n                this.player.down();\n                return this.draw();\n            case \"ArrowLeft\":\n                e.preventDefault();\n                this.player.left();\n                return this.draw();\n            case \"ArrowRight\":\n                e.preventDefault();\n                this.player.right();\n                return this.draw();\n            default:\n                break;\n        }\n    }\n\n    beginMovement() {\n        document.addEventListener(\"keydown\", this.recognizeMovement);\n\n    }\n\n    endMovement() {\n        document.removeEventListener(\"keydown\", this.recognizeMovement);\n        let sharks = this.sharks;\n        for (let i = 0; i < sharks.length; i++) {\n            sharks[i].stopMoving();\n        }\n    }\n\n    gameOver() {\n        let sharks = this.sharks;\n        for (let i = 0; i < sharks.length; i++) {\n            if ((Math.abs(this.player.y - sharks[i].y) <= 10) && (Math.abs(this.player.x - sharks[i].x) <= 10)) {\n                this.endMovement();\n                alert('You Lost.')\n                    // this.reset()\n            }\n        }\n    }\n\n    winner() {\n        this.endMovement();\n        this.nextLevel();\n    }\n\n    nextLevel() {\n        this.level += 1;\n        let sharks = this.sharks.length;\n        let minnows = 0;\n        for (let i = 1; i < this.minnows.length; i++) {\n            console.log('minnow.survivor', this.minnows[i].survivor)\n            if (this.minnows[i].dead !== true) {\n                minnows += 1;\n            } else {\n                sharks += 1;\n            }\n        }\n        this.minnows = [];\n        this.setSharks(sharks);\n        this.setPlayer();\n        this.setMinnows(minnows);\n        this.informAssets();\n        for (let i = 0; i < this.sharks.length; i++) {\n            this.sharks[i].getMoving();\n        }\n        for (let i = 1; i < this.minnows.length; i++) {\n            this.minnows[i].getMoving();\n        }\n        this.beginMovement();\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n// window.GameStart = () => { new Game }\ndocument.getElementById(\"start-button\").addEventListener(\"click\", () => { new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"] })\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/minnow.js":
/*!***********************!*\
  !*** ./src/minnow.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Minnow {\n    constructor(ctx, draw, x, y) {\n        this.survivor = false;\n        this.dead = false;\n        this.draw = draw;\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.sharks = [];\n        this.drawBall = this.drawBall.bind(this);\n    }\n\n\n\n    distance(shark) {\n        let xDist = Math.abs(this.x - shark.x);\n        let yDist = Math.abs(this.y - shark.y);\n        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))\n        return distance;\n    }\n\n    findClosestShark(sharks) {\n        let closestShark = sharks[0];\n        let closestDistance = this.distance(sharks[0]);\n        for (let i = 1; i < sharks.length; i++) {\n            let distance = this.distance(sharks[i]);\n            if (distance < closestDistance) {\n                closestShark = sharks[i];\n                closestDistance = distance;\n            }\n        }\n        return closestShark;\n    }\n\n    makeMove() {\n        if (this.survivor === false && this.dead === false) {\n            let closestShark = this.findClosestShark(this.sharks);\n            let distance = this.distance(closestShark);\n            if (distance < 10) {\n                this.dead = true;\n            }\n            if (distance < 50) {\n                if (closestShark.x > this.x && closestShark.y > this.y) {\n                    this.left();\n                    this.up();\n                } else if (closestShark.x < this.x && closestShark.y > this.y) {\n                    this.right();\n                    this.up();\n                } else if (closestShark.x > this.x && closestShark.y < this.y) {\n                    this.left();\n                    this.down()\n                } else if (closestShark.x < this.x && closestShark.y < this.y) {\n                    this.right();\n                    this.down();\n                }\n            }\n            this.up();\n        }\n    }\n\n    getMoving() {\n        this.interval = setInterval(() => {\n            this.makeMove();\n        }, 50)\n    }\n\n    stopMoving() {\n        clearInterval(this.interval);\n    }\n\n    drawBall() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);\n        this.ctx.fillStyle = \"blue\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    up() {\n        this.y -= 2.5;\n        if (this.y <= -10) {\n            this.survivor = true;\n        }\n    }\n\n    down() {\n        if (this.y <= 485) {\n            this.y += 2.5;\n        }\n    }\n\n    left() {\n        if (this.x >= 15) {\n            this.x -= 2.5;\n        }\n    }\n\n    right() {\n        if (this.x <= 485) {\n            this.x += 2.5;\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minnow);\n\n//# sourceURL=webpack:///./src/minnow.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nclass Shark {\n    constructor(ctx, draw, x, y) {\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        this.count = 0;\n        this.draw = draw;\n        this.allMinnows = [];\n    }\n\n    drawBall() {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);\n        this.ctx.fillStyle = \"red\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n    getMoving(direction) {\n        this.interval = setInterval(() => {\n            if (direction === 'hor') {\n                this.movementLogicHorizontal();\n            } else if (direction === 'diagRight') {\n                this.movementLogicDiagonalRight();\n            } else if (direction === 'diagLeft') {\n                this.movementLogicDiagonalLeft();\n            } else if (direction === 'vert') {\n                this.movementLogicVertical();\n            } else {\n                this.moveToPlayer();\n            }\n            this.draw();\n        }, 40);\n    }\n\n    stopMoving() {\n        clearInterval(this.interval);\n    }\n\n    movementLogicHorizontal() {\n        this.count += 1;\n        if (this.count % 100 < 50) {\n            this.movementRight();\n        } else {\n            this.movementLeft();\n        }\n    }\n\n    movementLogicVertical() {\n        this.count += 1;\n        if (this.count % 100 < 50) {\n            this.movementDown();\n        } else {\n            this.movementUp();\n        }\n    }\n\n    movementLogicDiagonalRight() {\n        this.count += 1;\n        if (this.count % 100 < 50) {\n            this.movementUpRight();\n        } else {\n            this.movementDownLeft();\n        }\n    }\n\n    movementLogicDiagonalLeft() {\n        this.count += 1;\n        if (this.count % 100 < 50) {\n            this.movementUpLeft();\n        } else {\n            this.movementDownRight();\n        }\n    }\n\n    movementRight() {\n        this.x += 2;\n    }\n\n    movementLeft() {\n        this.x -= 2;\n    }\n\n    movementUp() {\n        this.y += 2;\n    }\n\n    movementDown() {\n        this.y -= 2;\n    }\n\n    movementUpRight() {\n        this.y += 2;\n        this.x += 2;\n    }\n\n    movementUpLeft() {\n        this.y += 2;\n        this.x -= 2;\n    }\n\n    movementDownRight() {\n        this.y -= 2;\n        this.x += 2;\n    }\n\n    movementDownLeft() {\n        this.y -= 2;\n        this.x -= 2;\n    }\n\n    distance(minnow) {\n        let xDist = Math.abs(this.x - minnow.x);\n        let yDist = Math.abs(this.y - minnow.y);\n        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))\n        return distance;\n    }\n\n    findClosestMinnow(allMinnows) {\n        let closestMinnow = allMinnows[0];\n        let shortestDistance = this.distance(closestMinnow);\n        for (let i = 1; i < allMinnows.length; i++) {\n            if (allMinnows[i].dead === false) {\n                let distance = this.distance(allMinnows[i]);\n                if (distance < shortestDistance) {\n                    shortestDistance = distance;\n                    closestMinnow = allMinnows[i];\n                }\n            }\n        }\n        return closestMinnow;\n    }\n\n    moveToPlayer() {\n        let minnow = this.findClosestMinnow(this.allMinnows);\n        if (this.x < minnow.x && this.y < minnow.y) {\n            this.movementUpRight();\n        } else if (this.x > minnow.x && this.y < minnow.y) {\n            this.movementUpLeft();\n        } else if (this.x < minnow.x && this.y > minnow.y) {\n            this.movementDownRight();\n        } else if (this.x > minnow.x && this.y > minnow.y) {\n            this.movementDownLeft();\n        } else if (this.x > minnow.x) {\n            this.movementLeft();\n        } else if (this.x < minnow.x) {\n            this.movementRight();\n        } else if (this.y > minnow.y) {\n            this.movementDown();\n        } else {\n            this.movementUp();\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shark);\n\n//# sourceURL=webpack:///./src/shark.js?");

/***/ })

/******/ });