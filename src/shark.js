class Shark {
    constructor(ctx) {
        // this.game_board = game_board;
        this.ctx = ctx;
        this.x = 250;
        this.y = 50;
    }

    drawBall() {
        // ctx.beginPath();
        // ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        // ctx.fillStyle = "red";
        // ctx.fill();
        // ctx.closePath();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }

    movement() {

    }
}

export default Shark;