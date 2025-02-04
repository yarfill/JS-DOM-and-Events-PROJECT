'use strict';

const x = function() {
  console.log(23);
  };
  
  document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log("🚀 ~ document.querySelector ~ guess:", guess);

    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    } 
  });