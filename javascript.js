function getComputerChoice(choice) {

    if (Math.floor(Math.random(1) * choice)) {
        return "rock"
    }
    else {
        return "paper"
    }

}
console.log(getComputerChoice(3));

function rpsround() {

}



//Player Selection equals to three choies
//Computer selection should have a randomizer initially from the getcomputerchoice function and then the computer selection then gets that selection and inputs 
//it in and see if it wins according to logic
//Computer selection also equals to three choices and each choice eithers win, draw or losses

//Playerselection is laid out like this (All of this is Para1):
//If player picks rock return rock
//Else if player picks paper return paper
//Else if player picks scissors return scissors

//Computerselection is laid out like this (All of this is Para2):
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

//Should also keep in mind that choices are function with parameters, the game is actually a function itself it just has two parameters of the playerchoice and computer choice which are editable
//The parameters are edited with returns and which ones win
//Para1 + Para2 = "string winner" 






//Dead Code: return Math.floor(Math.random(3) * choice)
//}
//console.log(getComputerChoice(3));