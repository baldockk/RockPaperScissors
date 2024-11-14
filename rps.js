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

function getHumanChoice(){
    //Prevents any casing issues such as a user entering Rock or ROcK
    let userInput = prompt("Please enter either paper, scissors or rock").toLowerCase();
    //Use a loop that will always happen once, to allow the if statement to be boken out of when the user inputs a correct value (rock, paper or scissors)
    for(let i = 0; i <= 1; i++){
    if(userInput != "rock" && userInput != "scissors" && userInput != "paper"){
        let newInput = prompt("You entered something that wasn't rock, paper or scissors. Please try again!");
        if(newInput === "rock" || newInput === "scissors" || newInput === "paper"){
            userInput = newInput;
            break;
        }
    } 
}
return userInput;
}

function playRound(humanChoice, computerChoice){
  if(humanChoice === "rock" && computerChoice ==="scissors"){
    humanScore++;
    return humanChoice + " beats " + computerChoice + ". You win!";
  } else if(humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    return humanChoice + " beats " + computerChoice + ". You win!";
  } else if(humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    return humanChoice + " beats " + computerChoice + ". You win!";
  } else if(humanChoice === computerChoice){
    return "It's a tie!";
  } else{
    computerScore++;
    return computerChoice + " beats " + humanChoice + ". You lose";
  }
}

function playGame(){
    humanScore = 0;
    computerScore = 0;

    for(let i = 1; i <= 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("Computers score is: " + computerScore + ", your score is: " + humanScore);
    }   

    if(humanScore > computerScore){
        console.log("Congratulations, you have won the game!");
    } else if( humanScore === computerScore){
        console.log("This game was a tie!");
    } else {
        console.log("Unlucky, you lost the game");
    }
}

playGame();