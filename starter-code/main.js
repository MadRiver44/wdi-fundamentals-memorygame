var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if(cardOne === cardTwo || cardThree === cardFour){
	alert("You found a match!");
}else if(cardOne !== cardTwo || cardThree !== cardFour){
	alert("Sorry, try again.");
} 