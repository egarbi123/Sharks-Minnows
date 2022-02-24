class reverseShark {
    constructor(ctx, winLogic) {
        this.winLogic = winLogic;
        this.ctx = ctx;
        this.x = 50;
        this.y = 450;
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.drawBall = this.drawBall.bind(this);
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    up() {
        this.y -= 12.5;
        if (this.y <= -10) {
            this.winLogic();
        }
    }

    down() {
        if (this.y <= 485) {
            this.y += 12.5;
        }
    }

    left() {
        if (this.x >= 15) {
            this.x -= 12.5;
        }
    }

    right() {
        if (this.x <= 485) {
            this.x += 12.5;
        }
    }
}

export default reverseShark;