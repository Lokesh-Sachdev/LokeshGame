'use strict';

// Selecting Elements
let score1 = 0;
let score0 = 0;
let totalRound = 0;
let health0 = 100,
  health1 = 100;
const btnNew = document.querySelector('.btn--new');
const btnStart = document.querySelector('#btnStart');
const btnShoot = document.querySelector('.btn--shoot');
let currentHit0, currentHit1;

const init = function () {
  (health0 = 100), (health1 = 100), (score0 = 0), (score1 = 0);
  totalRound = 0;
  document.getElementById('health--0').textContent = `${health0}`;
  document.getElementById('health--1').textContent = `${health1}`;
  document.getElementById('score--1').textContent = `${score1}`;
  document.getElementById('score--0').textContent = `${score0}`;
};

btnStart.addEventListener('click', function () {
  console.log('button clicked');
  playing = true;
  document.getElementsByClassName('.btn--start').style.display = 'none';
});

btnNew.addEventListener('click', function () {
  init();
});

btnShoot.addEventListener('click', function () {
  currentHit0 = Math.floor(Math.random() * 5);
  currentHit1 = Math.floor(Math.random() * 5);
  health0 = health0 - currentHit0;
  health1 = health1 - currentHit1;
  var title0 = document.getElementById('health--0');
  title0.textContent = `${health0}`;
  var title1 = document.getElementById('health--1');
  title1.textContent = `${health1}`;
  if (health0 <= 0 || health1 <= 0) {
    totalRound++;
    if (health0 <= 0) {
      alert(`Round ${totalRound} Completed Player 2 win`);
      score1++;
      var score = document.getElementById('score--1');
      score.textContent = `${score1}`;
      (health0 = 100), (health1 = 100);
      document.getElementById('health--0').textContent = `${health0}`;
      document.getElementById('health--1').textContent = `${health1}`;
    } else if (health1 <= 0) {
      alert(`Round ${totalRound} Completed Player 1 win`);
      score0++;
      var score = document.getElementById('score--0');
      score.textContent = `${score0}`;
      (health0 = 100), (health1 = 100);
      document.getElementById('health--0').textContent = `${health0}`;
      document.getElementById('health--1').textContent = `${health1}`;
    }
  }
});
