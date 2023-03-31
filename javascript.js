const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let randomchoice = Math.floor(Math.random() * choices.length)
    return choices[randomchoice]
}
console.log(getComputerChoice())

function rpsround(playerSelection, computerSelections) {
    if (playerSelection === "rock") {
        return choices[0]
    }
    else if (playerSelection === "paper") {
        return choices[1]
    }
    else if (playerSelection === "scissors") {
        return choices[2]
    }

    if (computerSelections === "rock") {
        return choices[0]
    }
    else if (computerSelections === "paper") {
        return choices[1]
    }
    else if (computerSelections === "scissors") {
        return choices[2]
    }


}

console.log(rpsround("scissors"))