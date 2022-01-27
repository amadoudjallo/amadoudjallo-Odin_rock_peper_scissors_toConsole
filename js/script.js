//Global variable convert in integer that keeps score and reports a winner or loser at the end.
let humanScore = parseInt(0)
let computerScore = parseInt(0)

// function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
let computerPlay = () => {
  let computerMove = Math.floor(Math.random() * 3 + 1)
  if (computerMove === 1) {
    return 'rock'
  } else if (computerMove === 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}


// function called humanPlayer that will  get either ‘Rock’, ‘Paper’ or ‘Scissors’ from user imput then covert the input to lower case and return the result, i'm using the browser consol if the user clik or cancel its return false and a message will be console log.
const humanPlayer = () => {
  let humanMove = prompt('Play now: Rock, Peper or Scissors!')

  if (humanMove === null) {
    return false
  } else if (humanMove === '') {
    return false
  } else {
    return humanMove.toLowerCase()
  }
}

//Write a function that plays a single round of Rock Paper Scissors
//The function should take two parameters: playerSelectSion and computerSelection
//Then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock, the function only working if human player(layerSelection) are false"
function playerRound(playerSelection, computerSelection) {
  const win = `You Win! ${playerSelection} beats ${computerSelection} `
  const lose = `You Lose! ${playerSelection} can't beats ${computerSelection}`
  const tie = `Tie!`

  if (playerSelection !== false) {
    if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
        return tie
      } else if (computerSelection === 'paper') {
        computerScore++
        return lose
      } else {
        humanScore++
        return win
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'paper') {
        return tie
      } else if (computerSelection === 'scissor') {
        computerScore++
        return lose
      } else {
        humanScore++
        return win
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'scissors') {
        return tie
      } else if (computerSelection === 'rock') {
        computerScore++
        return lose
      } else if (computerSelection === 'paper') {
        humanScore++
        return win
      }
    } else {
      return 'You sould only play: **rock paper or scissors**'
    }
  } else {
    return 'See you next time!'
  }
}


// NEW function called game().
//Use the previous function inside of this one to play a 5 round game using a for loop
const game = () => {
  for (let i = 1; i <= 5; i++) {
    let computerSelection = computerPlay()
    let playerSelection = humanPlayer()
    let result = playerRound(playerSelection, computerSelection)
    console.log(result)
  }

  console.log('Human score are:' + humanScore)
  console.log('Computer score are:' + computerScore)
}

game()