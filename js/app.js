'use strict';
console.log('ready to rock');

var correctAnswers = 0;

// One

// Greet the user
var user = prompt('What is your secret coder name?');
console.log('user name is ' + user);
confirm(user + ', are you ready to start the quiz? Do not fear, you shall excel!');

// Two
var lochNess = prompt('Do I currently have four Loch Ness montsters in a fish tank?').toLowerCase();
console.log(lochNess);
// Need to validate input
if(lochNess === 'yes' || lochNess === 'y'){
  correctAnswers++;
  alert('That is correct, I do have a fish tank!');
  console.log(correctAnswers);
} else {
    alert('WRONG!');
}

// Three
var Ness = prompt('Do I currently have Ness unlocked on SSB?').toLowerCase();
console.log(lochNess);
// Need to validate input
if(Ness === 'yes' || Ness === 'y'){
  correctAnswers++;
  alert('That is correct, I do have Ness!');
  console.log(correctAnswers);
} else {
    alert('WRONG!');
}

// Four
var age = 47;

for(var i=0; i<4; i++){
  var ageAnswer = parseInt( prompt('How old is Craig?'));
  if(ageAnswer === age){
    alert('You got the question right. Craig is ' + age + '!');
    console.log('user response is ' + ageAnswer + ' to the question.');
    correctAnswers++;
    break;
  } else if((i === 3) && (ageAnswer !== age)) {
    alert('Be best.');
  } else if(ageAnswer > age){
    alert('You guessed high!');
  } else if (ageAnswer < age) {
    alert('Too low.');
  } else if (isNaN(ageAnswer) === true){
    alert('Try a number.');
  }
  console.log(i);
}

var userCorrect = false;
var pokemon = ['pikachu', 'diglet', 'eevee', 'squirtle', 'clefairy', 'charmander'];

var guesses = 0;
    while(guesses < 7){
    var pokeAnswer = prompt('What pokemon did I catch today?');

    for(var i=0; i < pokemon.length; x++) {
        alert('You caught the rogjt answer!');
        guesses = 7;
        correctAnswers++;
        userCorrect = true;
        break;
    
    }
    if(guesses !== 7){
        alert('not that one.');
    }
    guesses++;
}
if(userCorrect === false){
    alert('uh-oh. No right answers.');    
}

alert(user + 'you scored ' + correctAnswers);