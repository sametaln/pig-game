'use strict';

let playerTotal1El = document.getElementById('score--0');
let playerTotal2El = document.getElementById('score--1');
let playerScore1El = document.getElementById('current--0');
let playerScore2El = document.getElementById('current--1');
let player1El = document.querySelector('.player--0');
let player2El = document.querySelector('.player--1');
let diceEl = document.querySelector('.dice');
let imageEl = document.querySelector('.dice').src;
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');
playerScore1El.textContent = 0;
playerScore2El.textContent = 0;
playerTotal1El.textContent = 0;
playerTotal2El.textContent = 0;
let totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let dice = 0;
let playing = true;

const newGameFunc = function newGameFunction() {
  let playerTotal1El = (document.getElementById('score--0').textContent = 0);
  let playerTotal2El = (document.getElementById('score--1').textContent = 0);
  let playerScore1El = (document.getElementById('current--0').textContent = 0);
  let playerScore2El = (document.getElementById('current--1').textContent = 0);
  player1El.classList.add('player--active');
  player2El.classList.remove('player--active');
  totalScore = [0, 0];
  currentScore = 0;
  dice = 0;
  diceEl.src = `dice-1.png`;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
};

rollDice.addEventListener('click', function () {
  if (playing) {
    dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      currentScore = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player1El.classList.toggle('player--active');
      player2El.classList.toggle('player--active');
    }
  }
});

holdScore.addEventListener('click', function () {
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    if (totalScore[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      alert('Please click on the New Game button to restart the game!');
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      player1El.classList.toggle('player--active');
      player2El.classList.toggle('player--active');
      dice = 0;
      diceEl.classList.add('hidden');
    }
  }
});

newGame.addEventListener('click', newGameFunc);
