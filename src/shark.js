class Shark {
    constructor(ctx, draw, x = 250, y = 150, player) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.count = 0;
        this.draw = draw;
        this.player = player;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }

    getMoving(direction) {
        this.interval = setInterval(() => {
            if (direction === 'hor') {
                this.movementLogicHorizontal();
            } else if (direction === 'diagRight') {
                this.movementLogicDiagonalRight();
            } else if (direction === 'diagLeft') {
                this.movementLogicDiagonalLeft();
            } else if (direction === 'vert') {
                this.movementLogicVertical();
            } else {
                this.moveToPlayer();
            }
            this.draw();
        }, 50);
    }

    stopMoving() {
        clearInterval(this.interval);
    }

    movementLogicHorizontal() {
        this.count += 1;
        if (this.count % 100 < 50) {
            this.movementRight();
        } else {
            this.movementLeft();
        }
    }

    movementLogicVertical() {
        this.count += 1;
        if (this.count % 100 < 50) {
            this.movementDown();
        } else {
            this.movementUp();
        }
    }

    movementLogicDiagonalRight() {
        this.count += 1;
        if (this.count % 100 < 50) {
            this.movementUpRight();
        } else {
            this.movementDownLeft();
        }
    }

    movementLogicDiagonalLeft() {
        this.count += 1;
        if (this.count % 100 < 50) {
            this.movementUpLeft();
        } else {
            this.movementDownRight();
        }
    }

    movementRight() {
        this.x += 2;
    }

    movementLeft() {
        this.x -= 2;
    }

    movementUp() {
        this.y += 2;
    }

    movementDown() {
        this.y -= 2;
    }

    movementUpRight() {
        this.y += 2;
        this.x += 2;
    }

    movementUpLeft() {
        this.y += 2;
        this.x -= 2;
    }

    movementDownRight() {
        this.y -= 2;
        this.x += 2;
    }

    movementDownLeft() {
        this.y -= 2;
        this.x -= 2;
    }

    moveToPlayer() {
        if (this.x < this.player.x && this.y < this.player.y) {
            this.movementUpRight();
        } else if (this.x > this.player.x && this.y < this.player.y) {
            this.movementUpLeft();
        } else if (this.x < this.player.x && this.y > this.player.y) {
            this.movementDownRight();
        } else if (this.x > this.player.x && this.y > this.player.y) {
            this.movementDownLeft();
        } else if (this.x > this.player.x) {
            this.movementLeft();
        } else if (this.x < this.player.x) {
            this.movementRight();
        } else if (this.y > this.player.y) {
            this.movementDown();
        } else {
            this.movementUp();
        }
    }
}

export default Shark;