let userScore = 0;
let compScore = 0;



const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScoreSpan = document.querySelector('#user-score');
const compScoreSpan = document.querySelector('#comp-score');

const genComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = genComputerChoice();
    console.log(compChoice);

    if (userChoice === compChoice) {
        console.log('draw');
        msg.innerHTML = 'Draw';
    } else if (userChoice === 'rock' && compChoice === 'scissors' || userChoice === 'paper' && compChoice === 'rock' || userChoice === 'scissors' && compChoice === 'paper') {
        console.log('user wins');
        msg.innerHTML = 'User Wins';
        msg.style.backgroundColor = 'green';
        userScore++;
        userScoreSpan.innerHTML = userScore;
    } else {
        console.log('comp wins');
        msg.innerHTML = 'Computer Wins';
        msg.style.backgroundColor = 'red';
        compScore++;
        compScoreSpan.innerHTML = compScore;
    }

    if (userScore === 5) {
        msg.innerHTML = 'User Wins the Game';
        msg.style.backgroundColor = 'green';
        userScore = 0;
        compScore = 0;
        userScoreSpan.innerHTML = userScore;
        compScoreSpan.innerHTML = compScore;
    } else if (compScore === 5) {
        msg.innerHTML = 'Computer Wins the Game';
        msg.style.backgroundColor = 'red';
        userScore = 0;
        compScore = 0;
        userScoreSpan.innerHTML = userScore;
        compScoreSpan.innerHTML = compScore;
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);   
    });
});
