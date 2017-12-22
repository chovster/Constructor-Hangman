var inquirer = require("inquirer");
var Letter = require("./letter.js");
var Word = require("./word.js");
// var getLetters = new Letter()

// getLetters.wordObject.chooseRandomWord()

// var dummyWordTesting = "dog";
// console.log(dummyWordTesting.split('').join(' '));


var currentStatus = "___";

var hangman = {
    wordBank: Word.wordBank,
    letterGuessed =[],
    guessesLeft = 7,
    currentWord: null,
    initializeGame: function () {
        if (this.letterGuessed.length > 0) {
            this.letterGuessed = [];
        }
        inquirer.prompt([{
            name: "play",
            type: "confirm",
            message: "Ready to play or not?"
        }]).then(function (answer) {
            if (answer.play) {
                this.newGame();
            } else {
                console.log("eeeh......");
            }
        })
    },
    newGame: function () {
        if (this.guessesLeft === 7) {
            console.log("Leggo");
            var randomWord = Math.floor(Math.random() * wordBank.length);
            this.currentWord = new Word(this.wordBank[randomWord]);
            this.currentWord.getLets();
        } else {
            this.resetGuessedLeft();
            this.newGame();
        }
    },
    resetGuessedLeft: function () {
        guessesLeft = 7;
    },
    promptingUser: function () {
        inquirer.prompt([{
            name: "chosenLtr",
            type: "input",
            message: "Choose a letter: ",
            validate: function (value) {
                if (isLetter(value)) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function (ltr) {
            var letterReturned = (ltr.chosenLtr).toUpperCase();
            var guessedLettersAlready = false;
            for (var i = 0; i < this.letterGuessed.length; i++) {
                if (letterReturned === this.letterGuessed[i]) {
                    guessedLettersAlready = true;
                }
            }
            if (guessedLettersAlready === false) {
                this.letterGuessed.push(letterReturned);
                var found = this.currentWord.checkLetterFound(letterReturned);
                if (found === 0) {
                    console.log("wrong guess")
                    guessesLeft--;
                } else {
                    console.log("you got it");
                    if (this.currentWord.didWeFindTheWord() === true) {
                        console.log(this.currentWord.wordRender());
                        console.log("Game Over");
                    } else {
                        console.log("Guesses left: " + guessesLeft);
                        console.log("Letters guessed " + this.letterGuessed);
                    }
                }
                if(this.guessesLeft > 0 && this.currentWord.wordFound === false){
                    this.promptingUser();
                } else if (this.guessesLeft === 0){
                    console.log("game over sucka");
                } 
            } else {
                console.log("thank you, try again");
                this.promptingUser();
            }
        })
    }

}
initializeGame();

// function resetGuessed() {
//     letterGuessed = [];
// };



// function chooseNewWord() {
//     dummyWordTesting = "dog";
// };

// function eraseCurrentStatus() {
//     currentStatus = "___";
// };

// function displayCurrentStatus() {
//     currentStatus.split('').join(' ');
//     //console.log(currentStatus.split('').join(' '));
// };

// function initialize() {
//     resetGuessed();
//     resetGuessedLeft();
//     chooseNewWord();
//     eraseCurrentStatus();
//     displayCurrentStatus();
// };

// initialize();