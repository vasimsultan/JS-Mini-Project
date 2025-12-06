// let math= Math.random()*100;
let randomNumber = parseInt(Math.random()* 100 + 1);
// console.log(math)

const userinput =document.querySelector('#guessfield');
const submit =document.querySelector('#subbtn');
const guessslot = document.querySelector('.guesses');
const remain= document.querySelector('.lastresult');
const scale=document.querySelector('.loworhigh');
const startover = document.querySelector('.results')

const p = document.createElement('p');

let guessnum = 1;
let preguess =[];

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
       const guess= parseInt(userinput.value)
    //    console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter a Valid Number');

    } else if(guess < 1 || guess >= 100){
        alert('Please Enter a Number Between 1 and 100.');
    }else{
        if(guess === 11){
        preguess.push(guess);
       displayGuess (guess);
        displayMassage(`Game is Over. Random Numbe was ${randomNumber}`)
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
    }

}

function checkGuess(guess){
if(guess == randomNumber){
    displayMassage('Congratulations! You Guess Right Number');
    endGame();
}else if(guess < randomNumber){
    displayMassage('Your Guess Number is too Low');

}else if(guess > randomNumber){
    displayMassage("Your Guess Number is too High")
}else{
    displayMassage('Game Over')
}
}

// this is use for empty the input field
function displayGuess(guess){
userinput.value = '';
guessslot.innerHTML += `${guess} , `;
guessnum++;
remain.innerHTML =`${10 - guessnum}`;

}
function displayMassage(massage){
scale.innerHTML = `<h2>${massage}</h2> `
}

function endGame(){
userinput.value='';
userinput.setAttribute('disabled', '');
p.classList.add('button');
p.innerHTML= ' <h3 id="newGame"> Start New Game </h3>'
startover.appendChild(p);
playGame = false;
}
 
function newGame(){
    const newGamebutton= doqument.querySelector('#newGame');
    newGamebutton.addEventListener('click', function(e){

    randomNumber = parseInt(Math.random()* 100 + 1);
    guessnum =1;
    preguess = [];
    guessslot.innerHTML ='';
    remain.innerHTML  =`${10 - guessnum}`;
    scale.innerHTML = '';
    userinput.removeAttribute('disabled');
    startover.removeChild(p)
    playGame = true;
  })
}