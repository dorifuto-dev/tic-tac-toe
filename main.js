// Global Variables
var currentToken = `./assets/dino.svg`;
var testGame = new Game();

// Query Selectors
var gameBoard = document.querySelector(".tic-tac-toe");

// Event Listeners
gameBoard.addEventListener("click", function(event) {
  placeToken(event)});

// Event Handlers
function checkWinner(index) {
  for (var i = 0; i < testGame.winningCombos.length; i++) {
    if (testGame.winningCombos[i].every(elem => testGame.board[index].includes(elem))) {
      console.log("Winner!!!");
      return true;
    }
  }
  return false;
}



function placeToken(event) {
  console.log(event.target.id);
  var tag = parseInt(event.target.id);
  if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/dino.svg`) {
    event.target.closest("div").innerHTML += `<img src="${currentToken}" class="dino-toe">`;
    currentToken = `./assets/meteor.svg`;
    testGame.board[0].splice(tag, 1, tag);
    console.log(testGame.board[0]);
    checkWinner(0);

  } else if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/meteor.svg`) {
    event.target.closest("div").innerHTML += `<img src="${currentToken}" class="dino-toe">`;
    currentToken = `./assets/dino.svg`;
    testGame.board[1].splice(tag, 1, tag);
    console.log(testGame.board[1]);
    checkWinner(1);
  }
}
