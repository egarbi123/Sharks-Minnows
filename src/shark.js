class Shark {
    constructor(ctx, draw, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.count = 0;
        this.draw = draw;
        this.allMinnows = [];
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

    distance(minnow) {
        let xDist = Math.abs(this.x - minnow.x);
        let yDist = Math.abs(this.y - minnow.y);
        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
        return distance;
    }

    findClosestMinnow(allMinnows) {
        let closestMinnow = allMinnows[0];
        let shortestDistance = this.distance(closestMinnow);
        for (let i = 1; i < allMinnows.length; i++) {
            if (allMinnows[i].dead === false) {
                let distance = this.distance(allMinnows[i]);
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    closestMinnow = allMinnows[i];
                }
            }
        }
        return closestMinnow;
    }

    moveToPlayer() {
        let minnow = this.findClosestMinnow(this.allMinnows);
        if (this.x < minnow.x && this.y < minnow.y) {
            this.movementUpRight();
        } else if (this.x > minnow.x && this.y < minnow.y) {
            this.movementUpLeft();
        } else if (this.x < minnow.x && this.y > minnow.y) {
            this.movementDownRight();
        } else if (this.x > minnow.x && this.y > minnow.y) {
            this.movementDownLeft();
        } else if (this.x > minnow.x) {
            this.movementLeft();
        } else if (this.x < minnow.x) {
            this.movementRight();
        } else if (this.y > minnow.y) {
            this.movementDown();
        } else {
            this.movementUp();
        }
    }
}

export default Shark;