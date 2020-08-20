let randomLocation = Math.floor(Math.random() * 5);

let location1 = randomLocation;
let location2 = location1 + 1;
let location3 = location2 + 1;

let currentGuess;
let guesses = 0;

let hits = 0;
let isSunk = false;

while (isSunk == false) {
	//Get the user's guess
	currentGuess = prompt("Ready, aim, fire! (Enter a number from 0 - 6)");

	//Change Location If the user's guess is wrong
	randomLocation = Math.floor(Math.random() * 5);
	location1 = randomLocation;
	location2 = location1 + 1;
	location3 = location2 + 1;

	console.log(
		"Location 1: " +
			location1 +
			" Location 2: " +
			location2 +
			" Location 3: " +
			location3
	);
	console.log(currentGuess + " Guess");

	//COMPARE the user’s input to valid input values
	if (currentGuess < 0 || currentGuess > 6) {
		alert("Enter a valid cell number:");
	} else if (currentGuess === null) {
		alert("Game Cancelled!");
		isSunk = true;
	} else {
		guesses += 1;

		//IF the user’s guess matches a location
		if (
			currentGuess == location1 ||
			currentGuess == location2 ||
			currentGuess == location3
		) {
			hits += 1;
			alert("HIT!");

			console.log("CORRECT");
			console.log(currentGuess + " HIT");
			console.log(randomLocation + " Hit Location");

			//Change Location If the user's guess is correct
			randomLocation = Math.floor(Math.random() * 5);
			location1 = randomLocation;
			location2 = location1 + 1;
			location3 = location2 + 1;

			if (hits === 3) {
				isSunk = true;
				alert("You Sank My Battleship!");
			}
		} else {
			alert("MISS!");
		}
	}
}

if (guesses == 0) {
	alert(
		"You took " +
			guesses +
			" guesses to sink the battleship" +
			" which means your shooting accuracy is " +
			0
	);
} else {
	alert(
		"You took " +
			guesses +
			" guesses to sink the battleship" +
			" which means your shooting accuracy is " +
			(3 / guesses) * 100
	);
}

// isNaN(currentGuess) ||
//   currentGuess === "" ||
//   currentGuess == null ||
//   currentGuess > 6
