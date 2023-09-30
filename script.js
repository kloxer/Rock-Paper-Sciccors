
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0){
        return "rock";
    }
    if (choice == 1){
        return "paper";

    }
    if (choice == 2){
        return "sciccors";
    }

}
function playRound(playerSelection, computerSelection){
    
    if (playerSelection == "rock" && computerSelection == "paper")
    {
        return 0;
    }
    if (playerSelection == "paper" && computerSelection == "sciccors"){
        return 0;
    }
    if (playerSelection == "sciccors" && computerSelection == "rock")
    {
        return 0;
    }
    if (playerSelection == computerSelection)
    {
        return 1; 
    }
    else{
        return 2;
    }
}

function game(playerSelection){
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;

    for (let index = 0; index < 5; index++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter rock, paper or sciccors ").toLowerCase();
        console.log("your choice: " + playerSelection + " computerChoice: "+ computerSelection);

        let plays = playRound(playerSelection, computerSelection);
        if (plays == 0){
            computerWins = computerWins + 1;
        }
        else if (plays == 1){
            ties = ties + 1;
        }
        else{
            playerWins = playerWins + 1;
        }
        
    }

    return "playerWins = " + playerWins + " Computer Wins: " + computerWins + " Ties : " + ties;

}


console.log(game());