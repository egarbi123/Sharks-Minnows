class Player {
    constructor() {
        this.game_board = document.getElementById("game");
        this.ctx = this.game_board.getContext("2d");
        this.x = 450;
        this.y = 450;
        // setInterval(this.draw, 100)
    }

    draw() {
        this.ctx.clearRect(0, 0, this.game_board.width, this.game_board.height);
        this.drawBall();
    }


    clear() {
        this.ctx.clearRect(0, 0, this.game_board.width, this.game_board.height);
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveUp() {
        this.x -= 10;
    }

    moveDown() {
        this.x += 10;
    }

    moveLeft() {
        this.y -= 10;
    }

    moveRight() {
        this.y += 10;
    }
}