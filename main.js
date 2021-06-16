// Global Variables
var game = new Game();
game.players.push(new Player("🦕", "player1"));
game.players.push(new Player("☄️", "player2"));
var gameActive = true;

// Query Selectors
var gameBoard = document.querySelector(".tic-tac-toe");
var whosTurn = document.querySelector("h1");
var gamePositions = document.querySelectorAll("div");
var playerOneWins = document.querySelector(".left-wins");
var playerTwoWins = document.querySelector(".right-wins");

// Event Listeners
window.addEventListener("load", renderWins);
gameBoard.addEventListener("click", function(event) {
  placeToken(event)});

// Event Handlers
function checkWinner(index) {
  game.checkWin([index]);
  if (game.checkWin([index]) === true) {
    whosTurn.innerText = `The winner is ${game.players[index].token}!`;
    game.players[index].saveWinsToStorage();
    gameActive = false;
    renderWins();
    return true;
  }
  checkDraw();
  return false;
}

function clearGame() {
  if (gameActive === false) {
    for (var i = 0; i < gamePositions.length; i++) {
      gamePositions[i].innerHTML = "";
      game.clearBoard();
      gameActive = true;
      game.turn = "🦕";
      whosTurn.innerText = `It's ${game.turn}'s turn`;
    }
  }
}

function checkDraw() {
  var filled = 0;
  for (var i = 0; i < gamePositions.length; i++) {
    if (gamePositions[i].innerHTML !== "") {
      filled++;
    }
  } if (filled === 9) {
    whosTurn.innerText = "It's a draw!";
    gameActive = false;
    return true;
  }
}

function renderWins() {
  for (var i = 0; i < game.players.length; i++) {
    game.players[i].wins = game.players[i].retrieveWinsFromStorage() || 0;
    playerOneWins.innerText = `${game.players[0].wins} wins`;
    playerTwoWins.innerText = `${game.players[1].wins} wins`;
  }
}

function changeTurn() {
  if (game.turn === "🦕") {
    game.turn = "☄️"
  } else if (game.turn === "☄️") {
    game.turn = "🦕";
  }
  whosTurn.innerText = `It's ${game.turn}'s turn`;
}

function placeToken(event) {
  var tag = parseInt(event.target.id);
  var tokenImg = `<p class="grid-space">${game.turn}</p>`;
  if (event.target.closest("div").innerHTML === "" && game.turn === "🦕" && gameActive) {
    event.target.closest("div").innerHTML += tokenImg;
    game.board[0].splice(tag, 1, tag);
    changeTurn();
    checkWinner(0);
  } else if (event.target.closest("div").innerHTML === "" && game.turn === "☄️" && gameActive) {
    event.target.closest("div").innerHTML += tokenImg;
    game.board[1].splice(tag, 1, tag);
    changeTurn();
    checkWinner(1);
  } else {
    clearGame();
  }
}
