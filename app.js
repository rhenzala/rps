function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissor"];
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
            return "com";
        } 
        else if (computer == "scissor"){
            return "player"
        }
    }
    else if (player == "paper"){
        if (computer == "scissor"){
            return "com";
        } 
        else if (computer == "rock"){
            return "player"
        }
    }
    else if (player == "scissor"){
        if (computer == "rock"){
            return "com";
        } 
        else if (computer == "paper"){
            return "player"
        }
    }
}

function playGame(){
    let playerScore = 0;
    let comScore = 0;
    for (let i = 0; i < 5; i++){
        const playerPick = prompt("Rock, Paper, Scissor");
        const comPick = getComputerChoice();
        let game = playRound(playerPick, comPick);
        console.log(`Round ${i+1}`);
        if (game == "tie"){
            console.log("It's a tie!");
        }
        else if (game == "player"){
            console.log(`You win! ${playerPick} beats ${comPick}`);
            playerScore += 1;
        }
        else if (game == "com"){
            console.log(`You lose! ${comPick} beats ${playerPick}`)
            comScore += 1;
        }
        else{
            console.log("ERROR: Could not play game properly.")
        }
    }
    console.log(`Player: ${playerScore} | Computer: ${comScore}`)
}

playGame();