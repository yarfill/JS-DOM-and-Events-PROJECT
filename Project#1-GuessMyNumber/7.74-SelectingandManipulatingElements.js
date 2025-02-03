'use strict';

//  Function expression
document.querySelector('.check').addEventListener('click', function() {
  const guess = document.querySelector('.guess').value;
  console.log("🚀 ~ document.querySelector ~ guess:", guess)
});