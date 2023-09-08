document.addEventListener("DOMContentLoaded", () => {
    const rockButton = document.querySelector(".rock")
    const paperButton = document.querySelector(".paper")
    const scissorsButton = document.querySelector(".scissors")
    const outcomeDiv = document.querySelector(".outcome")
    let playerScore = 0
    let computerScore = 0
    const playerScoreSpan = document.querySelector(".player-score")
    const computerScoreSpan = document.querySelector(".computer-score")


    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        let randomchoice = Math.floor(Math.random() * choices.length);
        return choices[randomchoice];
    }

    function rpsround(playerSelection, computerSelections) {
        let playerselectionlowercase = playerSelection.toLowerCase()
        const p = document.createElement("p")

        if (playerselectionlowercase === computerSelections) {
            p.innerText = `You drew, you both picked ${playerSelection}`
        }
        else if (playerselectionlowercase === "rock" && computerSelections === "scissors") {
            p.innerText = `You won! Rock beats scissors`
            playerScore++
        }
        else if (playerselectionlowercase === "paper" && computerSelections === "rock") {
            p.innerText = `You won! Paper beats Rock`
            playerScore++
        }
        else if (playerselectionlowercase === "scissors" && computerSelections === "paper") {
            p.innerText = `You won! Scissors beats Paper`
            playerScore++
        }
        else if (playerselectionlowercase === "scissors" && computerSelections === "rock") {
            p.innerText = `You lost. Scissors loses to Rock`
            computerScore++
        }
        else if (playerselectionlowercase === "rock" && computerSelections === "paper") {
            p.innerText = `You lost. Rock loses to Paper`
            computerScore++
        }
        else if (playerselectionlowercase === "paper" && computerSelections === "scissors") {
            p.innerText = `You lost. Paper loses to Scissors`
            computerScore++
        }
        outcomeDiv.appendChild(p)
    }


    // function game() {
    //     for (i = 0; i < 5; i++) {
    //         console.log(rpsround(playerSelection, computerSelection))
    //     }
    // }

    // game()

    const winnerCheck = (playerScore, computerScore) => {
        const h2 = document.createElement("h2")
        if (playerScore === 3) {
            h2.classList.add("player-won")
            h2.innerText = `You won! The score was ${playerScore} to ${computerScore}.`
        }
        else if (computerScore === 3) {
            h2.classList.add("player-won")
            h2.innerText = `You lost. The score was ${playerScore} to ${computerScore}.`
        }
        outcomeDiv.append(h2)
    }

    const updateScores = (playerScore, computerScore) => {
        playerScoreSpan.innerText = `Player Score: ${playerScore}`
        computerScoreSpan.innerText = `Player Score: ${computerScore}`
    }

    rockButton.addEventListener("click", () => {
        const playerselection = "rock"
        const computerSelection = getComputerChoice()
        rpsround(playerselection, computerSelection)
        updateScores(playerScore, computerScore)
        winnerCheck(playerScore, computerScore)
    })

    paperButton.addEventListener("click", () => {
        const playerselection = "paper"
        const computerSelection = getComputerChoice()
        rpsround(playerselection, computerSelection)
        updateScores(playerScore, computerScore)
        winnerCheck(playerScore, computerScore)
    })

    scissorsButton.addEventListener("click", () => {
        const playerselection = "scissors"
        const computerSelection = getComputerChoice()
        rpsround(playerselection, computerSelection)
        updateScores(playerScore, computerScore)
        winnerCheck(playerScore, computerScore)
    })
})  