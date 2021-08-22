import Game from './game';

// window.GameStart = () => { new Game }
document.getElementById("start-button").addEventListener("click", () => {
    if (window.game.gameOn) {
        window.game.endGame();
    }
    window.game = new Game
})
document.getElementById("pause-button").addEventListener("click", () => { window.game.pauseGame() })
document.getElementById("end-button").addEventListener("click", () => { window.game.endGame() })