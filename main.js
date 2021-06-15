// Global Variables
var currentToken = `./assets/dino.svg`;
var player1 = new Player("🦕");
var player2 = new Player("☄️");
var testGame = new Game();
testGame.players.push(player1);
testGame.players.push(player2);
var gameActive = true;

// Query Selectors
var gameBoard = document.querySelector(".tic-tac-toe");
var whosTurn = document.querySelector("h1");
var gamePositions = document.querySelectorAll("div");
var playerOneWins = document.querySelector(".left-wins");
var playerTwoWins = document.querySelector(".right-wins");

// Event Listeners
// window.onload = renderWins();
gameBoard.addEventListener("click", function(event) {
  placeToken(event)});

// Event Handlers
function checkWinner(index) {
  for (var i = 0; i < testGame.winningCombos.length; i++) {
    if (testGame.winningCombos[i].every(elem => testGame.board[index].includes(elem))) {
      var won = testGame.players[index];
      testGame.winner = won.token;
      whosTurn.innerText = `The winner is ${won.token}!`;
      won.wins++;
      renderWins();
      gameActive = false;
      return true;
    }
  }
  return false;
}

function clearGame() {
  if (gameActive === false) {
    for (var i = 0; i < gamePositions.length; i++) {
      gamePositions[i].innerHTML = "";
      testGame.clearBoard();
      gameActive = true;
      currentToken = `./assets/meteor.svg`;
    }
  }
}

function renderWins() {
  playerOneWins.innerText = `${testGame.players[0].wins} wins`;
  playerTwoWins.innerText = `${testGame.players[1].wins} wins`;
}

function changeTurn() {
  if (currentToken === `./assets/dino.svg`) {
    whosTurn.innerText = "It's ☄️'s turn";
    currentToken = `./assets/meteor.svg`;
    testGame.turn = "☄️"
  } else if (currentToken === `./assets/meteor.svg`) {
    whosTurn.innerText = "It's 🦕's turn";
    currentToken = `./assets/dino.svg`;
  }
}

function placeToken(event) {
  var tag = parseInt(event.target.id);
  var tokenImg = `<img src="${currentToken}" class="dino-toe">`;
  if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/dino.svg` && gameActive === true) {
    event.target.closest("div").innerHTML += tokenImg;
    testGame.board[0].splice(tag, 1, tag);
    changeTurn();
    checkWinner(0);
  } else if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/meteor.svg` && gameActive === true) {
    event.target.closest("div").innerHTML += tokenImg;
    testGame.board[1].splice(tag, 1, tag);
    changeTurn();
    checkWinner(1);
  } else {
    clearGame();
    changeTurn();
  }
}
