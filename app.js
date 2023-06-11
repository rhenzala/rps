const playerSelection = document.querySelectorAll('button');

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
/** 
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
    scoreChecker(playerScore, comScore);
}
**/

function scoreChecker(p, c){
    //console.log(`Player: ${p} | Computer: ${c}`);
    if (p == c){
        console.log("The game is draw.")
    }
    else if (p > c){
        console.log("Player won the game!")
    }
    else{
        console.log("Computer won the game!")
    }
}

//playGame();

playerSelection.forEach((pick) => {
    pick.addEventListener('click', () => {
        console.log(pick.id);
        //console.log(pick.value)
        let game = playRound(pick.id, getComputerChoice());
        console.log(game)
    });
    
});