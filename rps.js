//Creating rock, paper, and scissors buttons in the DOM.
const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");
//Set the buttons ID's so we can identify which is clicked
buttonRock.id = "rock";
buttonPaper.id = "paper";
buttonScissors.id = "scissors";
//Add text to the buttons
buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

//Gets the body
const body = document.body;

//Allocates the buttons as children to the body of the HTML.
body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissors);

//Gets all of the buttons 
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});

//Create a div which will show the results and scores.
const div = document.createElement("div");
body.appendChild(div);

//Create variables for holding the computer and player scores and display it as a header
const score = document.createElement("h3");
div.appendChild(score);

const gameText = document.createElement("p");
div.appendChild(gameText);

const winnerText = document.createElement("p");
div.appendChild(winnerText);

/*Javascript for the Rock Paper Scissors game*/
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let rand = Math.random();
    //We know that the returned number will be of float value between 0 and 1 (inclusive). To mimic the three values I will choose less than or equal to 1/3, 2/3, or 3/3 (one) as my conditions
    let choice = "";
    if(rand <= 1 / 3){
        choice = "rock";
    } else if(rand <= (1 / 3) * 2){
        choice = "paper";
    } else{
        choice = "scissors";
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
  //Resets the winning text if the player has played the game already.
  if(winnerText != ""){
    winnerText.textContent = "";
  }

  if(humanScore < 5 || computerScore < 5){
    if(humanChoice === "rock" && computerChoice ==="scissors"){
      humanScore++;
      gameText.textContent = humanChoice + " beats " + computerChoice + ". You win!";
    } else if(humanChoice === "paper" && computerChoice === "rock"){
      humanScore++;
      gameText.textContent = humanChoice + " beats " + computerChoice + ". You win!";
    } else if(humanChoice === "scissors" && computerChoice === "paper"){
      humanScore++;
      gameText.textContent = humanChoice + " beats " + computerChoice + ". You win!";
    } else if(humanChoice === computerChoice){
      gameText.textContent = "It's a tie!";
    } else{
      computerScore++;
      gameText.textContent = computerChoice + " beats " + humanChoice + ". You lose";
    }
  }

   // Check if the game is over
   if (humanScore === 5 || computerScore === 5) {
    gameOver(humanScore, computerScore);
  }

//I put the score down here so it'd trigger after each click
score.textContent = "Player Score: " + humanScore + " vs Computer Score: " + computerScore;
}

function gameOver(playerSc, computerSc){
  if(playerSc === 5){
    winnerText.textContent = "Congratulations, you have won!";
  } else{
    winnerText.textContent = "Unlucky, better luck next time";
  }
  humanScore = 0;
  computerScore = 0;
}

