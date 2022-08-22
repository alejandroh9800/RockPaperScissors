const options = ["ROCK","PAPER","SCISSORS"]

let randomSelection = Math.floor(Math.random() * options.length-1)

  let playerTally = 0;
  let computerTally = 0;
  let rounds = 1;

function playRound(playerSelection,computerSelection){
  
  console.log("Player:" + playerSelection)
  console.log("Computer:" + computerSelection)
  
  if(playerSelection === computerSelection){
    console.log('Tie')
  }  
  else if(playerSelection === "ROCK"){                   
    if(computerSelection === "PAPER"){
    console.log('Computer Wins!')
     computerTally++
  }
    else if(computerSelection === "SCISSORS"){
      console.log("Player Wins!")
      playerTally++
    }
   }
  else if(playerSelection === "PAPER"){
    if(computerSelection === "ROCK"){
      console.log("Player Wins!")
      playerTally++
    }
    else if(computerSelection === "SCISSORS"){
      console.log("Computer Wins!")
      computerTally++
    }
  }
  else if(playerSelection === "SCISSORS"){
    if(computerSelection === "PAPER"){
      console.log("Player Wins!")
      playerTally++
    }
    else if(computerSelection === "ROCK"){
      console.log("Computer Wins!")
      computerTally++
    }
  }
  
  rounds++
  
    if(rounds === 6){
    if(playerTally > computerTally){
      console.log(`Player Won The Game With ${playerTally} points!`)
    }
    else if (playerTally < computerTally){
      console.log(`Computer Won The Game with ${computerTally} points! Sadge...`)
    }
    else if(playerTally === computerTally){
      console.log("It's a Tie, try again sucka")
    }
  }
  
}

 async function game(){
  for(i = 5; i > 0; i--){
    
  let computerSelection = options[randomSelection]

  let playerSelection = prompt("Enter: Rock, Paper, Scissors or Exit").toUpperCase()
   
    switch(playerSelection.charAt(0)){
      case "R":
      playerSelection = options[0]
       break;
      case "P":
       playerSelection = options[1]
        break;
      case "S":
        playerSelection = options[2]
        break;
      case "E":
        return 0;
      default:
        return 1;
    }
        
    playRound(playerSelection,computerSelection)
  }
}