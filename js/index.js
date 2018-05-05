$("#rock").click(playRock)
$("#scissors").click(playScissors)
$("#paper").click(playPaper)

var playerScore = 0;
var botScore = 0;

function playRock() {
    checkWhoWins("rock");
}
function playScissors() {
    checkWhoWins("scissors");
}
function playPaper() {
    checkWhoWins("paper");
}

function botMoveSelector() {
    var moves = ["rock", "paper", "scissors"];
    var randomIntegerFromZeroToTwo = Math.floor(Math.random() * 3);
    return moves[randomIntegerFromZeroToTwo];
}

function checkWhoWins(playerMove) {
    
    var botMove = botMoveSelector(); // rock, paper, scissors
    
    $("#status").html("<p>You played " + playerMove + ". The bot played " + botMove + ".</p>");
    
    if (playerMove === "rock") {
        if (botMove === "rock") {
            $("#status").append("<p>You tied.</p>")
        } else if (botMove === "scissors") {
            $("#status").append("<p>You win.</p>")
            playerScore += 1;
            $("#humanScore").html(playerScore);
        } else if (botMove === "paper") {
            $("#status").append("<p>You lose.</p>")
            botScore += 1;
            $("#computerScore").html(botScore);
        }
    } else if (playerMove === "scissors") {
        if (botMove === "scissors") {
            $("#status").append("<p>You tied.</p>")
        } else if (botMove === "paper") {
            $("#status").append("<p>You win.</p>")
            playerScore += 1;
            $("#humanScore").html(playerScore);
        } else if (botMove === "rock") {
            $("#status").append("<p>You lose.</p>")
            botScore += 1;
            $("#computerScore").html(botScore);
        }
    } else if (playerMove === "paper") {
        if (botMove === "paper") {
            $("#status").append("<p>You tied.</p>")
        } else if (botMove === "rock") {
            $("#status").append("<p>You win.</p>")
            playerScore += 1;
            $("#humanScore").html(playerScore);
        } else if (botMove === "scissors") {
            $("#status").append("<p>You lose.</p>")
            botScore += 1;
            $("#computerScore").html(botScore);
        }
    }

}