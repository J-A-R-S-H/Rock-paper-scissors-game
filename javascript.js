const choices = ["rock", "paper", "scissors"]
const playerSelection = prompt("What is your choice");
const computerSelection = getComputerChoice()

function getComputerChoice() {
    let randomchoice = Math.floor(Math.random() * choices.length)
    return choices[randomchoice]
}
// console.log(getComputerChoice())

function rpsround(playerSelection, computerSelections) {

    let playerselectionlowercase = playerSelection.toLowerCase()

    if (playerselectionlowercase === "rock" && computerSelections === "rock") {
        return "the round is a draw"
    }
    else if (playerselectionlowercase === "paper" && computerSelections === "paper") {
        return "the round is a draw"
    }
    else if (playerselectionlowercase === "scissors" && computerSelections === "scissors") {
        return "the round is a draw"
    }
    else if (playerselectionlowercase === "rock" && computerSelections === "scissors") {
        return "the player's rock wins against scissors"
    }
    else if (playerselectionlowercase === "paper" && computerSelections === "rock") {
        return "the player's paper wins against rock"
    }
    else if (playerselectionlowercase === "scissors" && computerSelections === "paper") {
        return "the player's scissors wins against paper"
    }
    else if (playerselectionlowercase === "scissors" && computerSelections === "rock") {
        return "the compuetr's rock wins against scissors"
    }
    else if (playerselectionlowercase === "rock" && computerSelections === "paper") {
        return "the computer's paper wins against rock"
    }
    else if (playerselectionlowercase === "paper" && computerSelections === "scissors") {
        return "the computer's scissors wins against paper"
    }
    else {
        return "that's not an input"
    }
}


function game() {
    for (i = 0; i < 5; i++) {
        console.log(rpsround(playerSelection, computerSelection))
    }
}

game()

