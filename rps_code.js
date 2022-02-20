
const pchoose = ['rock', 'paper', 'scissors']

const button = document.querySelector('button');

let usrwin = 0, pcwin = 0;



function computerPlay(arraypc) {
    return `${arraypc[Math.floor(Math.random() * (3))]}`;
}

function userPlay() {
    userChoice = prompt('Please type your choice')
    return userChoice.toLowerCase();
}

button.addEventListener('click', game);

function game() {

    pcwin = 0;
    usrwin = 0;

    for (let i = 0; i < 5; i++) {
        // your code here!
        playRound(userPlay(), computerPlay(pchoose));

    }

    if (usrwin > pcwin) {
        alert(`User : ${usrwin} - PC : ${pcwin} USER WINS!!!`)
    } else if (pcwin > usrwin) {
        alert(`User : ${usrwin} - PC : ${pcwin} PC WINS!!!`)
    } else alert(`User : ${usrwin} - PC : ${pcwin} That's a tie, Try again!!!`)
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
}












