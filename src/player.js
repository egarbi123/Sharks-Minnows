class Player {
    constructor() {
        this.game_board = document.getElementById("game");
        this.ctx = this.game_board.getContext("2d");
        this.x = 250;
        this.y = 450;
        this.up = this.up.bind(this);
        this.down = this.down.bind(this);
        this.left = this.left.bind(this);
        this.right = this.right.bind(this);
        this.drawBall = this.drawBall.bind(this);
    }

    initialize() {
        this.drawBall();
        this.listenUp()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.game_board.width, this.game_board.height);
        this.drawBall();
    }

    animate() {
        window.requestAnimationFrame(() => this.drawBall())
    }

    drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    listenUp() {
        document.addEventListener("keydown", e => {
            switch (e.key) {
                case "ArrowUp":
                    return this.up();
                case "ArrowDown":
                    return this.down();
                case "ArrowLeft":
                    return this.left();
                case "ArrowRight":
                    return this.right();
                default:
                    break;
            }
        })
    }

    up() {
        this.y -= 10;
        this.animate();
    }

    down() {
        this.y += 10;
        this.draw();
    }

    left() {
        this.x -= 10;
        this.draw();
    }

    right() {
        this.x += 10;
        this.draw();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.game_board.width, this.game_board.height);
    }
}

export default Player;