class Shark {
    constructor(ctx, draw, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.count = 0;
        this.draw = draw;
        this.allMinnows = [];
        this.moving = false;
        this.shortestDistance = 200;
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "red";
        this.ctx.fill();
        this.ctx.closePath();
    }

    getMoving() {
        this.moving = true;
        let randomNumber = (Math.round(Math.random() * 100) / 100) * 100;
        this.interval = setInterval(() => {
            if (this.count % 50 === 0) {
                randomNumber = (Math.round(Math.random() * 100) / 100) * 100;
            }
            if (this.count % 50 >= 0 && this.count % 50 < 25 || this.shortestDistance <= 50) {
                this.moveToPlayer();
            } else {
                this.randomMovement(randomNumber);
            }
            this.draw();
        }, 40);
    }

    stopMoving() {
        this.moving = false;
        clearInterval(this.interval);
    }

    randomMovement(number) {
        if (number >= 0 && number < 25) {
            this.movementUpRight();
        } else if (number >= 25 && number < 50) {
            this.movementUpLeft();
        } else if (number >= 50 && number < 75) {
            this.movementDownRight();
        } else {
            this.movementDownLeft();
        }
    }

    movementRight() {
        this.count += 1;
        this.x += 2;
    }

    movementLeft() {
        this.count += 1;
        this.x -= 2;
    }

    movementUp() {
        this.count += 1;
        this.y += 2;
    }

    movementDown() {
        this.count += 1;
        if (this.y <= 20) {
            this.y += 2
        } else {
            this.y -= 2;
        }
    }

    movementUpRight() {
        this.count += 1;
        this.y += 2;
        this.x += 2;
    }

    movementUpLeft() {
        this.count += 1;
        this.y += 2;
        this.x -= 2;
    }

    movementDownRight() {
        this.count += 1;
        if (this.y <= 20) {
            this.y += 2
        } else {
            this.y -= 2;
        }
        this.x += 2;
    }

    movementDownLeft() {
        this.count += 1;
        if (this.y <= 20) {
            this.y += 2
        } else {
            this.y -= 2;
        }
        this.x -= 2;
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

    findClosestMinnow(allMinnows) {
        let closestMinnow = allMinnows[0];
        let shortestDistance = this.distance(closestMinnow);
        for (let i = 1; i < allMinnows.length; i++) {
            if (allMinnows[i].dead === false && allMinnows[i].survivor === false) {
                let distance = this.distance(allMinnows[i]);
                if (distance < shortestDistance) {
                    shortestDistance = distance;
                    closestMinnow = allMinnows[i];
                }
            }
        }
        this.shortestDistance = shortestDistance;
        return closestMinnow;
    }

    distance(minnow) {
        let xDist = Math.abs(this.x - minnow.x);
        let yDist = Math.abs(this.y - minnow.y);
        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
        return distance;
    }
}

export default Shark;