console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    console.log("You must enter a valid choice of rock, paper, or scissors.");
  }
};

let number = 0;
function getComputerChoice() {
  number = Math.floor(Math.random()*3);
  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie! Try again.";
  } 
  if (userChoice === "bomb") {
    return "You win because you blew up your opponent!";
  }
  if (userChoice === "rock"){
    if (computerChoice ==="paper"){
      return "Paper beats rock. You lose! Try again.";
    } else {
      return "Rock beats scissors. You win!";
    }
  }
  if (userChoice === "paper"){
    if (computerChoice ==="rock"){
      return "Paper beats rock. You win!";
    } else {
      return "Scissors beats paper. You lose! Try again.";
    }
  }
  if (userChoice === "scissors"){
    if (computerChoice ==="rock"){
      return "Rock beats scissors. You lose! Try again.";
    } else {
      return "Scissors beats paper. You win!";
    }
  }
}

function playGame() {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log("User: " + userChoice + "\nComputer: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

