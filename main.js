// Global Variables
var currentToken = `./assets/meteor.svg`;
var player1 = new Player("🦕");
var player2 = new Player("☄️");
var testGame = new Game();
testGame.players.push(player1);
testGame.players.push(player2);

// Query Selectors
var gameBoard = document.querySelector(".tic-tac-toe");
var whosTurn = document.querySelector("h1");

// Event Listeners
gameBoard.addEventListener("click", function(event) {
  placeToken(event)});

// Event Handlers
function checkWinner(index) {
  for (var i = 0; i < testGame.winningCombos.length; i++) {
    if (testGame.winningCombos[i].every(elem => testGame.board[index].includes(elem))) {
      console.log("Winner!!!");
      testGame.players[index].wins++;
      console.log(testGame.players[index].wins);
      return true;
    }
  }
  return false;
}

function changeTurn() {
  if (currentToken === `./assets/dino.svg`) {
    whosTurn.innerText = "It's ☄️'s turn";
    currentToken = `./assets/meteor.svg`;
  } else if (currentToken === `./assets/meteor.svg`) {
    whosTurn.innerText = "It's 🦕's turn";
    currentToken = `./assets/dino.svg`;
  }
}

function placeToken(event) {
  console.log(event.target.id);
  var tag = parseInt(event.target.id);
  changeTurn();
  if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/dino.svg`) {
    event.target.closest("div").innerHTML += `<img src="${currentToken}" class="dino-toe">`;
    testGame.board[0].splice(tag, 1, tag);
    checkWinner(0);

  } else if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/meteor.svg`) {
    event.target.closest("div").innerHTML += `<img src="${currentToken}" class="dino-toe">`;
    testGame.board[1].splice(tag, 1, tag);
    checkWinner(1);
  }
}
