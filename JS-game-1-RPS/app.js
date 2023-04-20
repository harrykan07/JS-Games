const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
let userChoice;
let computerChoice;
let result;
const choiceArray = ['rock', 'paper', 'scissor']

// step 1: get the user selected button values
const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice()
{
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  computerChoice = choiceArray[randomNumber];
  computerChoiceDisplay.innerHTML = computerChoice;
}

//Arrow function
const getResult = () => {
  if (userChoice===computerChoice)  
    result = "It's a draw";
  if (userChoice==="rock" && computerChoice==="paper")  
    result = "You lose";
  if (userChoice==="rock" && computerChoice==="scissor")  
    result = "You win";
  if (userChoice==="paper" && computerChoice==="rock")  
    result = "You win";
  if (userChoice==="paper" && computerChoice==="scissor")  
    result = "You lose"; 
  if (userChoice==="scissor" && computerChoice==="paper")  
    result = "You win";
  if (userChoice==="scissor" && computerChoice==="rock")  
    result = "You lose"; 
  resultDisplay.innerHTML = result;
}
