
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0){
        return "rock";
    }
    if (choice == 1){
        return "paper";

    }
    if (choice == 2){
        return "scissors";
    }

}
function playRound(playerSelection, computerSelection){
    
    if (playerSelection == "rock" && computerSelection == "paper")
    {
        return 0;
    }
    if (playerSelection == "paper" && computerSelection == "scissors"){
        return 0;
    }
    if (playerSelection == "scissors" && computerSelection == "rock")
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
let playerWins = 0;
let computerWins = 0;
let ties = 0;

function winner(){

    const resultupdate = document.querySelector("#result");
    if (playerWins == 5){
        resultupdate.textContent = "Player wins best out of 5!";

    }
    else{
        resultupdate.textContent = "Computer wins best out of 5!";
    }
    console.log("we have a winner, max 5 games");
    playerWins =0;
    computerWins = 0;
    ties = 0;

}

function game(playerSelection){
    const resultupdate = document.querySelector("#result");





        let computerSelection = getComputerChoice();
        const computerchoiceupdate = document.querySelector("#computerAnswer");
        computerchoiceupdate.textContent = computerSelection;
        console.log("your choice: " + playerSelection + " computerChoice: "+ computerSelection);

        let plays = playRound(playerSelection, computerSelection);
        const computerupdate = document.querySelector("#computer");
        const playerupdate = document.querySelector("#userscore");

        if (plays == 0){
            computerWins = computerWins + 1;
            computerupdate.textContent = computerWins;

        }
        else if (plays == 1){

            ties = ties + 1;
        }
        else{
            playerWins = playerWins + 1;
            playerupdate.textContent = playerWins;
        }
        
        if ((playerWins  == 5) || (computerWins == 5)){
            winner();
            computerupdate.textContent = computerWins;
            playerupdate.textContent = playerWins;


        }
        else{
            resultupdate.textContent= "Ties : " + ties;

        }



}


const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      console.log(button.id);
      let choice = "";

      if (button.id == "Rock")
      {
        choice = "rock";
      }
      else if (button.id == "Paper"){
        choice = "paper";
      }
      else{
        choice = "scissors";
      }


      console.log(game(choice));





    });
  });