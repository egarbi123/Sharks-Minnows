class ReverseMinnow {
    constructor(ctx, draw, x, y) {
        this.survivor = false;
        this.dead = false;
        this.draw = draw;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.sharks = [];
        this.drawBall = this.drawBall.bind(this);
    }

    distance(shark) {
        let xDist = Math.abs(this.x - shark.x);
        let yDist = Math.abs(this.y - shark.y);
        let distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
        return distance;
    }

    findClosestShark(sharks) {
        let closestShark = sharks[0];
        let closestDistance = this.distance(sharks[0]);
        for (let i = 1; i < sharks.length; i++) {
            let distance = this.distance(sharks[i]);
            if (distance < closestDistance) {
                closestShark = sharks[i];
                closestDistance = distance;
            }
        }
        return closestShark;
    }

    findSharkPlayerDistance(shark) {
        let distance = this.distance(shark);
        return distance;
    }

    chooseMovement(sharks) {
        for (let i = 0; i < sharks.length; i++) {
            if (sharks[i].isHuman) {
                let humanShark = sharks[i];
            }
        }
        if (this.findSharkPlayerDistance(humanShark) <= 10) {
            this.moveAway(humanShark);
        } else {
            this.makeMove();
        }
    }

    moveAway(humanShark) {
        let xDist = this.x - shark.x;
        let yDist = this.y - shark.y;
        if (xDist >= 0) {
            this.left();
        } else {
            this.right();
        }
        if (yDist >= 0) {
            this.up();
        } else {
            this.down();
        }
    }

    makeMove() {
        if (this.survivor === false && this.dead === false) {
            let closestShark = this.findClosestShark(this.sharks);
            let distance = this.distance(closestShark);
            if (distance < 10) {
                this.dead = true;
            }
            if (distance < 50) {
                if (closestShark.x > this.x && closestShark.y > this.y) {
                    this.left();
                    this.up();
                } else if (closestShark.x < this.x && closestShark.y > this.y) {
                    this.right();
                    this.up();
                } else if (closestShark.x > this.x && closestShark.y < this.y) {
                    this.left();
                    this.down()
                } else if (closestShark.x < this.x && closestShark.y < this.y) {
                    this.right();
                    this.down();
                }
            }
            this.up();
        }
    }

    getMoving() {
        this.interval = setInterval(() => {
            this.makeMove();
        }, 50)
    }

    stopMoving() {
        clearInterval(this.interval);
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath();
    }

    up() {
        this.y -= 2.5;
        if (this.y <= -10) {
            this.survivor = true;
        }
    }

    down() {
        if (this.y <= 485) {
            this.y += 2.5;
        }
    }

    left() {
        if (this.x >= 15) {
            this.x -= 2.5;
        }
    }

    right() {
        if (this.x <= 485) {
            this.x += 2.5;
        }
    }
}

export default ReverseMinnow;