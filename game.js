class Game {
  constructor() {
    this.winner = null;
    this.players = [];
    this.turn = "🦕";
    this.board = [["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""]];
    this.winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  clearBoard() {
    this.board = [["", "", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "", ""]];
  }

  checkWin(x) {
    for (var i = 0; i < this.winningCombos.length; i++) {
      if (this.winningCombos[i].every(elem => this.board[x].includes(elem))) {
        this.winner = this.players[x].token;
        this.players[x].wins += 0.5;
        return true;
      }
    }
  }
}
