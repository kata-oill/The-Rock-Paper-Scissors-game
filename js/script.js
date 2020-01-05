'use strict';

// global variables

let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById('user-score');
let computerScore_span = document.getElementById('computer-score');

const scoreBoard_div =document.querySelector('.score-board');
const result_p = document.getElementById('round-result');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

const newGame_div = document.getElementById('new-game');

let roundAsk;
let gameStatus = 0;

let roundInfo = document.getElementById('round-number');

let gameScore = document.getElementById('score-message');

// function drawing random number

function getComputerChoice() {
  const choices = ['paper', 'rock', 'scissors'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

// function which inform about round result

function win (userMove, computerMove) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = ' YOU PLAYED: ' + userMove + ' COMPUTER PLAYED: ' + computerMove + '. YOU WIN!';
}

function lose (userMove, computerMove) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = ' YOU PLAYED: ' + userMove + ' COMPUTER PLAYED: ' + computerMove + '. YOU LOSE!';
}

function draw (userMove, computerMove) {
  result_p.innerHTML = ' YOU PLAYED: ' + userMove + ' COMPUTER PLAYED: ' + computerMove + '. ITS A DRAW!';
}

// function comparing player's move to the computer's move

function playerMove (userChoice) {
  const computerChoice = getComputerChoice();


  if (userChoice === computerChoice) {
      draw(userChoice, computerChoice);
  }
  else if (userChoice === 'paper'){
    if (computerChoice === 'rock') {
        win(userChoice, computerChoice);
    }
    else if (computerChoice === 'scissors') {
        lose(userChoice, computerChoice);
    }
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
        lose(userChoice, computerChoice);
    }
    else if (computerChoice === 'scissors') {
        win(userChoice, computerChoice);
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
        win(userChoice, computerChoice);
    }
    else if (computerChoice === 'rock') {
        lose(userChoice, computerChoice);
    }
  }
  winner();
}

playerMove();

// function removing the strings

function gameover() {
      result_p.innerHTML = ('');
      roundInfo.innerHTML = ('');
      gameScore.innerHTML = ('Game over, please press the new game button!');
}

// function with user's moves

function main() {
  console.log('MAIN');
  rock_div.addEventListener('click', function() {
    if(gameStatus == 0){
      alert('Click the button below to start the game!');
    }
    else{
      if (userScore === roundAsk || computerScore === roundAsk) {
        gameover();
      }
      else {
        playerMove('rock');
      }
     } 
  })

  paper_div.addEventListener('click', function() {
    if(gameStatus == 0){
      alert('Click the button below to start the game!');
    }
    else{
      if (userScore === roundAsk || computerScore === roundAsk) {
      gameover();
      }
      else {
      playerMove('paper');
      }
    }
    
  })

  scissors_div.addEventListener('click', function() {
    if(gameStatus == 0){
      alert('Click the button below to start the game!');
    }
    else {
      if (userScore === roundAsk || computerScore === roundAsk) {
        gameover();
      }
      else {
      playerMove('scissors');
      }
    }
  })
}

main();


// function asking user about number of rounds

newGame_div.addEventListener('click', function() {
    roundAsk = window.prompt('Type number of rounds:');
    
    if (roundAsk > 0) {
      gameStatus = 1;
      roundAsk = parseInt(roundAsk);
      roundInfo.innerHTML = ('We are playing to ' + roundAsk + ' wins');
    } 
    else {
      alert('Wrong value!');
    }
    reset();
  });

// function reseting the score 

function reset() {
    userScore = 0;
    computerScore = 0;

  console.log('Reset');
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = ('Lets start the game!');
    gameScore.innerHTML = ('');
}


// entire game winner function

function winner() {
    if (userScore === roundAsk) {
      gameScore.innerHTML = ('YOU WON THE ENTIRE GAME!!!');

    } else if (computerScore === roundAsk) {
      gameScore.innerHTML = ('YOU LOSE THE ENTIRE GAME!!!');
    }
}


