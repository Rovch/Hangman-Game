//------------------------- PseudoCode ---------------------------//
// 1.  initiation
// 2.  ask the player if it wants 1 or 2 players, then allow if player one enter a word- 
//     if single player allow user to choose category and auto select a word from stored array
// 3.  computer reads "word" then displays word length
// 4.  computer displays life count and allows player 2 to begin to guess 
// 5. player either guesses the word or loses the game due to not enough lives 
// 6. reset.
//------------------------ PseudoCode ---------------------------//


var bank = " ";
var wordArray = [];
counter = 0;

function myFunction() {

  //Retrieves the "input" entered by user in the html form and logs it
  bank = document.getElementById("inputContent").value;
  console.log(bank)

  //for loop will run until its equal to the statement aboves .length, it then pushes each character to an array. Then logs it
  for (var i = 0; i < bank.length; i++) {
    wordArray.push(bank.charAt(i));
  }
  console.log(wordArray);

  counter++;
}

//I dont want any of the remaining code for the game to run unless the top function has already ran?????????
//this is an example, The code below should "delete" the render of the form in the html, thus not allowing the user to input anymore info

if (counter > 0) {
  var myElement = document.getElementById("form1");
  myElement.style.display = "none";
} else {
  console.log(counter);
}
