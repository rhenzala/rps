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
    displayPicks(playerSelection, computerSelection);

    if (playerSelection === computerSelection){
        roundWinner.textContent = "It's a tie!"
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            roundWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            comScore += 1;
        } 
        else if (computerSelection === "scissor"){
            roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "scissor"){
            roundWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            comScore += 1;
        } 
        else if (computerSelection === "rock"){
            roundWinner.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
        }
    }
    else if (playerSelection === "scissor"){
        if (computerSelection === "rock"){
            roundWinner.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            comScore += 1;
        } 
        else if (computerSelection === "paper"){
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
    p = p.toUpperCase();
    c = c.toUpperCase();
    pChoice.textContent = `${p}`;
    comChoice.textContent = `${c}`;
}

// it clears the game interface so that the game will stop once the winner has been decided
function displayGameWinner(p, c){
    if (p === 5){
        interface.textContent = "";
        gameResult.textContent = `You won the game! You scored: ${p} of 5`
        reset.textContent = "RETRY"
        gameResult.appendChild(reset);
    }
    else if (c === 5){
        interface.textContent = "";
        gameResult.textContent = `You lose the game. The computer scored: ${c} of 5`
        reset.textContent = "RETRY"
        gameResult.appendChild(reset);
    }
}

// to play the game when the user clicks on any rps button
playerSelection.forEach((pick) => {
    pick.addEventListener('click', () => {
        playRound(pick.id, getComputerChoice());
        displayScore(playerScore, comScore);
        displayGameWinner(playerScore, comScore);
    });
});

// to refresh the page if the user wants to play again
reset.addEventListener('click', () => {
    location.reload();
})