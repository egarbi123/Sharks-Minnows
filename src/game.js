import Player from './player';
import Shark from './shark';

class Game {
    constructor() {
        this.game_board = document.getElementById("game");
        this.ctx = this.game_board.getContext("2d");
        this.pieces = [];
        this.winner = this.winner.bind(this);
        this.player = new Player(this.ctx, this.winner);
        this.shark = new Shark(this.ctx);
        this.recognizeMovement = this.recognizeMovement.bind(this);
        this.initialize();
    }

    initialize() {
        this.pieces.push(this.player);
        this.pieces.push(this.shark);
        this.player.drawBall();
        this.shark.drawBall();
        this.beginMovement();
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
    }

    gameOver() {
        if ((Math.abs(this.player.y - this.shark.y) <= 10) && (Math.abs(this.player.x - this.shark.x) <= 10)) {
            this.endMovement();
            alert('You Lost.')
        }
    }

    winner() {
        this.endMovement();
        alert('You Win!');
    }
}

export default Game;