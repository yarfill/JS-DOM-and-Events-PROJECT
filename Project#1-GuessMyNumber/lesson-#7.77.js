const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

  document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';


      // When player win the game
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = 'Correct Number!';
      score = score + 1;
      document.querySelector('.score').textContent = score;

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
    

      // When guess is too high
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too high!';
      score = score - 1;
      document.querySelector('.score').textContent = score;

      // When player lose 
      } else {
        document.querySelector('.message').textContent = 'Loser of the game xD!';
        document.querySelector('.score').textContent = 0;

        document.querySelector('body').style.backgroundColor = '#fc0303';
        document.querySelector('.number').style.width = '30rem';
      }

      // When guess is too low
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Loser of the game xD!';
        document.querySelector('.score').textContent = 0;

        document.querySelector('body').style.backgroundColor = '#fc0303';
        document.querySelector('.number').style.width = '30rem';
      }
    } 
  });