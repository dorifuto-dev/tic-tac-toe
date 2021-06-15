// Global Variables
var currentToken = `./assets/dino.svg`;
var game = new Game();
game.players.push(new Player("🦕"));
game.players.push(new Player("☄️"));
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
//   for (var i = 0; i < game.winningCombos.length; i++) {
//     if (game.winningCombos[i].every(elem => game.board[index].includes(elem))) {
//       var won = game.players[index];
//       game.winner = won.token;
//       whosTurn.innerText = `The winner is ${won.token}!`;
//       won.wins++;
//       renderWins();
//       gameActive = false;
//       return true;
//     }
//   }
//   checkDraw();
//   return false;
// }
  game.checkWin([index]);
  if (game.checkWin([index]) === true) {
    whosTurn.innerText = `The winner is ${game.players[index].token}!`
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
  playerOneWins.innerText = `${game.players[0].wins} wins`;
  playerTwoWins.innerText = `${game.players[1].wins} wins`;
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
