/*console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"
*/

var gameBoard = document.getElementById("game-board");

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

function createBoard(){
for (var i = 0; i < cards.length; i++) {
	var cardElment = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	
	gameBoard.appendChild(cardElement);
	gameBoard.appendChild(cardElement);

}
}

function isMatch(cards){
if (cards[0] === cards[1]){
	alert("You found a match!");
} else {
	alert("Sorry, tryagain.");
}

}

function isTwoCards() {
cardsInPlay.push(this.getAttribute('data-card'));
if (this.getAttribute('data-card') === 'king'){
	this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2015/08/11/11/57/spades-884197_960_720.png'>";
} else {
	this.innerHTML = "<img src='https://cdn.pixabay.com/photo/2015/08/11/11/57/spades-884203_960_720.png'>";
}
if (cardsInPlay.length === 2){
	isMatch(cardsInPlay);

	cardsInPlay = [];
}

}




createBoard();

/*
if (cardTwo === cardFour){
	alert('You found a match');
} else if (cardTwo === cardThree){
	alert('You found a match');
} else if (cardTwo === CardOne){
	alert('You found a match');
} else if (cardThree ==== cardOne){
	alert('You found a match');
} else if (cardThree === cardFour){
	alert('You found a match');
} else if (cardFour === cardOne){
	alert('You found a match');
} else {

	alert('Sorry, try again');
}

*/