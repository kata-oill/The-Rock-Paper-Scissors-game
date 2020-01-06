'use strict';

// global variables

var params = {
  userScore: 0,
  computerScore: 0,
  userScore_span: document.getElementById('user-score'),
  computerScore_span: document.getElementById('computer-score'),
  scoreBoard_div: document.querySelector('.score-board'),
  result_p: document.getElementById('round-result'),
  rock_div: document.getElementById('rock'),
  paper_div: document.getElementById('paper'),
  scissors_div: document.getElementById('scissors'),
  newGame_div: document.getElementById('new-game'),
  roundAsk: '',
  gameStatus: 0,
  roundInfo: document.getElementById('round-number'),
  gameScore: document.getElementById('score-message')

}

function getComputerChoice() {
  const choices = ['paper', 'rock', 'scissors'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}

// function which inform about round result

function win (userMove, computerMove) {
  params.userScore++;
  params.userScore_span.innerHTML = params.userScore;
  params.result_p.innerHTML = ' YOU PLAYED: ' + userMove + ' COMPUTER PLAYED: ' + computerMove + '. YOU WIN!';
}

function lose (userMove, computerMove) {
  params.computerScore++;
  params.computerScore_span.innerHTML = params.computerScore;
  params.result_p.innerHTML = ' YOU PLAYED: ' + userMove + ' COMPUTER PLAYED: ' + computerMove + '. YOU LOSE!';
}

function draw (userMove, computerMove) {
  params.result_p.innerHTML = ' YOU PLAYED: ' + userMove + ' COMPUTER PLAYED: ' + computerMove + '. ITS A DRAW!';
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
      params.result_p.innerHTML = ('');
      params.roundInfo.innerHTML = ('');
      params.gameScore.innerHTML = ('Game over, please press the new game button!');
}

/*
// function with user's moves


function main() {
  console.log('MAIN');
  params.rock_div.addEventListener('click', function() {
    if(params.gameStatus == 0){
      alert('Click the button below to start the game!');
    }
    else{
      if (params.userScore === params.roundAsk || params.computerScore === params.roundAsk) {
        gameover();
      }
      else {
        playerMove('rock');
      }
     } 
  })

  params.paper_div.addEventListener('click', function() {
    if(params.gameStatus == 0){
      alert('Click the button below to start the game!');
    }
    else{
      if (params.userScore === params.roundAsk || params.computerScore === params.roundAsk) {
      gameover();
      }
      else {
      playerMove('paper');
      }
    }
    
  })

  params.scissors_div.addEventListener('click', function() {
    if(params.gameStatus == 0){
      alert('Click the button below to start the game!');
    }
    else {
      if (params.userScore === params.roundAsk || params.computerScore === params.roundAsk) {
        gameover();
      }
      else {
      playerMove('scissors');
      }
    }
  })
}

main();
*/

// new function with user move



var playerButtons = document.querySelectorAll('.player-move');

for (var i = 0; i < playerButtons.length; i++) {

  var dataMove = playerButtons[i].getAttribute('data-move');

  playerButtons[i].addEventListener('click', function(){
    if(params.gameStatus == 0) {
      alert('Click the button below to start the game!');
    }
    else {
      if (params.userScore === params.roundAsk || params.computerScore === params.roundAsk) {
        gameover();
      }
      else {
        playerMove(dataMove);
      }  
    } 
  })
};

// show overlay & modal

var showModal = function(){
  event.preventDefault();
  
  document.querySelector('#modal-overlay').classList.add('show'); 
  document.querySelector('.modal').classList.add('show');
}

// hide modal

var hideModal = function(){
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
};

var closeButtons = document.querySelectorAll('.modal .close');

for(var i = 0; i < closeButtons.length; i++){
  closeButtons[i].addEventListener('click', hideModal);
}

// close modal after click on overlay. 

document.querySelector('#modal-overlay').addEventListener('click', hideModal);

var modals = document.querySelectorAll('.modal');
  
  for(var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(){
      event.stopPropagation();
    });
  }


// function asking user about number of rounds

params.newGame_div.addEventListener('click', function() {
    params.roundAsk = window.prompt('Type number of rounds:');
    
    if (params.roundAsk > 0) {
      params.gameStatus = 1;
      params.roundAsk = parseInt(params.roundAsk);
      params.roundInfo.innerHTML = ('We are playing to ' + params.roundAsk + ' wins');
    } 
    else {
      alert('Wrong value!');
    }
    reset();
  });

// function reseting the score 

function reset() {
    params.userScore = 0;
    params.computerScore = 0;

  console.log('Reset');
    params.userScore_span.innerHTML = params.userScore;
    params.computerScore_span.innerHTML = params.computerScore;
    params.result_p.innerHTML = ('Lets start the game!');
    params.gameScore.innerHTML = ('');
}


// entire game winner function

function winner() {
    if (params.userScore === params.roundAsk) {
      params.gameScore.innerHTML = ('YOU WON THE ENTIRE GAME!!!');
      showModal();

    } else if (params.computerScore === params.roundAsk) {
      params.gameScore.innerHTML = ('YOU LOSE THE ENTIRE GAME!!!');
      showModal();
    }
}


















