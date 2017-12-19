var inquirer = require("inquirer");
var Letter = require("./letter.js");
var getLetters = new Letter ()


var letterGuessed = [];
var guessesLeft = 7; 
var dummyWordTesting = "dog";
    console.log(dummyWordTesting.split('').join(' '));


var currentStatus = "___";


  inquirer.prompt([


]).then(function(user){

})

function resetGuessed(){
    letterGuessed = [];
};

function resetGuessedLeft(){
    guessesLeft = 7;
};

function chooseNewWord(){
     dummyWordTesting = "dog";     
};

function eraseCurrentStatus(){
    currentStatus = "___";
};

function displayCurrentStatus(){
    currentStatus.split('').join(' ');
    //console.log(currentStatus.split('').join(' '));
};

function initialize(){
    resetGuessed();
    resetGuessedLeft();
    chooseNewWord();
    eraseCurrentStatus();
    displayCurrentStatus();
};

initialize();