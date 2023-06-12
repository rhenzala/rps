const playerSelection = document.querySelectorAll('button');
const result = document.querySelector('.result');
const player = document.querySelector('.player-score');
const com = document.querySelector('.com-score')

const roundWinner = document.createElement('div');
const gameWinner = document.createElement('div');
result.appendChild(roundWinner);
result.appendChild(gameWinner);

function getComputerChoice(){
    let choices = ["rock", "paper", "scissor"];
    let pick = choices[Math.floor(Math.random()*choices.length)];
    return pick;
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer){
        return "tie";
    }
    else if (player == "rock"){
        if (computer == "paper"){
            return "lose";
        } 
        else if (computer == "scissor"){
            return "win"
        }
    }
    else if (player == "paper"){
        if (computer == "scissor"){
            return "lose";
        } 
        else if (computer == "rock"){
            return "win"
        }
    }
    else if (player == "scissor"){
        if (computer == "rock"){
            return "lose";
        } 
        else if (computer == "paper"){
            return "win"
        }
    }
}

function playGame(playerPick){
    let comPick = getComputerChoice();
    let game = playRound(playerPick, comPick);
    let playerScore = 0;
    let comScore = 0;
    if (game == "tie"){
        roundWinner.textContent = "It's a tie!"
    }
    else if (game == "win"){
        roundWinner.textContent = `You win! ${playerPick} beats ${comPick}`;
        playerScore += 1;
    }
    else if (game == "lose"){
        roundWinner.textContent = `You lose! ${comPick} beats ${playerPick}`;
        comScore += 1;
    }
    else{
        roundWinner.textContent = "ERROR";
    }
}


function displayGameWinner(p, c){
    //console.log(`Player: ${p} | Computer: ${c}`);
    if (p == 5){
        result.textContent = "Player won the game!"
    }
    else if (c == 5){
        result.textContent = "Computer won the game!"
    }
}

playerSelection.forEach((pick) => {
    pick.addEventListener('click', () => {
        playGame(pick.id);
    });
});