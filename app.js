let playerScore = 0;
let comScore = 0;

const playerSelection = document.querySelectorAll('button');
const roundResult = document.querySelector('.round-result');
const gameResult = document.querySelector('.result')
const player = document.querySelector('.player-score');
const com = document.querySelector('.com-score')
const pChoice = document.querySelector('.player-choice');
const comChoice = document.querySelector('.com-choice')
const interface = document.querySelector('.interface');

const roundWinner = document.createElement('div');
const reset = document.createElement('button');
roundResult.appendChild(roundWinner);


function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let pick = choices[Math.floor(Math.random()*choices.length)];
    return pick;
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    displayPicks(playerSelection, computerSelection);

    if (player == computer){
        roundWinner.textContent = "It's a tie!"
    }
    else if (player == "rock"){
        if (computer == "paper"){
            roundWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            comScore += 1;
        } 
        else if (computer == "scissor"){
            roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
        }
    }
    else if (player == "paper"){
        if (computer == "scissor"){
            roundWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            comScore += 1;
        } 
        else if (computer == "rock"){
            roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
        }
    }
    else if (player == "scissor"){
        if (computer == "rock"){
            roundWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            comScore += 1;
        } 
        else if (computer == "paper"){
            roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
        }
    }
}

function displayScore(p, c){
    player.textContent = `${p}`;
    com.textContent = `${c}`;
}

function displayPicks(p, c){
    pChoice.textContent = `${p}`;
    comChoice.textContent = `${c}`;
}

function displayGameWinner(p, c){
    if (p === 5){
        interface.textContent = "";
        gameResult.textContent = `Player won the game! You scored: ${p} of 5`
        reset.textContent = "RETRY"
        gameResult.appendChild(reset);
    }
    else if (c === 5){
        interface.textContent = "";
        gameResult.textContent = `Computer won the game! The computer scored: ${c} of 5`
        reset.textContent = "RETRY"
        gameResult.appendChild(reset);
    }
}

playerSelection.forEach((pick) => {
    pick.addEventListener('click', () => {
        playRound(pick.id, getComputerChoice());
        displayScore(playerScore, comScore);
        displayGameWinner(playerScore, comScore);
    });
});

reset.addEventListener('click', () => {
    location.reload();
})