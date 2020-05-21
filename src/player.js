class Player {
    constructor(ctx, winLogic) {
        // this.game_board = game_board;
        this.winLogic = winLogic;
        this.ctx = ctx;
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
        // this.listenUp()
    }

    draw() {
        // this.ctx.clearRect(0, 0, this.game_board.width, this.game_board.height);
        // ctx.clearRect(0, 0, game_board.width, game_board.height);
        this.drawBall();
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
        if (this.y === -10) {
            this.winLogic();
        }
    }

    down() {
        if (this.y <= 485) {
            this.y += 10;
        }
    }

    left() {
        if (this.x >= 15) {
            this.x -= 10;
        }
    }

    right() {
        if (this.x <= 485) {
            this.x += 10;
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.game_board.width, this.game_board.height);
    }
}

export default Player;