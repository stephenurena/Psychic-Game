//This array hold the letters for the game
var selectionArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Variables for tracking our wins, & losses. They begin at 0 guesses remaining at 10.
var wins = 0;
var losses = 0;
var guessRemaining = 10;

//Letters guessed array
var charGuessed = [ ];

var currentLetter = selectionArr[Math.floor(Math.random() * selectionArr.length)];

// function, begins when a key a-z is pressed
document.onkeyup = function(event) {

	//determine which key was pressed
	var userGuess = event.key.toLowerCase();

	// var currentLetter = selectionArr[Math.floor(Math.random() * selectionArr.length)];
	// 	console.log(currentLetter);

	if (userGuess.match(/^[a-z]$/i)) {

		//if userGuess matches currentLetter
		if (userGuess === currentLetter){
			wins++;
			alert("You win!");
			currentLetter = selectionArr[Math.floor(Math.random() * selectionArr.length)];


		}
		//Id userGuess doesn't match currentLetter
		if (userGuess != currentLetter) {
			guessRemaining--;
		} 
		//Once guesses remaining hits 0, everything resets, and loss increaments by 1
		if (guessRemaining <= 0) {
			alert("You lose!");
			wins = 0;
			losses++;
			guessRemaining = 10;
			charGuessed = [];
			charGuessed.push(userGuess = null);
			currentLetter = selectionArr[Math.floor(Math.random() * selectionArr.length)];
		}
		//grabs keys pressed
		charGuessed.push(userGuess);

	}  

	else{
		alert("Please guess using a character A-Z, please");
		}


	//create variable html that will eventually track wins, losses, guesses remaining, and characters used.
	var html = "<p><strong>Wins:</strong> " + wins + "</p>" +
	"<p><strong>Losses:</strong> " + losses + "</p>" + "<p><strong>Guesses Remaining:</strong> " + guessRemaining + "</p>" + "<p><strong>Letters Guessed:</strong>  </p>" + "<p>" + charGuessed.join("  ") + "</p>"; 

	//display the updates on to our page
	document.querySelector("#game").innerHTML = html;
};