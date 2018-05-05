$("#rock").click(playRock)
$("#scissors").click(playScissors)
$("#paper").click(playPaper)

var playerScore = 0;
var botScore = 0;

function playRock() {
    playOneRound("rock");
}
function playScissors() {
    playOneRound("scissors");
}
function playPaper() {
    playOneRound("paper");
}

function botMoveSelector() {
    var moves = ["rock", "paper", "scissors"];
    var randomIntegerFromZeroToTwo = Math.floor(Math.random() * 3);
    return moves[randomIntegerFromZeroToTwo];
}

function playOneRound(playerMove) {
    var botMove = botMoveSelector(); // rock, paper, scissors
    
    $("#status").html("<p>You played " + playerMove + ". The bot played " + botMove + ".</p>");

    var playerWinCondition = (playerMove === "rock" && botMove === "scissors") ||
                            (playerMove === "scissors" && botMove === "paper") ||
                            (playerMove === "paper" && botMove === "rock");

    var botWinCondition = (botMove === "rock" && playerMove === "scissors") ||
                        (botMove === "scissors" && playerMove === "paper") ||
                        (botMove === "paper" && playerMove === "rock");
    
    if (playerMove === botMove) {
        onTie();
    } else if (playerWinCondition) {
        onPlayerWin();
    } else if () {
        onBotWin(botWinCondition);
    }
}

function onPlayerWin() {
    appendResult("You win.");
    playerScore += 1;
    $("#humanScore").html(playerScore);
}

function onBotWin() {
    appendResult("You lose.");
    botScore += 1;
    $("#computerScore").html(botScore);
}

function onTie() {
    appendResult("You tied.");
}

function appendResult(resultText) {
    $("#status").append("<p>" + resultText + "</p>")
}
