function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    return choice;
}


function findWinner(playerSelection) {
    let UI = document.getElementById("UI");
    let computerSelection = getComputerChoice();
    let compChoice = document.getElementById("compChoice");
    switch (computerSelection) {
        case 0:
            compChoice.innerHTML = "Computer selects Rock";
            break;
        case 1:
            compChoice.innerHTML = "Computer selects Paper";
            break;
        case 2:
            compChoice.innerHTML = "Computer selects Scissors";
            break;
        default:
            console.log("something went wront in the computer selection...");
    }
    switch (playerSelection) {
        case 0:
            if (computerSelection == 1)
                UI.innerHTML = "The computer wins!";
            else if (computerSelection == 2)
                UI.innerHTML = "You win!";
            else
                UI.innerHTML = "It's a tie!";
            break;
        case 1:
            if (computerSelection == 2)
                UI.innerHTML = "The computer wins!";
            else if (computerSelection == 0)
                UI.innerHTML = "You win!";
            else
                UI.innerHTML = "It's a tie!";
            break;
        case 2:
            if (computerSelection == 0)
                UI.innerHTML = "The computer wins!";
            else if (computerSelection == 1)
                UI.innerHTML = "You win!";
            else
                UI.innerHTML = "It's a tie!";
            break;
        default:
            console.log("Theres been a fucky wucky...");
    }
}

const rock = document.querySelector('#Rock');
rock.addEventListener('click', () => findWinner(0));
const paper = document.querySelector('#Paper');
paper.addEventListener('click', () => findWinner(1));
const scissors = document.querySelector('#Scissors');
scissors.addEventListener('click', () => findWinner(2));