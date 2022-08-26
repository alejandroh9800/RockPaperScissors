const options = ["ROCK", "PAPER", "SCISSORS"];

let roundWinner = document.querySelector(".roundWinner");

let playerTally = 0;
let computerTally = 0;
let rounds = 1;

let playerTallyContainer = document.querySelector(".playerScore");
let computerTallyContainer = document.querySelector(".computerScore");
let round = document.querySelector(".round");
let comImage = document.getElementById("computer");
let playerImage = document.getElementById("player");
let comChoice = document.querySelector(".computerChoice");
let playerChoice = document.querySelector(".playerChoice");
let restartMessage = document.querySelector(".restartMessage");

function playRound(playerSelection, computerSelection) {
  console.log("Player:" + playerSelection);
  console.log("Computer:" + computerSelection);

  setTimeout(() => {
    roundWinner.visibility = "visible";

    if (playerSelection === computerSelection) {
      console.log("Tie");
      roundWinner.textContent = "Tie";
      comImage.style.filter = "brightness(0.3)";
      playerImage.style.filter = "brightness(0.3)";
    } else if (playerSelection === "ROCK") {
      if (computerSelection === "PAPER") {
        console.log("Computer Wins!");
        comImage.style.filter = "brightness(1)";
        roundWinner.textContent = "COMPUTER WINS!";
        setTimeout(() => {
          playerImage.style.filter = "brightness(0.3)";
        }, 150);

        computerTally++;
      } else if (computerSelection === "SCISSORS") {
        playerImage.style.filter = "brightness(1)";
        console.log("Player Wins!");
        roundWinner.textContent = "PLAYER WINS!";
        setTimeout(() => {
          comImage.style.filter = "brightness(0.3)";
        }, 150);
        playerTally++;
      }
    } else if (playerSelection === "PAPER") {
      if (computerSelection === "ROCK") {
        playerImage.style.filter = "brightness(1)";
        console.log("Player Wins!");
        roundWinner.textContent = "PLAYER WINS!";
        setTimeout(() => {
          comImage.style.filter = "brightness(0.3)";
        }, 150);
        playerTally++;
      } else if (computerSelection === "SCISSORS") {
        console.log("Computer Wins!");
        comImage.style.filter = "brightness(1)";
        roundWinner.textContent = "COMPUTER WINS!";
        setTimeout(() => {
          playerImage.style.filter = "brightness(0.3)";
        }, 150);
        computerTally++;
      }
    } else if (playerSelection === "SCISSORS") {
      if (computerSelection === "PAPER") {
        playerImage.style.filter = "brightness(1)";
        console.log("Player Wins!");
        roundWinner.textContent = "PLAYER WINS!";
        setTimeout(() => {
          comImage.style.filter = "brightness(0.3)";
        }, 150);
        playerTally++;
      } else if (computerSelection === "ROCK") {
        console.log("Computer Wins!");
        comImage.style.filter = "brightness(1)";
        roundWinner.textContent = "COMPUTER WINS!";
        setTimeout(() => {
          playerImage.style.filter = "brightness(0.3)";
        }, 150);
        computerTally++;
      }
    } else {
      playerImage.style.filter = "brightness(1)";
      comImage.style.filter = "brightness(1)";
    }

    playerTallyContainer.textContent = playerTally;
    computerTallyContainer.textContent = computerTally;
    round.textContent = `ROUND: ${rounds} OF 5`;
    rounds++;

    // let winnerText = document.querySelector(".winnerText");

    if (rounds === 6) {
      if (playerTally > computerTally) {
        //winnerText.textContent = `Player Won The Game With ${playerTally} points!`;
        setTimeout(() => {
          alert(`Player Won The Game!`);
        }, 500);
        console.log(`Player Won The Game With ${playerTally} points!`);
      } else if (playerTally < computerTally) {
        //winnerText.textContent = `Computer Won The Game With ${computerTally} points!`;
        setTimeout(() => {
          alert(`Computer Won The Game!`);
        }, 500);

        console.log(
          `Computer Won The Game with ${computerTally} points! Sadge...`
        );
      } else if (playerTally === computerTally) {
        //winnerText.textContent = `It's A Tie, Try Again Sucka`;
        setTimeout(() => {
          alert("It's A Draw Try Again Sucka.");
        }, 500);

        console.log("It's a Tie, try again sucka");
      }

      //restartMessage.style.display = "block !important";

      rounds = 1;
      playerTally = 0;
      computerTally = 0;
      /*
      setTimeout(() => {
        winnerText.textContent = "";
      }, 2000);
      */
    }

    if (round.innerHTML.includes("ROUND: 5 OF 5")) {
      setTimeout(() => {
        restartMessage.style.visibility = "visible";
      }, 3000);
    }

    console.log(round.textContent);
  }, 500);
}

function game() {
  let playButton = document.querySelector(".playButton");

  let playerSelection = document.querySelectorAll(".options");

  let computerImage = document.getElementById("computer");

  let computerContainer = document.querySelector(".computerChoice");

  let playerContainer = document.querySelector(".playerChoice");

  let vs = document.querySelector(".vs");

  let scoreBoard = document.querySelector(".scoreboard_Container");

  vs.style.visibility = "visible";

  scoreBoard.style.visibility = "visible";

  playerContainer.style.visibility = "visible";

  computerContainer.style.visibility = "visible";

  computerImage.style.visibility = "visible";

  playButton.style.display = "none";

  playerSelection.forEach((option) => {
    option.style.visibility = "visible";

    option.addEventListener("click", () => {
      computerImage.src =
        "../assets/toppng.com-and-blank-effect-transparent-600x458.png";
      setTimeout(() => {
        roundWinner.visibility = "hidden";
      }, 1000);
      restartMessage.style.visibility = "hidden";

      playerImage.style.filter = "brightness(1)";
      comImage.style.filter = "brightness(1)";

      playerChoice = option.id;
      let randomSelection = Math.floor(Math.random() * options.length);
      console.log(randomSelection);
      playerImage.src = option.src;

      let computerSelection = options[randomSelection];

      setTimeout(() => {
        switch (randomSelection) {
          case 0:
            computerImage.src = "../assets/Rock.png";
            break;
          case 1:
            computerImage.src = "../assets/Paper.jpg";
            break;
          case 2:
            computerImage.src = "../assets/Scissors.jpg";
            break;
        }
      }, 500);

      switch (playerChoice) {
        case "rock":
          playerSelection = options[0];
          break;
        case "paper":
          playerSelection = options[1];
          break;
        case "scissors":
          playerSelection = options[2];
          break;
      }

      setTimeout(() => {
        playRound(playerChoice, computerSelection);
      }, 150);
    });
  });
}
