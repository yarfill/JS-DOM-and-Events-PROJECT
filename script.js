'use strict';

// selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1"); // getElementById supposed to be faster than querySelector!
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const name0 = document.querySelector(".name--0");
const name1 = document.querySelector(".name--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

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
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});