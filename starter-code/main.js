/*
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if(cardOne === cardTwo || cardThree === cardFour){
	alert("You found a match!");
}else if(cardOne !== cardTwo || cardThree !== cardFour){
	alert("Sorry, try again.");
} 
*/

// get comfortable with ES6 and AirBnB style guide for JS

/*
table var selects the div container with id="game-board" for card generation, 
cards array contains the values to be compared, cardsInplay holds generated 
elements with class"card" and attr'data-card', these values in the cardsInPlay
array are generated by the for loop.
*/


let table = document.getElementById('game-board');
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

/*
after each loop, we create a newCard element that is a div, this div has a class
'card' and an attribute 'data-card', each card has an event listener attached
'click'. When event is triggered, the callback function isTwoCards is called.
*/
function createCards(){
	for (let i = 0; i < cards.length; i++) { 
		let newCard = document.createElement('div');
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);

/*
the game-board div is appened with child elements, which are also divs. Because 
there are two cards, we append twice.
*/

		table.appendChild(newCard);
		table.appendChild(newCard);
	}
}

/*
defined callback function for event listener on newCard 'click'. First it pushes 
generated card to cardsInPlay array, then we check it's value, if true, we fill the 
newCard div with one type of card or the other. The images are located in root folder, 
but normally they'd be in a seperate images folder. When we have generated the 
required number of cards, we call isMatch function.
*/

function isTwoCards(){
	cardsInPlay.push(this.getAttribute('data-card'));
	
		if (this.getAttribute('data-card') === "king") {
			this.innerHTML = "<img src='king-28374_1280.png'/>";
		}else {
			this.innerHTML = "<img src='diamonds-28294_1280.png'/>";
		}

		if (cardsInPlay.length === 2) {
			isMatch (cardsInPlay);
			cardsInPlay = [];
	}

}
/*
isMatch is called as a test to compare the two cards.
*/

function isMatch(){
	if (cards[0] === cards[1] || cards[2] === cards[3]){
		alert("You found a match!");
	}else if (cards[0] !== cards[1] || cards[2] !== cards[3]){
		alert ("Sorry, try again.");
	}

}

//call to trigger game
createCards();