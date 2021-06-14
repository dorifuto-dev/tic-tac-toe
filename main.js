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

    event.target.closest("div").innerHTML += `<img src="${currentToken}" class="dino-toe">`;

}
