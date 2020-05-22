class Shark {
    constructor(ctx, draw, x = 250, y = 150) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.count = 0;
        this.draw = draw;
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
            } else {
                this.movementLogicVertical();
            }
            this.draw();
        }, 100);
    }

    stopMoving() {
        clearInterval(this.interval);
    }

    movementLogicHorizontal() {
        this.count += 1;
        if (this.count % 50 < 25) {
            this.movementRight();
        } else {
            this.movementLeft();
        }
    }

    movementLogicVertical() {
        this.count += 1;
        if (this.count % 50 < 25) {
            this.movementDown();
        } else {
            this.movementUp();
        }
    }

    movementRight() {
        this.x += 5;
    }

    movementLeft() {
        this.x -= 5;
    }

    movementUp() {
        this.y += 5;
    }

    movementDown() {
        this.y -= 5;
    }
}

export default Shark;