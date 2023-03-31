const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomchoice = Math.floor(Math.random() * choices.length)
    return choices[randomchoice]
}
console.log(getComputerChoice())

function rpsround(playerSelection, computerSelections) {
    if (playerSelection === "rock" && computerSelections === "rock") {
        return "the round is a draw"
    }
    else if (playerSelection === "paper" && computerSelections === "paper") {
        return "the round is a draw"
    }
    else if (playerSelection === "scissors" && computerSelections === "scissors") {
        return "the round is a draw"
    }
    else if (playerSelection === "rock" && computerSelections === "scissors") {
        return "the player's rock wins against scissors"
    }
    else if (playerSelection === "paper" && computerSelections === "rock") {
        return "the player's paper wins against rock"
    }
    else if (playerSelection === "scissors" && computerSelections === "paper") {
        return "the player's scissors wins against paper"
    }
    else if (playerSelection === "scissors" && computerSelections === "rock") {
        return "the compuetr's rock wins against scissors"
    }
    else if (playerSelection === "rock" && computerSelections === "paper") {
        return "the computer's paper wins against rock"
    }
    else {
        return "the computer's scissors wins against paper"
    }

}

console.log(rpsround("rock", "rock"))