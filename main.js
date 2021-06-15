// Global Variables
var currentToken = `./assets/dino.svg`;
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
    whosTurn.innerText = `The winner is ${game.players[index].token}!`
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
      currentToken = `./assets/dino.svg`;
      whosTurn.innerText = "It's 🦕's turn";
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
    game.players[i].wins = game.players[i].retrieveWinsFromStorage();
    if (game.players[i].wins === null) {
      return;
    } else {
      playerOneWins.innerText = `${game.players[0].wins} wins`;
      playerTwoWins.innerText = `${game.players[1].wins} wins`;
    }
  }

}

function changeTurn() {
  if (currentToken === `./assets/dino.svg`) {
    whosTurn.innerText = "It's ☄️'s turn";
    currentToken = `./assets/meteor.svg`;
    game.turn = "☄️"
  } else if (currentToken === `./assets/meteor.svg`) {
    whosTurn.innerText = "It's 🦕's turn";
    currentToken = `./assets/dino.svg`;
    game.turn = "🦕";
  }
}

function placeToken(event) {
  var tag = parseInt(event.target.id);
  var tokenImg = `<img src="${currentToken}" class="dino-toe">`;
  if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/dino.svg` && gameActive) {
    event.target.closest("div").innerHTML += tokenImg;
    game.board[0].splice(tag, 1, tag);
    changeTurn();
    checkWinner(0);
  } else if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/meteor.svg` && gameActive) {
    event.target.closest("div").innerHTML += tokenImg;
    game.board[1].splice(tag, 1, tag);
    changeTurn();
    checkWinner(1);
  } else {
    clearGame();
  }
}
