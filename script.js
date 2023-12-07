const matchText = document.getElementById('matchText');
const gameText = document.getElementById('gameText');
const winText = document.getElementById('winText');
const winStreak = document.getElementById('winStreak');
let playCount = 0;
let maxStreak = 0;

function playGame(playerMove) {
  const computerMove = makeComputerMove();
  let matchResult;
  let gameResult;

  if (playerMove === 'rock') {
    switch (computerMove) {
      case 'rock':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Too bad it was a Tie...';
        break;
      case 'paper':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Unfortunately, you lost!';
        playCount = 0;
        break;
      case 'scissors':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Congratulations, you won!';
        playCount += 1;
        break;
      default:
        console.error('ERROR');
        alert('ERROR');
    }
  } else if (playerMove === 'paper') {
    switch (computerMove) {
      case 'rock':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Congratulations, you won!';
        playCount += 1;
        break;
      case 'paper':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Too bad it was a Tie...';
        break;
      case 'scissors':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Unfortunately, you lost!';
        playCount = 0;
        break;
      default:
        console.error('ERROR');
        alert('ERROR');
    }
  } else if (playerMove === 'scissors') {
    switch (computerMove) {
      case 'rock':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Unfortunately, you lost!';
        playCount = 0;
        break;
      case 'paper':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Congratulations, you won!';
        playCount += 1;
        break;
      case 'scissors':
        matchResult = `You picked <span class="play-txt">${playerMove}</span> and your opponent picked <span class="play-txt">${computerMove}</span>`;
        gameResult = 'Too bad it was a Tie...';
        break;
      default:
        console.error('ERROR');
        alert('ERROR');
    }
  }

  if (playCount > maxStreak) {
    maxStreak = playCount;
  }

  matchText.innerHTML = 'Loading...';
  gameText.innerHTML = 'Loading...';

  function printResult() {
    matchText.innerHTML = matchResult;
    gameText.innerHTML = gameResult;
    winText.innerHTML = playCount;
    winStreak.innerHTML = maxStreak;
  }

  setTimeout(printResult, 100);
}

function makeComputerMove() {
  const makeMove = Math.floor(Math.random() * 3);
  let computerMove;

  /*
  if (makeMove === 0) {
    computerMove = 'rock';
  } else if (makeMove === 1) {
    computerMove = 'paper';
  } else if (makeMove === 2) {
    computerMove = 'scissors';
  }
  */

  switch (makeMove) {
    case 0:
      computerMove = 'rock';
      break;
    case 1:
      computerMove = 'paper';
      break;
    case 2:
      computerMove = 'scissors';
      break;
    default:
      console.error('ERROR');
      alert('ERROR');
  }

  return computerMove;
}
