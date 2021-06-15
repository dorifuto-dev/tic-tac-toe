// Global Variables
var currentToken = `./assets/dino.svg`;

// Query Selectors
var gameBoard = document.querySelector(".tic-tac-toe");

// Event Listeners
gameBoard.addEventListener("click", function(event) {
  placeToken(event)});


// Event Handlers
function placeToken(event) {
  console.log(event.target.id);
  if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/dino.svg`) {
    event.target.closest("div").innerHTML += `<img src="${currentToken}" class="dino-toe">`;
    currentToken = `./assets/meteor.svg`;
  } else if (event.target.closest("div").innerHTML === "" && currentToken === `./assets/meteor.svg`) {
    event.target.closest("div").innerHTML += `<img src="${currentToken}" class="dino-toe">`;
    currentToken = `./assets/dino.svg`;
  }
}
