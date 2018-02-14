//------------------------- PseudoCode ---------------------------//
// 1.  initiation
// 2.  ask the player if it wants 1 or 2 players, then allow if player one enter a word- 
//     if single player allow user to choose category and auto select a word from stored array
// 3.  computer reads "word" then displays word length
// 4.  computer displays life count and allows player 2 to begin to guess 
// 5. player either guesses the word or loses the game due to not enough lives 
// 6. reset.
//------------------------ PseudoCode ---------------------------//

//setting vars and arrays for below if else statements
var wordArray = [];
counter = 0;
var cars = ["bmw", "audi", "honda", "toyota", "lexus", "volkswagon"];
var food = ["chicken", "cheeseburger", "frys", "salad", "taco", "steak"];
var animals = ["dog", "cat", "goat", "snake", "horse", "cow"];
var correct = 0;
var playerSelect = 0;




function myFunction() {

  //deletes the form field after user submits hidden word
  var x = document.getElementById("form1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  //Retrieves the "input" entered by user in the html form and logs it
  category = document.getElementById("inputContent").value;
  console.log(category)

  // for loop will run until its equal to the statement aboves .length, it then pushes each character to an array. Then logs it
  for (var i = 0; i < category.length; i++) {
    wordArray.push(category.charAt(i));
  }
  console.log(wordArray);
  counter++;
};



//deletes th form field after user submits hidden word
// function displayFunction() {
//   var x = document.getElementById("form1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }



//player selector
// displayFunction();

var x = document.getElementById("form1");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}

function onePlayer() {
  playerSelect = "1"
  playerSelector();

  // displayFunction();

  var x = document.getElementById("players");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function twoPlayer() {
  playerSelect = "2"
  playerSelector();
  var x = document.getElementById("players");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//if statement for player 1, asked player to select a category then chooses a random word in the category
function playerSelector() {
  if (playerSelect === "1") {
    alert("player 1 has selected");
    var category = prompt("please choose a category! Either cars, food, or animals");

    if (category === "cars") {
      var i = Math.floor(Math.random() * cars.length);
      console.log("category: " + category);
      console.log("Hidden word: " + cars[i]);
      bank = cars[i];
    }
    else if (category === "food") {
      var i = Math.floor(Math.random() * food.length);
      console.log("category: " + category);
      console.log("Hidden word: " + food[i]);
      bank = food[i];
    }
    else if (category === "animals") {
      var i = Math.floor(Math.random() * animals.length);
      console.log("category: " + category);
      console.log("Hidden word: " + animals[i]);
      bank = animals[i];
    }
    else {
      alert("you have not chosen a category");
    }

    for (var i = 0; i < bank.length; i++) {
      wordArray.push(bank.charAt(i));
    }
    console.log(wordArray);
  }

  //if statement for player 2, lets player 1 input a word for player 2 to guess
  else if (playerSelect === "2") {
    alert("player 2 was selected");
    myFunction();
  }

}

// var guess = prompt("guess dude!");


// if (wordArray.includes(guess) === true) {
//   console.log(guess);


// } else {
//   alert("wrong");
// }






// console.log(wordArray.indexOf(guess) > -1);
// console.log(wordArray.includes(guess));


