const option=["Rock","Paper","Scissor"]

const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const displayWinner = document.getElementById('winner');
const computerScoreBoard = document.getElementById('computerScore');
const playerScoreBoard = document.getElementById('playerScore');


const optionSelection = document.querySelectorAll('button');
let playerSelection;
let computerSelection;


optionSelection.forEach(optionSelection => optionSelection.addEventListener('click', (e)=>{
    playerSelection = e.target.id;
    playerChoiceDisplay.innerHTML = playerSelection;
    randomNumber();
    result(playerSelection, computerSelection);
}))

function randomNumber(){
    const randomSelection = Math.floor(Math.random()*option.length);
    computerSelection = option[randomSelection];
    computerChoiceDisplay.innerHTML = computerSelection;
}
function result(playerSelection, computerSelection){
    if(playerSelection === 'Rock' && computerSelection === 'Scissor' ||
    playerSelection === 'Scissor' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Rock'){
        displayWinner.innerHTML = "Player Win!"
        win(playerSelection,computerSelection)
    }
    else if(playerSelection === 'Scissor' && computerSelection === 'Rock' ||
    playerSelection === 'Rock' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Scissor'){
        displayWinner.innerHTML = "Computer Win!"
        lose(playerSelection,computerSelection)
    }
    else if(playerSelection === 'Scissor' && computerSelection === 'Scissor' ||
    playerSelection === 'Paper' && computerSelection === 'Paper' ||
    playerSelection === 'Rock' && computerSelection === 'Rock'){
        displayWinner.innerHTML = "Draw!"
    }
}

let playerScore = 0;
let computerScore = 0;
function win(playerSelection, computerSelection){
    playerScore++;
    playerScoreBoard.innerHTML = playerScore;
}

function lose(playerSelection, computerSelection){
    computerScore++;
    computerScoreBoard.innerHTML = computerScore;
}


