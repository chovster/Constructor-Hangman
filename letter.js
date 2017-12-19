var Word= require("./word.js");

var Letter = function(){
    this.wordObject = new Word();
}

var letterObject = new Letter();
    letterObject.wordObject.chooseRandomWord();
console.log(letterObject);

module.exports = Letter;
