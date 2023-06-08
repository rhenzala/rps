function getComputerChoice(){
    let choices = ["r", "p", "s"];
    let pick = choices[Math.floor(Math.random()*choices.length)];
    return pick;
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player == computer){
        return "tie";
    }
    else if (player == "r"){
        if (computer == "p"){
            return "com";
        } 
        else if (computer == "s"){
            return "player"
        }
    }
    else if (player == "p"){
        if (computer == "s"){
            return "com";
        } 
        else if (computer == "r"){
            return "player"
        }
    }
    else if (player == "s"){
        if (computer == "r"){
            return "com";
        } 
        else if (computer == "p"){
            return "player"
        }
    }
}
const p = 'r';
const c = getComputerChoice();
console.log(playRound(p, c));

function playGame(){

}