var wordBank = ["good", "morning"];
var Letter = require ('./letter.js');

var Word = function () {
    //Modify the function chooseRandomWord so that it sets this.word = to a random word.
    // this.word = "";
    // this.chooseRandomWord = function () {
    //     this.word = wordBank[Math.floor(Math.random() * wordBank.length)];
    //     console.log(wordBank[Math.floor(Math.random() * wordBank.length)]);
    this.word = wrd;
    this.letters = [];
    this.wordFound = false;

    this.getLets = function(){
        for (var i = 0; i < this.word.length; i++){
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    }
    };
    this.didWeFindTheWord = function(){
        if(this.letters.every(function(lttr){
            return lttr.appear === true;
        })) {
            this.wordFound = true;
            return true;
        }
    };
    this.checkIfLetterFound = function(letterGuessed){
        var thingsToReturn = 0;
        this.letters.forEach(function(lttr){
            if(lttr.letter === letterGuessed){
                lttr.appear = true;
                thingsToReturn++;
            }
        })
        return thingsToReturn;
    };
    this.wordRender = function(){
        var display = '';
        this.letters.forEach(function(lttr){
            var currentLetter = lttr.letterRender();
            display+= currentLetter;
        })
    };
    return display;
};


module.exports = Word;
