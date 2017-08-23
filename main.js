/*this is where all cards will be 
called from*/


var BasicCard = require("./src/BasicCard.js");
var card = new BasicCard("Who was the first President of the United States?", "George Washington");
var cardTwo = BasicCard("What is the tallest mountain?","Mount Everest");
console.log(card);

var ClozeCard = require("./src/ClozeCard.js");
var cardThree = new ClozeCard("George Orwell wrote Animal Farm", "George Orwell");
console.log(cardThree);