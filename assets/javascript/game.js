//This array hold the letters for the game
var selectionArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Sets the computerGuess variable for future use in function(event)
var currentLetter;

//Variables for tracking our wins, & losses. They begin at 0 guesses remaining at 10.
var wins = 0;
var losses = 0;
var guessRemaining = 10;

//Letters guessed array
var charGuessed = [ ];

// function, begins when a key a-z is pressed
document.onkeyup = function(event) {

	//determine which key was pressed
	var userGuess = event.key.toLowerCase();

	currentLetter = selectionArr[Math.floor(Math.random() * selectionArr.length)];
		console.log(currentLetter);

	if (userGuess.match(/^[a-z]$/i)) {

		//if userGuess matches currentLetter
		if (userGuess === currentLetter){
			console.log(wins++);
			alert("You win!");
		}
		//Id userGuess doesn't match currentLetter
		if (userGuess != currentLetter) {
			console.log(guessRemaining--)
		} 
		//Once guesses remaining hits 0, everything resets, and loss increaments by 1
		if (guessRemaining <= 0) {
			wins = 0;
			console.log(losses++);
			guessRemaining = 10;
			charGuessed = [];
			alert("You lose!");
		}
		//grabs keys pressed
		charGuessed.push(userGuess);

	}  

	else{
		alert("Please guess using a character A-Z, please");
		}


	//create variable html that will eventually track wins, losses, guesses remaining, and characters used.
	var html = "<p><strong>Wins:</strong> " + wins + "</p>" +
	"<p><strong>Losses:</strong> " + losses + "</p>" + "<p><strong>Guesses Remaining:</strong> " + guessRemaining + "</p>" + "<p><strong>Letters Guessed:</strong>  </p>" + "<p>" + charGuessed.join(", ") + "</p>"; 

	//display the updates on to our page
	document.querySelector("#game").innerHTML = html;
};