var wordBank= ["good", "morning"];

var Word= function(){
    //Modify the function chooseRandomWord so that it sets this.word = to a random word.
  this.word = "";
  this.chooseRandomWord=function(){
    this.word = wordBank[Math.floor(Math.random()*wordBank.length)];
    console.log(wordBank[Math.floor(Math.random()*wordBank.length)]);
    };
};

var word1 = new Word();
var word2 = new Word();
var word3 = new Word();

console.log(word1);
module.exports = Word;
