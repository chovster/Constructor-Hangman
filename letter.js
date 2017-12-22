var Word = require("./word.js");

var Letter = function (ltr) {
    // this.wordObject = new Word();
    this.letter = ltr;
    this.appear = false;

    this.letterRender = function(){
        if(this.letter == ''){
            this.appear = true;
            return ' ';
        } if (this.appear === false){
            return '_';
        } else {
            return this.letter;
        }
    };
};

// var letterObject = new Letter();
// letterObject.wordObject.chooseRandomWord();
// console.log(letterObject);

module.exports = Letter;


// {
//     letters: [
//         {
//             value: A
//         },
//         {
//             value: _
//         },
//         {
//             value: B
//         }
//     ]
// }