// Choices Array
const choices = ['Bear', 'Ninja', 'Hunter'];

// Counters for Wins
let playerWins = 0;
let computerWins = 0;

// Function to Play the Game
function playGame(playerChoice) {
    // Random computer choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    // Determine Result
    let result;
    if (playerChoice === computerChoice) {
        result = `It's a Tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'Bear' && computerChoice === 'Ninja') ||
        (playerChoice === 'Ninja' && computerChoice === 'Hunter') ||
        (playerChoice === 'Hunter' && computerChoice === 'Bear')
    ) {
        result = `You Win! ${playerChoice} beats ${computerChoice}.`;
        playerWins++;
    } else {
        result = `Computer Wins! ${computerChoice} beats ${playerChoice}.`;
        computerWins++;
    }

    // Update Results and Score
    document.getElementById('gameResult').innerText = result;
    document.getElementById('playerWins').innerText = playerWins;
    document.getElementById('computerWins').innerText = computerWins;
}

// Function to Reset the Game
function resetGame() {
    document.getElementById('gameResult').innerText = '';
    playerWins = 0;
    computerWins = 0;
    document.getElementById('playerWins').innerText = playerWins;
    document.getElementById('computerWins').innerText = computerWins;
}
