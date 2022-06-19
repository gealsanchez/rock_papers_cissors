
const pchoose = ['rock', 'paper', 'scissors'];

const butrock = document.createElement('button');
butrock.textContent = 'ROCK';
butrock.className = "rock";

const butpaper = document.createElement('button');
butpaper.textContent = 'PAPER';
butpaper.className = "paper";

const butscissor = document.createElement('button');
butscissor.textContent = 'SCISSORS';
butscissor.className = 'scissors';

const result = document.createElement('div');
result.textContent = 'Result: ';
result.className = 'texto';

const title = document.createElement('div');
title.textContent = 'Click your choice';
title.className = 'texto';

container.appendChild(title);
container.appendChild(butrock);
container.appendChild(butpaper);
container.appendChild(butscissor);
container.appendChild(result);

const buttons = document.querySelectorAll('button');

let usrwin = 0, pcwin = 0;

function logText(e) {
    playRound(this.classList.value, computerPlay(pchoose));
    // e.stopPropagation(); // stop bubbling!
    // console.log(this);
}

buttons.forEach(button => button.addEventListener('click', logText, {
    capture: false,
    once: false
}));

function computerPlay(arraypc) {
    return `${arraypc[Math.floor(Math.random() * (3))]}`;
}

function playRound(usrChoic, pcChoos) {

    console.log(pcChoos);

    switch (usrChoic) {

        case 'paper': if (pcChoos == 'rock') {
            alert('You Win PAPER beats rock')
            usrwin++;
        } else if (pcChoos == 'scissors') {
            alert('You Lose SCISSORS beats paper')
            pcwin++;
        } else alert(`That's a tie`);
            break;

        case 'rock': if (pcChoos == 'scissors') {
            alert('You Win ROCK beats scissors')
            usrwin++;
        } else if (pcChoos == 'paper') {
            alert('You Lose PAPER beats rock')
            pcwin++;
        } else alert(`That's a tie`);
            break;

        case 'scissors': if (pcChoos == 'paper') {
            alert('You Win SCISSORS beats paper')
            usrwin++;
        } else if (pcChoos == 'rock') {
            alert('You Lose ROCK beats scissors')
            pcwin++;
        } else alert(`That's a tie`);
            break;

        default: alert(`there is no ${usrChoic} option`);
    }

    result.textContent = `User : ${usrwin} - PC : ${pcwin}`

    if (usrwin == 5) {
        result.textContent = `User : ${usrwin} - PC : ${pcwin}`
        alert(`User : ${usrwin} - PC : ${pcwin} Congratulations USER WINS!!! LETS PLAY ANOTHER ROUND!!!`);
        pcwin = 0;
        usrwin = 0;
        result.textContent = `User : ${usrwin} - PC : ${pcwin}`
    } else if (pcwin == 5) {
        result.textContent = `User : ${usrwin} - PC : ${pcwin}`
        alert(`User : ${usrwin} - PC : ${pcwin} PC WINS!!!  LETS PLAY ANOTHER ROUND!!!`);
        pcwin = 0;
        usrwin = 0;
        result.textContent = `User : ${usrwin} - PC : ${pcwin}`
    }
}