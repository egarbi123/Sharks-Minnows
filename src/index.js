import Player from './player';
import Shark from './shark';

const game_board = document.getElementById("game");
const ctx = game_board.getContext("2d");

let player = new Player(ctx);
player.initialize();

let shark = new Shark(ctx);
shark.drawBall();

let allParts = [player, shark];

const reDraw = function() {
    ctx.clearRect(0, 0, 500, 500);
    for (let i = 0; i < allParts.length; i++) {
        allParts[i].drawBall();
    }
    gameOver();
}

const gameOver = function() {
    if ((Math.abs(player.y - shark.y) <= 10) && (Math.abs(player.x - shark.x) <= 10)) {
        console.log('you lost')
    }
}

document.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            player.up();
            return reDraw();
        case "ArrowDown":
            player.down();
            return reDraw();
        case "ArrowLeft":
            player.left();
            return reDraw();
        case "ArrowRight":
            player.right();
            return reDraw();
        default:
            break;
    }
})

// class Board {
//     constructor() {
//         this.game_board = document.getElementById("game");
//         this.ctx = this.game_board.getContext("2d");

//     }
// }