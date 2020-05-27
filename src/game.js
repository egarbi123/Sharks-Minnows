import Player from './player';
import Shark from './shark';

class Game {
    constructor() {
        this.game_board = document.getElementById("game");
        this.ctx = this.game_board.getContext("2d");
        this.pieces = [];
        this.winner = this.winner.bind(this);
        this.draw = this.draw.bind(this);
        this.recognizeMovement = this.recognizeMovement.bind(this);
        this.level = 0;
        this.initialize();
    }

    initialize() {
        this.player = new Player(this.ctx, this.winner);
        this.pieces.push(this.player);
        this.player.drawBall();
        this.levelOne();
        this.beginMovement();
    }

    reset() {
        this.pieces = [];
        this.player = new Player(this.ctx, this.winner);
        this.pieces.push(this.player);
        this.player.drawBall();
        this.levelOne();
        this.beginMovement();
    }

    levelOne() {
        this.shark1 = this.createShark(350, 150, 'hor');
        this.shark2 = this.createShark(100, 150, 'hor');
        this.shark3 = this.createShark(350, 350, 'hor');
        this.shark4 = this.createShark(100, 350, 'hor');
        this.shark0 = this.createShark(250, 250);
        this.level = 1;
    }

    levelTwo() {
        this.pieces = [];
        this.player = new Player(this.ctx, this.winner);
        this.pieces.push(this.player);
        this.player.drawBall();
        this.shark1 = this.createShark(350, 150, 'hor');
        this.shark2 = this.createShark(100, 150, 'hor');
        this.shark3 = this.createShark(350, 350, 'hor');
        this.shark4 = this.createShark(100, 350, 'hor');
        this.shark0 = this.createShark(100, 250);
        this.shark00 = this.createShark(400, 250);
        this.beginMovement();
        this.level = 2;
    }

    levelThree() {
        this.pieces = [];
        this.player = new Player(this.ctx, this.winner);
        this.pieces.push(this.player);
        this.player.drawBall();
        this.shark1 = this.createShark(350, 150, 'hor');
        this.shark2 = this.createShark(100, 150, 'hor');
        this.shark3 = this.createShark(350, 350, 'hor');
        this.shark4 = this.createShark(100, 350, 'hor');
        this.shark1 = this.createShark(50, 150, 'hor');
        this.shark2 = this.createShark(50, 250, 'hor');
        this.shark3 = this.createShark(50, 350, 'hor');
        this.shark4 = this.createShark(50, 450, 'hor');
        this.shark1 = this.createShark(150, 250, 'vert');
        this.shark2 = this.createShark(350, 150, 'vert');
        this.shark3 = this.createShark(350, 350, 'vert');
        this.shark4 = this.createShark(100, 350, 'vert');
        this.shark0 = this.createShark(100, 250);
        this.shark00 = this.createShark(400, 250);
        this.beginMovement();
        this.level = 3;
    }

    createShark(x, y, direction) {
        let shark = new Shark(this.ctx, this.draw, x, y, this.player);
        this.pieces.push(shark);
        shark.drawBall();
        shark.getMoving(direction);
        return shark;
    }

    draw() {
        this.ctx.clearRect(0, 0, 500, 500);
        for (let i = 0; i < this.pieces.length; i++) {
            this.pieces[i].drawBall();
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
        let sharks = this.pieces.slice(1);
        for (let i = 0; i < sharks.length; i++) {
            sharks[i].stopMoving();
        }
    }

    gameOver() {
        let sharks = this.pieces.slice(1);
        for (let i = 0; i < sharks.length; i++) {
            if ((Math.abs(this.player.y - sharks[i].y) <= 10) && (Math.abs(this.player.x - sharks[i].x) <= 10)) {
                this.endMovement();
                alert('You Lost.')
                this.reset()
            }
        }
    }

    winner() {
        this.endMovement();
        this.nextLevel();
    }

    nextLevel() {
        switch (this.level) {
            case 1:
                return this.levelTwo();
            case 2:
                return this.levelThree();
            default:
                break;
        }
    }
}

export default Game;