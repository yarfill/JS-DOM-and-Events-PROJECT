// selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); // getElementById supposed to be faster than querySelector!
const currentEl0 = document.getElementById("current--0");
const currentEl1 = document.getElementById("current--1");

const name0 = document.querySelector(".name--0");
const name1 = document.querySelector(".name--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

let currentScore = 0;

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add("hidden");

// Rolling dice functionality
btnRoll.addEventListener("click", function() {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  
  // 2.Display Dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  // 3.Check for rolled 1: if true, switch to next player
  if(dice !== 1) {
    // Add dice to the current score
    currentScore = currentScore + dice; // shortcut currentScore += dice
    currentEl0.textContent = currentScore; // change it later
  } else {
    // Switch to next player
  }
});