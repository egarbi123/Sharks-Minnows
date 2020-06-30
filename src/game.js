import Player from './player';
import Shark from './shark';
import Minnow from './minnow';

class Game {
    constructor() {
        this.game_board = document.getElementById("game");
        this.ctx = this.game_board.getContext("2d");
        this.sharks = [];
        this.minnows = [];
        this.winner = this.winner.bind(this);
        this.draw = this.draw.bind(this);
        this.recognizeMovement = this.recognizeMovement.bind(this);
        this.level = 0;
        this.initialize();
    }

    initialize() {
        this.setPlayer();
        this.levelOne();
        this.beginMovement();
    }

    informAssets() {
        for (let i = 0; i < this.sharks.length; i++) {
            this.sharks[i].allMinnows = this.minnows;
        }
        for (let i = 0; i < this.minnows.length; i++) {
            this.minnows[i].sharks = this.sharks;
        }
    }

    moveAssets() {
        for (let i = 0; i < this.sharks.length; i++) {
            this.sharks[i].getMoving();
        }
        for (let i = 1; i < this.minnows.length; i++) {
            this.minnows[i].getMoving();
        }
    }

    reset() {
        this.minnows = [];
        this.setPlayer();
        this.levelOne();
        this.beginMovement();
    }

    levelOne() {
        this.setSharks(1);
        this.setMinnows(7);
        this.informAssets();
        this.moveAssets();
        this.level = 1;
    }


    createMinnow(x, y = 450) {
        let minnow = new Minnow(this.ctx, this.draw, x, y);
        this.minnows.push(minnow);
        minnow.drawBall();
        return minnow;
    }

    createShark(x, y = 50, direction) {
        let shark = new Shark(this.ctx, this.draw, x, y);
        this.sharks.push(shark);
        shark.drawBall();
        return shark;
    }

    setSharks(n) {
        this.sharks = [];
        let sharkSpace = 400 / n;
        let sharkX = 50;
        for (let i = 0; i < n; i++) {
            this.createShark(sharkX);
            sharkX += sharkSpace;
        }
    }

    setMinnows(n) {
        let minnowSpace = 400 / n;
        let minnowX = 50;
        for (let i = 0; i < n; i++) {
            this.createMinnow(minnowX);
            minnowX += minnowSpace;
        }
    }

    setPlayer() {
        console.log('in setPlayer');
        this.player = new Player(this.ctx, this.winner);
        this.minnows.push(this.player)
        console.log('minnows:', this.minnows);
        this.player.drawBall();
    }

    draw() {
        this.ctx.clearRect(0, 0, 500, 500);
        for (let i = 0; i < this.sharks.length; i++) {
            this.sharks[i].drawBall();
        }
        for (let i = 0; i < this.minnows.length; i++) {
            this.minnows[i].drawBall();
        }
        this.gameOver();
    }

    recognizeMovement(e) {
        switch (e.key) {
            case "ArrowUp":
                this.player.up();
                return this.draw();
            case "ArrowDown":
                this.player.down();
                return this.draw();
            case "ArrowLeft":
                this.player.left();
                return this.draw();
            case "ArrowRight":
                this.player.right();
                return this.draw();
            default:
                break;
        }
    }

    beginMovement() {
        document.addEventListener("keydown", this.recognizeMovement);

    }

    endMovement() {
        document.removeEventListener("keydown", this.recognizeMovement);
        let sharks = this.sharks;
        for (let i = 0; i < sharks.length; i++) {
            sharks[i].stopMoving();
        }
    }

    gameOver() {
        let sharks = this.sharks;
        for (let i = 0; i < sharks.length; i++) {
            if ((Math.abs(this.player.y - sharks[i].y) <= 10) && (Math.abs(this.player.x - sharks[i].x) <= 10)) {
                this.endMovement();
                // alert('You Lost.')
                this.reset()
            }
        }
    }

    winner() {
        this.endMovement();
        this.nextLevel();
    }

    nextLevel() {
        this.level += 1;
        let sharks = this.sharks.length;
        let minnows = 0;
        for (let i = 1; i < this.minnows.length; i++) {
            console.log('minnow.survivor', this.minnows[i].survivor)
            if (this.minnows[i].dead !== true) {
                minnows += 1;
            } else {
                sharks += 1;
            }
        }
        this.minnows = [];
        this.setSharks(sharks);
        this.setPlayer();
        this.setMinnows(minnows);
        this.informAssets();
        for (let i = 0; i < this.sharks.length; i++) {
            this.sharks[i].getMoving();
        }
        for (let i = 1; i < this.minnows.length; i++) {
            this.minnows[i].getMoving();
        }
        this.beginMovement();
    }
}

export default Game;