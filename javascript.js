function getComputerChoice(optstring) {
    return optstring + " was picked"
}

console.log(getComputerChoice("rock"))




//Player Selection equals to three choies
//Computer selection also equals to three choices and each choice eithers win, draw or losses

//Playerselection is laid out like this (All of this is Para1):
//If player picks rock return rock
//Else if player picks paper return paper
//Else if player picks scissors return scissors

//Computerselection is laid out like this (All of this is Para1):
//If computer picks rock return rock
//Else if computer picks paper return paper
//Else if computer picks scissors return scissors

//Logic:
//If Playerchoice picked rocked and Computerchoice picked scissors = Playerchoice/Rock wins
//If Playerchoice picked scissors and Computerchoice picked paper = Playerchoice/scissors wins
//If Playerchoice picked paper and Computerchoice picked rock = Playerchoice/paper wins
//If Computerchoice picked rocked and Playerchoice picked scissors = Computerchoice/Rock wins
//If Computerchoice picked scissors and Playerchoice picked paper = Computerchoice/scissors wins
//If Computerchoice picked paper and Playerchoice picked rock = Computerchoice/paper wins

//Para1 + Para2 = "string winner"