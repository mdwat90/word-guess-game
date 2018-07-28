var words = ["QUEEN", "ELO", "JOHNMAYER", "BEATLES", "ELTONJOHN", "TIMMCGRAW"]

// Variable for generating random word in "words" array
var word = words[Math.floor(Math.random() * words.length)];
// Variable for blank letter spaces
var answerArray = [];
// Variable for amount of guesses
var counter = 15;
// Variable for score
var score = 0;
// Variable for logging key presses
var keyPressed = [];


// Code for generating "_" for letters of random word to be guessed
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}



function newGame() {
    // Joins each blank array element for answerArray to display blank letter spaces
    document.getElementById("current").innerHTML = (answerArray.join(" "));
    // Decreases the number of guesses each time a letter is guessed
    counter = 15;
    document.getElementById("remainguess").innerHTML = (counter);
    keyPressed = [];
    document.getElementById("letterspressed").innerHTML = (keyPressed);
}


// Code that cycles through each letter of the random word each time a letter is pressed
document.onkeydown = function () {
    var answer = answerArray.toString().replace(/,\s?/g, "");
    var queen = document.getElementById("queen");
    var johnMayer = document.getElementById("johnMayer");
    var eltonJohn = document.getElementById("eltonJohn");
    var beatles = document.getElementById("beatles");
    var elo = document.getElementById("elo");
    var timMcgraw = document.getElementById("timMcgraw");

    // Joins each blank array element for answerArray to display blank letter spaces
    document.getElementById("current").innerHTML = (answerArray.join(" "));

    // Writes the score
    document.getElementById("wins").innerHTML = (score);

    // Decreases the number of guesses each time a letter is guessed
    document.getElementById("remainguess").innerHTML = (counter--);

    for (var j = 0; j < word.length; j++) {
        // If the letter guessed is equal to a letter in the random word,
        // the blank space will become that letter
        if (word[j] == event.key.toUpperCase()) {
            answerArray[j] = event.key.toUpperCase();
        }
    }


    // If the remaining guesses is equal to 0, alerts "Game Over!"
    if (counter === -1) {
        alert("Game Over!");
        var playAgain = confirm("Play Again?");
        if (playAgain) {
            location.reload();
        } else {
            alert("Thanks for Playing!");
            location.reload();
        }
    }

   


    if (answer === "QUEEN") {
        queen.style.display = "block";
        alert("You Got It!");
        var playAgain = confirm("Play Again?");
        if (playAgain) {
            location.reload();
        }
        document.getElementById("wins").innerHTML = (score++);
    }
    if (answer === "ELO") {
        elo.style.display = "block";
        alert("You Got It!");
        // var playAgain = confirm("Play Again?");
        // if (playAgain) {
        //     location.reload();
        // }
        document.getElementById("wins").innerHTML = (score++);
    }
    if (answer === "BEATLES") {
        beatles.style.display = "block";
        alert("You Got It!");
        // var playAgain = confirm("Play Again?");
        // if (playAgain) {
        //     location.reload();
        // }
        document.getElementById("wins").innerHTML = (score++);
    }
    if (answer === "JOHNMAYER") {
        johnMayer.style.display = "block";
        alert("You Got It!");
        // var playAgain = confirm("Play Again?");
        // if (playAgain) {
        //     location.reload();
        // }
        document.getElementById("wins").innerHTML = (score++);
    }
    if (answer === "ELTONJOHN") {
        eltonJohn.style.display = "block";
        alert("You Got It!");
        // var playAgain = confirm("Play Again?");
        // if (playAgain) {
        //     location.reload();
        // }
        document.getElementById("wins").innerHTML = (score++);
    }
    if (answer === "TIMMCGRAW") {
        timMcgraw.style.display = "block";
        alert("You Got It!");
        // var playAgain = confirm("Play Again?");
        // if (playAgain) {
        //     location.reload();
        // }
        document.getElementById("wins").innerHTML = (score++);
    }


    // Writes the letters that was guessed
    keyPressed.push(event.key.toUpperCase());
    document.getElementById("letterspressed").innerHTML = (keyPressed);
}