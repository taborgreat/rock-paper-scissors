let score = 0;
let computerScore = 0;
let logic = document.getElementById("logic");

function playRound(player, opp){

    if(player == opp){
        return draw();
    }

    if(player == "rock"){
        if(opp == "scissors") return playerWon();
        if(opp == "paper") return computerWon();
    }
    if(player == "scissors"){
        if(opp == "paper") return playerWon();
        if(opp == "rock") return computerWon();
    }
    if(player == "paper"){
        if(opp == "rock") return playerWon();
        if(opp == "scissors") return computerWon();
    }
}


function playerWon(){
    score += 1;
    let won = document.createElement("h2");
    won.style.backgroundColor = "greenyellow";
    won.textContent = "You won and the score is now " + score + " to " + computerScore;
    logic.prepend(won);
}

function computerWon(){
    computerScore += 1;
    let lost = document.createElement("h2");
    lost.style.backgroundColor = "red";
    lost.textContent = "You lost and the score is now " + score + " to " + computerScore;
    logic.prepend(lost);
}


function draw(){
    let draw = document.createElement("h2");
    draw.style.backgroundColor = "grey";
    draw.textContent = "That was a draw!";
    logic.prepend(draw);
}


function computerChoice(){
    let myArray = ["rock", "paper", "scissors"]
    let choice = myArray[Math.floor(Math.random()*myArray.length)];
    console.log("the computer chose " + choice);
    return choice;
}


let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors")
let paperButton = document.getElementById("paper");

rockButton.addEventListener("click", () => playRound("rock", computerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", computerChoice()));
paperButton.addEventListener("click", () => playRound("paper", computerChoice()));