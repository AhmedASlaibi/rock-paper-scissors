// We define userScore and computerScore to '0' as default which will be stored for use withing the scoring function
// Value will be reset to '0' when browser page is refreshed
let userScore = 0;
let computerScore = 0;

// We simply connect the divs through their IDs to their script elements
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// This function generates a random number between 0 & 1 using math.random loop through an array and return that value then multiplies it by 3 and finally rounding it down
// This generated number which cant go over 3, decides which of 3 choices the computer picks (Rock, Paper, or Scissors)
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// 
// Converts lowercase and replaces it with titlecase
function convertToWord(letter) {
    if (letter === 'r') return "Rock!";
    if (letter === 'p') return "Paper!";
    return "Scissors";
}

// This is the player win condition function that's executed everytime the player clicks one of the 3 choices that leads to computerChoice being the losing one
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
}

// This is the player lose condition function that's executed everytime the player clicks one of the 3 choices that leads to computerChoice being the winning one
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost...`;
}

// This is the draw condition function that's executed everytime the player clicks one of the 3 choices that leads to computerChoice chosing the same as the player
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a Draw!`;
}

// Win, lose, and draw functions are based off on what happens in this function
// The main function behind the game's Rock Paper Scissors logic which respond's to the player's choice (aka click) with a random choice simulating the computer's choice (since there's no AI player present)
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
        break;
    }
    console.log("user choice =>" + userChoice);
    console.log("computer choice =>" + computerChoice);
}

// This function adds an eventlistener to rock, paper, scissors html elements
// Once those elements are clicked a function tying to the game() function is executed 
function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();