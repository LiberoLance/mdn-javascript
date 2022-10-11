let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
	const userGuess = Number(guessField.value);
	if(guessCount == 1) {
		guesses.textContent = 'Previous guesses: ';
	}
	guesses.textContent += ` ${userGuess}`;

	if (userGuess === randomNumber) {
		lastResult.textContent = 'Congratulations! You got it right!';
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = '';
		setGameOver();
	} else if (guessCount == 10) {
		lastResult.textContent = '!!!GAME OVER!!!';
		lowOrHi.textContent = '';
		setGameOver();
	} else {
		lastResult.textContent = 'wrong!';
		lastResult.stylebackgroundColor = 'red';
		if(userGuess < randomNumber) {
			lowOrHi.textContent = 'Last guess was too low!';
		} else if (userGuess > randomNumber) {
			lowOrHi.textContent = 'Last guess was too high!';
		}
	}

	guessCount++;
	guessField.value = '';
	guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton = textcontent = 'start new game';
	document.body.appen(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame() {
	guessCount = 1;

	const resetParas = document.querySelectorAll('.resultParas p');
	for(const resetPara of resetParas) {
		resetPara.textContent = '';
	}
	
	resetButton.parentNode.removeChild(resetButton);

	guessField.disable = 'false';
	guessSubmit.disable = 'false';
	guessField.value = '';
	guessField.focus();

	lastResult.style.backgroundColor = 'white';

	randomNumber = Math.floor(Math.random() * 100) + 1;
}
