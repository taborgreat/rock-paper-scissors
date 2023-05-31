let score = 0;
let computerScore = 0;

let narratorText = document.getElementById("narration");
let logic = document.getElementById("logic");



let winningSayings = [
    "Bazinga!",
    "Wowzer, I can't beleive you actually won!",
    "Holy smokes... beat me again!",
    "Win one more time and I kill your whole family.",
    "Was that luck?",
    "You are better than last time, that is for sure...",
    "Ok, ok. Let's play again.",
    "Winner, winner, chicken dinner.",
    "You may have won but you're still ugly.",
    "What a spectacular display of exquisite gesturing skills!",
    "You are a winner!"
]


let loserSayings = [
    "Haha, suck my cock!",
    "You are a fat stinky loser.",
    "Momma calls. She says it's time for your diaper change.",
    "Try again, and this time choose the right one.",
    "How many times in a row are you going to lose?",
    "Just give up.",
    "The odds dont seem to be in your favor.",
    "Poopy stinky butt, you are.",
    "What an unfortunate display of terrible skill.",
    "You are very unlucky.",
    "Suck on deez nuts"
]



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
    narratorText.innerHTML = narratorChoice(winningSayings);
    logic.prepend(won);
}

function computerWon(){
    computerScore += 1;
    let lost = document.createElement("h2");
    lost.style.backgroundColor = "red";
    lost.textContent = "You lost and the score is now " + score + " to " + computerScore;
    narratorText.innerHTML = narratorChoice(loserSayings);
    logic.prepend(lost);
}


function draw(){
    let draw = document.createElement("h2");
    draw.style.backgroundColor = "grey";
    draw.textContent = "That was a draw!";
    narratorText.innerHTML = "Draw. Choose again."

    logic.prepend(draw);
}


function computerChoice(){
    let myArray = ["rock", "paper", "scissors"]
    let choice = myArray[Math.floor(Math.random()*myArray.length)];
    console.log("the computer chose " + choice);
    return choice;
}

function narratorChoice(arrOfChoices){
    let choice = arrOfChoices[Math.floor(Math.random()*arrOfChoices.length)];
    return choice;
}


let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors")
let paperButton = document.getElementById("paper");

rockButton.addEventListener("click", () => playRound("rock", computerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", computerChoice()));
paperButton.addEventListener("click", () => playRound("paper", computerChoice()));