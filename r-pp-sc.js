const options = ["Rock", "Paper", "Scissor"];

const choiceEmojis = {
    Rock: "✊",
    Paper: "✋",
    Scissor: "✌️"
};

const winMessages = {
    "Rock-Scissor":    "Rock crushes Scissors!",
    "Scissor-Paper":  "Scissors cuts Paper!",
    "Paper-Rock":     "Paper covers Rock!"
};

const playerChoiceDisplay    = document.getElementById('playerChoice');
const computerChoiceDisplay  = document.getElementById('computerChoice');
const playerChoiceIcon       = document.getElementById('playerChoiceIcon');
const computerChoiceIcon     = document.getElementById('computerChoiceIcon');
const displayWinner          = document.getElementById('winner');
const resultDetail           = document.getElementById('result-detail');
const resultSection          = document.getElementById('result');
const computerScoreBoard     = document.getElementById('computerScore');
const playerScoreBoard       = document.getElementById('playerScore');
const drawScoreBoard         = document.getElementById('drawScore');
const roundCountDisplay      = document.getElementById('roundCount');
const resetBtn               = document.getElementById('resetBtn');

let playerScore   = 0;
let computerScore = 0;
let drawScore     = 0;
let roundCount    = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function animateIcon(el) {
    el.classList.remove('animate');
    void el.offsetWidth; // reflow to restart animation
    el.classList.add('animate');
}

function setResultState(state) {
    resultSection.classList.remove('win', 'lose', 'draw');
    if (state) resultSection.classList.add(state);
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    // Update choice displays
    animateIcon(playerChoiceIcon);
    animateIcon(computerChoiceIcon);
    playerChoiceIcon.textContent     = choiceEmojis[playerSelection];
    computerChoiceIcon.textContent   = choiceEmojis[computerSelection];
    playerChoiceDisplay.textContent  = playerSelection === 'Scissor' ? 'Scissors' : playerSelection;
    computerChoiceDisplay.textContent = computerSelection === 'Scissor' ? 'Scissors' : computerSelection;

    roundCount++;
    roundCountDisplay.textContent = roundCount;

    const key = `${playerSelection}-${computerSelection}`;
    const reverseKey = `${computerSelection}-${playerSelection}`;

    if (playerSelection === computerSelection) {
        displayWinner.textContent = "It's a Draw!";
        resultDetail.textContent  = "Great minds think alike.";
        setResultState('draw');
        drawScore++;
        drawScoreBoard.textContent = drawScore;
    } else if (winMessages[key]) {
        displayWinner.textContent = "You Win!";
        resultDetail.textContent  = winMessages[key];
        setResultState('win');
        playerScore++;
        playerScoreBoard.textContent = playerScore;
    } else {
        displayWinner.textContent = "Computer Wins!";
        resultDetail.textContent  = winMessages[reverseKey] || "";
        setResultState('lose');
        computerScore++;
        computerScoreBoard.textContent = computerScore;
    }
}

function resetGame() {
    playerScore   = 0;
    computerScore = 0;
    drawScore     = 0;
    roundCount    = 0;

    playerScoreBoard.textContent   = 0;
    computerScoreBoard.textContent = 0;
    drawScoreBoard.textContent     = 0;
    roundCountDisplay.textContent  = 0;

    playerChoiceDisplay.textContent   = 'Waiting...';
    computerChoiceDisplay.textContent = 'Waiting...';
    playerChoiceIcon.textContent      = '❓';
    computerChoiceIcon.textContent    = '❓';

    displayWinner.textContent = 'Make your move!';
    resultDetail.textContent  = '';
    setResultState(null);
}

document.querySelectorAll('#optionSelection button').forEach(btn => {
    btn.addEventListener('click', () => playRound(btn.id));
});

resetBtn.addEventListener('click', resetGame);
