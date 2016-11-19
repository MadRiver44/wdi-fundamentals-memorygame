var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
/*
if(cardOne === cardTwo || cardThree === cardFour){
	alert("You found a match!");
}else if(cardOne !== cardTwo || cardThree !== cardFour){
	alert("Sorry, try again.");
} 
*/

let table = document.getElementById('game-board');
let cards = [];
cards.length = 4;

function createCards(){
	for(let i = 0; i < cards.length; i++){
		let newCard = document.createElement('div');
		newCard.className = 'card';
		table.appendChild(newCard);
	}
}

createCards();