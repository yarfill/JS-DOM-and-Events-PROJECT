const elementBody = document.querySelector("body");
const elementMessage = document.querySelector(".message");
const elementNumber = document.querySelector(".number");
const elementScore = document.querySelector(".score");
const elementHighscore = document.querySelector(".highscore");
const elementSize = document.querySelector(".number");
const elementGuess = document.querySelector(".guess");
const elementAgain = document.querySelector('.again');
const elementCheck = document.querySelector('.check');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  elementMessage.textContent = message;
}
const displayScore = function (score) {
  elementScore.textContent = score;
}
const displayHighscore = function (highscore) {
  elementHighscore.textContent = highscore;
}
const numberIncognito = function (number) {
  elementNumber.textContent = number;
}
const sizeIncognito = function (size) {
  elementSize.style.width = size;
}
const inputGuess = function (guess) {
  elementGuess.value = ('');
}
const bodyBackground = function (body) {
  elementBody.style.backgroundColor = body;
}
const checkButton = function (check) {
  document.querySelector('.check');    
}

function listenerFunction() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No number!');

    // When player win the game
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    displayScore(score);
    bodyBackground('#60b347');
    sizeIncognito('30rem');
    numberIncognito(secretNumber);

    if(score > highscore) {
      displayHighscore(score);
    }

    // If guess is wrong
  } else if(guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!'); 
    score = score - 1;
    displayScore(score);

    // When player lose 
    } else {
      displayMessage('Loser of the game xD!');
      displayScore(0);
      bodyBackground('red');
      sizeIncognito('30rem'); 
    }
   } 
}

function againFunction() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  bodyBackground('#222');
  displayScore(score);
  sizeIncognito('15rem'); 
  numberIncognito('?');
  inputGuess('');

  if(score < highscore) {
    displayHighscore(score);
  }
}

elementCheck.addEventListener('click', listenerFunction);
elementAgain.addEventListener('click', againFunction);