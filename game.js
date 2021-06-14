class Game {
  constructor() {
    this.currentPlayer = "🦕";
    this.winner = null;
    this.board = null;
    this.winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [2, 5, 8], [1, 4, 7], [0, 3, 6], [0, 4, 8], [2, 4, 6]];
    this.id = Date.now();
  }
}
