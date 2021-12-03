function computerPlay(){
  let compChoice = Math.floor(Math.random() * 3);

  if (compChoice === 1){
    return "rock";
  }
  else if (compChoice === 2){
    return "paper";
  }
  else {
    return "scissors";
  }
}
function playerPlay(){

let playerChoice = prompt("").toLowerCase();

if (playerChoice === 'rock'){
  return 'rock';
  }
else if (playerChoice === 'paper'){
  return 'paper';
  }
else {
  return 'scissors';
  }
}
const playerSelection = playerPlay();
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  
  if ((computerSelection === 'rock' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper')){
    return "You Lose! "+ computerSelection + " beats " + playerSelection;
  }

  else if (computerSelection === playerSelection){
    return "You Tied!";
  }
  else {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  }
} 

//console.log(playRound(playerSelection, computerSelection));



