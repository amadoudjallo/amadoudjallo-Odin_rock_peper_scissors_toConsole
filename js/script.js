let humanScore = parseInt(0);
let computerScore = parseInt(0);
let round = parseInt(0);
let finalResult = '';
let mainHeader = document.querySelector('.header');
const human_score = document.querySelector('.human_score');
const computer_score = document.querySelector('.computer_score');
const round_number = document.querySelector('.round_number');
const disply_image_conp = document.querySelector('.computer_aria');
const resul_holder = document.querySelector('.horlder');
const rock_img = document.querySelector('#r');
const paper_img = document.querySelector('#p');
const scissors_img = document.querySelector('#s');
const player_selection = document.querySelectorAll('#r,#p,#s');
const holder = document.querySelector('.horlder');
const result_LWT = document.querySelector('.jsHolder');
// for result from here
let statut = document.querySelector('.statut');
let container = document.querySelector('.container#result');
let paty = document.querySelector('#removed');
let rsult = document.querySelector('.result_page');
final_human_score = document.querySelector('.human');
final_computer_score = document.querySelector('.computer');

let endGame = function () {
  statut.textContent = resultFinal;
  final_human_score.textContent = humanScore;
  final_computer_score.textContent = computerScore;
  paty.style.cssText = 'display:none';
  rsult.style.cssText = 'display:flex';
}

// get the Winner,los
function win(userChoice, computerChoice) {
  let w = `You Win!...${userChoice} beats ${computerChoice}🔥  `;

  result_LWT.textContent = w;
  result_LWT.classList.add('placeholde_result');
  result_LWT.style.cssText = 'color: #91C483;box-shadow: 0 0 0.6rem #91C483; ';


  humanScore++;
  human_score.textContent = humanScore;
  setTimeout(() => (result_LWT.textContent = ' '), 800);
  if (humanScore === 5) {
    resultFinal = 'You Winn🔥';
    endGame();
  }
}

function loose(userChoice, computerChoice) {
  let l = `You Lose!...${userChoice} can't beats ${computerChoice}😈 `;

  result_LWT.textContent = l;
  result_LWT.classList.add('placeholde_result');
  result_LWT.style.cssText = 'color: #FF6464; box-shadow: 0 0 0.6rem #FF6464; ';
  computerScore++;
  computer_score.textContent = computerScore;
  setTimeout(() => (result_LWT.textContent = ' '), 800);

  if (computerScore === 5) {
    resultFinal = 'You Loose😈 ';
    endGame();
  }
}

function tie(userChoice, computerChoice) {
  let t = `Tie!`;

  result_LWT.textContent = t;
  result_LWT.classList.add('placeholde_result');
  result_LWT.style.cssText = 'color: #FFC600; box-shadow: 0 0 0.6rem #FFC600; ';
  setTimeout(() => (result_LWT.textContent = ' '), 800);
}

// allpw to get rps selection for computer
let computerMoove = function () {
  const choices = ['rock', 'paper', 'scissors'];
  const computerRandom = Math.floor(Math.random() * 3);
  let FinalChoice = choices[computerRandom];
  return FinalChoice;
}
// alow to get rps slection on the ui
let playerMoove = function () {
  rock_img.addEventListener('click', function () {
    round++;
    round_number.textContent = round;
    playerRound('rock');
  })

  paper_img.addEventListener('click', () => {
    round++;
    round_number.textContent = round;
    playerRound('paper');
  })

  scissors_img.addEventListener('click', () => {
    round++;
    round_number.textContent = round;
    playerRound('scissors');
  })
}

// both cumputer and player will be tested
let playerRound = function (userChoice) {
  const computerChoice = computerMoove();
  if (userChoice === 'rock') {
    if (computerChoice === 'rock') tie(userChoice, computerChoice);
    if (computerChoice === 'paper') loose(userChoice, computerChoice);
    if (computerChoice === 'scissors') win(userChoice, computerChoice);
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'paper') tie(userChoice, computerChoice);
    if (computerChoice === 'scissors') loose(userChoice, computerChoice);
    if (computerChoice === 'rock') win(userChoice, computerChoice);
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'scissors') tie(userChoice, computerChoice);
    if (computerChoice === 'rock') loose(userChoice, computerChoice);
    if (computerChoice === 'paper') win(userChoice, computerChoice);
  }
}

// all the event from here
function main() {
  playerMoove();
}

main();