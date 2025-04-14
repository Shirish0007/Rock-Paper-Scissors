const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let PlayerScore = 0;
let ComputerScore = 0;

function play(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()* 3)];

    let result = "";

    if(playerChoice === computerChoice){
        result = "IT IS A DRAW!!!"

    } else{
        switch(playerChoice){
            case "ROCK":
                result = (computerChoice === "SCISSORS") ? "YOU WIN!!!" : "YOU LOSE!!!";
                break;
      
            case "PAPER":
                result = (computerChoice === "ROCK") ? "YOU LOSE!!!" : "YOU WIN!!!";
                break;
       
            case "SCISSORS":
                result = (computerChoice === "PAPER") ? "YOU LOSE!!!" : "YOU WIN!!!";
                break;
            }
    }

    resultDisplay.classList.remove("greenText", "redText","drawText");
    playerScore.textContent = `PLAYER: ${playerChoice}`;
    computerScore.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;


    
    switch(result){
        case "YOU WIN!!!": 
            resultDisplay.classList.add("greenText");
            PlayerScore = PlayerScore + 1 ;
            playerScoreDisplay.textContent = PlayerScore;
           
            
            break;

        case "YOU LOSE!!!":
            resultDisplay.classList.add("redText");
            ComputerScore = ComputerScore + 1 ;
            computerScoreDisplay.textContent = ComputerScore;
            
            break;

        case "IT IS A DRAW!!!":
            resultDisplay.classList.add("drawText")
            break;

}
}


function resetGame(){
    PlayerScore = 0;
    ComputerScore = 0;

    playerScoreDisplay.textContent = PlayerScore;
    computerScoreDisplay.textContent = ComputerScore;
    
    resultDisplay.textContent = "";
}



